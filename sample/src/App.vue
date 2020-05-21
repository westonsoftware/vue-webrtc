<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <vue-webrtc ref="webrtc" width="100%" roomId="roomId"/>
    ANDY
  </div>
</template>

<script>
import Vue from 'vue'
import WebRTC from 'vue-webrtc'

// ISSUE 5: https://github.com/westonsoftware/vue-webrtc/issues/5
import * as io from 'socket.io-client'
window.io = io
//

Vue.use(WebRTC)

export default {
  name: 'App',
  mounted: function () {
    this.$refs.webrtc.join()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
