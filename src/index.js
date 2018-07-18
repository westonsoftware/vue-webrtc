import WebRTC from "./webrtc.vue";

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Vue.component(WebRTC.name, WebRTC);
};

module.exports = {
  WebRTC,
  install
};

module.exports.default = module.exports;
