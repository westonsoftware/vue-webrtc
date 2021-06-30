<template>
    <div class="video-meeting">
        <div class="video-list" style="margin-bottom:40px;">
            <div v-for="item, key in videoList"
                 v-bind:video="item"
                 v-bind:key="item.id"
                 :class="'pos_'+key"
                 class="video-item">
                <video @click="array_move(key)" autoplay playsinline ref="videos" :muted="item.muted" :id="item.id"></video>
            </div>
        </div>
        <button v-if="defaultButtons" @click="join">{{button.join}}</button>
        <button v-if="defaultButtons" @click="leave">{{button.leave}}</button>
        <button v-if="!screenSharing && defaultButtons" @click="shareScreen">{{button.shareScreen}}</button>
        <button v-if="cams.length > 1" @click="switchCam(item)">switchCam</button>
    </div>
</template>

<script>
    const io = require("socket.io-client");
    const SimpleSignalClient = require('simple-signal-client');
    export default {
        name: 'WebRtc',
        components: {
        },
        data() {
            return {
                screenSharing: false,
                signalClient: null,
                videoList: [],
                canvas: null,
                socket: null,
                cams: []
            };
        },
        props: {
            roomId: {
                type: String,
                default: 'public-room-v2'
            },
            button: {
                type: Object,
                default: () => {
                    return {
                        join: 'Join',
                        leave: 'Leave',
                        shareScreen: 'Share'
                    }
                }
            },
            socketURL: {
                type: String,
                //default: 'https://weston-vue-webrtc-lobby.azurewebsites.net'
                //default: 'https://localhost:3000'
                default: 'https://192.168.178.72:3000'
            },
            cameraHeight: {
                type: [Number, String],
                default: 1080
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            defaultButtons: {
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
            enableLogs: {
                type: Boolean,
                default: false
            },
            peerOptions: {
                type: Object,  // NOTE: use these options: https://github.com/feross/simple-peer
                default() {
                    return {};
                }
            },
            deviceId: {
                type: String,
                default: null
            }
        },
        watch: {
        },
        mounted() {
            var that = this;
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                    devices.forEach(function (device) {
                        if (device.kind == 'videoinput') {
                            that.cams.push(device);


                            console.log(device.kind + ": " + device.label +
                                " id = " + device.deviceId + "added to cams data");
                        }
                    });
                    if (!that.deviceId) {
                        that.activeDeviceId = that.cams[0].deviceId
                    }
                })

        },
        methods: {
            array_move(old_index) {
                var arr = [...this.videoList];
                var new_index = 0;
                while (old_index < 0) {
                    old_index += arr.length;
                }
                while (new_index < 0) {
                    new_index += arr.length;
                }
                if (new_index >= arr.length) {
                    var k = new_index - arr.length + 1;
                    while (k--) {
                        arr.push(undefined);
                    }
                }
                arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
                console.log("N", arr)
                console.log("i", old_index)
                this.videoList = arr; // for testing purposes
            },
            async join() {
                var that = this;
                this.log('join');
                this.socket = io(this.socketURL, { rejectUnauthorized: true, transports: ['websocket'] });
                this.signalClient = new SimpleSignalClient(this.socket);
                let constraints = {
                    video: that.enableVideo,
                    audio: that.enableAudio
                };
                if (that.activeDeviceId && that.enableVideo) {
                    constraints.video = { deviceId: { exact: that.activeDeviceId } };
                }
                const localStream = await navigator.mediaDevices.getUserMedia(constraints);
                this.log('opened', localStream);
                this.joinedRoom(localStream, true);
                this.signalClient.once('discover', (discoveryData) => {
                    that.log('discovered', discoveryData)
                    async function connectToPeer(peerID) {
                        if (peerID == that.socket.id) return;
                        try {
                            that.log('Connecting to peer');
                            const { peer } = await that.signalClient.connect(peerID, that.roomId, that.peerOptions);
                            that.videoList.forEach(v => {
                                if (v.isLocal) {
                                    that.onPeer(peer, v.stream);
                                }
                            })
                        } catch (e) {
                            that.log('Error connecting to peer');
                        }
                    }
                    discoveryData.peers.forEach((peerID) => connectToPeer(peerID));
                    that.$emit('opened-room', that.roomId);
                });
                this.signalClient.on('request', async (request) => {
                    that.log('requested', request)
                    const { peer } = await request.accept({}, that.peerOptions)
                    that.log('accepted', peer);
                    that.videoList.forEach(v => {
                        if (v.isLocal) {
                            that.onPeer(peer, v.stream);
                        }
                    })
                })
                this.signalClient.discover(that.roomId);
            },
            onPeer(peer, localStream) {
                var that = this;
                that.log('onPeer');
                peer.addStream(localStream);
                peer.on('track', (track, stream) => {
                    track.addEventListener('mute', () => {
                        this.videoList = this.videoList.filter((video) => {
                            return video.id !== stream.id;
                        })
                    })
                })
                peer.on('stream', (remoteStream) => {
                    that.joinedRoom(remoteStream, false);
                    console.log("StreamEvent", remoteStream)
                    peer.on('close', () => {
                        var newList = [];
                        that.videoList.forEach(function (item) {
                            if (item.id !== remoteStream.id) {
                                newList.push(item);
                            }
                        });
                        that.videoList = newList;
                        that.$emit('left-room', remoteStream.id);
                    });
                    peer.on('error', (err) => {
                        that.log('peer error ', err);
                    });
                });
            },
            joinedRoom(stream, isLocal, isScreenShare = false) {
                var that = this;
                let found = that.videoList.find(video => {
                    return video.id === stream.id
                })
                if (found === undefined) {
                    let video = {
                        id: stream.id,
                        active: stream.active,
                        muted: isLocal,
                        stream: stream,
                        isLocal: isLocal,
                        isScreenShare: isScreenShare
                    };
                    that.videoList.push(video);
                }
                setTimeout(function () {
                    for (var i = 0, len = that.$refs.videos.length; i < len; i++) {
                        if (that.$refs.videos[i].id === stream.id) {
                            that.$refs.videos[i].srcObject = stream;
                            break;
                        }
                    }
                }, 500);

                if (!isLocal) {
                    var arr = [...that.videoList]
                    var key = arr.findIndex((video) => {
                        video.id == stream.id
                    })
                    console.log("Key", key)
                    that.array_move(key)
                }

                console.log(isScreenShare)
                that.$emit('joined-room', stream.id);
            },
            leave() {
                this.videoList.forEach(v => v.stream.getTracks().forEach(t => t.stop()));
                this.videoList = [];
                this.signalClient.peers().forEach(peer => peer.removeAllListeners())
                this.signalClient.destroy();
                this.signalClient = null;
                this.socket.destroy();
                this.socket = null;
            },
            capture() {
                return this.getCanvas().toDataURL(this.screenshotFormat);
            },
            switchCam(item) {

                this.videoList.forEach(v => {
                    if (v.isLocal) {
                        console.log("v", cams, v.stream, v.stream.getTracks())
                    }
                })

                var cams = [...this.cams]
                var otherCam = cams.filter(cam => cam.deviceId !== this.activeDeviceId)[0].deviceId;
                console.log('thisDeviceId', this.activeDeviceId);
                console.log('filter', otherCam)

                navigator.mediaDevices
                    .getUserMedia({
                        video: {
                            deviceId: {
                                exact: otherCam
                            }
                        }
                    })
                    .then((stream) => {
                        var oldStreamIndex = this.videoList.findIndex(vid => vid.isLocal && !vid.isScreenShare);
                        console.log("oldIndex", oldStreamIndex, this.videoList[oldStreamIndex].stream, stream)
                        this.videoList[oldStreamIndex].stream.getTracks().forEach(t => t.stop())
                        var videoList = [...this.videoList];
                        videoList.splice(oldStreamIndex, 1);
                        var newVideo = {
                            id: stream.id,
                            active: true,
                            muted: true,
                            stream: stream,
                            isLocal: true,
                            isScreenShare: false
                        }
                        videoList.push(newVideo)
                        this.videoList = videoList;
                        var that = this;
                        setTimeout(function () {
                            for (var i = 0, len = that.$refs.videos.length; i < len; i++) {
                                if (that.$refs.videos[i].id === stream.id) {
                                    that.$refs.videos[i].srcObject = stream;
                                    break;
                                }
                            }
                        }, 500);

                        console.log("newIndex", oldStreamIndex, this.videoList[oldStreamIndex].stream)
                        let videoTrack = stream.getVideoTracks()[0];
                        this.signalClient.peers().forEach(p => {
                            console.log("p", p)
                            var sender = p._pc.getSenders().find(function (s) {
                                console.log("s", s.track)
                                return s.track.kind == videoTrack.kind;
                            });
                            console.log('found sender:', sender);
                            sender.replaceTrack(videoTrack);
                        });

                        this.activeDeviceId = otherCam
                    })
                    .catch(function (err) {
                        console.error('Error happens:', err, item);
                    });
            },
            removeScreensharing(e) {
                console.log('rmScreen', e)
                console.log('peers', this.signalClient.peers())
                this.signalClient.peers().forEach(p => p.removeStream(e.srcElement));
                this.videoList = this.videoList.filter((video) => {
                    return video.id !== e.srcElement.id;
                })
                this.screenSharing = false;
                this.$emit('share-stoped', e.srcElement.id);
            },
            getCanvas() {
                let video = this.$refs.videos[0];
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
            async shareScreen() {
                var that = this;
                if (navigator.mediaDevices == undefined) {
                    that.log('Error: https is required to load cameras');
                    return;
                }
                try {
                    var screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
                    console.log("shareStarted", screenStream)
                    this.screenSharing = true;
                    screenStream.oninactive = (e) => { this.removeScreensharing(e) }
                    this.joinedRoom(screenStream, true, true);
                    this.screenSharing = true;
                    that.$emit('share-started', screenStream.id);
                    that.signalClient.peers().forEach(p => {
                        this.onPeer(p, screenStream)
                    });

                } catch (e) {
                    that.log('Media error: ' + JSON.stringify(e));
                }
            },
            log(message, data) {
                if (this.enableLogs) {
                    console.log(message);
                    if (data != null) {
                        console.log(data);
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

        .video-list div {
            padding: 0px;
        }

    .video-item {
        background: #c5c4c4;
        display: inline-block;
        width: 280px;
    }

        .video-item.pos_0 {
            width: 100vw;
            height: 70vh;
        }

            .video-item.pos_0 video {
                width: 100%;
                height: 100%;
            }

    video {
        width: 100%;
        height: 160px;
    }
</style>
