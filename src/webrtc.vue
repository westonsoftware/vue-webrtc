<template>
  <div class="flex-container">
    <div class="video-list" >
        <div v-for="item in videoList"
            v-bind:video="item"
            v-bind:key="item.id"
            class="video-item">
          <video controls autoplay playsinline ref="videos" :height="cameraHeight" :muted="item.muted" :id="item.id"></video>
        </div>
    </div>
    <div v-if="enableChat" class="chat-list">
      <div v-for="(chat,index) in messages"
           v-bind:key="chat.userid">
           <span>{{chat.message}}</span>
      </div>
      <input v-model="message" type="text" name="message" value="">
      <button @click="sendMessage()" type="button" name="button">Send</button>
    </div>

 </div>
</template>

<script>
  import RTCMultiConnection from 'rtcmulticonnection';
  require('adapterjs');
  export default {
    name: 'vue-webrtc',
    components: {
      RTCMultiConnection
    },
    data() {
      return {
        rtcmConnection: null,
        localVideo: null,
        videoList: [],
        canvas: null,
        messages: [],
        message: null
      };
    },
    props: {
      roomId: {
        type: String,
        default: 'public-room'
      },
      socketURL: {
        type: String,
        default: 'https://rtcmulticonnection.herokuapp.com:443/'
      },
      cameraHeight: {
        type: [Number, String],
        default: 160
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      screenshotFormat: {
        type: String,
        default: 'image/jpeg'
      },
      enableAudio: {
        type: Boolean,
        default: true
      },
      enableVideo: {
        type: Boolean,
        default: true
      },
      enableChat: {
        type: Boolean,
        default: false
      },
      enableLogs: {
        type: Boolean,
        default: false
      },
      stunServer: {
        type: String,
        default: null
      },
      turnServer: {
        type: String,
        default: null
      }
    },
    watch: {
    },
    mounted() {
      var that = this;

      this.rtcmConnection = new RTCMultiConnection();
      this.rtcmConnection.socketURL = this.socketURL;
      this.rtcmConnection.autoCreateMediaElement = false;
      this.rtcmConnection.enableLogs = this.enableLogs;
      this.rtcmConnection.session = {
        audio: this.enableAudio,
        video: this.enableVideo,
        data: this.enableChat
      };
      this.rtcmConnection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: this.enableAudio,
        OfferToReceiveVideo: this.enableVideo
      };
      if ((this.stunServer !== null) || (this.turnServer !== null)) {
        this.rtcmConnection.iceServers = []; // clear all defaults
      }
      if (this.stunServer !== null) {
        this.rtcmConnection.iceServers.push({
          urls: this.stunServer
        });
      }
      if (this.turnServer !== null) {
        var parse = this.turnServer.split('%');
        var username = parse[0].split('@')[0];
        var password = parse[0].split('@')[1];
        var turn = parse[1];
        this.rtcmConnection.iceServers.push({
          urls: turn,
          credential: password,
          username: username
        });
      }
      this.rtcmConnection.onstream = function (stream) {
        let found = that.videoList.find(video => {
          return video.id === stream.streamid
        })
        if (found === undefined) {
          let video = {
            id: stream.streamid,
            muted: stream.type === 'local'
          };

          that.videoList.push(video);

          if (stream.type === 'local') {
            that.localVideo = video;
          }
        }

        setTimeout(function(){
          for (var i = 0, len = that.$refs.videos.length; i < len; i++) {
            if (that.$refs.videos[i].id === stream.streamid)
            {
              that.$refs.videos[i].srcObject = stream.stream;
              break;
            }
          }
        }, 1000);

        that.$emit('joined-room', stream.streamid);
      };
      this.rtcmConnection.onstreamended = function (stream) {
        var newList = [];
        that.videoList.forEach(function (item) {
          if (item.id !== stream.streamid) {
            newList.push(item);
          }
        });
        that.videoList = newList;
        //clear messages
        if(this.enableChat){
          this.clearMessages(stream)
        }

        that.$emit('left-room', stream.streamid);
      };
      this.rtcmConnection.onmessage = function(stream){
        that.messages.push({
          message: stream.data,
          userid: stream.userid
        });
        that.$emit('received-message',stream.data);
      };
    },
    methods: {
      clearMessages(stream){
        var newList = this.messages.filter(function(item){
          return item.userid !== stream.userid
        });
        this.messages = newList
      },
      sendMessage(){
        var message = this.message
        this.rtcmConnection.send(message);
        this.$emit('sent-message',message);
        //reset message input
        this.message = null
      },
      join() {
         var that = this;
         this.rtcmConnection.openOrJoin(this.roomId, function (isRoomExist, roomid) {
          if (isRoomExist === false && that.rtcmConnection.isInitiator === true) {
            that.$emit('opened-room', roomid);
          }
        });
      },
      leave() {
        this.rtcmConnection.attachStreams.forEach(function (localStream) {
          localStream.stop();
        });
        this.videoList = [];
      },
      capture() {
        return this.getCanvas().toDataURL(this.screenshotFormat);
      },
      getCanvas() {
        let video = this.getCurrentVideo();
        if (video !== null && !this.ctx) {
          let canvas = document.createElement('canvas');
          canvas.height = video.clientHeight;
          canvas.width = video.clientWidth;
          this.canvas = canvas;
          this.ctx = canvas.getContext('2d');
        }
        const { ctx, canvas } = this;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        return canvas;
      },
      getCurrentVideo() {
        if (this.localVideo === null) {
          return null;
        }
        for (var i = 0, len = this.$refs.videos.length; i < len; i++) {
          if (this.$refs.videos[i].id === this.localVideo.id)
            return this.$refs.videos[i];
        }
        return null;
      },
      shareScreen() {
        var that = this;
        if (navigator.getDisplayMedia || navigator.mediaDevices.getDisplayMedia) {
          function addStreamStopListener(stream, callback) {
            var streamEndedEvent = 'ended';
            if ('oninactive' in stream) {
                streamEndedEvent = 'inactive';
            }
            stream.addEventListener(streamEndedEvent, function() {
                callback();
                callback = function() {};
            }, false);
          }

          function onGettingSteam(stream) {
            that.rtcmConnection.addStream(stream);
            that.$emit('share-started', stream.streamid);

            addStreamStopListener(stream, function() {
              that.rtcmConnection.removeStream(stream.streamid);
              that.$emit('share-stopped', stream.streamid);
            });
          }

          function getDisplayMediaError(error) {
            console.log('Media error: ' + JSON.stringify(error));
          }

          if (navigator.mediaDevices.getDisplayMedia) {
            navigator.mediaDevices.getDisplayMedia({video: true, audio: false}).then(stream => {
              onGettingSteam(stream);
            }, getDisplayMediaError).catch(getDisplayMediaError);
          }
          else if (navigator.getDisplayMedia) {
            navigator.getDisplayMedia({video: true}).then(stream => {
              onGettingSteam(stream);
            }, getDisplayMediaError).catch(getDisplayMediaError);
          }
        }
      }
    }
  };
</script>
<style scoped>
  .video-list {
    background: whitesmoke;
    height: auto;
  }

    .video-list div {
      padding: 0px;
    }

  .video-item {
    background: #c5c4c4;
    display: inline-block;
  }

  .flex-container {
    display: flex
  }
  .flex-container > div {
    margin: 5px;
  }
  .chat-list {
    display: flex;
    flex-direction: column;
  }
</style>
