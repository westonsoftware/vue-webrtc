
# vue-webrtc

WebRTC component designed for Vue 3 ... See the [DEMO](https://westonsoftware.github.io/vue-webrtc/)

<p align="center">
    <img src="docs/assets/screenshot.png">
</p>

[![Join](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/westonsoftware/vue-webrtc?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/v/vue-webrtc.svg)](https://www.npmjs.com/package/vue-webrtc)
[![npm](https://img.shields.io/npm/dm/vue-webrtc.svg)](https://www.npmjs.com/package/vue-webrtc)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

See [this](http://caniuse.com/#feat=stream)
for browser compatibility.

## Installation

```
npm install vue-webrtc --save

```

## Usage

```javascript
import Vue from 'vue'
import WebRTC from 'vue-webrtc'
Vue.use(WebRTC)

// or
import { VueWebRTC } from 'vue-webrtc'
Vue.component(VueWebRTC.name, VueWebRTC)

// or
import { VueWebRTC } from 'vue-webrtc';
export default {
    name: 'App',
    components: {
        'vue-webrtc': VueWebRTC
    },
    ...

// template
<vue-webrtc ref="webrtc" width="100%" roomId="sample-room">
</vue-webrtc>
```

## Testing & Dev

```
npm run serve
```

### Props

| prop             | type    | default      | notes                     |
| ---------------- | ------- | ------------ | ------------------------- |
| roomId           | string  | 'public-room' | id of the room to join   |
| socketURL        | string  | 'https://weston-vue-webrtc-lobby.azurewebsites.net' | URL of the signaling server, use this default or run your own, see .\vue-webrtc-lobby   |
| cameraHeight     | number  | 160          | height of video element   |
| autoplay         | boolean | true         | autoplay attribute        |
| screenshotFormat | string  | 'image/jpeg' | format of screenshot      |
| enableAudio      | boolean  | true | enables audio on join      |
| enableVideo      | boolean  | true | enables video on join      |
| enableLogs       | boolean  | false | enables webrtc console logs    |
| deviceId       | string  | null | set video device id to a camera from navigator.mediaDevices.enumerateDevices()    |
| peerOptions       | string  | { } | set SimplePeer options such as STUN and TURN from here [https://github.com/feross/simple-peer](https://github.com/feross/simple-peer)    |
| ioOptions        | string  | { rejectUnauthorized: false, transports: ['polling', 'websocket'] } | set Socket IO from here [https://socket.io/docs/v4/client-options/](https://socket.io/docs/v4/client-options/)    |

### Events

| name           | param    | notes                                                         |
| -------------- | -------- | ------------------------------------------------------------- |
| opened-room    | roomid   | emitted when the first user opens the room                    |
| joined-room    | video    | emitted when anyone joins the room                            |
| left-room      | video.id | emitted when anyone leaves the room                           |
| share-started  | video.id | emitted when a local screen share stream starts               |
| share-stopped  | video.id | emitted when a local screen share stream stops                |

### Methods

| name           | param    | notes                                                                   |
| -------------- | -------- | ----------------------------------------------------------------------- |
| join           | void     | Join a room, opening it if needed                                       |
| leave          | void     | Leave a room                                                            |
| capture        | void     | Capture the current image through the webcam as base64 encoded string   |
| shareScreen    | void     | Share your screen or an app as video   |

### Styles

.video-list

.video-item

## History

| Version           | Notes                                                                   |
| -------------- | ----------------------------------------------------------------------- |
| 3.0.1           | Added ioOptions for Socket IO 
| 3.0.0           | Migrated from Vue 2 to Vue 3 
| 2.0.0           | Replaced signaling server and webrtc library with SimplePeer 
| 1.2.2           | Added stunServer and turnServer properties                                       |
| 1.2.1           | Added Vue CLI sample, npm audit fixes                                       |
| 1.2.0           | Added the Screen Share button                                       |

## Upgrading from V2 to V3
V3 of this component is a migration from Vue 2 to Vue 3.  There is no new functionality yet.  The older V2 will only be patched as needed and maintained as Vue 2.

## Upgrading from V1 to V2
V2 of this component is mostly compatible with V1 but it completely replaces the internals with a new signaling server and a new SimplePeer client.  Due to this, you will need to set the [socketUrl] to a new instance of the included .\vue-webrtc-lobby socket server.  There is a default instance that you are welcome to use but you should run your own.  If you are using STUN and TURN settings, you will now need to set those in [peerOptions] .

## Quick Start with Vue CLI
```
vue create sample
cd sample
yarn install
npm install vue-webrtc --save
```
Now open the App.vue file and replace the HelloVue component with the code in the Usage section above.
```
npm run serve
```
See the /sample folder for a working project

## Roadmap
Some features that we would like to see added are:
- Chat component
- Audio selection
- WebRTC data events

Let us know what you'd like to see next and vote for a feature.

## License

MIT

## Credits

Author: [@AndyWeston on GitHub at vue-webrtc](https://github.com/westonsoftware)

This project is based off of:

[SimplePeer](https://github.com/feross/simple-peer)

[SimpleSignal](https://github.com/t-mullen/simple-signal)
