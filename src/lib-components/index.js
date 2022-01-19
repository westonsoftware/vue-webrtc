/* eslint-disable import/prefer-default-export */
export { default as VueWebRTC } from './vue-webrtc.vue';
export { default as VueWebrtcSample } from './vue-webrtc-sample.vue';


// ISSUE 5: https://github.com/westonsoftware/vue-webrtc/issues/5
import * as io from 'socket.io-client'
window.io = io
