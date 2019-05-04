<template>
  <div class="video-list" > 
      <div v-for="item in videoList"
          v-bind:video="item"
          v-bind:key="item.id"
          class="video-item">
        <video controls autoplay playsinline ref="videos" :height="cameraHeight" :muted="item.muted" :id="item.id"></video>
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
      }
    },
    watch: {
    },
    mounted() {
      var that = this;

      this.rtcmConnection = new RTCMultiConnection();
      this.rtcmConnection.socketURL = this.socketURL;
      this.rtcmConnection.autoCreateMediaElement = false;
      this.rtcmConnection.session = {
        audio: true,
        video: true
      };
      this.rtcmConnection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
      };
      this.rtcmConnection.onstream = function (event) {
        let video = {
          id: event.streamid,
          muted: event.type === 'local'
        };
        that.videoList.push(video);
        if (event.type === 'local') {
          that.localVideo = video;
        }
        that.$emit('joined-room', event.streamid);

        setTimeout(function(){ 
          that.getCurrentVideo().srcObject = event.stream;
        }, 1000);
      };
      this.rtcmConnection.onstreamended = function (event) {
        var newList = [];
        that.videoList.forEach(function (item) {
          if (item.id !== event.streamid) {
            newList.push(item);
          }
        });
        that.videoList = newList;
        that.$emit('left-room', event.streamid);
      };
    },
    methods: {
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
</style>
