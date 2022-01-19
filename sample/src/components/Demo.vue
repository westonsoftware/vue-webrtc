<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 my-3">
                <h2>Room</h2>
                <input v-model="roomId">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="">
                    <vue-webrtc ref="webrtc"
                                width="100%"
                                :roomId="roomId"
                                v-on:joined-room="logEvent"
                                v-on:left-room="logEvent"
                                v-on:opened-room="logEvent"
                                v-on:share-started="logEvent"
                                v-on:share-stopped="logEvent"
                                @error="onError" />
                </div>
                <div class="row">
                    <div class="col-md-12 my-3">
                        <button type="button" class="btn btn-primary" @click="onJoin">Join</button>
                        <button type="button" class="btn btn-primary" @click="onLeave">Leave</button>
                        <button type="button" class="btn btn-primary" @click="onCapture">Capture Photo</button>
                        <button type="button" class="btn btn-primary" @click="onShareScreen">Share Screen</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Captured Image</h2>
                <figure class="figure">
                    <img :src="img" class="img-responsive" />
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    import { VueWebRTC } from 'vue-webrtc';

    export default {
        name: 'demo',
        components: {
            'vue-webrtc': VueWebRTC
        },
        data() {
            return {
                img: null,
                roomId: "public-room-v3"
            };
        },
        mounted: function () {
        },
        computed: {
        },
        watch: {
        },
        methods: {
            onCapture() {
                this.img = this.$refs.webrtc.capture();
            },
            onJoin() {
                this.$refs.webrtc.join();
            },
            onLeave() {
                this.$refs.webrtc.leave();
            },
            onShareScreen() {
                this.img = this.$refs.webrtc.shareScreen();
            },
            onError(error, stream) {
                console.log('On Error Event', error, stream);
            },
            logEvent(event) {
                console.log('Event : ', event);
            },
        }
    };
</script>

<style>
    .btn {
       margin-right: 8px;
    }
</style>