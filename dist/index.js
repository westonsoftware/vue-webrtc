(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-webrtc"] = factory();
	else
		root["vue-webrtc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  "data-v-49ef9b35",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*! adapterjs - v0.15.4 - 2019-01-07 */
var AdapterJS=AdapterJS||window.AdapterJS||{};if(AdapterJS.options=AdapterJS.options||{},AdapterJS.options.getAllCams=!!AdapterJS.options.getAllCams,AdapterJS.options.hidePluginInstallPrompt=!!AdapterJS.options.hidePluginInstallPrompt,AdapterJS.options.forceSafariPlugin=!!AdapterJS.options.forceSafariPlugin,AdapterJS.VERSION="0.15.4",AdapterJS.onwebrtcready=AdapterJS.onwebrtcready||function(isUsingPlugin){},AdapterJS._onwebrtcreadies=[],AdapterJS.webRTCReady=function(baseCallback){if("function"!=typeof baseCallback)throw new Error("Callback provided is not a function");var callback=function(){"function"==typeof window.require&&"function"==typeof AdapterJS._defineMediaSourcePolyfill&&AdapterJS._defineMediaSourcePolyfill(),baseCallback(null!==AdapterJS.WebRTCPlugin.plugin)};!0===AdapterJS.onwebrtcreadyDone?callback():AdapterJS._onwebrtcreadies.push(callback)},AdapterJS.WebRTCPlugin=AdapterJS.WebRTCPlugin||{},AdapterJS.WebRTCPlugin.pluginInfo=AdapterJS.WebRTCPlugin.pluginInfo||{prefix:"Tem",plugName:"TemWebRTCPlugin",pluginId:"plugin0",type:"application/x-temwebrtcplugin",onload:"__TemWebRTCReady0",portalLink:"https://skylink.io/plugin/",downloadLink:null,companyName:"Temasys",downloadLinks:{mac:"https://bit.ly/webrtcpluginpkg",win:"https://bit.ly/webrtcpluginmsi"}},void 0!==AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks&&null!==AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks&&(navigator.platform.match(/^Mac/i)?AdapterJS.WebRTCPlugin.pluginInfo.downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks.mac:navigator.platform.match(/^Win/i)&&(AdapterJS.WebRTCPlugin.pluginInfo.downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLinks.win)),AdapterJS.WebRTCPlugin.TAGS={NONE:"none",AUDIO:"audio",VIDEO:"video"},AdapterJS.WebRTCPlugin.pageId=Math.random().toString(36).slice(2),AdapterJS.WebRTCPlugin.plugin=null,AdapterJS.WebRTCPlugin.setLogLevel=null,AdapterJS.WebRTCPlugin.defineWebRTCInterface=null,AdapterJS.WebRTCPlugin.isPluginInstalled=null,AdapterJS.WebRTCPlugin.pluginInjectionInterval=null,AdapterJS.WebRTCPlugin.injectPlugin=null,AdapterJS.WebRTCPlugin.PLUGIN_STATES={NONE:0,INITIALIZING:1,INJECTING:2,INJECTED:3,READY:4},AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.NONE,AdapterJS.onwebrtcreadyDone=!1,AdapterJS.WebRTCPlugin.PLUGIN_LOG_LEVELS={NONE:"NONE",ERROR:"ERROR",WARNING:"WARNING",INFO:"INFO",VERBOSE:"VERBOSE",SENSITIVE:"SENSITIVE"},AdapterJS.WebRTCPlugin.WaitForPluginReady=null,AdapterJS.WebRTCPlugin.callWhenPluginReady=null,AdapterJS.documentReady=function(){return"interactive"===document.readyState&&!!document.body||"complete"===document.readyState},window.__TemWebRTCReady0=function(){AdapterJS.documentReady()?(AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY,AdapterJS.maybeThroughWebRTCReady()):setTimeout(__TemWebRTCReady0,100)},AdapterJS.maybeThroughWebRTCReady=function(){AdapterJS.onwebrtcreadyDone||(AdapterJS.onwebrtcreadyDone=!0,AdapterJS._onwebrtcreadies.length?AdapterJS._onwebrtcreadies.forEach(function(callback){"function"==typeof callback&&callback(null!==AdapterJS.WebRTCPlugin.plugin)}):"function"==typeof AdapterJS.onwebrtcready&&AdapterJS.onwebrtcready(null!==AdapterJS.WebRTCPlugin.plugin))},AdapterJS.TEXT={PLUGIN:{REQUIRE_INSTALLATION:"This website requires you to install a WebRTC-enabling plugin to work on this browser.",REQUIRE_RESTART:"Your plugin is being downloaded. Please run the installer, and restart your browser to begin using it.",NOT_SUPPORTED:"Your browser does not support WebRTC.",BUTTON:"Install Now"},REFRESH:{REQUIRE_REFRESH:"Please refresh page",BUTTON:"Refresh Page"}},AdapterJS._iceConnectionStates={starting:"starting",checking:"checking",connected:"connected",completed:"connected",done:"completed",disconnected:"disconnected",failed:"failed",closed:"closed"},AdapterJS._iceConnectionFiredStates=[],AdapterJS.isDefined=null,window.webrtcDetectedType=null,window.MediaStream="function"==typeof MediaStream?MediaStream:null,window.RTCPeerConnection="function"==typeof RTCPeerConnection?RTCPeerConnection:null,window.RTCSessionDescription="function"==typeof RTCSessionDescription?RTCSessionDescription:null,window.RTCIceCandidate="function"==typeof RTCIceCandidate?RTCIceCandidate:null,window.getUserMedia="function"==typeof getUserMedia?getUserMedia:null,window.attachMediaStream=null,window.reattachMediaStream=null,window.webrtcDetectedBrowser=null,window.webrtcDetectedVersion=null,window.webrtcMinimumVersion=null,window.webrtcDetectedDCSupport=null,AdapterJS.parseWebrtcDetectedBrowser=function(){var hasMatch=null;if(window.opr&&opr.addons||window.opera||navigator.userAgent.indexOf(" OPR/")>=0)hasMatch=navigator.userAgent.match(/OPR\/(\d+)/i)||[],window.webrtcDetectedBrowser="opera",window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=26,window.webrtcDetectedType="webkit",window.webrtcDetectedDCSupport="SCTP";else if(navigator.userAgent.match(/Bowser\/[0-9.]*/g)){hasMatch=navigator.userAgent.match(/Bowser\/[0-9.]*/g)||[];var chromiumVersion=parseInt((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./i)||[])[2]||"0",10);window.webrtcDetectedBrowser="bowser",window.webrtcDetectedVersion=parseFloat((hasMatch[0]||"0/0").split("/")[1],10),window.webrtcMinimumVersion=0,window.webrtcDetectedType="webkit",window.webrtcDetectedDCSupport=chromiumVersion>30?"SCTP":"RTP"}else if(navigator.userAgent.indexOf("OPiOS")>0)hasMatch=navigator.userAgent.match(/OPiOS\/([0-9]+)\./),window.webrtcDetectedBrowser="opera",window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=0,window.webrtcDetectedType=null,window.webrtcDetectedDCSupport=null;else if(navigator.userAgent.indexOf("CriOS")>0)hasMatch=navigator.userAgent.match(/CriOS\/([0-9]+)\./)||[],window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=0,window.webrtcDetectedType=null,window.webrtcDetectedBrowser="chrome",window.webrtcDetectedDCSupport=null;else if(navigator.userAgent.indexOf("FxiOS")>0)hasMatch=navigator.userAgent.match(/FxiOS\/([0-9]+)\./)||[],window.webrtcDetectedBrowser="firefox",window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=0,window.webrtcDetectedType=null,window.webrtcDetectedDCSupport=null;else if(document.documentMode)hasMatch=/\brv[ :]+(\d+)/g.exec(navigator.userAgent)||[],window.webrtcDetectedBrowser="IE",window.webrtcDetectedVersion=parseInt(hasMatch[1],10),window.webrtcMinimumVersion=9,window.webrtcDetectedType="plugin",window.webrtcDetectedDCSupport="SCTP",webrtcDetectedVersion||(hasMatch=/\bMSIE[ :]+(\d+)/g.exec(navigator.userAgent)||[],window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10));else if(window.StyleMedia||navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))hasMatch=navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)||[],window.webrtcDetectedBrowser="edge",window.webrtcDetectedVersion=parseFloat((hasMatch[0]||"0/0").split("/")[1],10),window.webrtcMinimumVersion=13.10547,window.webrtcDetectedType="ms",window.webrtcDetectedDCSupport=null;else if("undefined"!=typeof InstallTrigger||navigator.userAgent.indexOf("irefox")>0)hasMatch=navigator.userAgent.match(/Firefox\/([0-9]+)\./)||[],window.webrtcDetectedBrowser="firefox",window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=33,window.webrtcDetectedType="moz",window.webrtcDetectedDCSupport="SCTP";else if(window.chrome&&window.chrome.webstore||navigator.userAgent.indexOf("Chrom")>0)hasMatch=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./i)||[],window.webrtcDetectedBrowser="chrome",window.webrtcDetectedVersion=parseInt(hasMatch[2]||"0",10),window.webrtcMinimumVersion=38,window.webrtcDetectedType="webkit",window.webrtcDetectedDCSupport=window.webrtcDetectedVersion>30?"SCTP":"RTP";else if(/constructor/i.test(window.HTMLElement)||function(p){return"[object SafariRemoteNotification]"===p.toString()}(!window.safari||safari.pushNotification)||navigator.userAgent.match(/AppleWebKit\/(\d+)\./)||navigator.userAgent.match(/Version\/(\d+).(\d+)/)){hasMatch=navigator.userAgent.match(/version\/(\d+)\.(\d+)/i)||[];var AppleWebKitBuild=navigator.userAgent.match(/AppleWebKit\/(\d+)/i)||[],isMobile=navigator.userAgent.match(/(iPhone|iPad)/gi),hasNativeImpl=AppleWebKitBuild.length>=1&&AppleWebKitBuild[1]>=604;if(window.webrtcDetectedBrowser="safari",window.webrtcDetectedVersion=parseInt(hasMatch[1]||"0",10),window.webrtcMinimumVersion=7,isMobile)window.webrtcDetectedType=hasNativeImpl?"AppleWebKit":null;else{var majorVersion=window.webrtcDetectedVersion,minorVersion=parseInt(hasMatch[2]||"0",10),nativeImplIsOverridable=11==majorVersion&&minorVersion<2;window.webrtcDetectedType=!hasNativeImpl||AdapterJS.options.forceSafariPlugin&&nativeImplIsOverridable?"plugin":"AppleWebKit"}window.webrtcDetectedDCSupport="SCTP"}AdapterJS.webrtcDetectedBrowser=window.webrtcDetectedBrowser,AdapterJS.webrtcDetectedVersion=window.webrtcDetectedVersion,AdapterJS.webrtcMinimumVersion=window.webrtcMinimumVersion,AdapterJS.webrtcDetectedType=window.webrtcDetectedType,AdapterJS.webrtcDetectedDCSupport=window.webrtcDetectedDCSupport},AdapterJS.addEvent=function(elem,evnt,func){elem.addEventListener?elem.addEventListener(evnt,func,!1):elem.attachEvent?elem.attachEvent("on"+evnt,func):elem[evnt]=func},AdapterJS.renderNotificationBar=function(message,buttonText,buttonCallback){if(AdapterJS.documentReady()){var w=window,i=document.createElement("iframe");i.name="adapterjs-alert",i.style.position="fixed",i.style.top="-41px",i.style.left=0,i.style.right=0,i.style.width="100%",i.style.height="40px",i.style.backgroundColor="#ffffe1",i.style.border="none",i.style.borderBottom="1px solid #888888",i.style.zIndex="9999999","string"==typeof i.style.webkitTransition?i.style.webkitTransition="all .5s ease-out":"string"==typeof i.style.transition&&(i.style.transition="all .5s ease-out"),document.body.appendChild(i);var c=i.contentWindow?i.contentWindow:i.contentDocument.document?i.contentDocument.document:i.contentDocument;c.document.open(),c.document.write('<span style="display: inline-block; font-family: Helvetica, Arial,sans-serif; font-size: .9rem; padding: 4px; vertical-align: middle; cursor: default;">'+message+"</span>"),buttonText&&"function"==typeof buttonCallback?(c.document.write('<button id="okay">'+buttonText+'</button><button id="cancel">Cancel</button>'),c.document.close(),AdapterJS.addEvent(c.document.getElementById("okay"),"click",function(e){e.preventDefault();try{e.cancelBubble=!0}catch(error){}buttonCallback(e)}),AdapterJS.addEvent(c.document.getElementById("cancel"),"click",function(e){w.document.body.removeChild(i)})):c.document.close(),setTimeout(function(){"string"==typeof i.style.webkitTransform?i.style.webkitTransform="translateY(40px)":"string"==typeof i.style.transform?i.style.transform="translateY(40px)":i.style.top="0px"},300)}},window.requestUserMedia="function"==typeof requestUserMedia?requestUserMedia:null,AdapterJS.parseWebrtcDetectedBrowser(),["webkit","moz","ms","AppleWebKit"].indexOf(AdapterJS.webrtcDetectedType)>-1){navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)&&window.RTCPeerConnection&&(window.msRTCPeerConnection=window.RTCPeerConnection),function(f){if(true)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.adapter=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(requirecopy,module,exports){function fixStatsType(stat){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[stat.type]||stat.type}function writeMediaSection(transceiver,caps,type,stream,dtlsRole){var sdp=SDPUtils.writeRtpDescription(transceiver.kind,caps);if(sdp+=SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()),sdp+=SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(),"offer"===type?"actpass":dtlsRole||"active"),sdp+="a=mid:"+transceiver.mid+"\r\n",transceiver.rtpSender&&transceiver.rtpReceiver?sdp+="a=sendrecv\r\n":transceiver.rtpSender?sdp+="a=sendonly\r\n":transceiver.rtpReceiver?sdp+="a=recvonly\r\n":sdp+="a=inactive\r\n",transceiver.rtpSender){var trackId=transceiver.rtpSender._initialTrackId||transceiver.rtpSender.track.id;transceiver.rtpSender._initialTrackId=trackId;var msid="msid:"+(stream?stream.id:"-")+" "+trackId+"\r\n";sdp+="a="+msid,sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" "+msid,transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" "+msid,sdp+="a=ssrc-group:FID "+transceiver.sendEncodingParameters[0].ssrc+" "+transceiver.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" cname:"+SDPUtils.localCName+"\r\n",transceiver.rtpSender&&transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" cname:"+SDPUtils.localCName+"\r\n"),sdp}function filterIceServers(iceServers,edgeVersion){var hasTurn=!1;return iceServers=JSON.parse(JSON.stringify(iceServers)),iceServers.filter(function(server){if(server&&(server.urls||server.url)){var urls=server.urls||server.url;server.url&&server.urls;var isString="string"==typeof urls;return isString&&(urls=[urls]),urls=urls.filter(function(url){return 0!==url.indexOf("turn:")||-1===url.indexOf("transport=udp")||-1!==url.indexOf("turn:[")||hasTurn?0===url.indexOf("stun:")&&edgeVersion>=14393&&-1===url.indexOf("?transport=udp"):(hasTurn=!0,!0)}),delete server.url,server.urls=isString?urls[0]:urls,!!urls.length}})}function getCommonCapabilities(localCapabilities,remoteCapabilities){var commonCapabilities={codecs:[],headerExtensions:[],fecMechanisms:[]},findCodecByPayloadType=function(pt,codecs){pt=parseInt(pt,10);for(var i=0;i<codecs.length;i++)if(codecs[i].payloadType===pt||codecs[i].preferredPayloadType===pt)return codecs[i]},rtxCapabilityMatches=function(lRtx,rRtx,lCodecs,rCodecs){var lCodec=findCodecByPayloadType(lRtx.parameters.apt,lCodecs),rCodec=findCodecByPayloadType(rRtx.parameters.apt,rCodecs);return lCodec&&rCodec&&lCodec.name.toLowerCase()===rCodec.name.toLowerCase()};return localCapabilities.codecs.forEach(function(lCodec){for(var i=0;i<remoteCapabilities.codecs.length;i++){var rCodec=remoteCapabilities.codecs[i];if(lCodec.name.toLowerCase()===rCodec.name.toLowerCase()&&lCodec.clockRate===rCodec.clockRate){if("rtx"===lCodec.name.toLowerCase()&&lCodec.parameters&&rCodec.parameters.apt&&!rtxCapabilityMatches(lCodec,rCodec,localCapabilities.codecs,remoteCapabilities.codecs))continue;rCodec=JSON.parse(JSON.stringify(rCodec)),rCodec.numChannels=Math.min(lCodec.numChannels,rCodec.numChannels),commonCapabilities.codecs.push(rCodec),rCodec.rtcpFeedback=rCodec.rtcpFeedback.filter(function(fb){for(var j=0;j<lCodec.rtcpFeedback.length;j++)if(lCodec.rtcpFeedback[j].type===fb.type&&lCodec.rtcpFeedback[j].parameter===fb.parameter)return!0;return!1});break}}}),localCapabilities.headerExtensions.forEach(function(lHeaderExtension){for(var i=0;i<remoteCapabilities.headerExtensions.length;i++){var rHeaderExtension=remoteCapabilities.headerExtensions[i];if(lHeaderExtension.uri===rHeaderExtension.uri){commonCapabilities.headerExtensions.push(rHeaderExtension);break}}}),commonCapabilities}function isActionAllowedInSignalingState(action,type,signalingState){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[type][action].indexOf(signalingState)}function maybeAddCandidate(iceTransport,candidate){var alreadyAdded=iceTransport.getRemoteCandidates().find(function(remoteCandidate){return candidate.foundation===remoteCandidate.foundation&&candidate.ip===remoteCandidate.ip&&candidate.port===remoteCandidate.port&&candidate.priority===remoteCandidate.priority&&candidate.protocol===remoteCandidate.protocol&&candidate.type===remoteCandidate.type});return alreadyAdded||iceTransport.addRemoteCandidate(candidate),!alreadyAdded}function makeError(name,description){var e=new Error(description);return e.name=name,e.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[name],e}var SDPUtils=requirecopy("sdp");module.exports=function(window,edgeVersion){function addTrackToStreamAndFireEvent(track,stream){stream.addTrack(track),stream.dispatchEvent(new window.MediaStreamTrackEvent("addtrack",{track:track}))}function removeTrackFromStreamAndFireEvent(track,stream){stream.removeTrack(track),stream.dispatchEvent(new window.MediaStreamTrackEvent("removetrack",{track:track}))}function fireAddTrack(pc,track,receiver,streams){var trackEvent=new Event("track");trackEvent.track=track,trackEvent.receiver=receiver,trackEvent.transceiver={receiver:receiver},trackEvent.streams=streams,window.setTimeout(function(){pc._dispatchEvent("track",trackEvent)})}var RTCPeerConnection=function(config){var pc=this,_eventTarget=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(method){pc[method]=_eventTarget[method].bind(_eventTarget)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",config=JSON.parse(JSON.stringify(config||{})),this.usingBundle="max-bundle"===config.bundlePolicy,"negotiate"===config.rtcpMuxPolicy)throw makeError("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(config.rtcpMuxPolicy||(config.rtcpMuxPolicy="require"),config.iceTransportPolicy){case"all":case"relay":break;default:config.iceTransportPolicy="all"}switch(config.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:config.bundlePolicy="balanced"}if(config.iceServers=filterIceServers(config.iceServers||[],edgeVersion),this._iceGatherers=[],config.iceCandidatePoolSize)for(var i=config.iceCandidatePoolSize;i>0;i--)this._iceGatherers.push(new window.RTCIceGatherer({iceServers:config.iceServers,gatherPolicy:config.iceTransportPolicy}));else config.iceCandidatePoolSize=0;this._config=config,this.transceivers=[],this._sdpSessionId=SDPUtils.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(RTCPeerConnection.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(RTCPeerConnection.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),RTCPeerConnection.prototype.onicecandidate=null,RTCPeerConnection.prototype.onaddstream=null,RTCPeerConnection.prototype.ontrack=null,RTCPeerConnection.prototype.onremovestream=null,RTCPeerConnection.prototype.onsignalingstatechange=null,RTCPeerConnection.prototype.oniceconnectionstatechange=null,RTCPeerConnection.prototype.onconnectionstatechange=null,RTCPeerConnection.prototype.onicegatheringstatechange=null,RTCPeerConnection.prototype.onnegotiationneeded=null,RTCPeerConnection.prototype.ondatachannel=null,RTCPeerConnection.prototype._dispatchEvent=function(name,event){this._isClosed||(this.dispatchEvent(event),"function"==typeof this["on"+name]&&this["on"+name](event))},RTCPeerConnection.prototype._emitGatheringStateChange=function(){var event=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",event)},RTCPeerConnection.prototype.getConfiguration=function(){return this._config},RTCPeerConnection.prototype.getLocalStreams=function(){return this.localStreams},RTCPeerConnection.prototype.getRemoteStreams=function(){return this.remoteStreams},RTCPeerConnection.prototype._createTransceiver=function(kind,doNotAdd){var hasBundleTransport=this.transceivers.length>0,transceiver={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:kind,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&hasBundleTransport)transceiver.iceTransport=this.transceivers[0].iceTransport,transceiver.dtlsTransport=this.transceivers[0].dtlsTransport;else{var transports=this._createIceAndDtlsTransports();transceiver.iceTransport=transports.iceTransport,transceiver.dtlsTransport=transports.dtlsTransport}return doNotAdd||this.transceivers.push(transceiver),transceiver},RTCPeerConnection.prototype.addTrack=function(track,stream){if(this._isClosed)throw makeError("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");if(this.transceivers.find(function(s){return s.track===track}))throw makeError("InvalidAccessError","Track already exists.");for(var transceiver,i=0;i<this.transceivers.length;i++)this.transceivers[i].track||this.transceivers[i].kind!==track.kind||(transceiver=this.transceivers[i]);return transceiver||(transceiver=this._createTransceiver(track.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(stream)&&this.localStreams.push(stream),transceiver.track=track,transceiver.stream=stream,transceiver.rtpSender=new window.RTCRtpSender(track,transceiver.dtlsTransport),transceiver.rtpSender},RTCPeerConnection.prototype.addStream=function(stream){var pc=this;if(edgeVersion>=15025)stream.getTracks().forEach(function(track){pc.addTrack(track,stream)});else{var clonedStream=stream.clone();stream.getTracks().forEach(function(track,idx){var clonedTrack=clonedStream.getTracks()[idx];track.addEventListener("enabled",function(event){clonedTrack.enabled=event.enabled})}),clonedStream.getTracks().forEach(function(track){pc.addTrack(track,clonedStream)})}},RTCPeerConnection.prototype.removeTrack=function(sender){if(this._isClosed)throw makeError("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(sender instanceof window.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var transceiver=this.transceivers.find(function(t){return t.rtpSender===sender});if(!transceiver)throw makeError("InvalidAccessError","Sender was not created by this connection.");var stream=transceiver.stream;transceiver.rtpSender.stop(),transceiver.rtpSender=null,transceiver.track=null,transceiver.stream=null,-1===this.transceivers.map(function(t){return t.stream}).indexOf(stream)&&this.localStreams.indexOf(stream)>-1&&this.localStreams.splice(this.localStreams.indexOf(stream),1),this._maybeFireNegotiationNeeded()},RTCPeerConnection.prototype.removeStream=function(stream){var pc=this;stream.getTracks().forEach(function(track){var sender=pc.getSenders().find(function(s){return s.track===track});sender&&pc.removeTrack(sender)})},RTCPeerConnection.prototype.getSenders=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpSender}).map(function(transceiver){return transceiver.rtpSender})},RTCPeerConnection.prototype.getReceivers=function(){return this.transceivers.filter(function(transceiver){return!!transceiver.rtpReceiver}).map(function(transceiver){return transceiver.rtpReceiver})},RTCPeerConnection.prototype._createIceGatherer=function(sdpMLineIndex,usingBundle){var pc=this;if(usingBundle&&sdpMLineIndex>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var iceGatherer=new window.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(iceGatherer,"state",{value:"new",writable:!0}),this.transceivers[sdpMLineIndex].bufferedCandidateEvents=[],this.transceivers[sdpMLineIndex].bufferCandidates=function(event){var end=!event.candidate||0===Object.keys(event.candidate).length;iceGatherer.state=end?"completed":"gathering",null!==pc.transceivers[sdpMLineIndex].bufferedCandidateEvents&&pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event)},iceGatherer.addEventListener("localcandidate",this.transceivers[sdpMLineIndex].bufferCandidates),iceGatherer},RTCPeerConnection.prototype._gather=function(mid,sdpMLineIndex){var pc=this,iceGatherer=this.transceivers[sdpMLineIndex].iceGatherer;if(!iceGatherer.onlocalcandidate){var bufferedCandidateEvents=this.transceivers[sdpMLineIndex].bufferedCandidateEvents;this.transceivers[sdpMLineIndex].bufferedCandidateEvents=null,iceGatherer.removeEventListener("localcandidate",this.transceivers[sdpMLineIndex].bufferCandidates),iceGatherer.onlocalcandidate=function(evt){if(!(pc.usingBundle&&sdpMLineIndex>0)){var event=new Event("icecandidate");event.candidate={sdpMid:mid,sdpMLineIndex:sdpMLineIndex};var cand=evt.candidate,end=!cand||0===Object.keys(cand).length;if(end)"new"!==iceGatherer.state&&"gathering"!==iceGatherer.state||(iceGatherer.state="completed");else{"new"===iceGatherer.state&&(iceGatherer.state="gathering"),cand.component=1,cand.ufrag=iceGatherer.getLocalParameters().usernameFragment;var serializedCandidate=SDPUtils.writeCandidate(cand);event.candidate=Object.assign(event.candidate,SDPUtils.parseCandidate(serializedCandidate)),event.candidate.candidate=serializedCandidate,event.candidate.toJSON=function(){return{candidate:event.candidate.candidate,sdpMid:event.candidate.sdpMid,sdpMLineIndex:event.candidate.sdpMLineIndex,usernameFragment:event.candidate.usernameFragment}}}var sections=SDPUtils.getMediaSections(pc._localDescription.sdp);sections[event.candidate.sdpMLineIndex]+=end?"a=end-of-candidates\r\n":"a="+event.candidate.candidate+"\r\n",pc._localDescription.sdp=SDPUtils.getDescription(pc._localDescription.sdp)+sections.join("");var complete=pc.transceivers.every(function(transceiver){return transceiver.iceGatherer&&"completed"===transceiver.iceGatherer.state});"gathering"!==pc.iceGatheringState&&(pc.iceGatheringState="gathering",pc._emitGatheringStateChange()),end||pc._dispatchEvent("icecandidate",event),complete&&(pc._dispatchEvent("icecandidate",new Event("icecandidate")),pc.iceGatheringState="complete",pc._emitGatheringStateChange())}},window.setTimeout(function(){bufferedCandidateEvents.forEach(function(e){iceGatherer.onlocalcandidate(e)})},0)}},RTCPeerConnection.prototype._createIceAndDtlsTransports=function(){var pc=this,iceTransport=new window.RTCIceTransport(null);iceTransport.onicestatechange=function(){pc._updateIceConnectionState(),pc._updateConnectionState()};var dtlsTransport=new window.RTCDtlsTransport(iceTransport);return dtlsTransport.ondtlsstatechange=function(){pc._updateConnectionState()},dtlsTransport.onerror=function(){Object.defineProperty(dtlsTransport,"state",{value:"failed",writable:!0}),pc._updateConnectionState()},{iceTransport:iceTransport,dtlsTransport:dtlsTransport}},RTCPeerConnection.prototype._disposeIceAndDtlsTransports=function(sdpMLineIndex){var iceGatherer=this.transceivers[sdpMLineIndex].iceGatherer;iceGatherer&&(delete iceGatherer.onlocalcandidate,delete this.transceivers[sdpMLineIndex].iceGatherer);var iceTransport=this.transceivers[sdpMLineIndex].iceTransport;iceTransport&&(delete iceTransport.onicestatechange,delete this.transceivers[sdpMLineIndex].iceTransport);var dtlsTransport=this.transceivers[sdpMLineIndex].dtlsTransport;dtlsTransport&&(delete dtlsTransport.ondtlsstatechange,delete dtlsTransport.onerror,delete this.transceivers[sdpMLineIndex].dtlsTransport)},RTCPeerConnection.prototype._transceive=function(transceiver,send,recv){var params=getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);send&&transceiver.rtpSender&&(params.encodings=transceiver.sendEncodingParameters,params.rtcp={cname:SDPUtils.localCName,compound:transceiver.rtcpParameters.compound},transceiver.recvEncodingParameters.length&&(params.rtcp.ssrc=transceiver.recvEncodingParameters[0].ssrc),transceiver.rtpSender.send(params)),recv&&transceiver.rtpReceiver&&params.codecs.length>0&&("video"===transceiver.kind&&transceiver.recvEncodingParameters&&edgeVersion<15019&&transceiver.recvEncodingParameters.forEach(function(p){delete p.rtx}),transceiver.recvEncodingParameters.length?params.encodings=transceiver.recvEncodingParameters:params.encodings=[{}],params.rtcp={compound:transceiver.rtcpParameters.compound},transceiver.rtcpParameters.cname&&(params.rtcp.cname=transceiver.rtcpParameters.cname),transceiver.sendEncodingParameters.length&&(params.rtcp.ssrc=transceiver.sendEncodingParameters[0].ssrc),transceiver.rtpReceiver.receive(params))},RTCPeerConnection.prototype.setLocalDescription=function(description){var pc=this;if(-1===["offer","answer"].indexOf(description.type))return Promise.reject(makeError("TypeError",'Unsupported type "'+description.type+'"'));if(!isActionAllowedInSignalingState("setLocalDescription",description.type,pc.signalingState)||pc._isClosed)return Promise.reject(makeError("InvalidStateError","Can not set local "+description.type+" in state "+pc.signalingState));var sections,sessionpart;if("offer"===description.type)sections=SDPUtils.splitSections(description.sdp),sessionpart=sections.shift(),sections.forEach(function(mediaSection,sdpMLineIndex){var caps=SDPUtils.parseRtpParameters(mediaSection);pc.transceivers[sdpMLineIndex].localCapabilities=caps}),pc.transceivers.forEach(function(transceiver,sdpMLineIndex){pc._gather(transceiver.mid,sdpMLineIndex)});else if("answer"===description.type){sections=SDPUtils.splitSections(pc._remoteDescription.sdp),sessionpart=sections.shift();var isIceLite=SDPUtils.matchPrefix(sessionpart,"a=ice-lite").length>0;sections.forEach(function(mediaSection,sdpMLineIndex){var transceiver=pc.transceivers[sdpMLineIndex],iceGatherer=transceiver.iceGatherer,iceTransport=transceiver.iceTransport,dtlsTransport=transceiver.dtlsTransport,localCapabilities=transceiver.localCapabilities,remoteCapabilities=transceiver.remoteCapabilities;if(!(SDPUtils.isRejected(mediaSection)&&0===SDPUtils.matchPrefix(mediaSection,"a=bundle-only").length||transceiver.rejected)){var remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart),remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart);isIceLite&&(remoteDtlsParameters.role="server"),pc.usingBundle&&0!==sdpMLineIndex||(pc._gather(transceiver.mid,sdpMLineIndex),"new"===iceTransport.state&&iceTransport.start(iceGatherer,remoteIceParameters,isIceLite?"controlling":"controlled"),"new"===dtlsTransport.state&&dtlsTransport.start(remoteDtlsParameters));var params=getCommonCapabilities(localCapabilities,remoteCapabilities);pc._transceive(transceiver,params.codecs.length>0,!1)}})}return pc._localDescription={type:description.type,sdp:description.sdp},"offer"===description.type?pc._updateSignalingState("have-local-offer"):pc._updateSignalingState("stable"),Promise.resolve()},RTCPeerConnection.prototype.setRemoteDescription=function(description){var pc=this;if(-1===["offer","answer"].indexOf(description.type))return Promise.reject(makeError("TypeError",'Unsupported type "'+description.type+'"'));if(!isActionAllowedInSignalingState("setRemoteDescription",description.type,pc.signalingState)||pc._isClosed)return Promise.reject(makeError("InvalidStateError","Can not set remote "+description.type+" in state "+pc.signalingState));var streams={};pc.remoteStreams.forEach(function(stream){
streams[stream.id]=stream});var receiverList=[],sections=SDPUtils.splitSections(description.sdp),sessionpart=sections.shift(),isIceLite=SDPUtils.matchPrefix(sessionpart,"a=ice-lite").length>0,usingBundle=SDPUtils.matchPrefix(sessionpart,"a=group:BUNDLE ").length>0;pc.usingBundle=usingBundle;var iceOptions=SDPUtils.matchPrefix(sessionpart,"a=ice-options:")[0];return pc.canTrickleIceCandidates=!!iceOptions&&iceOptions.substr(14).split(" ").indexOf("trickle")>=0,sections.forEach(function(mediaSection,sdpMLineIndex){var lines=SDPUtils.splitLines(mediaSection),kind=SDPUtils.getKind(mediaSection),rejected=SDPUtils.isRejected(mediaSection)&&0===SDPUtils.matchPrefix(mediaSection,"a=bundle-only").length,protocol=lines[0].substr(2).split(" ")[2],direction=SDPUtils.getDirection(mediaSection,sessionpart),remoteMsid=SDPUtils.parseMsid(mediaSection),mid=SDPUtils.getMid(mediaSection)||SDPUtils.generateIdentifier();if(rejected||"application"===kind&&("DTLS/SCTP"===protocol||"UDP/DTLS/SCTP"===protocol))return void(pc.transceivers[sdpMLineIndex]={mid:mid,kind:kind,protocol:protocol,rejected:!0});!rejected&&pc.transceivers[sdpMLineIndex]&&pc.transceivers[sdpMLineIndex].rejected&&(pc.transceivers[sdpMLineIndex]=pc._createTransceiver(kind,!0));var transceiver,iceGatherer,iceTransport,dtlsTransport,rtpReceiver,sendEncodingParameters,recvEncodingParameters,localCapabilities,track,remoteIceParameters,remoteDtlsParameters,remoteCapabilities=SDPUtils.parseRtpParameters(mediaSection);rejected||(remoteIceParameters=SDPUtils.getIceParameters(mediaSection,sessionpart),remoteDtlsParameters=SDPUtils.getDtlsParameters(mediaSection,sessionpart),remoteDtlsParameters.role="client"),recvEncodingParameters=SDPUtils.parseRtpEncodingParameters(mediaSection);var rtcpParameters=SDPUtils.parseRtcpParameters(mediaSection),isComplete=SDPUtils.matchPrefix(mediaSection,"a=end-of-candidates",sessionpart).length>0,cands=SDPUtils.matchPrefix(mediaSection,"a=candidate:").map(function(cand){return SDPUtils.parseCandidate(cand)}).filter(function(cand){return 1===cand.component});if(("offer"===description.type||"answer"===description.type)&&!rejected&&usingBundle&&sdpMLineIndex>0&&pc.transceivers[sdpMLineIndex]&&(pc._disposeIceAndDtlsTransports(sdpMLineIndex),pc.transceivers[sdpMLineIndex].iceGatherer=pc.transceivers[0].iceGatherer,pc.transceivers[sdpMLineIndex].iceTransport=pc.transceivers[0].iceTransport,pc.transceivers[sdpMLineIndex].dtlsTransport=pc.transceivers[0].dtlsTransport,pc.transceivers[sdpMLineIndex].rtpSender&&pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport),pc.transceivers[sdpMLineIndex].rtpReceiver&&pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport)),"offer"!==description.type||rejected)"answer"!==description.type||rejected||(transceiver=pc.transceivers[sdpMLineIndex],iceGatherer=transceiver.iceGatherer,iceTransport=transceiver.iceTransport,dtlsTransport=transceiver.dtlsTransport,rtpReceiver=transceiver.rtpReceiver,sendEncodingParameters=transceiver.sendEncodingParameters,localCapabilities=transceiver.localCapabilities,pc.transceivers[sdpMLineIndex].recvEncodingParameters=recvEncodingParameters,pc.transceivers[sdpMLineIndex].remoteCapabilities=remoteCapabilities,pc.transceivers[sdpMLineIndex].rtcpParameters=rtcpParameters,cands.length&&"new"===iceTransport.state&&(!isIceLite&&!isComplete||usingBundle&&0!==sdpMLineIndex?cands.forEach(function(candidate){maybeAddCandidate(transceiver.iceTransport,candidate)}):iceTransport.setRemoteCandidates(cands)),usingBundle&&0!==sdpMLineIndex||("new"===iceTransport.state&&iceTransport.start(iceGatherer,remoteIceParameters,"controlling"),"new"===dtlsTransport.state&&dtlsTransport.start(remoteDtlsParameters)),pc._transceive(transceiver,"sendrecv"===direction||"recvonly"===direction,"sendrecv"===direction||"sendonly"===direction),!rtpReceiver||"sendrecv"!==direction&&"sendonly"!==direction?delete transceiver.rtpReceiver:(track=rtpReceiver.track,remoteMsid?(streams[remoteMsid.stream]||(streams[remoteMsid.stream]=new window.MediaStream),addTrackToStreamAndFireEvent(track,streams[remoteMsid.stream]),receiverList.push([track,rtpReceiver,streams[remoteMsid.stream]])):(streams.default||(streams.default=new window.MediaStream),addTrackToStreamAndFireEvent(track,streams.default),receiverList.push([track,rtpReceiver,streams.default]))));else{transceiver=pc.transceivers[sdpMLineIndex]||pc._createTransceiver(kind),transceiver.mid=mid,transceiver.iceGatherer||(transceiver.iceGatherer=pc._createIceGatherer(sdpMLineIndex,usingBundle)),cands.length&&"new"===transceiver.iceTransport.state&&(!isComplete||usingBundle&&0!==sdpMLineIndex?cands.forEach(function(candidate){maybeAddCandidate(transceiver.iceTransport,candidate)}):transceiver.iceTransport.setRemoteCandidates(cands)),localCapabilities=window.RTCRtpReceiver.getCapabilities(kind),edgeVersion<15019&&(localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return"rtx"!==codec.name})),sendEncodingParameters=transceiver.sendEncodingParameters||[{ssrc:1001*(2*sdpMLineIndex+2)}];var isNewTrack=!1;if("sendrecv"===direction||"sendonly"===direction){if(isNewTrack=!transceiver.rtpReceiver,rtpReceiver=transceiver.rtpReceiver||new window.RTCRtpReceiver(transceiver.dtlsTransport,kind),isNewTrack){var stream;track=rtpReceiver.track,remoteMsid&&"-"===remoteMsid.stream||(remoteMsid?(streams[remoteMsid.stream]||(streams[remoteMsid.stream]=new window.MediaStream,Object.defineProperty(streams[remoteMsid.stream],"id",{get:function(){return remoteMsid.stream}})),Object.defineProperty(track,"id",{get:function(){return remoteMsid.track}}),stream=streams[remoteMsid.stream]):(streams.default||(streams.default=new window.MediaStream),stream=streams.default)),stream&&(addTrackToStreamAndFireEvent(track,stream),transceiver.associatedRemoteMediaStreams.push(stream)),receiverList.push([track,rtpReceiver,stream])}}else transceiver.rtpReceiver&&transceiver.rtpReceiver.track&&(transceiver.associatedRemoteMediaStreams.forEach(function(s){var nativeTrack=s.getTracks().find(function(t){return t.id===transceiver.rtpReceiver.track.id});nativeTrack&&removeTrackFromStreamAndFireEvent(nativeTrack,s)}),transceiver.associatedRemoteMediaStreams=[]);transceiver.localCapabilities=localCapabilities,transceiver.remoteCapabilities=remoteCapabilities,transceiver.rtpReceiver=rtpReceiver,transceiver.rtcpParameters=rtcpParameters,transceiver.sendEncodingParameters=sendEncodingParameters,transceiver.recvEncodingParameters=recvEncodingParameters,pc._transceive(pc.transceivers[sdpMLineIndex],!1,isNewTrack)}}),void 0===pc._dtlsRole&&(pc._dtlsRole="offer"===description.type?"active":"passive"),pc._remoteDescription={type:description.type,sdp:description.sdp},"offer"===description.type?pc._updateSignalingState("have-remote-offer"):pc._updateSignalingState("stable"),Object.keys(streams).forEach(function(sid){var stream=streams[sid];if(stream.getTracks().length){if(-1===pc.remoteStreams.indexOf(stream)){pc.remoteStreams.push(stream);var event=new Event("addstream");event.stream=stream,window.setTimeout(function(){pc._dispatchEvent("addstream",event)})}receiverList.forEach(function(item){var track=item[0],receiver=item[1];stream.id===item[2].id&&fireAddTrack(pc,track,receiver,[stream])})}}),receiverList.forEach(function(item){item[2]||fireAddTrack(pc,item[0],item[1],[])}),window.setTimeout(function(){pc&&pc.transceivers&&pc.transceivers.forEach(function(transceiver){transceiver.iceTransport&&"new"===transceiver.iceTransport.state&&transceiver.iceTransport.getRemoteCandidates().length>0&&transceiver.iceTransport.addRemoteCandidate({})})},4e3),Promise.resolve()},RTCPeerConnection.prototype.close=function(){this.transceivers.forEach(function(transceiver){transceiver.iceTransport&&transceiver.iceTransport.stop(),transceiver.dtlsTransport&&transceiver.dtlsTransport.stop(),transceiver.rtpSender&&transceiver.rtpSender.stop(),transceiver.rtpReceiver&&transceiver.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},RTCPeerConnection.prototype._updateSignalingState=function(newState){this.signalingState=newState;var event=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",event)},RTCPeerConnection.prototype._maybeFireNegotiationNeeded=function(){var pc=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,window.setTimeout(function(){if(pc.needNegotiation){pc.needNegotiation=!1;var event=new Event("negotiationneeded");pc._dispatchEvent("negotiationneeded",event)}},0))},RTCPeerConnection.prototype._updateIceConnectionState=function(){var newState,states={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(transceiver){states[transceiver.iceTransport.state]++}),newState="new",states.failed>0?newState="failed":states.checking>0?newState="checking":states.disconnected>0?newState="disconnected":states.new>0?newState="new":states.connected>0?newState="connected":states.completed>0&&(newState="completed"),newState!==this.iceConnectionState){this.iceConnectionState=newState;var event=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",event)}},RTCPeerConnection.prototype._updateConnectionState=function(){var newState,states={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(transceiver){states[transceiver.iceTransport.state]++,states[transceiver.dtlsTransport.state]++}),states.connected+=states.completed,newState="new",states.failed>0?newState="failed":states.connecting>0?newState="connecting":states.disconnected>0?newState="disconnected":states.new>0?newState="new":states.connected>0&&(newState="connected"),newState!==this.connectionState){this.connectionState=newState;var event=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",event)}},RTCPeerConnection.prototype.createOffer=function(){var pc=this;if(pc._isClosed)return Promise.reject(makeError("InvalidStateError","Can not call createOffer after close"));var numAudioTracks=pc.transceivers.filter(function(t){return"audio"===t.kind}).length,numVideoTracks=pc.transceivers.filter(function(t){return"video"===t.kind}).length,offerOptions=arguments[0];if(offerOptions){if(offerOptions.mandatory||offerOptions.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==offerOptions.offerToReceiveAudio&&(numAudioTracks=!0===offerOptions.offerToReceiveAudio?1:!1===offerOptions.offerToReceiveAudio?0:offerOptions.offerToReceiveAudio),void 0!==offerOptions.offerToReceiveVideo&&(numVideoTracks=!0===offerOptions.offerToReceiveVideo?1:!1===offerOptions.offerToReceiveVideo?0:offerOptions.offerToReceiveVideo)}for(pc.transceivers.forEach(function(transceiver){"audio"===transceiver.kind?--numAudioTracks<0&&(transceiver.wantReceive=!1):"video"===transceiver.kind&&--numVideoTracks<0&&(transceiver.wantReceive=!1)});numAudioTracks>0||numVideoTracks>0;)numAudioTracks>0&&(pc._createTransceiver("audio"),numAudioTracks--),numVideoTracks>0&&(pc._createTransceiver("video"),numVideoTracks--);var sdp=SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,pc._sdpSessionVersion++);pc.transceivers.forEach(function(transceiver,sdpMLineIndex){var track=transceiver.track,kind=transceiver.kind,mid=transceiver.mid||SDPUtils.generateIdentifier();transceiver.mid=mid,transceiver.iceGatherer||(transceiver.iceGatherer=pc._createIceGatherer(sdpMLineIndex,pc.usingBundle));var localCapabilities=window.RTCRtpSender.getCapabilities(kind);edgeVersion<15019&&(localCapabilities.codecs=localCapabilities.codecs.filter(function(codec){return"rtx"!==codec.name})),localCapabilities.codecs.forEach(function(codec){"H264"===codec.name&&void 0===codec.parameters["level-asymmetry-allowed"]&&(codec.parameters["level-asymmetry-allowed"]="1"),transceiver.remoteCapabilities&&transceiver.remoteCapabilities.codecs&&transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec){codec.name.toLowerCase()===remoteCodec.name.toLowerCase()&&codec.clockRate===remoteCodec.clockRate&&(codec.preferredPayloadType=remoteCodec.payloadType)})}),localCapabilities.headerExtensions.forEach(function(hdrExt){(transceiver.remoteCapabilities&&transceiver.remoteCapabilities.headerExtensions||[]).forEach(function(rHdrExt){hdrExt.uri===rHdrExt.uri&&(hdrExt.id=rHdrExt.id)})});var sendEncodingParameters=transceiver.sendEncodingParameters||[{ssrc:1001*(2*sdpMLineIndex+1)}];track&&edgeVersion>=15019&&"video"===kind&&!sendEncodingParameters[0].rtx&&(sendEncodingParameters[0].rtx={ssrc:sendEncodingParameters[0].ssrc+1}),transceiver.wantReceive&&(transceiver.rtpReceiver=new window.RTCRtpReceiver(transceiver.dtlsTransport,kind)),transceiver.localCapabilities=localCapabilities,transceiver.sendEncodingParameters=sendEncodingParameters}),"max-compat"!==pc._config.bundlePolicy&&(sdp+="a=group:BUNDLE "+pc.transceivers.map(function(t){return t.mid}).join(" ")+"\r\n"),sdp+="a=ice-options:trickle\r\n",pc.transceivers.forEach(function(transceiver,sdpMLineIndex){sdp+=writeMediaSection(transceiver,transceiver.localCapabilities,"offer",transceiver.stream,pc._dtlsRole),sdp+="a=rtcp-rsize\r\n",!transceiver.iceGatherer||"new"===pc.iceGatheringState||0!==sdpMLineIndex&&pc.usingBundle||(transceiver.iceGatherer.getLocalCandidates().forEach(function(cand){cand.component=1,sdp+="a="+SDPUtils.writeCandidate(cand)+"\r\n"}),"completed"===transceiver.iceGatherer.state&&(sdp+="a=end-of-candidates\r\n"))});var desc=new window.RTCSessionDescription({type:"offer",sdp:sdp});return Promise.resolve(desc)},RTCPeerConnection.prototype.createAnswer=function(){var pc=this;if(pc._isClosed)return Promise.reject(makeError("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==pc.signalingState&&"have-local-pranswer"!==pc.signalingState)return Promise.reject(makeError("InvalidStateError","Can not call createAnswer in signalingState "+pc.signalingState));var sdp=SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,pc._sdpSessionVersion++);pc.usingBundle&&(sdp+="a=group:BUNDLE "+pc.transceivers.map(function(t){return t.mid}).join(" ")+"\r\n");var mediaSectionsInOffer=SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;pc.transceivers.forEach(function(transceiver,sdpMLineIndex){if(!(sdpMLineIndex+1>mediaSectionsInOffer)){if(transceiver.rejected)return"application"===transceiver.kind?"DTLS/SCTP"===transceiver.protocol?sdp+="m=application 0 DTLS/SCTP 5000\r\n":sdp+="m=application 0 "+transceiver.protocol+" webrtc-datachannel\r\n":"audio"===transceiver.kind?sdp+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===transceiver.kind&&(sdp+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(sdp+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+transceiver.mid+"\r\n");if(transceiver.stream){var localTrack;"audio"===transceiver.kind?localTrack=transceiver.stream.getAudioTracks()[0]:"video"===transceiver.kind&&(localTrack=transceiver.stream.getVideoTracks()[0]),localTrack&&edgeVersion>=15019&&"video"===transceiver.kind&&!transceiver.sendEncodingParameters[0].rtx&&(transceiver.sendEncodingParameters[0].rtx={ssrc:transceiver.sendEncodingParameters[0].ssrc+1})}var commonCapabilities=getCommonCapabilities(transceiver.localCapabilities,transceiver.remoteCapabilities);!commonCapabilities.codecs.filter(function(c){return"rtx"===c.name.toLowerCase()}).length&&transceiver.sendEncodingParameters[0].rtx&&delete transceiver.sendEncodingParameters[0].rtx,sdp+=writeMediaSection(transceiver,commonCapabilities,"answer",transceiver.stream,pc._dtlsRole),transceiver.rtcpParameters&&transceiver.rtcpParameters.reducedSize&&(sdp+="a=rtcp-rsize\r\n")}});var desc=new window.RTCSessionDescription({type:"answer",sdp:sdp});return Promise.resolve(desc)},RTCPeerConnection.prototype.addIceCandidate=function(candidate){var sections,pc=this;return candidate&&void 0===candidate.sdpMLineIndex&&!candidate.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(resolve,reject){if(!pc._remoteDescription)return reject(makeError("InvalidStateError","Can not add ICE candidate without a remote description"));if(candidate&&""!==candidate.candidate){var sdpMLineIndex=candidate.sdpMLineIndex;if(candidate.sdpMid)for(var i=0;i<pc.transceivers.length;i++)if(pc.transceivers[i].mid===candidate.sdpMid){sdpMLineIndex=i;break}var transceiver=pc.transceivers[sdpMLineIndex];if(!transceiver)return reject(makeError("OperationError","Can not add ICE candidate"));if(transceiver.rejected)return resolve();var cand=Object.keys(candidate.candidate).length>0?SDPUtils.parseCandidate(candidate.candidate):{};if("tcp"===cand.protocol&&(0===cand.port||9===cand.port))return resolve();if(cand.component&&1!==cand.component)return resolve();if((0===sdpMLineIndex||sdpMLineIndex>0&&transceiver.iceTransport!==pc.transceivers[0].iceTransport)&&!maybeAddCandidate(transceiver.iceTransport,cand))return reject(makeError("OperationError","Can not add ICE candidate"));var candidateString=candidate.candidate.trim();0===candidateString.indexOf("a=")&&(candidateString=candidateString.substr(2)),sections=SDPUtils.getMediaSections(pc._remoteDescription.sdp),sections[sdpMLineIndex]+="a="+(cand.type?candidateString:"end-of-candidates")+"\r\n",pc._remoteDescription.sdp=SDPUtils.getDescription(pc._remoteDescription.sdp)+sections.join("")}else for(var j=0;j<pc.transceivers.length&&(pc.transceivers[j].rejected||(pc.transceivers[j].iceTransport.addRemoteCandidate({}),sections=SDPUtils.getMediaSections(pc._remoteDescription.sdp),sections[j]+="a=end-of-candidates\r\n",pc._remoteDescription.sdp=SDPUtils.getDescription(pc._remoteDescription.sdp)+sections.join(""),!pc.usingBundle));j++);resolve()})},RTCPeerConnection.prototype.getStats=function(selector){if(selector&&selector instanceof window.MediaStreamTrack){var senderOrReceiver=null;if(this.transceivers.forEach(function(transceiver){transceiver.rtpSender&&transceiver.rtpSender.track===selector?senderOrReceiver=transceiver.rtpSender:transceiver.rtpReceiver&&transceiver.rtpReceiver.track===selector&&(senderOrReceiver=transceiver.rtpReceiver)}),!senderOrReceiver)throw makeError("InvalidAccessError","Invalid selector.");return senderOrReceiver.getStats()}var promises=[];return this.transceivers.forEach(function(transceiver){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(method){transceiver[method]&&promises.push(transceiver[method].getStats())})}),Promise.all(promises).then(function(allStats){var results=new Map;return allStats.forEach(function(stats){stats.forEach(function(stat){results.set(stat.id,stat)})}),results})},["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach(function(ortcObjectName){var obj=window[ortcObjectName];if(obj&&obj.prototype&&obj.prototype.getStats){var nativeGetstats=obj.prototype.getStats;obj.prototype.getStats=function(){return nativeGetstats.apply(this).then(function(nativeStats){var mapStats=new Map;return Object.keys(nativeStats).forEach(function(id){nativeStats[id].type=fixStatsType(nativeStats[id]),mapStats.set(id,nativeStats[id])}),mapStats})}}});var methods=["createOffer","createAnswer"];return methods.forEach(function(method){var nativeMethod=RTCPeerConnection.prototype[method];RTCPeerConnection.prototype[method]=function(){var args=arguments;return"function"==typeof args[0]||"function"==typeof args[1]?nativeMethod.apply(this,[arguments[2]]).then(function(description){"function"==typeof args[0]&&args[0].apply(null,[description])},function(error){"function"==typeof args[1]&&args[1].apply(null,[error])}):nativeMethod.apply(this,arguments)}}),methods=["setLocalDescription","setRemoteDescription","addIceCandidate"],methods.forEach(function(method){var nativeMethod=RTCPeerConnection.prototype[method];RTCPeerConnection.prototype[method]=function(){var args=arguments;return"function"==typeof args[1]||"function"==typeof args[2]?nativeMethod.apply(this,arguments).then(function(){"function"==typeof args[1]&&args[1].apply(null)},function(error){"function"==typeof args[2]&&args[2].apply(null,[error])}):nativeMethod.apply(this,arguments)}}),["getStats"].forEach(function(method){var nativeMethod=RTCPeerConnection.prototype[method];RTCPeerConnection.prototype[method]=function(){var args=arguments;return"function"==typeof args[1]?nativeMethod.apply(this,arguments).then(function(){"function"==typeof args[1]&&args[1].apply(null)}):nativeMethod.apply(this,arguments)}}),RTCPeerConnection}},{sdp:2}],2:[function(requirecopy,module,exports){var SDPUtils={};SDPUtils.generateIdentifier=function(){return Math.random().toString(36).substr(2,10)},SDPUtils.localCName=SDPUtils.generateIdentifier(),SDPUtils.splitLines=function(blob){return blob.trim().split("\n").map(function(line){return line.trim()})},SDPUtils.splitSections=function(blob){return blob.split("\nm=").map(function(part,index){return(index>0?"m="+part:part).trim()+"\r\n"})},SDPUtils.getDescription=function(blob){var sections=SDPUtils.splitSections(blob);return sections&&sections[0]},SDPUtils.getMediaSections=function(blob){var sections=SDPUtils.splitSections(blob);return sections.shift(),sections},SDPUtils.matchPrefix=function(blob,prefix){return SDPUtils.splitLines(blob).filter(function(line){return 0===line.indexOf(prefix)})},SDPUtils.parseCandidate=function(line){var parts;parts=0===line.indexOf("a=candidate:")?line.substring(12).split(" "):line.substring(10).split(" ");for(var candidate={foundation:parts[0],component:parseInt(parts[1],10),protocol:parts[2].toLowerCase(),priority:parseInt(parts[3],10),ip:parts[4],port:parseInt(parts[5],10),type:parts[7]},i=8;i<parts.length;i+=2)switch(parts[i]){case"raddr":candidate.relatedAddress=parts[i+1];break;case"rport":candidate.relatedPort=parseInt(parts[i+1],10);break;case"tcptype":candidate.tcpType=parts[i+1];break;case"ufrag":candidate.ufrag=parts[i+1],candidate.usernameFragment=parts[i+1];break;default:candidate[parts[i]]=parts[i+1]}return candidate},SDPUtils.writeCandidate=function(candidate){var sdp=[];sdp.push(candidate.foundation),sdp.push(candidate.component),sdp.push(candidate.protocol.toUpperCase()),sdp.push(candidate.priority),sdp.push(candidate.ip),sdp.push(candidate.port);var type=candidate.type;return sdp.push("typ"),sdp.push(type),"host"!==type&&candidate.relatedAddress&&candidate.relatedPort&&(sdp.push("raddr"),sdp.push(candidate.relatedAddress),sdp.push("rport"),sdp.push(candidate.relatedPort)),candidate.tcpType&&"tcp"===candidate.protocol.toLowerCase()&&(sdp.push("tcptype"),sdp.push(candidate.tcpType)),(candidate.usernameFragment||candidate.ufrag)&&(sdp.push("ufrag"),sdp.push(candidate.usernameFragment||candidate.ufrag)),"candidate:"+sdp.join(" ")},SDPUtils.parseIceOptions=function(line){return line.substr(14).split(" ")},SDPUtils.parseRtpMap=function(line){var parts=line.substr(9).split(" "),parsed={payloadType:parseInt(parts.shift(),10)};return parts=parts[0].split("/"),parsed.name=parts[0],parsed.clockRate=parseInt(parts[1],10),parsed.channels=3===parts.length?parseInt(parts[2],10):1,parsed.numChannels=parsed.channels,parsed},SDPUtils.writeRtpMap=function(codec){var pt=codec.payloadType;void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType);var channels=codec.channels||codec.numChannels||1;return"a=rtpmap:"+pt+" "+codec.name+"/"+codec.clockRate+(1!==channels?"/"+channels:"")+"\r\n"},SDPUtils.parseExtmap=function(line){var parts=line.substr(9).split(" ");return{id:parseInt(parts[0],10),direction:parts[0].indexOf("/")>0?parts[0].split("/")[1]:"sendrecv",uri:parts[1]}},SDPUtils.writeExtmap=function(headerExtension){return"a=extmap:"+(headerExtension.id||headerExtension.preferredId)+(headerExtension.direction&&"sendrecv"!==headerExtension.direction?"/"+headerExtension.direction:"")+" "+headerExtension.uri+"\r\n"},SDPUtils.parseFmtp=function(line){for(var kv,parsed={},parts=line.substr(line.indexOf(" ")+1).split(";"),j=0;j<parts.length;j++)kv=parts[j].trim().split("="),parsed[kv[0].trim()]=kv[1];return parsed},SDPUtils.writeFmtp=function(codec){var line="",pt=codec.payloadType;if(void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType),codec.parameters&&Object.keys(codec.parameters).length){var params=[];Object.keys(codec.parameters).forEach(function(param){codec.parameters[param]?params.push(param+"="+codec.parameters[param]):params.push(param)}),line+="a=fmtp:"+pt+" "+params.join(";")+"\r\n"}return line},SDPUtils.parseRtcpFb=function(line){var parts=line.substr(line.indexOf(" ")+1).split(" ");return{type:parts.shift(),parameter:parts.join(" ")}},SDPUtils.writeRtcpFb=function(codec){var lines="",pt=codec.payloadType;return void 0!==codec.preferredPayloadType&&(pt=codec.preferredPayloadType),codec.rtcpFeedback&&codec.rtcpFeedback.length&&codec.rtcpFeedback.forEach(function(fb){lines+="a=rtcp-fb:"+pt+" "+fb.type+(fb.parameter&&fb.parameter.length?" "+fb.parameter:"")+"\r\n"}),lines},SDPUtils.parseSsrcMedia=function(line){var sp=line.indexOf(" "),parts={ssrc:parseInt(line.substr(7,sp-7),10)},colon=line.indexOf(":",sp);return colon>-1?(parts.attribute=line.substr(sp+1,colon-sp-1),parts.value=line.substr(colon+1)):parts.attribute=line.substr(sp+1),parts},SDPUtils.parseSsrcGroup=function(line){var parts=line.substr(13).split(" ");return{semantics:parts.shift(),ssrcs:parts.map(function(ssrc){return parseInt(ssrc,10)})}},SDPUtils.getMid=function(mediaSection){var mid=SDPUtils.matchPrefix(mediaSection,"a=mid:")[0];if(mid)return mid.substr(6)},SDPUtils.parseFingerprint=function(line){var parts=line.substr(14).split(" ");return{algorithm:parts[0].toLowerCase(),value:parts[1]}},SDPUtils.getDtlsParameters=function(mediaSection,sessionpart){return{role:"auto",fingerprints:SDPUtils.matchPrefix(mediaSection+sessionpart,"a=fingerprint:").map(SDPUtils.parseFingerprint)}},SDPUtils.writeDtlsParameters=function(params,setupType){var sdp="a=setup:"+setupType+"\r\n";return params.fingerprints.forEach(function(fp){sdp+="a=fingerprint:"+fp.algorithm+" "+fp.value+"\r\n"}),sdp},SDPUtils.getIceParameters=function(mediaSection,sessionpart){var lines=SDPUtils.splitLines(mediaSection);return lines=lines.concat(SDPUtils.splitLines(sessionpart)),{usernameFragment:lines.filter(function(line){return 0===line.indexOf("a=ice-ufrag:")})[0].substr(12),password:lines.filter(function(line){return 0===line.indexOf("a=ice-pwd:")})[0].substr(10)}},SDPUtils.writeIceParameters=function(params){return"a=ice-ufrag:"+params.usernameFragment+"\r\na=ice-pwd:"+params.password+"\r\n"},SDPUtils.parseRtpParameters=function(mediaSection){for(var description={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},lines=SDPUtils.splitLines(mediaSection),mline=lines[0].split(" "),i=3;i<mline.length;i++){var pt=mline[i],rtpmapline=SDPUtils.matchPrefix(mediaSection,"a=rtpmap:"+pt+" ")[0];if(rtpmapline){var codec=SDPUtils.parseRtpMap(rtpmapline),fmtps=SDPUtils.matchPrefix(mediaSection,"a=fmtp:"+pt+" ");switch(codec.parameters=fmtps.length?SDPUtils.parseFmtp(fmtps[0]):{},codec.rtcpFeedback=SDPUtils.matchPrefix(mediaSection,"a=rtcp-fb:"+pt+" ").map(SDPUtils.parseRtcpFb),description.codecs.push(codec),codec.name.toUpperCase()){case"RED":case"ULPFEC":description.fecMechanisms.push(codec.name.toUpperCase())}}}return SDPUtils.matchPrefix(mediaSection,"a=extmap:").forEach(function(line){description.headerExtensions.push(SDPUtils.parseExtmap(line))}),description},SDPUtils.writeRtpDescription=function(kind,caps){var sdp="";sdp+="m="+kind+" ",sdp+=caps.codecs.length>0?"9":"0",sdp+=" UDP/TLS/RTP/SAVPF ",sdp+=caps.codecs.map(function(codec){return void 0!==codec.preferredPayloadType?codec.preferredPayloadType:codec.payloadType}).join(" ")+"\r\n",sdp+="c=IN IP4 0.0.0.0\r\n",sdp+="a=rtcp:9 IN IP4 0.0.0.0\r\n",caps.codecs.forEach(function(codec){sdp+=SDPUtils.writeRtpMap(codec),sdp+=SDPUtils.writeFmtp(codec),sdp+=SDPUtils.writeRtcpFb(codec)});var maxptime=0;return caps.codecs.forEach(function(codec){codec.maxptime>maxptime&&(maxptime=codec.maxptime)}),maxptime>0&&(sdp+="a=maxptime:"+maxptime+"\r\n"),sdp+="a=rtcp-mux\r\n",caps.headerExtensions&&caps.headerExtensions.forEach(function(extension){sdp+=SDPUtils.writeExtmap(extension)}),sdp},SDPUtils.parseRtpEncodingParameters=function(mediaSection){var secondarySsrc,encodingParameters=[],description=SDPUtils.parseRtpParameters(mediaSection),hasRed=-1!==description.fecMechanisms.indexOf("RED"),hasUlpfec=-1!==description.fecMechanisms.indexOf("ULPFEC"),ssrcs=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(parts){return"cname"===parts.attribute}),primarySsrc=ssrcs.length>0&&ssrcs[0].ssrc,flows=SDPUtils.matchPrefix(mediaSection,"a=ssrc-group:FID").map(function(line){return line.substr(17).split(" ").map(function(part){return parseInt(part,10)})});flows.length>0&&flows[0].length>1&&flows[0][0]===primarySsrc&&(secondarySsrc=flows[0][1]),description.codecs.forEach(function(codec){if("RTX"===codec.name.toUpperCase()&&codec.parameters.apt){var encParam={ssrc:primarySsrc,codecPayloadType:parseInt(codec.parameters.apt,10)};primarySsrc&&secondarySsrc&&(encParam.rtx={ssrc:secondarySsrc}),encodingParameters.push(encParam),hasRed&&(encParam=JSON.parse(JSON.stringify(encParam)),encParam.fec={ssrc:secondarySsrc,mechanism:hasUlpfec?"red+ulpfec":"red"},encodingParameters.push(encParam))}}),0===encodingParameters.length&&primarySsrc&&encodingParameters.push({ssrc:primarySsrc});var bandwidth=SDPUtils.matchPrefix(mediaSection,"b=");return bandwidth.length&&(bandwidth=0===bandwidth[0].indexOf("b=TIAS:")?parseInt(bandwidth[0].substr(7),10):0===bandwidth[0].indexOf("b=AS:")?1e3*parseInt(bandwidth[0].substr(5),10)*.95-16e3:void 0,encodingParameters.forEach(function(params){params.maxBitrate=bandwidth})),encodingParameters},SDPUtils.parseRtcpParameters=function(mediaSection){var rtcpParameters={},remoteSsrc=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(obj){return"cname"===obj.attribute})[0];remoteSsrc&&(rtcpParameters.cname=remoteSsrc.value,rtcpParameters.ssrc=remoteSsrc.ssrc);var rsize=SDPUtils.matchPrefix(mediaSection,"a=rtcp-rsize");rtcpParameters.reducedSize=rsize.length>0,rtcpParameters.compound=0===rsize.length;var mux=SDPUtils.matchPrefix(mediaSection,"a=rtcp-mux");return rtcpParameters.mux=mux.length>0,rtcpParameters},SDPUtils.parseMsid=function(mediaSection){var parts,spec=SDPUtils.matchPrefix(mediaSection,"a=msid:");if(1===spec.length)return parts=spec[0].substr(7).split(" "),{stream:parts[0],track:parts[1]};var planB=SDPUtils.matchPrefix(mediaSection,"a=ssrc:").map(function(line){return SDPUtils.parseSsrcMedia(line)}).filter(function(msidParts){return"msid"===msidParts.attribute});return planB.length>0?(parts=planB[0].value.split(" "),{stream:parts[0],track:parts[1]}):void 0},SDPUtils.generateSessionId=function(){return Math.random().toString().substr(2,21)},SDPUtils.writeSessionBoilerplate=function(sessId,sessVer){var version=void 0!==sessVer?sessVer:2;return"v=0\r\no=thisisadapterortc "+(sessId||SDPUtils.generateSessionId())+" "+version+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},SDPUtils.writeMediaSection=function(transceiver,caps,type,stream){var sdp=SDPUtils.writeRtpDescription(transceiver.kind,caps);if(sdp+=SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()),sdp+=SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(),"offer"===type?"actpass":"active"),sdp+="a=mid:"+transceiver.mid+"\r\n",transceiver.direction?sdp+="a="+transceiver.direction+"\r\n":transceiver.rtpSender&&transceiver.rtpReceiver?sdp+="a=sendrecv\r\n":transceiver.rtpSender?sdp+="a=sendonly\r\n":transceiver.rtpReceiver?sdp+="a=recvonly\r\n":sdp+="a=inactive\r\n",transceiver.rtpSender){var msid="msid:"+stream.id+" "+transceiver.rtpSender.track.id+"\r\n";sdp+="a="+msid,
sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" "+msid,transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" "+msid,sdp+="a=ssrc-group:FID "+transceiver.sendEncodingParameters[0].ssrc+" "+transceiver.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].ssrc+" cname:"+SDPUtils.localCName+"\r\n",transceiver.rtpSender&&transceiver.sendEncodingParameters[0].rtx&&(sdp+="a=ssrc:"+transceiver.sendEncodingParameters[0].rtx.ssrc+" cname:"+SDPUtils.localCName+"\r\n"),sdp},SDPUtils.getDirection=function(mediaSection,sessionpart){for(var lines=SDPUtils.splitLines(mediaSection),i=0;i<lines.length;i++)switch(lines[i]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return lines[i].substr(2)}return sessionpart?SDPUtils.getDirection(sessionpart):"sendrecv"},SDPUtils.getKind=function(mediaSection){return SDPUtils.splitLines(mediaSection)[0].split(" ")[0].substr(2)},SDPUtils.isRejected=function(mediaSection){return"0"===mediaSection.split(" ",2)[1]},SDPUtils.parseMLine=function(mediaSection){var lines=SDPUtils.splitLines(mediaSection),parts=lines[0].substr(2).split(" ");return{kind:parts[0],port:parseInt(parts[1],10),protocol:parts[2],fmt:parts.slice(3).join(" ")}},SDPUtils.parseOLine=function(mediaSection){var line=SDPUtils.matchPrefix(mediaSection,"o=")[0],parts=line.substr(2).split(" ");return{username:parts[0],sessionId:parts[1],sessionVersion:parseInt(parts[2],10),netType:parts[3],addressType:parts[4],address:parts[5]}},SDPUtils.isValidSDP=function(blob){if("string"!=typeof blob||0===blob.length)return!1;for(var lines=SDPUtils.splitLines(blob),i=0;i<lines.length;i++)if(lines[i].length<2||"="!==lines[i].charAt(1))return!1;return!0},"object"==typeof module&&(module.exports=SDPUtils)},{}],3:[function(requirecopy,module,exports){(function(global){var adapterFactory=requirecopy("./adapter_factory.js");module.exports=adapterFactory({window:global.window})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./adapter_factory.js":4}],4:[function(requirecopy,module,exports){var utils=requirecopy("./utils");module.exports=function(dependencies,opts){var window=dependencies&&dependencies.window,options={shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0};for(var key in opts)hasOwnProperty.call(opts,key)&&(options[key]=opts[key]);var logging=utils.log,browserDetails=utils.detectBrowser(window),chromeShim=requirecopy("./chrome/chrome_shim")||null,edgeShim=requirecopy("./edge/edge_shim")||null,firefoxShim=requirecopy("./firefox/firefox_shim")||null,safariShim=requirecopy("./safari/safari_shim")||null,commonShim=requirecopy("./common_shim")||null,adapter={browserDetails:browserDetails,commonShim:commonShim,extractVersion:utils.extractVersion,disableLog:utils.disableLog,disableWarnings:utils.disableWarnings};switch(browserDetails.browser){case"chrome":if(!chromeShim||!chromeShim.shimPeerConnection||!options.shimChrome)return logging("Chrome shim is not included in this adapter release."),adapter;logging("adapter.js shimming chrome."),adapter.browserShim=chromeShim,commonShim.shimCreateObjectURL(window),chromeShim.shimGetUserMedia(window),chromeShim.shimMediaStream(window),chromeShim.shimSourceObject(window),chromeShim.shimPeerConnection(window),chromeShim.shimOnTrack(window),chromeShim.shimAddTrackRemoveTrack(window),chromeShim.shimGetSendersWithDtmf(window),chromeShim.shimSenderReceiverGetStats(window),chromeShim.fixNegotiationNeeded(window),commonShim.shimRTCIceCandidate(window),commonShim.shimMaxMessageSize(window),commonShim.shimSendThrowTypeError(window);break;case"firefox":if(!firefoxShim||!firefoxShim.shimPeerConnection||!options.shimFirefox)return logging("Firefox shim is not included in this adapter release."),adapter;logging("adapter.js shimming firefox."),adapter.browserShim=firefoxShim,commonShim.shimCreateObjectURL(window),firefoxShim.shimGetUserMedia(window),firefoxShim.shimSourceObject(window),firefoxShim.shimPeerConnection(window),firefoxShim.shimOnTrack(window),firefoxShim.shimRemoveStream(window),firefoxShim.shimSenderGetStats(window),firefoxShim.shimReceiverGetStats(window),firefoxShim.shimRTCDataChannel(window),commonShim.shimRTCIceCandidate(window),commonShim.shimMaxMessageSize(window),commonShim.shimSendThrowTypeError(window);break;case"edge":if(!edgeShim||!edgeShim.shimPeerConnection||!options.shimEdge)return logging("MS edge shim is not included in this adapter release."),adapter;logging("adapter.js shimming edge."),adapter.browserShim=edgeShim,commonShim.shimCreateObjectURL(window),edgeShim.shimGetUserMedia(window),edgeShim.shimPeerConnection(window),edgeShim.shimReplaceTrack(window),commonShim.shimMaxMessageSize(window),commonShim.shimSendThrowTypeError(window);break;case"safari":if(!safariShim||!options.shimSafari)return logging("Safari shim is not included in this adapter release."),adapter;logging("adapter.js shimming safari."),adapter.browserShim=safariShim,commonShim.shimCreateObjectURL(window),safariShim.shimRTCIceServerUrls(window),safariShim.shimCreateOfferLegacy(window),safariShim.shimCallbacksAPI(window),safariShim.shimLocalStreamsAPI(window),safariShim.shimRemoteStreamsAPI(window),safariShim.shimTrackEventTransceiver(window),safariShim.shimGetUserMedia(window),commonShim.shimRTCIceCandidate(window),commonShim.shimMaxMessageSize(window),commonShim.shimSendThrowTypeError(window);break;default:logging("Unsupported browser!")}return adapter}},{"./chrome/chrome_shim":5,"./common_shim":7,"./edge/edge_shim":8,"./firefox/firefox_shim":11,"./safari/safari_shim":13,"./utils":14}],5:[function(requirecopy,module,exports){function walkStats(stats,base,resultSet){base&&!resultSet.has(base.id)&&(resultSet.set(base.id,base),Object.keys(base).forEach(function(name){name.endsWith("Id")?walkStats(stats,stats.get(base[name]),resultSet):name.endsWith("Ids")&&base[name].forEach(function(id){walkStats(stats,stats.get(id),resultSet)})}))}function filterStats(result,track,outbound){var streamStatsType=outbound?"outbound-rtp":"inbound-rtp",filteredResult=new Map;if(null===track)return filteredResult;var trackStats=[];return result.forEach(function(value){"track"===value.type&&value.trackIdentifier===track.id&&trackStats.push(value)}),trackStats.forEach(function(trackStat){result.forEach(function(stats){stats.type===streamStatsType&&stats.trackId===trackStat.id&&walkStats(result,stats,filteredResult)})}),filteredResult}var utils=requirecopy("../utils.js"),logging=utils.log;module.exports={shimGetUserMedia:requirecopy("./getusermedia"),shimMediaStream:function(window){window.MediaStream=window.MediaStream||window.webkitMediaStream},shimOnTrack:function(window){if("object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype)"RTCRtpTransceiver"in window||utils.wrapPeerConnectionEvent(window,"track",function(e){return e.transceiver||(e.transceiver={receiver:e.receiver}),e});else{Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(f){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=f)},enumerable:!0,configurable:!0});var origSetRemoteDescription=window.RTCPeerConnection.prototype.setRemoteDescription;window.RTCPeerConnection.prototype.setRemoteDescription=function(){var pc=this;return pc._ontrackpoly||(pc._ontrackpoly=function(e){e.stream.addEventListener("addtrack",function(te){var receiver;receiver=window.RTCPeerConnection.prototype.getReceivers?pc.getReceivers().find(function(r){return r.track&&r.track.id===te.track.id}):{track:te.track};var event=new Event("track");event.track=te.track,event.receiver=receiver,event.transceiver={receiver:receiver},event.streams=[e.stream],pc.dispatchEvent(event)}),e.stream.getTracks().forEach(function(track){var receiver;receiver=window.RTCPeerConnection.prototype.getReceivers?pc.getReceivers().find(function(r){return r.track&&r.track.id===track.id}):{track:track};var event=new Event("track");event.track=track,event.receiver=receiver,event.transceiver={receiver:receiver},event.streams=[e.stream],pc.dispatchEvent(event)})},pc.addEventListener("addstream",pc._ontrackpoly)),origSetRemoteDescription.apply(pc,arguments)}}},shimGetSendersWithDtmf:function(window){if("object"==typeof window&&window.RTCPeerConnection&&!("getSenders"in window.RTCPeerConnection.prototype)&&"createDTMFSender"in window.RTCPeerConnection.prototype){var shimSenderWithDtmf=function(pc,track){return{track:track,get dtmf(){return void 0===this._dtmf&&("audio"===track.kind?this._dtmf=pc.createDTMFSender(track):this._dtmf=null),this._dtmf},_pc:pc}};if(!window.RTCPeerConnection.prototype.getSenders){window.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var origAddTrack=window.RTCPeerConnection.prototype.addTrack;window.RTCPeerConnection.prototype.addTrack=function(track,stream){var pc=this,sender=origAddTrack.apply(pc,arguments);return sender||(sender=shimSenderWithDtmf(pc,track),pc._senders.push(sender)),sender};var origRemoveTrack=window.RTCPeerConnection.prototype.removeTrack;window.RTCPeerConnection.prototype.removeTrack=function(sender){var pc=this;origRemoveTrack.apply(pc,arguments);var idx=pc._senders.indexOf(sender);-1!==idx&&pc._senders.splice(idx,1)}}var origAddStream=window.RTCPeerConnection.prototype.addStream;window.RTCPeerConnection.prototype.addStream=function(stream){var pc=this;pc._senders=pc._senders||[],origAddStream.apply(pc,[stream]),stream.getTracks().forEach(function(track){pc._senders.push(shimSenderWithDtmf(pc,track))})};var origRemoveStream=window.RTCPeerConnection.prototype.removeStream;window.RTCPeerConnection.prototype.removeStream=function(stream){var pc=this;pc._senders=pc._senders||[],origRemoveStream.apply(pc,[stream]),stream.getTracks().forEach(function(track){var sender=pc._senders.find(function(s){return s.track===track});sender&&pc._senders.splice(pc._senders.indexOf(sender),1)})}}else if("object"==typeof window&&window.RTCPeerConnection&&"getSenders"in window.RTCPeerConnection.prototype&&"createDTMFSender"in window.RTCPeerConnection.prototype&&window.RTCRtpSender&&!("dtmf"in window.RTCRtpSender.prototype)){var origGetSenders=window.RTCPeerConnection.prototype.getSenders;window.RTCPeerConnection.prototype.getSenders=function(){var pc=this,senders=origGetSenders.apply(pc,[]);return senders.forEach(function(sender){sender._pc=pc}),senders},Object.defineProperty(window.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}},shimSenderReceiverGetStats:function(window){if("object"==typeof window&&window.RTCPeerConnection&&window.RTCRtpSender&&window.RTCRtpReceiver){if(!("getStats"in window.RTCRtpSender.prototype)){var origGetSenders=window.RTCPeerConnection.prototype.getSenders;origGetSenders&&(window.RTCPeerConnection.prototype.getSenders=function(){var pc=this,senders=origGetSenders.apply(pc,[]);return senders.forEach(function(sender){sender._pc=pc}),senders});var origAddTrack=window.RTCPeerConnection.prototype.addTrack;origAddTrack&&(window.RTCPeerConnection.prototype.addTrack=function(){var sender=origAddTrack.apply(this,arguments);return sender._pc=this,sender}),window.RTCRtpSender.prototype.getStats=function(){var sender=this;return this._pc.getStats().then(function(result){return filterStats(result,sender.track,!0)})}}if(!("getStats"in window.RTCRtpReceiver.prototype)){var origGetReceivers=window.RTCPeerConnection.prototype.getReceivers;origGetReceivers&&(window.RTCPeerConnection.prototype.getReceivers=function(){var pc=this,receivers=origGetReceivers.apply(pc,[]);return receivers.forEach(function(receiver){receiver._pc=pc}),receivers}),utils.wrapPeerConnectionEvent(window,"track",function(e){return e.receiver._pc=e.srcElement,e}),window.RTCRtpReceiver.prototype.getStats=function(){var receiver=this;return this._pc.getStats().then(function(result){return filterStats(result,receiver.track,!1)})}}if("getStats"in window.RTCRtpSender.prototype&&"getStats"in window.RTCRtpReceiver.prototype){var origGetStats=window.RTCPeerConnection.prototype.getStats;window.RTCPeerConnection.prototype.getStats=function(){var pc=this;if(arguments.length>0&&arguments[0]instanceof window.MediaStreamTrack){var sender,receiver,err,track=arguments[0];return pc.getSenders().forEach(function(s){s.track===track&&(sender?err=!0:sender=s)}),pc.getReceivers().forEach(function(r){return r.track===track&&(receiver?err=!0:receiver=r),r.track===track}),err||sender&&receiver?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):sender?sender.getStats():receiver?receiver.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return origGetStats.apply(pc,arguments)}}}},shimSourceObject:function(window){var URL=window&&window.URL;"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this._srcObject},set:function(stream){var self=this;if(this._srcObject=stream,this.src&&URL.revokeObjectURL(this.src),!stream)return void(this.src="");this.src=URL.createObjectURL(stream),stream.addEventListener("addtrack",function(){self.src&&URL.revokeObjectURL(self.src),self.src=URL.createObjectURL(stream)}),stream.addEventListener("removetrack",function(){self.src&&URL.revokeObjectURL(self.src),self.src=URL.createObjectURL(stream)})}}))},shimAddTrackRemoveTrackWithNative:function(window){window.RTCPeerConnection.prototype.getLocalStreams=function(){var pc=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(function(streamId){return pc._shimmedLocalStreams[streamId][0]})};var origAddTrack=window.RTCPeerConnection.prototype.addTrack;window.RTCPeerConnection.prototype.addTrack=function(track,stream){if(!stream)return origAddTrack.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};var sender=origAddTrack.apply(this,arguments);return this._shimmedLocalStreams[stream.id]?-1===this._shimmedLocalStreams[stream.id].indexOf(sender)&&this._shimmedLocalStreams[stream.id].push(sender):this._shimmedLocalStreams[stream.id]=[stream,sender],sender};var origAddStream=window.RTCPeerConnection.prototype.addStream;window.RTCPeerConnection.prototype.addStream=function(stream){var pc=this;this._shimmedLocalStreams=this._shimmedLocalStreams||{},stream.getTracks().forEach(function(track){if(pc.getSenders().find(function(s){return s.track===track}))throw new DOMException("Track already exists.","InvalidAccessError")});var existingSenders=pc.getSenders();origAddStream.apply(this,arguments);var newSenders=pc.getSenders().filter(function(newSender){return-1===existingSenders.indexOf(newSender)});this._shimmedLocalStreams[stream.id]=[stream].concat(newSenders)};var origRemoveStream=window.RTCPeerConnection.prototype.removeStream;window.RTCPeerConnection.prototype.removeStream=function(stream){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[stream.id],origRemoveStream.apply(this,arguments)};var origRemoveTrack=window.RTCPeerConnection.prototype.removeTrack;window.RTCPeerConnection.prototype.removeTrack=function(sender){var pc=this;return this._shimmedLocalStreams=this._shimmedLocalStreams||{},sender&&Object.keys(this._shimmedLocalStreams).forEach(function(streamId){var idx=pc._shimmedLocalStreams[streamId].indexOf(sender);-1!==idx&&pc._shimmedLocalStreams[streamId].splice(idx,1),1===pc._shimmedLocalStreams[streamId].length&&delete pc._shimmedLocalStreams[streamId]}),origRemoveTrack.apply(this,arguments)}},shimAddTrackRemoveTrack:function(window){function replaceInternalStreamId(pc,description){var sdp=description.sdp;return Object.keys(pc._reverseStreams||[]).forEach(function(internalId){var externalStream=pc._reverseStreams[internalId],internalStream=pc._streams[externalStream.id];sdp=sdp.replace(new RegExp(internalStream.id,"g"),externalStream.id)}),new RTCSessionDescription({type:description.type,sdp:sdp})}function replaceExternalStreamId(pc,description){var sdp=description.sdp;return Object.keys(pc._reverseStreams||[]).forEach(function(internalId){var externalStream=pc._reverseStreams[internalId],internalStream=pc._streams[externalStream.id];sdp=sdp.replace(new RegExp(externalStream.id,"g"),internalStream.id)}),new RTCSessionDescription({type:description.type,sdp:sdp})}var browserDetails=utils.detectBrowser(window);if(window.RTCPeerConnection.prototype.addTrack&&browserDetails.version>=65)return this.shimAddTrackRemoveTrackWithNative(window);var origGetLocalStreams=window.RTCPeerConnection.prototype.getLocalStreams;window.RTCPeerConnection.prototype.getLocalStreams=function(){var pc=this,nativeStreams=origGetLocalStreams.apply(this);return pc._reverseStreams=pc._reverseStreams||{},nativeStreams.map(function(stream){return pc._reverseStreams[stream.id]})};var origAddStream=window.RTCPeerConnection.prototype.addStream;window.RTCPeerConnection.prototype.addStream=function(stream){var pc=this;if(pc._streams=pc._streams||{},pc._reverseStreams=pc._reverseStreams||{},stream.getTracks().forEach(function(track){if(pc.getSenders().find(function(s){return s.track===track}))throw new DOMException("Track already exists.","InvalidAccessError")}),!pc._reverseStreams[stream.id]){var newStream=new window.MediaStream(stream.getTracks());pc._streams[stream.id]=newStream,pc._reverseStreams[newStream.id]=stream,stream=newStream}origAddStream.apply(pc,[stream])};var origRemoveStream=window.RTCPeerConnection.prototype.removeStream;window.RTCPeerConnection.prototype.removeStream=function(stream){var pc=this;pc._streams=pc._streams||{},pc._reverseStreams=pc._reverseStreams||{},origRemoveStream.apply(pc,[pc._streams[stream.id]||stream]),delete pc._reverseStreams[pc._streams[stream.id]?pc._streams[stream.id].id:stream.id],delete pc._streams[stream.id]},window.RTCPeerConnection.prototype.addTrack=function(track,stream){var pc=this;if("closed"===pc.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var streams=[].slice.call(arguments,1);if(1!==streams.length||!streams[0].getTracks().find(function(t){return t===track}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(pc.getSenders().find(function(s){return s.track===track}))throw new DOMException("Track already exists.","InvalidAccessError");pc._streams=pc._streams||{},pc._reverseStreams=pc._reverseStreams||{};var oldStream=pc._streams[stream.id];if(oldStream)oldStream.addTrack(track),Promise.resolve().then(function(){pc.dispatchEvent(new Event("negotiationneeded"))});else{var newStream=new window.MediaStream([track]);pc._streams[stream.id]=newStream,pc._reverseStreams[newStream.id]=stream,pc.addStream(newStream)}return pc.getSenders().find(function(s){return s.track===track})},["createOffer","createAnswer"].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){var pc=this,args=arguments;return arguments.length&&"function"==typeof arguments[0]?nativeMethod.apply(pc,[function(description){var desc=replaceInternalStreamId(pc,description);args[0].apply(null,[desc])},function(err){args[1]&&args[1].apply(null,err)},arguments[2]]):nativeMethod.apply(pc,arguments).then(function(description){return replaceInternalStreamId(pc,description)})}});var origSetLocalDescription=window.RTCPeerConnection.prototype.setLocalDescription;window.RTCPeerConnection.prototype.setLocalDescription=function(){var pc=this;return arguments.length&&arguments[0].type?(arguments[0]=replaceExternalStreamId(pc,arguments[0]),origSetLocalDescription.apply(pc,arguments)):origSetLocalDescription.apply(pc,arguments)};var origLocalDescription=Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(window.RTCPeerConnection.prototype,"localDescription",{get:function(){var pc=this,description=origLocalDescription.get.apply(this);return""===description.type?description:replaceInternalStreamId(pc,description)}}),window.RTCPeerConnection.prototype.removeTrack=function(sender){var pc=this;if("closed"===pc.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!sender._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(sender._pc!==pc)throw new DOMException("Sender was not created by this connection.","InvalidAccessError");pc._streams=pc._streams||{};var stream;Object.keys(pc._streams).forEach(function(streamid){pc._streams[streamid].getTracks().find(function(track){return sender.track===track})&&(stream=pc._streams[streamid])}),stream&&(1===stream.getTracks().length?pc.removeStream(pc._reverseStreams[stream.id]):stream.removeTrack(sender.track),pc.dispatchEvent(new Event("negotiationneeded")))}},shimPeerConnection:function(window){var browserDetails=utils.detectBrowser(window);if(!window.RTCPeerConnection&&window.webkitRTCPeerConnection)window.RTCPeerConnection=function(pcConfig,pcConstraints){return logging("PeerConnection"),pcConfig&&pcConfig.iceTransportPolicy&&(pcConfig.iceTransports=pcConfig.iceTransportPolicy),new window.webkitRTCPeerConnection(pcConfig,pcConstraints)},window.RTCPeerConnection.prototype=window.webkitRTCPeerConnection.prototype,window.webkitRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return window.webkitRTCPeerConnection.generateCertificate}});else{var OrigPeerConnection=window.RTCPeerConnection;window.RTCPeerConnection=function(pcConfig,pcConstraints){if(pcConfig&&pcConfig.iceServers){for(var newIceServers=[],i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];!server.hasOwnProperty("urls")&&server.hasOwnProperty("url")?(utils.deprecated("RTCIceServer.url","RTCIceServer.urls"),server=JSON.parse(JSON.stringify(server)),server.urls=server.url,newIceServers.push(server)):newIceServers.push(pcConfig.iceServers[i])}pcConfig.iceServers=newIceServers}return new OrigPeerConnection(pcConfig,pcConstraints)},window.RTCPeerConnection.prototype=OrigPeerConnection.prototype,Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return OrigPeerConnection.generateCertificate}})}var origGetStats=window.RTCPeerConnection.prototype.getStats;window.RTCPeerConnection.prototype.getStats=function(selector,successCallback,errorCallback){var pc=this,args=arguments;if(arguments.length>0&&"function"==typeof selector)return origGetStats.apply(this,arguments);if(0===origGetStats.length&&(0===arguments.length||"function"!=typeof arguments[0]))return origGetStats.apply(this,[]);var fixChromeStats_=function(response){var standardReport={};return response.result().forEach(function(report){var standardStats={id:report.id,timestamp:report.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[report.type]||report.type};report.names().forEach(function(name){standardStats[name]=report.stat(name)}),standardReport[standardStats.id]=standardStats}),standardReport},makeMapStats=function(stats){return new Map(Object.keys(stats).map(function(key){return[key,stats[key]]}))};if(arguments.length>=2){var successCallbackWrapper_=function(response){args[1](makeMapStats(fixChromeStats_(response)))};return origGetStats.apply(this,[successCallbackWrapper_,arguments[0]])}return new Promise(function(resolve,reject){origGetStats.apply(pc,[function(response){resolve(makeMapStats(fixChromeStats_(response)))},reject])}).then(successCallback,errorCallback)},browserDetails.version<51&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){var args=arguments,pc=this,promise=new Promise(function(resolve,reject){nativeMethod.apply(pc,[args[0],resolve,reject])});return args.length<2?promise:promise.then(function(){args[1].apply(null,[])},function(err){args.length>=3&&args[2].apply(null,[err])})}}),browserDetails.version<52&&["createOffer","createAnswer"].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){var pc=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var opts=1===arguments.length?arguments[0]:void 0;return new Promise(function(resolve,reject){nativeMethod.apply(pc,[resolve,reject,opts])})}return nativeMethod.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){return arguments[0]=new("addIceCandidate"===method?window.RTCIceCandidate:window.RTCSessionDescription)(arguments[0]),nativeMethod.apply(this,arguments)}});var nativeAddIceCandidate=window.RTCPeerConnection.prototype.addIceCandidate;window.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?nativeAddIceCandidate.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}},fixNegotiationNeeded:function(window){utils.wrapPeerConnectionEvent(window,"negotiationneeded",function(e){if("stable"===e.target.signalingState)return e})},shimGetDisplayMedia:function(window,getSourceId){"getDisplayMedia"in window.navigator||"function"==typeof getSourceId&&(navigator.getDisplayMedia=function(constraints){return getSourceId(constraints).then(function(sourceId){return constraints.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:sourceId,maxFrameRate:constraints.video.frameRate||3}},navigator.mediaDevices.getUserMedia(constraints)})})}}},{"../utils.js":14,"./getusermedia":6}],6:[function(requirecopy,module,exports){var utils=requirecopy("../utils.js"),logging=utils.log;module.exports=function(window){var browserDetails=utils.detectBrowser(window),navigator=window&&window.navigator,constraintsToChrome_=function(c){if("object"!=typeof c||c.mandatory||c.optional)return c;var cc={};return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key&&"mediaSource"!==key){var r="object"==typeof c[key]?c[key]:{ideal:c[key]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var oldname_=function(prefix,name){return prefix?prefix+name.charAt(0).toUpperCase()+name.slice(1):"deviceId"===name?"sourceId":name};if(void 0!==r.ideal){cc.optional=cc.optional||[];var oc={};"number"==typeof r.ideal?(oc[oldname_("min",key)]=r.ideal,cc.optional.push(oc),oc={},oc[oldname_("max",key)]=r.ideal,cc.optional.push(oc)):(oc[oldname_("",key)]=r.ideal,cc.optional.push(oc))}void 0!==r.exact&&"number"!=typeof r.exact?(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname_("",key)]=r.exact):["min","max"].forEach(function(mix){void 0!==r[mix]&&(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname_(mix,key)]=r[mix])})}}),c.advanced&&(cc.optional=(cc.optional||[]).concat(c.advanced)),cc},shimConstraints_=function(constraints,func){if(browserDetails.version>=61)return func(constraints);if((constraints=JSON.parse(JSON.stringify(constraints)))&&"object"==typeof constraints.audio){var remap=function(obj,a,b){a in obj&&!(b in obj)&&(obj[b]=obj[a],delete obj[a])};constraints=JSON.parse(JSON.stringify(constraints)),remap(constraints.audio,"autoGainControl","googAutoGainControl"),remap(constraints.audio,"noiseSuppression","googNoiseSuppression"),constraints.audio=constraintsToChrome_(constraints.audio)}if(constraints&&"object"==typeof constraints.video){var face=constraints.video.facingMode;face=face&&("object"==typeof face?face:{ideal:face});var getSupportedFacingModeLies=browserDetails.version<66;if(face&&("user"===face.exact||"environment"===face.exact||"user"===face.ideal||"environment"===face.ideal)&&(!navigator.mediaDevices.getSupportedConstraints||!navigator.mediaDevices.getSupportedConstraints().facingMode||getSupportedFacingModeLies)){delete constraints.video.facingMode;var matches;if("environment"===face.exact||"environment"===face.ideal?matches=["back","rear"]:"user"!==face.exact&&"user"!==face.ideal||(matches=["front"]),matches)return navigator.mediaDevices.enumerateDevices().then(function(devices){devices=devices.filter(function(d){return"videoinput"===d.kind});var dev=devices.find(function(d){return matches.some(function(match){return-1!==d.label.toLowerCase().indexOf(match)})});return!dev&&devices.length&&-1!==matches.indexOf("back")&&(dev=devices[devices.length-1]),dev&&(constraints.video.deviceId=face.exact?{exact:dev.deviceId}:{ideal:dev.deviceId}),constraints.video=constraintsToChrome_(constraints.video),logging("chrome: "+JSON.stringify(constraints)),func(constraints)})}constraints.video=constraintsToChrome_(constraints.video)}return logging("chrome: "+JSON.stringify(constraints)),func(constraints)},shimError_=function(e){return browserDetails.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},getUserMedia_=function(constraints,onSuccess,onError){shimConstraints_(constraints,function(c){navigator.webkitGetUserMedia(c,onSuccess,function(e){onError&&onError(shimError_(e))})})};navigator.getUserMedia=getUserMedia_;var getUserMediaPromise_=function(constraints){return new Promise(function(resolve,reject){navigator.getUserMedia(constraints,resolve,reject)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:getUserMediaPromise_,enumerateDevices:function(){return new Promise(function(resolve){var kinds={audio:"audioinput",video:"videoinput"};return window.MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],deviceId:device.id,groupId:""}}))})})},getSupportedConstraints:function(){return{deviceId:!0,echoCancellation:!0,facingMode:!0,frameRate:!0,height:!0,width:!0}}}),navigator.mediaDevices.getUserMedia){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(cs){return shimConstraints_(cs,function(c){return origGetUserMedia(c).then(function(stream){if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length)throw stream.getTracks().forEach(function(track){track.stop()}),new DOMException("","NotFoundError");return stream},function(e){return Promise.reject(shimError_(e))})})}}else navigator.mediaDevices.getUserMedia=function(constraints){return getUserMediaPromise_(constraints)};void 0===navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){logging("Dummy mediaDevices.addEventListener called.")}),void 0===navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){logging("Dummy mediaDevices.removeEventListener called.")})}},{"../utils.js":14}],7:[function(requirecopy,module,exports){var SDPUtils=requirecopy("sdp"),utils=requirecopy("./utils")
;module.exports={shimRTCIceCandidate:function(window){if(window.RTCIceCandidate&&!(window.RTCIceCandidate&&"foundation"in window.RTCIceCandidate.prototype)){var NativeRTCIceCandidate=window.RTCIceCandidate;window.RTCIceCandidate=function(args){if("object"==typeof args&&args.candidate&&0===args.candidate.indexOf("a=")&&(args=JSON.parse(JSON.stringify(args)),args.candidate=args.candidate.substr(2)),args.candidate&&args.candidate.length){var nativeCandidate=new NativeRTCIceCandidate(args),parsedCandidate=SDPUtils.parseCandidate(args.candidate),augmentedCandidate=Object.assign(nativeCandidate,parsedCandidate);return augmentedCandidate.toJSON=function(){return{candidate:augmentedCandidate.candidate,sdpMid:augmentedCandidate.sdpMid,sdpMLineIndex:augmentedCandidate.sdpMLineIndex,usernameFragment:augmentedCandidate.usernameFragment}},augmentedCandidate}return new NativeRTCIceCandidate(args)},window.RTCIceCandidate.prototype=NativeRTCIceCandidate.prototype,utils.wrapPeerConnectionEvent(window,"icecandidate",function(e){return e.candidate&&Object.defineProperty(e,"candidate",{value:new window.RTCIceCandidate(e.candidate),writable:"false"}),e})}},shimCreateObjectURL:function(window){var URL=window&&window.URL;if("object"==typeof window&&window.HTMLMediaElement&&"srcObject"in window.HTMLMediaElement.prototype&&URL.createObjectURL&&URL.revokeObjectURL){var nativeCreateObjectURL=URL.createObjectURL.bind(URL),nativeRevokeObjectURL=URL.revokeObjectURL.bind(URL),streams=new Map,newId=0;URL.createObjectURL=function(stream){if("getTracks"in stream){var url="polyblob:"+ ++newId;return streams.set(url,stream),utils.deprecated("URL.createObjectURL(stream)","elem.srcObject = stream"),url}return nativeCreateObjectURL(stream)},URL.revokeObjectURL=function(url){nativeRevokeObjectURL(url),streams.delete(url)};var dsc=Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,"src");Object.defineProperty(window.HTMLMediaElement.prototype,"src",{get:function(){return dsc.get.apply(this)},set:function(url){return this.srcObject=streams.get(url)||null,dsc.set.apply(this,[url])}});var nativeSetAttribute=window.HTMLMediaElement.prototype.setAttribute;window.HTMLMediaElement.prototype.setAttribute=function(){return 2===arguments.length&&"src"===(""+arguments[0]).toLowerCase()&&(this.srcObject=streams.get(arguments[1])||null),nativeSetAttribute.apply(this,arguments)}}},shimMaxMessageSize:function(window){if(!window.RTCSctpTransport&&window.RTCPeerConnection){var browserDetails=utils.detectBrowser(window);"sctp"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}});var sctpInDescription=function(description){var sections=SDPUtils.splitSections(description.sdp);return sections.shift(),sections.some(function(mediaSection){var mLine=SDPUtils.parseMLine(mediaSection);return mLine&&"application"===mLine.kind&&-1!==mLine.protocol.indexOf("SCTP")})},getRemoteFirefoxVersion=function(description){var match=description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(null===match||match.length<2)return-1;var version=parseInt(match[1],10);return version!==version?-1:version},getCanSendMaxMessageSize=function(remoteIsFirefox){var canSendMaxMessageSize=65536;return"firefox"===browserDetails.browser&&(canSendMaxMessageSize=browserDetails.version<57?-1===remoteIsFirefox?16384:2147483637:browserDetails.version<60?57===browserDetails.version?65535:65536:2147483637),canSendMaxMessageSize},getMaxMessageSize=function(description,remoteIsFirefox){var maxMessageSize=65536;"firefox"===browserDetails.browser&&57===browserDetails.version&&(maxMessageSize=65535);var match=SDPUtils.matchPrefix(description.sdp,"a=max-message-size:");return match.length>0?maxMessageSize=parseInt(match[0].substr(19),10):"firefox"===browserDetails.browser&&-1!==remoteIsFirefox&&(maxMessageSize=2147483637),maxMessageSize},origSetRemoteDescription=window.RTCPeerConnection.prototype.setRemoteDescription;window.RTCPeerConnection.prototype.setRemoteDescription=function(){var pc=this;if(pc._sctp=null,sctpInDescription(arguments[0])){var maxMessageSize,isFirefox=getRemoteFirefoxVersion(arguments[0]),canSendMMS=getCanSendMaxMessageSize(isFirefox),remoteMMS=getMaxMessageSize(arguments[0],isFirefox);maxMessageSize=0===canSendMMS&&0===remoteMMS?Number.POSITIVE_INFINITY:0===canSendMMS||0===remoteMMS?Math.max(canSendMMS,remoteMMS):Math.min(canSendMMS,remoteMMS);var sctp={};Object.defineProperty(sctp,"maxMessageSize",{get:function(){return maxMessageSize}}),pc._sctp=sctp}return origSetRemoteDescription.apply(pc,arguments)}}},shimSendThrowTypeError:function(window){function wrapDcSend(dc,pc){var origDataChannelSend=dc.send;dc.send=function(){var data=arguments[0],length=data.length||data.size||data.byteLength;if("open"===dc.readyState&&pc.sctp&&length>pc.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+pc.sctp.maxMessageSize+" bytes)");return origDataChannelSend.apply(dc,arguments)}}if(window.RTCPeerConnection&&"createDataChannel"in window.RTCPeerConnection.prototype){var origCreateDataChannel=window.RTCPeerConnection.prototype.createDataChannel;window.RTCPeerConnection.prototype.createDataChannel=function(){var pc=this,dataChannel=origCreateDataChannel.apply(pc,arguments);return wrapDcSend(dataChannel,pc),dataChannel},utils.wrapPeerConnectionEvent(window,"datachannel",function(e){return wrapDcSend(e.channel,e.target),e})}}}},{"./utils":14,sdp:2}],8:[function(requirecopy,module,exports){var utils=requirecopy("../utils"),filterIceServers=requirecopy("./filtericeservers"),shimRTCPeerConnection=requirecopy("rtcpeerconnection-shim");module.exports={shimGetUserMedia:requirecopy("./getusermedia"),shimPeerConnection:function(window){var browserDetails=utils.detectBrowser(window);if(window.RTCIceGatherer&&(window.RTCIceCandidate||(window.RTCIceCandidate=function(args){return args}),window.RTCSessionDescription||(window.RTCSessionDescription=function(args){return args}),browserDetails.version<15025)){var origMSTEnabled=Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype,"enabled");Object.defineProperty(window.MediaStreamTrack.prototype,"enabled",{set:function(value){origMSTEnabled.set.call(this,value);var ev=new Event("enabled");ev.enabled=value,this.dispatchEvent(ev)}})}!window.RTCRtpSender||"dtmf"in window.RTCRtpSender.prototype||Object.defineProperty(window.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new window.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),window.RTCDtmfSender&&!window.RTCDTMFSender&&(window.RTCDTMFSender=window.RTCDtmfSender);var RTCPeerConnectionShim=shimRTCPeerConnection(window,browserDetails.version);window.RTCPeerConnection=function(config){return config&&config.iceServers&&(config.iceServers=filterIceServers(config.iceServers)),new RTCPeerConnectionShim(config)},window.RTCPeerConnection.prototype=RTCPeerConnectionShim.prototype},shimReplaceTrack:function(window){!window.RTCRtpSender||"replaceTrack"in window.RTCRtpSender.prototype||(window.RTCRtpSender.prototype.replaceTrack=window.RTCRtpSender.prototype.setTrack)}}},{"../utils":14,"./filtericeservers":9,"./getusermedia":10,"rtcpeerconnection-shim":1}],9:[function(requirecopy,module,exports){var utils=requirecopy("../utils");module.exports=function(iceServers,edgeVersion){var hasTurn=!1;return iceServers=JSON.parse(JSON.stringify(iceServers)),iceServers.filter(function(server){if(server&&(server.urls||server.url)){var urls=server.urls||server.url;server.url&&!server.urls&&utils.deprecated("RTCIceServer.url","RTCIceServer.urls");var isString="string"==typeof urls;return isString&&(urls=[urls]),urls=urls.filter(function(url){return 0!==url.indexOf("turn:")||-1===url.indexOf("transport=udp")||-1!==url.indexOf("turn:[")||hasTurn?0===url.indexOf("stun:")&&edgeVersion>=14393&&-1===url.indexOf("?transport=udp"):(hasTurn=!0,!0)}),delete server.url,server.urls=isString?urls[0]:urls,!!urls.length}})}},{"../utils":14}],10:[function(requirecopy,module,exports){module.exports=function(window){var navigator=window&&window.navigator,shimError_=function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}},origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).catch(function(e){return Promise.reject(shimError_(e))})}}},{}],11:[function(requirecopy,module,exports){var utils=requirecopy("../utils");module.exports={shimGetUserMedia:requirecopy("./getusermedia"),shimOnTrack:function(window){"object"!=typeof window||!window.RTCPeerConnection||"ontrack"in window.RTCPeerConnection.prototype||Object.defineProperty(window.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(f){this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=f),this.addEventListener("addstream",this._ontrackpoly=function(e){e.stream.getTracks().forEach(function(track){var event=new Event("track");event.track=track,event.receiver={track:track},event.transceiver={receiver:event.receiver},event.streams=[e.stream],this.dispatchEvent(event)}.bind(this))}.bind(this))},enumerable:!0,configurable:!0}),"object"==typeof window&&window.RTCTrackEvent&&"receiver"in window.RTCTrackEvent.prototype&&!("transceiver"in window.RTCTrackEvent.prototype)&&Object.defineProperty(window.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},shimSourceObject:function(window){"object"==typeof window&&(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype||Object.defineProperty(window.HTMLMediaElement.prototype,"srcObject",{get:function(){return this.mozSrcObject},set:function(stream){this.mozSrcObject=stream}}))},shimPeerConnection:function(window){var browserDetails=utils.detectBrowser(window);if("object"==typeof window&&(window.RTCPeerConnection||window.mozRTCPeerConnection)){window.RTCPeerConnection||(window.RTCPeerConnection=function(pcConfig,pcConstraints){if(browserDetails.version<38&&pcConfig&&pcConfig.iceServers){for(var newIceServers=[],i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];if(server.hasOwnProperty("urls"))for(var j=0;j<server.urls.length;j++){var newServer={url:server.urls[j]};0===server.urls[j].indexOf("turn")&&(newServer.username=server.username,newServer.credential=server.credential),newIceServers.push(newServer)}else newIceServers.push(pcConfig.iceServers[i])}pcConfig.iceServers=newIceServers}return new window.mozRTCPeerConnection(pcConfig,pcConstraints)},window.RTCPeerConnection.prototype=window.mozRTCPeerConnection.prototype,window.mozRTCPeerConnection.generateCertificate&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return window.mozRTCPeerConnection.generateCertificate}}),window.RTCSessionDescription=window.mozRTCSessionDescription,window.RTCIceCandidate=window.mozRTCIceCandidate),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(method){var nativeMethod=window.RTCPeerConnection.prototype[method];window.RTCPeerConnection.prototype[method]=function(){return arguments[0]=new("addIceCandidate"===method?window.RTCIceCandidate:window.RTCSessionDescription)(arguments[0]),nativeMethod.apply(this,arguments)}});var nativeAddIceCandidate=window.RTCPeerConnection.prototype.addIceCandidate;window.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?nativeAddIceCandidate.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())};var makeMapStats=function(stats){var map=new Map;return Object.keys(stats).forEach(function(key){map.set(key,stats[key]),map[key]=stats[key]}),map},modernStatsTypes={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},nativeGetStats=window.RTCPeerConnection.prototype.getStats;window.RTCPeerConnection.prototype.getStats=function(selector,onSucc,onErr){return nativeGetStats.apply(this,[selector||null]).then(function(stats){if(browserDetails.version<48&&(stats=makeMapStats(stats)),browserDetails.version<53&&!onSucc)try{stats.forEach(function(stat){stat.type=modernStatsTypes[stat.type]||stat.type})}catch(e){if("TypeError"!==e.name)throw e;stats.forEach(function(stat,i){stats.set(i,Object.assign({},stat,{type:modernStatsTypes[stat.type]||stat.type}))})}return stats}).then(onSucc,onErr)}}},shimSenderGetStats:function(window){if("object"==typeof window&&window.RTCPeerConnection&&window.RTCRtpSender&&!(window.RTCRtpSender&&"getStats"in window.RTCRtpSender.prototype)){var origGetSenders=window.RTCPeerConnection.prototype.getSenders;origGetSenders&&(window.RTCPeerConnection.prototype.getSenders=function(){var pc=this,senders=origGetSenders.apply(pc,[]);return senders.forEach(function(sender){sender._pc=pc}),senders});var origAddTrack=window.RTCPeerConnection.prototype.addTrack;origAddTrack&&(window.RTCPeerConnection.prototype.addTrack=function(){var sender=origAddTrack.apply(this,arguments);return sender._pc=this,sender}),window.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}},shimReceiverGetStats:function(window){if("object"==typeof window&&window.RTCPeerConnection&&window.RTCRtpSender&&!(window.RTCRtpSender&&"getStats"in window.RTCRtpReceiver.prototype)){var origGetReceivers=window.RTCPeerConnection.prototype.getReceivers;origGetReceivers&&(window.RTCPeerConnection.prototype.getReceivers=function(){var pc=this,receivers=origGetReceivers.apply(pc,[]);return receivers.forEach(function(receiver){receiver._pc=pc}),receivers}),utils.wrapPeerConnectionEvent(window,"track",function(e){return e.receiver._pc=e.srcElement,e}),window.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}},shimRemoveStream:function(window){!window.RTCPeerConnection||"removeStream"in window.RTCPeerConnection.prototype||(window.RTCPeerConnection.prototype.removeStream=function(stream){var pc=this;utils.deprecated("removeStream","removeTrack"),this.getSenders().forEach(function(sender){sender.track&&-1!==stream.getTracks().indexOf(sender.track)&&pc.removeTrack(sender)})})},shimRTCDataChannel:function(window){window.DataChannel&&!window.RTCDataChannel&&(window.RTCDataChannel=window.DataChannel)},shimGetDisplayMedia:function(window,preferredMediaSource){"getDisplayMedia"in window.navigator||(navigator.getDisplayMedia=function(constraints){if(!constraints||!constraints.video){var err=new DOMException("getDisplayMedia without video constraints is undefined");return err.name="NotFoundError",err.code=8,Promise.reject(err)}return!0===constraints.video?constraints.video={mediaSource:preferredMediaSource}:constraints.video.mediaSource=preferredMediaSource,navigator.mediaDevices.getUserMedia(constraints)})}}},{"../utils":14,"./getusermedia":12}],12:[function(requirecopy,module,exports){var utils=requirecopy("../utils"),logging=utils.log;module.exports=function(window){var browserDetails=utils.detectBrowser(window),navigator=window&&window.navigator,MediaStreamTrack=window&&window.MediaStreamTrack,shimError_=function(e){return{name:{InternalError:"NotReadableError",NotSupportedError:"TypeError",PermissionDeniedError:"NotAllowedError",SecurityError:"NotAllowedError"}[e.name]||e.name,message:{"The operation is insecure.":"The request is not allowed by the user agent or the platform in the current context."}[e.message]||e.message,constraint:e.constraint,toString:function(){return this.name+(this.message&&": ")+this.message}}},getUserMedia_=function(constraints,onSuccess,onError){var constraintsToFF37_=function(c){if("object"!=typeof c||c.require)return c;var require=[];return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key&&"mediaSource"!==key){var r=c[key]="object"==typeof c[key]?c[key]:{ideal:c[key]};if(void 0===r.min&&void 0===r.max&&void 0===r.exact||require.push(key),void 0!==r.exact&&("number"==typeof r.exact?r.min=r.max=r.exact:c[key]=r.exact,delete r.exact),void 0!==r.ideal){c.advanced=c.advanced||[];var oc={};"number"==typeof r.ideal?oc[key]={min:r.ideal,max:r.ideal}:oc[key]=r.ideal,c.advanced.push(oc),delete r.ideal,Object.keys(r).length||delete c[key]}}}),require.length&&(c.require=require),c};return constraints=JSON.parse(JSON.stringify(constraints)),browserDetails.version<38&&(logging("spec: "+JSON.stringify(constraints)),constraints.audio&&(constraints.audio=constraintsToFF37_(constraints.audio)),constraints.video&&(constraints.video=constraintsToFF37_(constraints.video)),logging("ff37: "+JSON.stringify(constraints))),navigator.mozGetUserMedia(constraints,onSuccess,function(e){onError(shimError_(e))})},getUserMediaPromise_=function(constraints){return new Promise(function(resolve,reject){getUserMedia_(constraints,resolve,reject)})};if(navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:getUserMediaPromise_,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(resolve){resolve([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},browserDetails.version<41){var orgEnumerateDevices=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return orgEnumerateDevices().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}if(browserDetails.version<49){var origGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(c){return origGetUserMedia(c).then(function(stream){if(c.audio&&!stream.getAudioTracks().length||c.video&&!stream.getVideoTracks().length)throw stream.getTracks().forEach(function(track){track.stop()}),new DOMException("The object can not be found here.","NotFoundError");return stream},function(e){return Promise.reject(shimError_(e))})}}if(!(browserDetails.version>55&&"autoGainControl"in navigator.mediaDevices.getSupportedConstraints())){var remap=function(obj,a,b){a in obj&&!(b in obj)&&(obj[b]=obj[a],delete obj[a])},nativeGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);if(navigator.mediaDevices.getUserMedia=function(c){return"object"==typeof c&&"object"==typeof c.audio&&(c=JSON.parse(JSON.stringify(c)),remap(c.audio,"autoGainControl","mozAutoGainControl"),remap(c.audio,"noiseSuppression","mozNoiseSuppression")),nativeGetUserMedia(c)},MediaStreamTrack&&MediaStreamTrack.prototype.getSettings){var nativeGetSettings=MediaStreamTrack.prototype.getSettings;MediaStreamTrack.prototype.getSettings=function(){var obj=nativeGetSettings.apply(this,arguments);return remap(obj,"mozAutoGainControl","autoGainControl"),remap(obj,"mozNoiseSuppression","noiseSuppression"),obj}}if(MediaStreamTrack&&MediaStreamTrack.prototype.applyConstraints){var nativeApplyConstraints=MediaStreamTrack.prototype.applyConstraints;MediaStreamTrack.prototype.applyConstraints=function(c){return"audio"===this.kind&&"object"==typeof c&&(c=JSON.parse(JSON.stringify(c)),remap(c,"autoGainControl","mozAutoGainControl"),remap(c,"noiseSuppression","mozNoiseSuppression")),nativeApplyConstraints.apply(this,[c])}}}navigator.getUserMedia=function(constraints,onSuccess,onError){if(browserDetails.version<44)return getUserMedia_(constraints,onSuccess,onError);utils.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),navigator.mediaDevices.getUserMedia(constraints).then(onSuccess,onError)}}},{"../utils":14}],13:[function(requirecopy,module,exports){var utils=requirecopy("../utils");module.exports={shimLocalStreamsAPI:function(window){if("object"==typeof window&&window.RTCPeerConnection){if("getLocalStreams"in window.RTCPeerConnection.prototype||(window.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),"getStreamById"in window.RTCPeerConnection.prototype||(window.RTCPeerConnection.prototype.getStreamById=function(id){var result=null;return this._localStreams&&this._localStreams.forEach(function(stream){stream.id===id&&(result=stream)}),this._remoteStreams&&this._remoteStreams.forEach(function(stream){stream.id===id&&(result=stream)}),result}),!("addStream"in window.RTCPeerConnection.prototype)){var _addTrack=window.RTCPeerConnection.prototype.addTrack;window.RTCPeerConnection.prototype.addStream=function(stream){this._localStreams||(this._localStreams=[]),-1===this._localStreams.indexOf(stream)&&this._localStreams.push(stream);var pc=this;stream.getTracks().forEach(function(track){_addTrack.call(pc,track,stream)})},window.RTCPeerConnection.prototype.addTrack=function(track,stream){return stream&&(this._localStreams?-1===this._localStreams.indexOf(stream)&&this._localStreams.push(stream):this._localStreams=[stream]),_addTrack.call(this,track,stream)}}"removeStream"in window.RTCPeerConnection.prototype||(window.RTCPeerConnection.prototype.removeStream=function(stream){this._localStreams||(this._localStreams=[]);var index=this._localStreams.indexOf(stream);if(-1!==index){this._localStreams.splice(index,1);var pc=this,tracks=stream.getTracks();this.getSenders().forEach(function(sender){-1!==tracks.indexOf(sender.track)&&pc.removeTrack(sender)})}})}},shimRemoteStreamsAPI:function(window){if("object"==typeof window&&window.RTCPeerConnection&&("getRemoteStreams"in window.RTCPeerConnection.prototype||(window.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in window.RTCPeerConnection.prototype))){Object.defineProperty(window.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(f){this._onaddstream&&this.removeEventListener("addstream",this._onaddstream),this.addEventListener("addstream",this._onaddstream=f)}});var origSetRemoteDescription=window.RTCPeerConnection.prototype.setRemoteDescription;window.RTCPeerConnection.prototype.setRemoteDescription=function(){var pc=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach(function(stream){if(pc._remoteStreams||(pc._remoteStreams=[]),!(pc._remoteStreams.indexOf(stream)>=0)){pc._remoteStreams.push(stream);var event=new Event("addstream");event.stream=stream,pc.dispatchEvent(event)}})}),origSetRemoteDescription.apply(pc,arguments)}}},shimCallbacksAPI:function(window){if("object"==typeof window&&window.RTCPeerConnection){var prototype=window.RTCPeerConnection.prototype,createOffer=prototype.createOffer,createAnswer=prototype.createAnswer,setLocalDescription=prototype.setLocalDescription,setRemoteDescription=prototype.setRemoteDescription,addIceCandidate=prototype.addIceCandidate;prototype.createOffer=function(successCallback,failureCallback){var options=arguments.length>=2?arguments[2]:arguments[0],promise=createOffer.apply(this,[options]);return failureCallback?(promise.then(successCallback,failureCallback),Promise.resolve()):promise},prototype.createAnswer=function(successCallback,failureCallback){var options=arguments.length>=2?arguments[2]:arguments[0],promise=createAnswer.apply(this,[options]);return failureCallback?(promise.then(successCallback,failureCallback),Promise.resolve()):promise};var withCallback=function(description,successCallback,failureCallback){var promise=setLocalDescription.apply(this,[description]);return failureCallback?(promise.then(successCallback,failureCallback),Promise.resolve()):promise};prototype.setLocalDescription=withCallback,withCallback=function(description,successCallback,failureCallback){var promise=setRemoteDescription.apply(this,[description]);return failureCallback?(promise.then(successCallback,failureCallback),Promise.resolve()):promise},prototype.setRemoteDescription=withCallback,withCallback=function(candidate,successCallback,failureCallback){var promise=addIceCandidate.apply(this,[candidate]);return failureCallback?(promise.then(successCallback,failureCallback),Promise.resolve()):promise},prototype.addIceCandidate=withCallback}},shimGetUserMedia:function(window){var navigator=window&&window.navigator;navigator.getUserMedia||(navigator.webkitGetUserMedia?navigator.getUserMedia=navigator.webkitGetUserMedia.bind(navigator):navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(navigator.getUserMedia=function(constraints,cb,errcb){navigator.mediaDevices.getUserMedia(constraints).then(cb,errcb)}.bind(navigator)))},shimRTCIceServerUrls:function(window){var OrigPeerConnection=window.RTCPeerConnection;window.RTCPeerConnection=function(pcConfig,pcConstraints){if(pcConfig&&pcConfig.iceServers){for(var newIceServers=[],i=0;i<pcConfig.iceServers.length;i++){var server=pcConfig.iceServers[i];!server.hasOwnProperty("urls")&&server.hasOwnProperty("url")?(utils.deprecated("RTCIceServer.url","RTCIceServer.urls"),server=JSON.parse(JSON.stringify(server)),server.urls=server.url,delete server.url,newIceServers.push(server)):newIceServers.push(pcConfig.iceServers[i])}pcConfig.iceServers=newIceServers}return new OrigPeerConnection(pcConfig,pcConstraints)},window.RTCPeerConnection.prototype=OrigPeerConnection.prototype,"generateCertificate"in window.RTCPeerConnection&&Object.defineProperty(window.RTCPeerConnection,"generateCertificate",{get:function(){return OrigPeerConnection.generateCertificate}})},shimTrackEventTransceiver:function(window){"object"==typeof window&&window.RTCPeerConnection&&"receiver"in window.RTCTrackEvent.prototype&&!window.RTCTransceiver&&Object.defineProperty(window.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},shimCreateOfferLegacy:function(window){var origCreateOffer=window.RTCPeerConnection.prototype.createOffer;window.RTCPeerConnection.prototype.createOffer=function(offerOptions){var pc=this;if(offerOptions){void 0!==offerOptions.offerToReceiveAudio&&(offerOptions.offerToReceiveAudio=!!offerOptions.offerToReceiveAudio);var audioTransceiver=pc.getTransceivers().find(function(transceiver){return transceiver.sender.track&&"audio"===transceiver.sender.track.kind});!1===offerOptions.offerToReceiveAudio&&audioTransceiver?"sendrecv"===audioTransceiver.direction?audioTransceiver.setDirection?audioTransceiver.setDirection("sendonly"):audioTransceiver.direction="sendonly":"recvonly"===audioTransceiver.direction&&(audioTransceiver.setDirection?audioTransceiver.setDirection("inactive"):audioTransceiver.direction="inactive"):!0!==offerOptions.offerToReceiveAudio||audioTransceiver||pc.addTransceiver("audio"),void 0!==offerOptions.offerToReceiveVideo&&(offerOptions.offerToReceiveVideo=!!offerOptions.offerToReceiveVideo);var videoTransceiver=pc.getTransceivers().find(function(transceiver){return transceiver.sender.track&&"video"===transceiver.sender.track.kind});!1===offerOptions.offerToReceiveVideo&&videoTransceiver?"sendrecv"===videoTransceiver.direction?videoTransceiver.setDirection("sendonly"):"recvonly"===videoTransceiver.direction&&videoTransceiver.setDirection("inactive"):!0!==offerOptions.offerToReceiveVideo||videoTransceiver||pc.addTransceiver("video")}return origCreateOffer.apply(pc,arguments)}}}},{"../utils":14}],14:[function(requirecopy,module,exports){function extractVersion(uastring,expr,pos){var match=uastring.match(expr);return match&&match.length>=pos&&parseInt(match[pos],10)}function wrapPeerConnectionEvent(window,eventNameToWrap,wrapper){if(window.RTCPeerConnection){var proto=window.RTCPeerConnection.prototype,nativeAddEventListener=proto.addEventListener;proto.addEventListener=function(nativeEventName,cb){if(nativeEventName!==eventNameToWrap)return nativeAddEventListener.apply(this,arguments);var wrappedCallback=function(e){var modifiedEvent=wrapper(e);modifiedEvent&&cb(modifiedEvent)};return this._eventMap=this._eventMap||{},this._eventMap[cb]=wrappedCallback,nativeAddEventListener.apply(this,[nativeEventName,wrappedCallback])};var nativeRemoveEventListener=proto.removeEventListener;proto.removeEventListener=function(nativeEventName,cb){if(nativeEventName!==eventNameToWrap||!this._eventMap||!this._eventMap[cb])return nativeRemoveEventListener.apply(this,arguments);var unwrappedCb=this._eventMap[cb];return delete this._eventMap[cb],nativeRemoveEventListener.apply(this,[nativeEventName,unwrappedCb])},Object.defineProperty(proto,"on"+eventNameToWrap,{get:function(){return this["_on"+eventNameToWrap]},set:function(cb){this["_on"+eventNameToWrap]&&(this.removeEventListener(eventNameToWrap,this["_on"+eventNameToWrap]),delete this["_on"+eventNameToWrap]),cb&&this.addEventListener(eventNameToWrap,this["_on"+eventNameToWrap]=cb)},enumerable:!0,configurable:!0})}}var logDisabled_=!0,deprecationWarnings_=!0;module.exports={extractVersion:extractVersion,wrapPeerConnectionEvent:wrapPeerConnectionEvent,disableLog:function(bool){return"boolean"!=typeof bool?new Error("Argument type: "+typeof bool+". Please use a boolean."):(logDisabled_=bool,bool?"adapter.js logging disabled":"adapter.js logging enabled")},disableWarnings:function(bool){return"boolean"!=typeof bool?new Error("Argument type: "+typeof bool+". Please use a boolean."):(deprecationWarnings_=!bool,"adapter.js deprecation warnings "+(bool?"disabled":"enabled"))},log:function(){if("object"==typeof window){if(logDisabled_)return;"undefined"!=typeof console&&console.log}},deprecated:function(oldMethod,newMethod){},detectBrowser:function(window){var navigator=window&&window.navigator,result={};if(result.browser=null,result.version=null,void 0===window||!window.navigator)return result.browser="Not a browser.",result;if(navigator.mozGetUserMedia)result.browser="firefox",result.version=extractVersion(navigator.userAgent,/Firefox\/(\d+)\./,1);else if(navigator.webkitGetUserMedia)result.browser="chrome",result.version=extractVersion(navigator.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/))result.browser="edge",result.version=extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!window.RTCPeerConnection||!navigator.userAgent.match(/AppleWebKit\/(\d+)\./))return result.browser="Not a supported browser.",result;result.browser="safari",result.version=extractVersion(navigator.userAgent,/AppleWebKit\/(\d+)\./,1)}return result}}},{}]},{},[3])(3)}),navigator.mozGetUserMedia?(MediaStreamTrack.getSources=function(successCb){setTimeout(function(){successCb([{kind:"audio",id:"default",label:"",facing:""},{kind:"video",id:"default",label:"",facing:""}])},0)},attachMediaStream=function(element,stream){return element.srcObject=stream,element},reattachMediaStream=function(to,from){return to.srcObject=from.srcObject,to}):navigator.webkitGetUserMedia?(attachMediaStream=function(element,stream){return AdapterJS.webrtcDetectedVersion>=43?element.srcObject=stream:void 0!==element.src&&(element.src=URL.createObjectURL(stream)),element},reattachMediaStream=function(to,from){return AdapterJS.webrtcDetectedVersion>=43?to.srcObject=from.srcObject:to.src=from.src,to}):"AppleWebKit"===AdapterJS.webrtcDetectedType?(attachMediaStream=function(element,stream){return element.srcObject=stream,element},reattachMediaStream=function(to,from){return to.srcObject=from.srcObject,to},navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(navigator.getUserMedia=getUserMedia=function(constraints,successCb,errorCb){navigator.mediaDevices.getUserMedia(constraints).then(successCb).catch(errorCb)})):navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)&&(attachMediaStream=function(element,stream){return element.srcObject=stream,
element},reattachMediaStream=function(to,from){return to.srcObject=from.srcObject,to});var attachMediaStream_base=attachMediaStream;"opera"===AdapterJS.webrtcDetectedBrowser&&(attachMediaStream_base=function(element,stream){AdapterJS.webrtcDetectedVersion>38?element.srcObject=stream:void 0!==element.src&&(element.src=URL.createObjectURL(stream))}),attachMediaStream=function(element,stream){return"chrome"!==AdapterJS.webrtcDetectedBrowser&&"opera"!==AdapterJS.webrtcDetectedBrowser||stream?attachMediaStream_base(element,stream):element.src="",element};var reattachMediaStream_base=reattachMediaStream;reattachMediaStream=function(to,from){return reattachMediaStream_base(to,from),to},window.attachMediaStream=attachMediaStream,window.reattachMediaStream=reattachMediaStream,window.getUserMedia=function(constraints,onSuccess,onFailure){navigator.getUserMedia(constraints,onSuccess,onFailure)},AdapterJS.attachMediaStream=attachMediaStream,AdapterJS.reattachMediaStream=reattachMediaStream,AdapterJS.getUserMedia=getUserMedia,"undefined"==typeof Promise&&(requestUserMedia=null),AdapterJS.maybeThroughWebRTCReady()}else"object"==typeof console&&"function"==typeof console.log||(console={}||console,console.log=function(arg){},console.info=function(arg){},console.error=function(arg){},console.dir=function(arg){},console.exception=function(arg){},console.trace=function(arg){},console.warn=function(arg){},console.count=function(arg){},console.debug=function(arg){},console.count=function(arg){},console.time=function(arg){},console.timeEnd=function(arg){},console.group=function(arg){},console.groupCollapsed=function(arg){},console.groupEnd=function(arg){}),AdapterJS.WebRTCPlugin.WaitForPluginReady=function(){for(;AdapterJS.WebRTCPlugin.pluginState!==AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY;);},AdapterJS.WebRTCPlugin.callWhenPluginReady=function(callback){if(AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY)callback();else var checkPluginReadyState=setInterval(function(){AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY&&(clearInterval(checkPluginReadyState),callback())},100)},AdapterJS.WebRTCPlugin.setLogLevel=function(logLevel){AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.setLogLevel(logLevel)})},AdapterJS.WebRTCPlugin.injectPlugin=function(){if(AdapterJS.documentReady()&&AdapterJS.WebRTCPlugin.pluginState===AdapterJS.WebRTCPlugin.PLUGIN_STATES.INITIALIZING){AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INJECTING;var existing=document.getElementById(AdapterJS.WebRTCPlugin.pluginInfo.pluginId);if(existing)if(AdapterJS.WebRTCPlugin.plugin=existing,AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INJECTED,AdapterJS.WebRTCPlugin.plugin.valid)window[AdapterJS.WebRTCPlugin.pluginInfo.onload]();else var pluginValidInterval=setInterval(function(){AdapterJS.WebRTCPlugin.plugin.valid&&(clearInterval(pluginValidInterval),window[AdapterJS.WebRTCPlugin.pluginInfo.onload]())},100);else{if("IE"===AdapterJS.webrtcDetectedBrowser&&AdapterJS.webrtcDetectedVersion<=10){var frag=document.createDocumentFragment();for(AdapterJS.WebRTCPlugin.plugin=document.createElement("div"),AdapterJS.WebRTCPlugin.plugin.innerHTML='<object id="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'" type="'+AdapterJS.WebRTCPlugin.pluginInfo.type+'" width="1" height="1"><param name="pluginId" value="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'" /> <param name="windowless" value="false" /> <param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'" /> <param name="onload" value="'+AdapterJS.WebRTCPlugin.pluginInfo.onload+'" /><param name="tag" value="'+AdapterJS.WebRTCPlugin.TAGS.NONE+'" />'+(AdapterJS.options.getAllCams?'<param name="forceGetAllCams" value="True" />':"")+"</object>";AdapterJS.WebRTCPlugin.plugin.firstChild;)frag.appendChild(AdapterJS.WebRTCPlugin.plugin.firstChild);document.body.appendChild(frag),AdapterJS.WebRTCPlugin.plugin=document.getElementById(AdapterJS.WebRTCPlugin.pluginInfo.pluginId)}else AdapterJS.WebRTCPlugin.plugin=document.createElement("object"),AdapterJS.WebRTCPlugin.plugin.id=AdapterJS.WebRTCPlugin.pluginInfo.pluginId,"IE"===AdapterJS.webrtcDetectedBrowser?(AdapterJS.WebRTCPlugin.plugin.width="1px",AdapterJS.WebRTCPlugin.plugin.height="1px"):(AdapterJS.WebRTCPlugin.plugin.width="0px",AdapterJS.WebRTCPlugin.plugin.height="0px"),AdapterJS.WebRTCPlugin.plugin.type=AdapterJS.WebRTCPlugin.pluginInfo.type,AdapterJS.WebRTCPlugin.plugin.innerHTML='<param name="onload" value="'+AdapterJS.WebRTCPlugin.pluginInfo.onload+'"><param name="pluginId" value="'+AdapterJS.WebRTCPlugin.pluginInfo.pluginId+'"><param name="windowless" value="false" /> '+(AdapterJS.options.getAllCams?'<param name="forceGetAllCams" value="True" />':"")+'<param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'"><param name="tag" value="'+AdapterJS.WebRTCPlugin.TAGS.NONE+'" />',document.body.appendChild(AdapterJS.WebRTCPlugin.plugin);AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INJECTED}}},AdapterJS.WebRTCPlugin.isPluginInstalled=function(comName,plugName,plugType,installedCb,notInstalledCb){if("IE"!==AdapterJS.webrtcDetectedBrowser){var pluginArray=navigator.mimeTypes;if(void 0!==pluginArray){for(var i=0;i<pluginArray.length;i++)if(pluginArray[i].type.indexOf(plugType)>=0)return void installedCb();notInstalledCb()}else AdapterJS.renderNotificationBar(AdapterJS.TEXT.PLUGIN.NOT_SUPPORTED)}else{try{new ActiveXObject(comName+"."+plugName)}catch(e){return void notInstalledCb()}installedCb()}},AdapterJS.WebRTCPlugin.defineWebRTCInterface=function(){if(AdapterJS.WebRTCPlugin.pluginState!==AdapterJS.WebRTCPlugin.PLUGIN_STATES.READY){AdapterJS.WebRTCPlugin.pluginState=AdapterJS.WebRTCPlugin.PLUGIN_STATES.INITIALIZING,AdapterJS.isDefined=function(variable){return null!==variable&&void 0!==variable},RTCSessionDescription=function(info){return AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.ConstructSessionDescription(info.type,info.sdp)},MediaStream=function(mediaStreamOrTracks){return AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.MediaStream(mediaStreamOrTracks)},RTCPeerConnection=function(servers,constraints){if(void 0!==servers&&null!==servers&&!Array.isArray(servers.iceServers))throw new Error("Failed to construct 'RTCPeerConnection': Malformed RTCConfiguration");if(void 0!==constraints&&null!==constraints){var invalidConstraits=!1;if(invalidConstraits|="object"!=typeof constraints,invalidConstraits|=constraints.hasOwnProperty("mandatory")&&void 0!==constraints.mandatory&&null!==constraints.mandatory&&constraints.mandatory.constructor!==Object,invalidConstraits|=constraints.hasOwnProperty("optional")&&void 0!==constraints.optional&&null!==constraints.optional&&!Array.isArray(constraints.optional))throw new Error("Failed to construct 'RTCPeerConnection': Malformed constraints object")}AdapterJS.WebRTCPlugin.WaitForPluginReady();var iceServers=null;if(servers&&Array.isArray(servers.iceServers)){iceServers=servers.iceServers;for(var i=0;i<iceServers.length;i++)iceServers[i].urls&&!iceServers[i].url&&(iceServers[i].url=iceServers[i].urls),iceServers[i].hasCredentials=AdapterJS.isDefined(iceServers[i].username)&&AdapterJS.isDefined(iceServers[i].credential)}if(AdapterJS.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION&&AdapterJS.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION>1)return iceServers&&(servers.iceServers=iceServers),AdapterJS.WebRTCPlugin.plugin.PeerConnection(servers);var mandatory=constraints&&constraints.mandatory?constraints.mandatory:null,optional=constraints&&constraints.optional?constraints.optional:null;return AdapterJS.WebRTCPlugin.plugin.PeerConnection(AdapterJS.WebRTCPlugin.pageId,iceServers,mandatory,optional)};var MediaStreamTrack=function(){};MediaStreamTrack.getSources=function(callback){AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.GetSources(callback)})};var constraintsToPlugin=function(c){if("object"!=typeof c||c.mandatory||c.optional)return c;var cc={};return Object.keys(c).forEach(function(key){if("require"!==key&&"advanced"!==key){if("string"==typeof c[key])return void(cc[key]=c[key]);var r="object"==typeof c[key]?c[key]:{ideal:c[key]};void 0!==r.exact&&"number"==typeof r.exact&&(r.min=r.max=r.exact);var oldname=function(prefix,name){return prefix?prefix+name.charAt(0).toUpperCase()+name.slice(1):"deviceId"===name?"sourceId":name};if("sourceId"===oldname("",key)&&void 0!==r.exact&&(r.ideal=r.exact,r.exact=void 0),void 0!==r.ideal){cc.optional=cc.optional||[];var oc={};"number"==typeof r.ideal?(oc[oldname("min",key)]=r.ideal,cc.optional.push(oc),oc={},oc[oldname("max",key)]=r.ideal,cc.optional.push(oc)):(oc[oldname("",key)]=r.ideal,cc.optional.push(oc))}void 0!==r.exact&&"number"!=typeof r.exact?(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname("",key)]=r.exact):["min","max"].forEach(function(mix){void 0!==r[mix]&&(cc.mandatory=cc.mandatory||{},cc.mandatory[oldname(mix,key)]=r[mix])})}}),c.advanced&&(cc.optional=(cc.optional||[]).concat(c.advanced)),cc};getUserMedia=function(constraints,successCallback,failureCallback){var cc={};cc.audio=!!constraints.audio&&constraintsToPlugin(constraints.audio),cc.video=!!constraints.video&&constraintsToPlugin(constraints.video),AdapterJS.WebRTCPlugin.callWhenPluginReady(function(){AdapterJS.WebRTCPlugin.plugin.getUserMedia(cc,successCallback,failureCallback)})},window.navigator.getUserMedia=getUserMedia,"undefined"!=typeof Promise&&(requestUserMedia=function(constraints){return new Promise(function(resolve,reject){try{getUserMedia(constraints,resolve,reject)}catch(error){reject(error)}})},void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia=requestUserMedia,navigator.mediaDevices.enumerateDevices=function(){return new Promise(function(resolve){var kinds={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(devices){resolve(devices.map(function(device){return{label:device.label,kind:kinds[device.kind],id:device.id,deviceId:device.id,groupId:""}}))})})}),attachMediaStream=function(element,stream){if(element&&element.parentNode){var streamId;null===stream?streamId="":(void 0!==stream.enableSoundTracks&&stream.enableSoundTracks(!0),streamId=stream.id);var elementId=0===element.id.length?Math.random().toString(36).slice(2):element.id,nodeName=element.nodeName.toLowerCase();if("object"!==nodeName){var tag;switch(nodeName){case"audio":tag=AdapterJS.WebRTCPlugin.TAGS.AUDIO;break;case"video":tag=AdapterJS.WebRTCPlugin.TAGS.VIDEO;break;default:tag=AdapterJS.WebRTCPlugin.TAGS.NONE}var frag=document.createDocumentFragment(),temp=document.createElement("div"),classHTML="";for(element.className?classHTML='class="'+element.className+'" ':element.attributes&&element.attributes.class&&(classHTML='class="'+element.attributes.class.value+'" '),temp.innerHTML='<object id="'+elementId+'" '+classHTML+'type="'+AdapterJS.WebRTCPlugin.pluginInfo.type+'"><param name="pluginId" value="'+elementId+'" /> <param name="pageId" value="'+AdapterJS.WebRTCPlugin.pageId+'" /> <param name="windowless" value="true" /> <param name="streamId" value="'+streamId+'" /> <param name="tag" value="'+tag+'" /> </object>';temp.firstChild;)frag.appendChild(temp.firstChild);var height="",width="";element.clientWidth||element.clientHeight?(width=element.clientWidth,height=element.clientHeight):(element.width||element.height)&&(width=element.width,height=element.height),element.parentNode.insertBefore(frag,element),frag=document.getElementById(elementId),frag.width=width,frag.height=height,element.parentNode.removeChild(element)}else{for(var children=element.children,i=0;i!==children.length;++i)if("streamId"===children[i].name){children[i].value=streamId;break}element.setStreamId(streamId)}var newElement=document.getElementById(elementId);return AdapterJS.forwardEventHandlers(newElement,element,Object.getPrototypeOf(element)),newElement}},reattachMediaStream=function(to,from){for(var stream=null,children=from.children,i=0;i!==children.length;++i)if("streamId"===children[i].name){AdapterJS.WebRTCPlugin.WaitForPluginReady(),stream=AdapterJS.WebRTCPlugin.plugin.getStreamWithId(AdapterJS.WebRTCPlugin.pageId,children[i].value);break}if(null!==stream)return attachMediaStream(to,stream)},window.attachMediaStream=attachMediaStream,window.reattachMediaStream=reattachMediaStream,window.getUserMedia=getUserMedia,AdapterJS.attachMediaStream=attachMediaStream,AdapterJS.reattachMediaStream=reattachMediaStream,AdapterJS.getUserMedia=getUserMedia,AdapterJS.forwardEventHandlers=function(destElem,srcElem,prototype){var properties=Object.getOwnPropertyNames(prototype);for(var prop in properties)if(prop){var propName=properties[prop];"function"==typeof propName.slice&&"on"===propName.slice(0,2)&&"function"==typeof srcElem[propName]&&AdapterJS.addEvent(destElem,propName.slice(2),srcElem[propName])}var subPrototype=Object.getPrototypeOf(prototype);subPrototype&&AdapterJS.forwardEventHandlers(destElem,srcElem,subPrototype)},RTCIceCandidate=function(candidate){return candidate.sdpMid||(candidate.sdpMid=""),AdapterJS.WebRTCPlugin.WaitForPluginReady(),AdapterJS.WebRTCPlugin.plugin.ConstructIceCandidate(candidate.sdpMid,candidate.sdpMLineIndex,candidate.candidate)},AdapterJS.addEvent(document,"readystatechange",AdapterJS.WebRTCPlugin.injectPlugin),AdapterJS.WebRTCPlugin.injectPlugin()}},AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb=AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb||function(){AdapterJS.addEvent(document,"readystatechange",AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv),AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv()},AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv=function(){if(AdapterJS.documentReady()&&(document.removeEventListener("readystatechange",AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCbPriv),!AdapterJS.options.hidePluginInstallPrompt)){var downloadLink=AdapterJS.WebRTCPlugin.pluginInfo.downloadLink;if(downloadLink){var popupString;AdapterJS.WebRTCPlugin.pluginInfo.companyName?(popupString="This website requires you to install the ",AdapterJS.WebRTCPlugin.pluginInfo.portalLink?popupString+=' <a href="'+AdapterJS.WebRTCPlugin.pluginInfo.portalLink+'" target="_blank">'+AdapterJS.WebRTCPlugin.pluginInfo.companyName+" WebRTC Plugin</a>":popupString+=AdapterJS.WebRTCPlugin.pluginInfo.companyName+" WebRTC Plugin",popupString+=" to work on this browser."):popupString=AdapterJS.TEXT.PLUGIN.REQUIRE_INSTALLATION,AdapterJS.renderNotificationBar(popupString,AdapterJS.TEXT.PLUGIN.BUTTON,function(){if(window.open(downloadLink,"_top"),"safari"===webrtcDetectedBrowser&&11==webrtcDetectedVersion)AdapterJS.renderNotificationBar(AdapterJS.TEXT.PLUGIN.REQUIRE_RESTART);else var pluginInstallInterval=setInterval(function(){"IE"!==AdapterJS.webrtcDetectedBrowser&&navigator.plugins.refresh(!1),AdapterJS.WebRTCPlugin.isPluginInstalled(AdapterJS.WebRTCPlugin.pluginInfo.prefix,AdapterJS.WebRTCPlugin.pluginInfo.plugName,AdapterJS.WebRTCPlugin.pluginInfo.type,function(){clearInterval(pluginInstallInterval),AdapterJS.WebRTCPlugin.defineWebRTCInterface()},function(){})},500)})}else AdapterJS.renderNotificationBar(AdapterJS.TEXT.PLUGIN.NOT_SUPPORTED)}},AdapterJS.WebRTCPlugin.isPluginInstalled(AdapterJS.WebRTCPlugin.pluginInfo.prefix,AdapterJS.WebRTCPlugin.pluginInfo.plugName,AdapterJS.WebRTCPlugin.pluginInfo.type,AdapterJS.WebRTCPlugin.defineWebRTCInterface,AdapterJS.WebRTCPlugin.pluginNeededButNotInstalledCb);"undefined"!=typeof exports&&(module.exports=AdapterJS);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rtcmulticonnection = __webpack_require__(8);

var _rtcmulticonnection2 = _interopRequireDefault(_rtcmulticonnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(2);
exports.default = {
  name: 'vue-webrtc',
  components: {
    RTCMultiConnection: _rtcmulticonnection2.default
  },
  data: function data() {
    return {
      rtcmConnection: null,
      localVideo: null,
      videoList: [],
      canvas: null
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
    enableLogs: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  mounted: function mounted() {
    var that = this;

    this.rtcmConnection = new _rtcmulticonnection2.default();
    this.rtcmConnection.socketURL = this.socketURL;
    this.rtcmConnection.autoCreateMediaElement = false;
    this.rtcmConnection.enableLogs = this.enableLogs;
    this.rtcmConnection.session = {
      audio: this.enableAudio,
      video: this.enableVideo
    };
    this.rtcmConnection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: this.enableAudio,
      OfferToReceiveVideo: this.enableVideo
    };
    this.rtcmConnection.onstream = function (stream) {
      var found = that.videoList.find(function (video) {
        return video.id === stream.streamid;
      });
      if (found === undefined) {
        var video = {
          id: stream.streamid,
          muted: stream.type === 'local'
        };

        that.videoList.push(video);

        if (stream.type === 'local') {
          that.localVideo = video;
        }
      }

      setTimeout(function () {
        for (var i = 0, len = that.$refs.videos.length; i < len; i++) {
          if (that.$refs.videos[i].id === stream.streamid) {
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
      that.$emit('left-room', stream.streamid);
    };
  },

  methods: {
    join: function join() {
      var that = this;
      this.rtcmConnection.openOrJoin(this.roomId, function (isRoomExist, roomid) {
        if (isRoomExist === false && that.rtcmConnection.isInitiator === true) {
          that.$emit('opened-room', roomid);
        }
      });
    },
    leave: function leave() {
      this.rtcmConnection.attachStreams.forEach(function (localStream) {
        localStream.stop();
      });
      this.videoList = [];
    },
    capture: function capture() {
      return this.getCanvas().toDataURL(this.screenshotFormat);
    },
    getCanvas: function getCanvas() {
      var video = this.getCurrentVideo();
      if (video !== null && !this.ctx) {
        var _canvas = document.createElement('canvas');
        _canvas.height = video.clientHeight;
        _canvas.width = video.clientWidth;
        this.canvas = _canvas;
        this.ctx = _canvas.getContext('2d');
      }
      var ctx = this.ctx,
          canvas = this.canvas;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas;
    },
    getCurrentVideo: function getCurrentVideo() {
      if (this.localVideo === null) {
        return null;
      }
      for (var i = 0, len = this.$refs.videos.length; i < len; i++) {
        if (this.$refs.videos[i].id === this.localVideo.id) return this.$refs.videos[i];
      }
      return null;
    },
    shareScreen: function shareScreen() {
      var that = this;
      if (navigator.getDisplayMedia || navigator.mediaDevices.getDisplayMedia) {
        var addStreamStopListener = function addStreamStopListener(stream, callback) {
          var streamEndedEvent = 'ended';
          if ('oninactive' in stream) {
            streamEndedEvent = 'inactive';
          }
          stream.addEventListener(streamEndedEvent, function () {
            callback();
            callback = function callback() {};
          }, false);
        };

        var onGettingSteam = function onGettingSteam(stream) {
          that.rtcmConnection.addStream(stream);
          that.$emit('share-started', stream.streamid);

          addStreamStopListener(stream, function () {
            that.rtcmConnection.removeStream(stream.streamid);
            that.$emit('share-stopped', stream.streamid);
          });
        };

        var getDisplayMediaError = function getDisplayMediaError(error) {
          console.log('Media error: ' + JSON.stringify(error));
        };

        if (navigator.mediaDevices.getDisplayMedia) {
          navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(function (stream) {
            onGettingSteam(stream);
          }, getDisplayMediaError).catch(getDisplayMediaError);
        } else if (navigator.getDisplayMedia) {
          navigator.getDisplayMedia({ video: true }).then(function (stream) {
            onGettingSteam(stream);
          }, getDisplayMediaError).catch(getDisplayMediaError);
        }
      }
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webrtc = __webpack_require__(1);

var _webrtc2 = _interopRequireDefault(_webrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (install.installed) return;
  Vue.component(_webrtc2.default.name, _webrtc2.default);
};

module.exports = {
  WebRTC: _webrtc2.default,
  install: install
};

module.exports.default = module.exports;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".video-list[data-v-49ef9b35]{background:#f5f5f5;height:auto}.video-list div[data-v-49ef9b35]{padding:0}.video-item[data-v-49ef9b35]{background:#c5c4c4;display:inline-block}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2019-01-13 5:11:44 AM UTC

// _________________________
// RTCMultiConnection v3.6.8

// Open-Sourced: https://github.com/muaz-khan/RTCMultiConnection

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

var RTCMultiConnection = function(roomid, forceOptions) {

    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    (function(that) {
        if (!that) {
            return;
        }

        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof global === 'undefined') {
            return;
        }

        global.navigator = {
            userAgent: browserFakeUserAgent,
            getUserMedia: function() {}
        };

        if (!global.console) {
            global.console = {};
        }

        if (typeof global.console.debug === 'undefined') {
            global.console.debug = global.console.info = global.console.error = global.console.log = global.console.log || function() {
                console.log(arguments);
            };
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {};

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                var obj = {
                    getContext: function() {
                        return obj;
                    },
                    play: function() {},
                    pause: function() {},
                    drawImage: function() {},
                    toDataURL: function() {
                        return '';
                    }
                };
                return obj;
            };

            document.addEventListener = document.removeEventListener = that.addEventListener = that.removeEventListener = function() {};

            that.HTMLVideoElement = that.HTMLMediaElement = function() {};
        }

        if (typeof io === 'undefined') {
            that.io = function() {
                return {
                    on: function(eventName, callback) {
                        callback = callback || function() {};

                        if (eventName === 'connect') {
                            callback();
                        }
                    },
                    emit: function(eventName, data, callback) {
                        callback = callback || function() {};
                        if (eventName === 'open-room' || eventName === 'join-room') {
                            callback(true, data.sessionid, null);
                        }
                    }
                };
            };
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: '',
                origin: 'self'
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }

        if (typeof URL === 'undefined') {
            /*global screen:true */
            that.URL = {
                createObjectURL: function() {
                    return '';
                },
                revokeObjectURL: function() {
                    return '';
                }
            };
        }

        /*global window:true */
        that.window = global;
    })(typeof global !== 'undefined' ? global : null);

    function SocketConnection(connection, connectCallback) {
        function isData(session) {
            return !session.audio && !session.video && !session.screen && session.data;
        }

        var parameters = '';

        parameters += '?userid=' + connection.userid;
        parameters += '&sessionid=' + connection.sessionid;
        parameters += '&msgEvent=' + connection.socketMessageEvent;
        parameters += '&socketCustomEvent=' + connection.socketCustomEvent;
        parameters += '&autoCloseEntireSession=' + !!connection.autoCloseEntireSession;

        if (connection.session.broadcast === true) {
            parameters += '&oneToMany=true';
        }

        parameters += '&maxParticipantsAllowed=' + connection.maxParticipantsAllowed;

        if (connection.enableScalableBroadcast) {
            parameters += '&enableScalableBroadcast=true';
            parameters += '&maxRelayLimitPerUser=' + (connection.maxRelayLimitPerUser || 2);
        }

        parameters += '&extra=' + JSON.stringify(connection.extra || {});

        if (connection.socketCustomParameters) {
            parameters += connection.socketCustomParameters;
        }

        try {
            io.sockets = {};
        } catch (e) {};

        if (!connection.socketURL) {
            connection.socketURL = '/';
        }

        if (connection.socketURL.substr(connection.socketURL.length - 1, 1) != '/') {
            // connection.socketURL = 'https://domain.com:9001/';
            throw '"socketURL" MUST end with a slash.';
        }

        if (connection.enableLogs) {
            if (connection.socketURL == '/') {
                console.info('socket.io url is: ', location.origin + '/');
            } else {
                console.info('socket.io url is: ', connection.socketURL);
            }
        }

        try {
            connection.socket = io(connection.socketURL + parameters);
        } catch (e) {
            connection.socket = io.connect(connection.socketURL + parameters, connection.socketOptions);
        }

        var mPeer = connection.multiPeersHandler;

        connection.socket.on('extra-data-updated', function(remoteUserId, extra) {
            if (!connection.peers[remoteUserId]) return;
            connection.peers[remoteUserId].extra = extra;

            connection.onExtraDataUpdated({
                userid: remoteUserId,
                extra: extra
            });

            updateExtraBackup(remoteUserId, extra);
        });

        function updateExtraBackup(remoteUserId, extra) {
            if (!connection.peersBackup[remoteUserId]) {
                connection.peersBackup[remoteUserId] = {
                    userid: remoteUserId,
                    extra: {}
                };
            }

            connection.peersBackup[remoteUserId].extra = extra;
        }

        function onMessageEvent(message) {
            if (message.remoteUserId != connection.userid) return;

            if (connection.peers[message.sender] && connection.peers[message.sender].extra != message.message.extra) {
                connection.peers[message.sender].extra = message.extra;
                connection.onExtraDataUpdated({
                    userid: message.sender,
                    extra: message.extra
                });

                updateExtraBackup(message.sender, message.extra);
            }

            if (message.message.streamSyncNeeded && connection.peers[message.sender]) {
                var stream = connection.streamEvents[message.message.streamid];
                if (!stream || !stream.stream) {
                    return;
                }

                var action = message.message.action;

                if (action === 'ended' || action === 'inactive' || action === 'stream-removed') {
                    if (connection.peersBackup[stream.userid]) {
                        stream.extra = connection.peersBackup[stream.userid].extra;
                    }
                    connection.onstreamended(stream);
                    return;
                }

                var type = message.message.type != 'both' ? message.message.type : null;

                if (typeof stream.stream[action] == 'function') {
                    stream.stream[action](type);
                }
                return;
            }

            if (message.message === 'dropPeerConnection') {
                connection.deletePeer(message.sender);
                return;
            }

            if (message.message.allParticipants) {
                if (message.message.allParticipants.indexOf(message.sender) === -1) {
                    message.message.allParticipants.push(message.sender);
                }

                message.message.allParticipants.forEach(function(participant) {
                    mPeer[!connection.peers[participant] ? 'createNewPeer' : 'renegotiatePeer'](participant, {
                        localPeerSdpConstraints: {
                            OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                            OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                        },
                        remotePeerSdpConstraints: {
                            OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                            OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                        },
                        isOneWay: !!connection.session.oneway || connection.direction === 'one-way',
                        isDataOnly: isData(connection.session)
                    });
                });
                return;
            }

            if (message.message.newParticipant) {
                if (message.message.newParticipant == connection.userid) return;
                if (!!connection.peers[message.message.newParticipant]) return;

                mPeer.createNewPeer(message.message.newParticipant, message.message.userPreferences || {
                    localPeerSdpConstraints: {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    remotePeerSdpConstraints: {
                        OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    isOneWay: !!connection.session.oneway || connection.direction === 'one-way',
                    isDataOnly: isData(connection.session)
                });
                return;
            }

            if (message.message.readyForOffer) {
                if (connection.attachStreams.length) {
                    connection.waitingForLocalMedia = false;
                }

                if (connection.waitingForLocalMedia) {
                    // if someone is waiting to join you
                    // make sure that we've local media before making a handshake
                    setTimeout(function() {
                        onMessageEvent(message);
                    }, 1);
                    return;
                }
            }

            if (message.message.newParticipationRequest && message.sender !== connection.userid) {
                if (connection.peers[message.sender]) {
                    connection.deletePeer(message.sender);
                }

                var userPreferences = {
                    extra: message.extra || {},
                    localPeerSdpConstraints: message.message.remotePeerSdpConstraints || {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    remotePeerSdpConstraints: message.message.localPeerSdpConstraints || {
                        OfferToReceiveAudio: connection.session.oneway ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.session.oneway ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    },
                    isOneWay: typeof message.message.isOneWay !== 'undefined' ? message.message.isOneWay : !!connection.session.oneway || connection.direction === 'one-way',
                    isDataOnly: typeof message.message.isDataOnly !== 'undefined' ? message.message.isDataOnly : isData(connection.session),
                    dontGetRemoteStream: typeof message.message.isOneWay !== 'undefined' ? message.message.isOneWay : !!connection.session.oneway || connection.direction === 'one-way',
                    dontAttachLocalStream: !!message.message.dontGetRemoteStream,
                    connectionDescription: message,
                    successCallback: function() {}
                };

                connection.onNewParticipant(message.sender, userPreferences);
                return;
            }

            if (message.message.changedUUID) {
                if (connection.peers[message.message.oldUUID]) {
                    connection.peers[message.message.newUUID] = connection.peers[message.message.oldUUID];
                    delete connection.peers[message.message.oldUUID];
                }
            }

            if (message.message.userLeft) {
                mPeer.onUserLeft(message.sender);

                if (!!message.message.autoCloseEntireSession) {
                    connection.leave();
                }

                return;
            }

            mPeer.addNegotiatedMessage(message.message, message.sender);
        }

        connection.socket.on(connection.socketMessageEvent, onMessageEvent);

        var alreadyConnected = false;

        connection.socket.resetProps = function() {
            alreadyConnected = false;
        };

        connection.socket.on('connect', function() {
            if (alreadyConnected) {
                return;
            }
            alreadyConnected = true;

            if (connection.enableLogs) {
                console.info('socket.io connection is opened.');
            }

            setTimeout(function() {
                connection.socket.emit('extra-data-updated', connection.extra);
            }, 1000);

            if (connectCallback) {
                connectCallback(connection.socket);
            }
        });

        connection.socket.on('disconnect', function(event) {
            connection.onSocketDisconnect(event);
        });

        connection.socket.on('error', function(event) {
            connection.onSocketError(event);
        });

        connection.socket.on('user-disconnected', function(remoteUserId) {
            if (remoteUserId === connection.userid) {
                return;
            }

            connection.onUserStatusChanged({
                userid: remoteUserId,
                status: 'offline',
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra || {} : {}
            });

            connection.deletePeer(remoteUserId);
        });

        connection.socket.on('user-connected', function(userid) {
            if (userid === connection.userid) {
                return;
            }

            connection.onUserStatusChanged({
                userid: userid,
                status: 'online',
                extra: connection.peers[userid] ? connection.peers[userid].extra || {} : {}
            });
        });

        connection.socket.on('closed-entire-session', function(sessionid, extra) {
            connection.leave();
            connection.onEntireSessionClosed({
                sessionid: sessionid,
                userid: sessionid,
                extra: extra
            });
        });

        connection.socket.on('userid-already-taken', function(useridAlreadyTaken, yourNewUserId) {
            connection.onUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId);
        });

        connection.socket.on('logs', function(log) {
            if (!connection.enableLogs) return;
            console.debug('server-logs', log);
        });

        connection.socket.on('number-of-broadcast-viewers-updated', function(data) {
            connection.onNumberOfBroadcastViewersUpdated(data);
        });

        connection.socket.on('set-isInitiator-true', function(sessionid) {
            if (sessionid != connection.sessionid) return;
            connection.isInitiator = true;
        });
    }

    function MultiPeers(connection) {
        var self = this;

        var skipPeers = ['getAllParticipants', 'getLength', 'selectFirst', 'streams', 'send', 'forEach'];
        connection.peers = {
            getLength: function() {
                var numberOfPeers = 0;
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1) {
                        numberOfPeers++;
                    }
                }
                return numberOfPeers;
            },
            selectFirst: function() {
                var firstPeer;
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1) {
                        firstPeer = this[peer];
                    }
                }
                return firstPeer;
            },
            getAllParticipants: function(sender) {
                var allPeers = [];
                for (var peer in this) {
                    if (skipPeers.indexOf(peer) == -1 && peer != sender) {
                        allPeers.push(peer);
                    }
                }
                return allPeers;
            },
            forEach: function(callbcak) {
                this.getAllParticipants().forEach(function(participant) {
                    callbcak(connection.peers[participant]);
                });
            },
            send: function(data, remoteUserId) {
                var that = this;

                if (!isNull(data.size) && !isNull(data.type)) {
                    if (connection.enableFileSharing) {
                        self.shareFile(data, remoteUserId);
                        return;
                    }

                    if (typeof data !== 'string') {
                        data = JSON.stringify(data);
                    }
                }

                if (data.type !== 'text' && !(data instanceof ArrayBuffer) && !(data instanceof DataView)) {
                    TextSender.send({
                        text: data,
                        channel: this,
                        connection: connection,
                        remoteUserId: remoteUserId
                    });
                    return;
                }

                if (data.type === 'text') {
                    data = JSON.stringify(data);
                }

                if (remoteUserId) {
                    var remoteUser = connection.peers[remoteUserId];
                    if (remoteUser) {
                        if (!remoteUser.channels.length) {
                            connection.peers[remoteUserId].createDataChannel();
                            connection.renegotiate(remoteUserId);
                            setTimeout(function() {
                                that.send(data, remoteUserId);
                            }, 3000);
                            return;
                        }

                        remoteUser.channels.forEach(function(channel) {
                            channel.send(data);
                        });
                        return;
                    }
                }

                this.getAllParticipants().forEach(function(participant) {
                    if (!that[participant].channels.length) {
                        connection.peers[participant].createDataChannel();
                        connection.renegotiate(participant);
                        setTimeout(function() {
                            that[participant].channels.forEach(function(channel) {
                                channel.send(data);
                            });
                        }, 3000);
                        return;
                    }

                    that[participant].channels.forEach(function(channel) {
                        channel.send(data);
                    });
                });
            }
        };

        this.uuid = connection.userid;

        this.getLocalConfig = function(remoteSdp, remoteUserId, userPreferences) {
            if (!userPreferences) {
                userPreferences = {};
            }

            return {
                streamsToShare: userPreferences.streamsToShare || {},
                rtcMultiConnection: connection,
                connectionDescription: userPreferences.connectionDescription,
                userid: remoteUserId,
                localPeerSdpConstraints: userPreferences.localPeerSdpConstraints,
                remotePeerSdpConstraints: userPreferences.remotePeerSdpConstraints,
                dontGetRemoteStream: !!userPreferences.dontGetRemoteStream,
                dontAttachLocalStream: !!userPreferences.dontAttachLocalStream,
                renegotiatingPeer: !!userPreferences.renegotiatingPeer,
                peerRef: userPreferences.peerRef,
                channels: userPreferences.channels || [],
                onLocalSdp: function(localSdp) {
                    self.onNegotiationNeeded(localSdp, remoteUserId);
                },
                onLocalCandidate: function(localCandidate) {
                    localCandidate = OnIceCandidateHandler.processCandidates(connection, localCandidate)
                    if (localCandidate) {
                        self.onNegotiationNeeded(localCandidate, remoteUserId);
                    }
                },
                remoteSdp: remoteSdp,
                onDataChannelMessage: function(message) {
                    if (!connection.fbr && connection.enableFileSharing) initFileBufferReader();

                    if (typeof message == 'string' || !connection.enableFileSharing) {
                        self.onDataChannelMessage(message, remoteUserId);
                        return;
                    }

                    var that = this;

                    if (message instanceof ArrayBuffer || message instanceof DataView) {
                        connection.fbr.convertToObject(message, function(object) {
                            that.onDataChannelMessage(object);
                        });
                        return;
                    }

                    if (message.readyForNextChunk) {
                        connection.fbr.getNextChunk(message, function(nextChunk, isLastChunk) {
                            connection.peers[remoteUserId].channels.forEach(function(channel) {
                                channel.send(nextChunk);
                            });
                        }, remoteUserId);
                        return;
                    }

                    if (message.chunkMissing) {
                        connection.fbr.chunkMissing(message);
                        return;
                    }

                    connection.fbr.addChunk(message, function(promptNextChunk) {
                        connection.peers[remoteUserId].peer.channel.send(promptNextChunk);
                    });
                },
                onDataChannelError: function(error) {
                    self.onDataChannelError(error, remoteUserId);
                },
                onDataChannelOpened: function(channel) {
                    self.onDataChannelOpened(channel, remoteUserId);
                },
                onDataChannelClosed: function(event) {
                    self.onDataChannelClosed(event, remoteUserId);
                },
                onRemoteStream: function(stream) {
                    if (connection.peers[remoteUserId]) {
                        connection.peers[remoteUserId].streams.push(stream);
                    }

                    self.onGettingRemoteMedia(stream, remoteUserId);
                },
                onRemoteStreamRemoved: function(stream) {
                    self.onRemovingRemoteMedia(stream, remoteUserId);
                },
                onPeerStateChanged: function(states) {
                    self.onPeerStateChanged(states);

                    if (states.iceConnectionState === 'new') {
                        self.onNegotiationStarted(remoteUserId, states);
                    }

                    if (states.iceConnectionState === 'connected') {
                        self.onNegotiationCompleted(remoteUserId, states);
                    }

                    if (states.iceConnectionState.search(/closed|failed/gi) !== -1) {
                        self.onUserLeft(remoteUserId);
                        self.disconnectWith(remoteUserId);
                    }
                }
            };
        };

        this.createNewPeer = function(remoteUserId, userPreferences) {
            if (connection.maxParticipantsAllowed <= connection.getAllParticipants().length) {
                return;
            }

            userPreferences = userPreferences || {};

            if (connection.isInitiator && !!connection.session.audio && connection.session.audio === 'two-way' && !userPreferences.streamsToShare) {
                userPreferences.isOneWay = false;
                userPreferences.isDataOnly = false;
                userPreferences.session = connection.session;
            }

            if (!userPreferences.isOneWay && !userPreferences.isDataOnly) {
                userPreferences.isOneWay = true;
                this.onNegotiationNeeded({
                    enableMedia: true,
                    userPreferences: userPreferences
                }, remoteUserId);
                return;
            }

            userPreferences = connection.setUserPreferences(userPreferences, remoteUserId);
            var localConfig = this.getLocalConfig(null, remoteUserId, userPreferences);
            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.createAnsweringPeer = function(remoteSdp, remoteUserId, userPreferences) {
            userPreferences = connection.setUserPreferences(userPreferences || {}, remoteUserId);

            var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);
            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.renegotiatePeer = function(remoteUserId, userPreferences, remoteSdp) {
            if (!connection.peers[remoteUserId]) {
                if (connection.enableLogs) {
                    console.error('Peer (' + remoteUserId + ') does not exist. Renegotiation skipped.');
                }
                return;
            }

            if (!userPreferences) {
                userPreferences = {};
            }

            userPreferences.renegotiatingPeer = true;
            userPreferences.peerRef = connection.peers[remoteUserId].peer;
            userPreferences.channels = connection.peers[remoteUserId].channels;

            var localConfig = this.getLocalConfig(remoteSdp, remoteUserId, userPreferences);

            connection.peers[remoteUserId] = new PeerInitiator(localConfig);
        };

        this.replaceTrack = function(track, remoteUserId, isVideoTrack) {
            if (!connection.peers[remoteUserId]) {
                throw 'This peer (' + remoteUserId + ') does not exist.';
            }

            var peer = connection.peers[remoteUserId].peer;

            if (!!peer.getSenders && typeof peer.getSenders === 'function' && peer.getSenders().length) {
                peer.getSenders().forEach(function(rtpSender) {
                    if (isVideoTrack && rtpSender.track.kind === 'video') {
                        connection.peers[remoteUserId].peer.lastVideoTrack = rtpSender.track;
                        rtpSender.replaceTrack(track);
                    }

                    if (!isVideoTrack && rtpSender.track.kind === 'audio') {
                        connection.peers[remoteUserId].peer.lastAudioTrack = rtpSender.track;
                        rtpSender.replaceTrack(track);
                    }
                });
                return;
            }

            console.warn('RTPSender.replaceTrack is NOT supported.');
            this.renegotiatePeer(remoteUserId);
        };

        this.onNegotiationNeeded = function(message, remoteUserId) {};
        this.addNegotiatedMessage = function(message, remoteUserId) {
            if (message.type && message.sdp) {
                if (message.type == 'answer') {
                    if (connection.peers[remoteUserId]) {
                        connection.peers[remoteUserId].addRemoteSdp(message);
                    }
                }

                if (message.type == 'offer') {
                    if (message.renegotiatingPeer) {
                        this.renegotiatePeer(remoteUserId, null, message);
                    } else {
                        this.createAnsweringPeer(message, remoteUserId);
                    }
                }

                if (connection.enableLogs) {
                    console.log('Remote peer\'s sdp:', message.sdp);
                }
                return;
            }

            if (message.candidate) {
                if (connection.peers[remoteUserId]) {
                    connection.peers[remoteUserId].addRemoteCandidate(message);
                }

                if (connection.enableLogs) {
                    console.log('Remote peer\'s candidate pairs:', message.candidate);
                }
                return;
            }

            if (message.enableMedia) {
                connection.session = message.userPreferences.session || connection.session;

                if (connection.session.oneway && connection.attachStreams.length) {
                    connection.attachStreams = [];
                }

                if (message.userPreferences.isDataOnly && connection.attachStreams.length) {
                    connection.attachStreams.length = [];
                }

                var streamsToShare = {};
                connection.attachStreams.forEach(function(stream) {
                    streamsToShare[stream.streamid] = {
                        isAudio: !!stream.isAudio,
                        isVideo: !!stream.isVideo,
                        isScreen: !!stream.isScreen
                    };
                });
                message.userPreferences.streamsToShare = streamsToShare;

                self.onNegotiationNeeded({
                    readyForOffer: true,
                    userPreferences: message.userPreferences
                }, remoteUserId);
            }

            if (message.readyForOffer) {
                connection.onReadyForOffer(remoteUserId, message.userPreferences);
            }

            function cb(stream) {
                gumCallback(stream, message, remoteUserId);
            }
        };

        function gumCallback(stream, message, remoteUserId) {
            var streamsToShare = {};
            connection.attachStreams.forEach(function(stream) {
                streamsToShare[stream.streamid] = {
                    isAudio: !!stream.isAudio,
                    isVideo: !!stream.isVideo,
                    isScreen: !!stream.isScreen
                };
            });
            message.userPreferences.streamsToShare = streamsToShare;

            self.onNegotiationNeeded({
                readyForOffer: true,
                userPreferences: message.userPreferences
            }, remoteUserId);
        }

        this.onGettingRemoteMedia = function(stream, remoteUserId) {};
        this.onRemovingRemoteMedia = function(stream, remoteUserId) {};
        this.onGettingLocalMedia = function(localStream) {};
        this.onLocalMediaError = function(error, constraints) {
            connection.onMediaError(error, constraints);
        };

        function initFileBufferReader() {
            connection.fbr = new FileBufferReader();
            connection.fbr.onProgress = function(chunk) {
                connection.onFileProgress(chunk);
            };
            connection.fbr.onBegin = function(file) {
                connection.onFileStart(file);
            };
            connection.fbr.onEnd = function(file) {
                connection.onFileEnd(file);
            };
        }

        this.shareFile = function(file, remoteUserId) {
            initFileBufferReader();

            connection.fbr.readAsArrayBuffer(file, function(uuid) {
                var arrayOfUsers = connection.getAllParticipants();

                if (remoteUserId) {
                    arrayOfUsers = [remoteUserId];
                }

                arrayOfUsers.forEach(function(participant) {
                    connection.fbr.getNextChunk(uuid, function(nextChunk) {
                        connection.peers[participant].channels.forEach(function(channel) {
                            channel.send(nextChunk);
                        });
                    }, participant);
                });
            }, {
                userid: connection.userid,
                // extra: connection.extra,
                chunkSize: DetectRTC.browser.name === 'Firefox' ? 15 * 1000 : connection.chunkSize || 0
            });
        };

        if (true) {
            var textReceiver = new TextReceiver(connection);
        }

        this.onDataChannelMessage = function(message, remoteUserId) {
            textReceiver.receive(JSON.parse(message), remoteUserId, connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {});
        };

        this.onDataChannelClosed = function(event, remoteUserId) {
            event.userid = remoteUserId;
            event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {};
            connection.onclose(event);
        };

        this.onDataChannelError = function(error, remoteUserId) {
            error.userid = remoteUserId;
            event.extra = connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {};
            connection.onerror(error);
        };

        this.onDataChannelOpened = function(channel, remoteUserId) {
            // keep last channel only; we are not expecting parallel/channels channels
            if (connection.peers[remoteUserId].channels.length) {
                connection.peers[remoteUserId].channels = [channel];
                return;
            }

            connection.peers[remoteUserId].channels.push(channel);
            connection.onopen({
                userid: remoteUserId,
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                channel: channel
            });
        };

        this.onPeerStateChanged = function(state) {
            connection.onPeerStateChanged(state);
        };

        this.onNegotiationStarted = function(remoteUserId, states) {};
        this.onNegotiationCompleted = function(remoteUserId, states) {};

        this.getRemoteStreams = function(remoteUserId) {
            remoteUserId = remoteUserId || connection.peers.getAllParticipants()[0];
            return connection.peers[remoteUserId] ? connection.peers[remoteUserId].streams : [];
        };
    }

    'use strict';

    // Last Updated On: 2019-01-10 5:32:55 AM UTC

    // ________________
    // DetectRTC v1.3.9

    // Open-Sourced: https://github.com/muaz-khan/DetectRTC

    // --------------------------------------------------
    // Muaz Khan     - www.MuazKhan.com
    // MIT License   - www.WebRTC-Experiment.com/licence
    // --------------------------------------------------

    (function() {

        var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

        var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node && /*node-process*/ !process.browser;
        if (isNodejs) {
            var version = process.versions.node.toString().replace('v', '');
            browserFakeUserAgent = 'Nodejs/' + version + ' (NodeOS) AppleWebKit/' + version + ' (KHTML, like Gecko) Nodejs/' + version + ' Nodejs/' + version
        }

        (function(that) {
            if (typeof window !== 'undefined') {
                return;
            }

            if (typeof window === 'undefined' && typeof global !== 'undefined') {
                global.navigator = {
                    userAgent: browserFakeUserAgent,
                    getUserMedia: function() {}
                };

                /*global window:true */
                that.window = global;
            } else if (typeof window === 'undefined') {
                // window = this;
            }

            if (typeof location === 'undefined') {
                /*global location:true */
                that.location = {
                    protocol: 'file:',
                    href: '',
                    hash: ''
                };
            }

            if (typeof screen === 'undefined') {
                /*global screen:true */
                that.screen = {
                    width: 0,
                    height: 0
                };
            }
        })(typeof global !== 'undefined' ? global : window);

        /*global navigator:true */
        var navigator = window.navigator;

        if (typeof navigator !== 'undefined') {
            if (typeof navigator.webkitGetUserMedia !== 'undefined') {
                navigator.getUserMedia = navigator.webkitGetUserMedia;
            }

            if (typeof navigator.mozGetUserMedia !== 'undefined') {
                navigator.getUserMedia = navigator.mozGetUserMedia;
            }
        } else {
            navigator = {
                getUserMedia: function() {},
                userAgent: browserFakeUserAgent
            };
        }

        var isMobileDevice = !!(/Android|webOS|iPhone|iPad|iPod|BB10|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent || ''));

        var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);

        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof window.InstallTrigger !== 'undefined';
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        var isChrome = !!window.chrome && !isOpera;
        var isIE = typeof document !== 'undefined' && !!document.documentMode && !isEdge;

        // this one can also be used:
        // https://www.websocket.org/js/stuff.js (DetectBrowser.js)

        function getBrowserInfo() {
            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browserName = navigator.appName;
            var fullVersion = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;

            // both and safri and chrome has same userAgent
            if (isSafari && !isChrome && nAgt.indexOf('CriOS') !== -1) {
                isSafari = false;
                isChrome = true;
            }

            // In Opera, the true version is after 'Opera' or after 'Version'
            if (isOpera) {
                browserName = 'Opera';
                try {
                    fullVersion = navigator.userAgent.split('OPR/')[1].split(' ')[0];
                    majorVersion = fullVersion.split('.')[0];
                } catch (e) {
                    fullVersion = '0.0.0.0';
                    majorVersion = 0;
                }
            }
            // In MSIE version <=10, the true version is after 'MSIE' in userAgent
            // In IE 11, look for the string after 'rv:'
            else if (isIE) {
                verOffset = nAgt.indexOf('rv:');
                if (verOffset > 0) { //IE 11
                    fullVersion = nAgt.substring(verOffset + 3);
                } else { //IE 10 or earlier
                    verOffset = nAgt.indexOf('MSIE');
                    fullVersion = nAgt.substring(verOffset + 5);
                }
                browserName = 'IE';
            }
            // In Chrome, the true version is after 'Chrome' 
            else if (isChrome) {
                verOffset = nAgt.indexOf('Chrome');
                browserName = 'Chrome';
                fullVersion = nAgt.substring(verOffset + 7);
            }
            // In Safari, the true version is after 'Safari' or after 'Version' 
            else if (isSafari) {
                verOffset = nAgt.indexOf('Safari');

                browserName = 'Safari';
                fullVersion = nAgt.substring(verOffset + 7);

                if ((verOffset = nAgt.indexOf('Version')) !== -1) {
                    fullVersion = nAgt.substring(verOffset + 8);
                }

                if (navigator.userAgent.indexOf('Version/') !== -1) {
                    fullVersion = navigator.userAgent.split('Version/')[1].split(' ')[0];
                }
            }
            // In Firefox, the true version is after 'Firefox' 
            else if (isFirefox) {
                verOffset = nAgt.indexOf('Firefox');
                browserName = 'Firefox';
                fullVersion = nAgt.substring(verOffset + 8);
            }

            // In most other browsers, 'name/version' is at the end of userAgent 
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browserName = nAgt.substring(nameOffset, verOffset);
                fullVersion = nAgt.substring(verOffset + 1);

                if (browserName.toLowerCase() === browserName.toUpperCase()) {
                    browserName = navigator.appName;
                }
            }

            if (isEdge) {
                browserName = 'Edge';
                fullVersion = navigator.userAgent.split('Edge/')[1];
                // fullVersion = parseInt(navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)[2], 10).toString();
            }

            // trim the fullVersion string at semicolon/space/bracket if present
            if ((ix = fullVersion.search(/[; \)]/)) !== -1) {
                fullVersion = fullVersion.substring(0, ix);
            }

            majorVersion = parseInt('' + fullVersion, 10);

            if (isNaN(majorVersion)) {
                fullVersion = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            return {
                fullVersion: fullVersion,
                version: majorVersion,
                name: browserName,
                isPrivateBrowsing: false
            };
        }

        // via: https://gist.github.com/cou929/7973956

        function retry(isDone, next) {
            var currentTrial = 0,
                maxRetry = 50,
                interval = 10,
                isTimeout = false;
            var id = window.setInterval(
                function() {
                    if (isDone()) {
                        window.clearInterval(id);
                        next(isTimeout);
                    }
                    if (currentTrial++ > maxRetry) {
                        window.clearInterval(id);
                        isTimeout = true;
                        next(isTimeout);
                    }
                },
                10
            );
        }

        function isIE10OrLater(userAgent) {
            var ua = userAgent.toLowerCase();
            if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
                return false;
            }
            var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
            if (match && parseInt(match[1], 10) >= 10) {
                return true;
            }
            return false;
        }

        function detectPrivateMode(callback) {
            var isPrivate;

            try {

                if (window.webkitRequestFileSystem) {
                    window.webkitRequestFileSystem(
                        window.TEMPORARY, 1,
                        function() {
                            isPrivate = false;
                        },
                        function(e) {
                            isPrivate = true;
                        }
                    );
                } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                    var db;
                    try {
                        db = window.indexedDB.open('test');
                        db.onerror = function() {
                            return true;
                        };
                    } catch (e) {
                        isPrivate = true;
                    }

                    if (typeof isPrivate === 'undefined') {
                        retry(
                            function isDone() {
                                return db.readyState === 'done' ? true : false;
                            },
                            function next(isTimeout) {
                                if (!isTimeout) {
                                    isPrivate = db.result ? false : true;
                                }
                            }
                        );
                    }
                } else if (isIE10OrLater(window.navigator.userAgent)) {
                    isPrivate = false;
                    try {
                        if (!window.indexedDB) {
                            isPrivate = true;
                        }
                    } catch (e) {
                        isPrivate = true;
                    }
                } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
                    try {
                        window.localStorage.setItem('test', 1);
                    } catch (e) {
                        isPrivate = true;
                    }

                    if (typeof isPrivate === 'undefined') {
                        isPrivate = false;
                        window.localStorage.removeItem('test');
                    }
                }

            } catch (e) {
                isPrivate = false;
            }

            retry(
                function isDone() {
                    return typeof isPrivate !== 'undefined' ? true : false;
                },
                function next(isTimeout) {
                    callback(isPrivate);
                }
            );
        }

        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry|BB10/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            },
            getOsName: function() {
                var osName = 'Unknown OS';
                if (isMobile.Android()) {
                    osName = 'Android';
                }

                if (isMobile.BlackBerry()) {
                    osName = 'BlackBerry';
                }

                if (isMobile.iOS()) {
                    osName = 'iOS';
                }

                if (isMobile.Opera()) {
                    osName = 'Opera Mini';
                }

                if (isMobile.Windows()) {
                    osName = 'Windows';
                }

                return osName;
            }
        };

        // via: http://jsfiddle.net/ChristianL/AVyND/
        function detectDesktopOS() {
            var unknown = '-';

            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;

            var os = unknown;
            var clientStrings = [{
                s: 'Windows 10',
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: 'Windows 8.1',
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: 'Windows 8',
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: 'Windows 7',
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: 'Windows Vista',
                r: /Windows NT 6.0/
            }, {
                s: 'Windows Server 2003',
                r: /Windows NT 5.2/
            }, {
                s: 'Windows XP',
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: 'Windows 2000',
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: 'Windows ME',
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: 'Windows 98',
                r: /(Windows 98|Win98)/
            }, {
                s: 'Windows 95',
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: 'Windows NT 4.0',
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: 'Windows CE',
                r: /Windows CE/
            }, {
                s: 'Windows 3.11',
                r: /Win16/
            }, {
                s: 'Android',
                r: /Android/
            }, {
                s: 'Open BSD',
                r: /OpenBSD/
            }, {
                s: 'Sun OS',
                r: /SunOS/
            }, {
                s: 'Linux',
                r: /(Linux|X11)/
            }, {
                s: 'iOS',
                r: /(iPhone|iPad|iPod)/
            }, {
                s: 'Mac OS X',
                r: /Mac OS X/
            }, {
                s: 'Mac OS',
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: 'QNX',
                r: /QNX/
            }, {
                s: 'UNIX',
                r: /UNIX/
            }, {
                s: 'BeOS',
                r: /BeOS/
            }, {
                s: 'OS/2',
                r: /OS\/2/
            }, {
                s: 'Search Bot',
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
            for (var i = 0, cs; cs = clientStrings[i]; i++) {
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                if (/Windows (.*)/.test(os)) {
                    osVersion = /Windows (.*)/.exec(os)[1];
                }
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    if (/Mac OS X (10[\.\_\d]+)/.test(nAgt)) {
                        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    }
                    break;
                case 'Android':
                    if (/Android ([\.\_\d]+)/.test(nAgt)) {
                        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    }
                    break;
                case 'iOS':
                    if (/OS (\d+)_(\d+)_?(\d+)?/.test(nAgt)) {
                        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    }
                    break;
            }

            return {
                osName: os,
                osVersion: osVersion
            };
        }

        var osName = 'Unknown OS';
        var osVersion = 'Unknown OS Version';

        function getAndroidVersion(ua) {
            ua = (ua || navigator.userAgent).toLowerCase();
            var match = ua.match(/android\s([0-9\.]*)/);
            return match ? match[1] : false;
        }

        var osInfo = detectDesktopOS();

        if (osInfo && osInfo.osName && osInfo.osName != '-') {
            osName = osInfo.osName;
            osVersion = osInfo.osVersion;
        } else if (isMobile.any()) {
            osName = isMobile.getOsName();

            if (osName == 'Android') {
                osVersion = getAndroidVersion();
            }
        }

        var isNodejs = typeof process === 'object' && typeof process.versions === 'object' && process.versions.node;

        if (osName === 'Unknown OS' && isNodejs) {
            osName = 'Nodejs';
            osVersion = process.versions.node.toString().replace('v', '');
        }

        var isCanvasSupportsStreamCapturing = false;
        var isVideoSupportsStreamCapturing = false;
        ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
            if (typeof document === 'undefined' || typeof document.createElement !== 'function') {
                return;
            }

            if (!isCanvasSupportsStreamCapturing && item in document.createElement('canvas')) {
                isCanvasSupportsStreamCapturing = true;
            }

            if (!isVideoSupportsStreamCapturing && item in document.createElement('video')) {
                isVideoSupportsStreamCapturing = true;
            }
        });

        var regexIpv4Local = /^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/,
            regexIpv4 = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
            regexIpv6 = /[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}/;

        // via: https://github.com/diafygi/webrtc-ips
        function DetectLocalIPAddress(callback, stream) {
            if (!DetectRTC.isWebRTCSupported) {
                return;
            }

            var isPublic = true,
                isIpv4 = true;
            getIPs(function(ip) {
                if (!ip) {
                    callback(); // Pass nothing to tell that ICE-gathering-ended
                } else if (ip.match(regexIpv4Local)) {
                    isPublic = false;
                    callback('Local: ' + ip, isPublic, isIpv4);
                } else if (ip.match(regexIpv6)) { //via https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only
                    isIpv4 = false;
                    callback('Public: ' + ip, isPublic, isIpv4);
                } else {
                    callback('Public: ' + ip, isPublic, isIpv4);
                }
            }, stream);
        }

        function getIPs(callback, stream) {
            if (typeof document === 'undefined' || typeof document.getElementById !== 'function') {
                return;
            }

            var ipDuplicates = {};

            var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

            if (!RTCPeerConnection) {
                var iframe = document.getElementById('iframe');
                if (!iframe) {
                    return;
                }
                var win = iframe.contentWindow;
                RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
            }

            if (!RTCPeerConnection) {
                return;
            }

            var peerConfig = null;

            if (DetectRTC.browser === 'Chrome' && DetectRTC.browser.version < 58) {
                // todo: add support for older Opera
                peerConfig = {
                    optional: [{
                        RtpDataChannels: true
                    }]
                };
            }

            var servers = {
                iceServers: [{
                    urls: 'stun:stun.l.google.com:19302'
                }]
            };

            var pc = new RTCPeerConnection(servers, peerConfig);

            if (stream) {
                if (pc.addStream) {
                    pc.addStream(stream);
                } else if (pc.addTrack && stream.getTracks()[0]) {
                    pc.addTrack(stream.getTracks()[0], stream);
                }
            }

            function handleCandidate(candidate) {
                if (!candidate) {
                    callback(); // Pass nothing to tell that ICE-gathering-ended
                    return;
                }

                var match = regexIpv4.exec(candidate);
                if (!match) {
                    return;
                }
                var ipAddress = match[1];
                var isPublic = (candidate.match(regexIpv4Local)),
                    isIpv4 = true;

                if (ipDuplicates[ipAddress] === undefined) {
                    callback(ipAddress, isPublic, isIpv4);
                }

                ipDuplicates[ipAddress] = true;
            }

            // listen for candidate events
            pc.onicecandidate = function(event) {
                if (event.candidate && event.candidate.candidate) {
                    handleCandidate(event.candidate.candidate);
                } else {
                    handleCandidate(); // Pass nothing to tell that ICE-gathering-ended
                }
            };

            // create data channel
            if (!stream) {
                try {
                    pc.createDataChannel('sctp', {});
                } catch (e) {}
            }

            // create an offer sdp
            if (DetectRTC.isPromisesSupported) {
                pc.createOffer().then(function(result) {
                    pc.setLocalDescription(result).then(afterCreateOffer);
                });
            } else {
                pc.createOffer(function(result) {
                    pc.setLocalDescription(result, afterCreateOffer, function() {});
                }, function() {});
            }

            function afterCreateOffer() {
                var lines = pc.localDescription.sdp.split('\n');

                lines.forEach(function(line) {
                    if (line && line.indexOf('a=candidate:') === 0) {
                        handleCandidate(line);
                    }
                });
            }
        }

        var MediaDevices = [];

        var audioInputDevices = [];
        var audioOutputDevices = [];
        var videoInputDevices = [];

        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
            // Firefox 38+ seems having support of enumerateDevices
            // Thanks @xdumaine/enumerateDevices
            navigator.enumerateDevices = function(callback) {
                var enumerateDevices = navigator.mediaDevices.enumerateDevices();
                if (enumerateDevices && enumerateDevices.then) {
                    navigator.mediaDevices.enumerateDevices().then(callback).catch(function() {
                        callback([]);
                    });
                } else {
                    callback([]);
                }
            };
        }

        // Media Devices detection
        var canEnumerate = false;

        /*global MediaStreamTrack:true */
        if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
            canEnumerate = true;
        } else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
            canEnumerate = true;
        }

        var hasMicrophone = false;
        var hasSpeakers = false;
        var hasWebcam = false;

        var isWebsiteHasMicrophonePermissions = false;
        var isWebsiteHasWebcamPermissions = false;

        // http://dev.w3.org/2011/webrtc/editor/getusermedia.html#mediadevices
        function checkDeviceSupport(callback) {
            if (!canEnumerate) {
                if (callback) {
                    callback();
                }
                return;
            }

            if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
                navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
            }

            if (!navigator.enumerateDevices && navigator.enumerateDevices) {
                navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
            }

            if (!navigator.enumerateDevices) {
                if (callback) {
                    callback();
                }
                return;
            }

            MediaDevices = [];

            audioInputDevices = [];
            audioOutputDevices = [];
            videoInputDevices = [];

            hasMicrophone = false;
            hasSpeakers = false;
            hasWebcam = false;

            isWebsiteHasMicrophonePermissions = false;
            isWebsiteHasWebcamPermissions = false;

            // to prevent duplication
            var alreadyUsedDevices = {};

            navigator.enumerateDevices(function(devices) {
                devices.forEach(function(_device) {
                    var device = {};
                    for (var d in _device) {
                        try {
                            if (typeof _device[d] !== 'function') {
                                device[d] = _device[d];
                            }
                        } catch (e) {}
                    }

                    if (alreadyUsedDevices[device.deviceId + device.label + device.kind]) {
                        return;
                    }

                    // if it is MediaStreamTrack.getSources
                    if (device.kind === 'audio') {
                        device.kind = 'audioinput';
                    }

                    if (device.kind === 'video') {
                        device.kind = 'videoinput';
                    }

                    if (!device.deviceId) {
                        device.deviceId = device.id;
                    }

                    if (!device.id) {
                        device.id = device.deviceId;
                    }

                    if (!device.label) {
                        device.isCustomLabel = true;

                        if (device.kind === 'videoinput') {
                            device.label = 'Camera ' + (videoInputDevices.length + 1);
                        } else if (device.kind === 'audioinput') {
                            device.label = 'Microphone ' + (audioInputDevices.length + 1);
                        } else if (device.kind === 'audiooutput') {
                            device.label = 'Speaker ' + (audioOutputDevices.length + 1);
                        } else {
                            device.label = 'Please invoke getUserMedia once.';
                        }

                        if (typeof DetectRTC !== 'undefined' && DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
                            if (typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
                                device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
                            }
                        }
                    } else {
                        // Firefox on Android still returns empty label
                        if (device.kind === 'videoinput' && !isWebsiteHasWebcamPermissions) {
                            isWebsiteHasWebcamPermissions = true;
                        }

                        if (device.kind === 'audioinput' && !isWebsiteHasMicrophonePermissions) {
                            isWebsiteHasMicrophonePermissions = true;
                        }
                    }

                    if (device.kind === 'audioinput') {
                        hasMicrophone = true;

                        if (audioInputDevices.indexOf(device) === -1) {
                            audioInputDevices.push(device);
                        }
                    }

                    if (device.kind === 'audiooutput') {
                        hasSpeakers = true;

                        if (audioOutputDevices.indexOf(device) === -1) {
                            audioOutputDevices.push(device);
                        }
                    }

                    if (device.kind === 'videoinput') {
                        hasWebcam = true;

                        if (videoInputDevices.indexOf(device) === -1) {
                            videoInputDevices.push(device);
                        }
                    }

                    // there is no 'videoouput' in the spec.
                    MediaDevices.push(device);

                    alreadyUsedDevices[device.deviceId + device.label + device.kind] = device;
                });

                if (typeof DetectRTC !== 'undefined') {
                    // to sync latest outputs
                    DetectRTC.MediaDevices = MediaDevices;
                    DetectRTC.hasMicrophone = hasMicrophone;
                    DetectRTC.hasSpeakers = hasSpeakers;
                    DetectRTC.hasWebcam = hasWebcam;

                    DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
                    DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

                    DetectRTC.audioInputDevices = audioInputDevices;
                    DetectRTC.audioOutputDevices = audioOutputDevices;
                    DetectRTC.videoInputDevices = videoInputDevices;
                }

                if (callback) {
                    callback();
                }
            });
        }

        var DetectRTC = window.DetectRTC || {};

        // ----------
        // DetectRTC.browser.name || DetectRTC.browser.version || DetectRTC.browser.fullVersion
        DetectRTC.browser = getBrowserInfo();

        detectPrivateMode(function(isPrivateBrowsing) {
            DetectRTC.browser.isPrivateBrowsing = !!isPrivateBrowsing;
        });

        // DetectRTC.isChrome || DetectRTC.isFirefox || DetectRTC.isEdge
        DetectRTC.browser['is' + DetectRTC.browser.name] = true;

        // -----------
        DetectRTC.osName = osName;
        DetectRTC.osVersion = osVersion;

        var isNodeWebkit = typeof process === 'object' && typeof process.versions === 'object' && process.versions['node-webkit'];

        // --------- Detect if system supports WebRTC 1.0 or WebRTC 1.1.
        var isWebRTCSupported = false;
        ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
            if (isWebRTCSupported) {
                return;
            }

            if (item in window) {
                isWebRTCSupported = true;
            }
        });
        DetectRTC.isWebRTCSupported = isWebRTCSupported;

        //-------
        DetectRTC.isORTCSupported = typeof RTCIceGatherer !== 'undefined';

        // --------- Detect if system supports screen capturing API
        var isScreenCapturingSupported = false;
        if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 35) {
            isScreenCapturingSupported = true;
        } else if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 34) {
            isScreenCapturingSupported = true;
        } else if (DetectRTC.browser.isEdge && DetectRTC.browser.version >= 17) {
            isScreenCapturingSupported = true; // navigator.getDisplayMedia
        } else if (DetectRTC.osName === 'Android' && DetectRTC.browser.isChrome) {
            isScreenCapturingSupported = true;
        }

        if (!/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
            var isNonLocalHost = typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1;
            if (isNonLocalHost && (DetectRTC.browser.isChrome || DetectRTC.browser.isEdge || DetectRTC.browser.isOpera)) {
                isScreenCapturingSupported = false;
            } else if (DetectRTC.browser.isFirefox) {
                isScreenCapturingSupported = false;
            }
        }
        DetectRTC.isScreenCapturingSupported = isScreenCapturingSupported;

        // --------- Detect if WebAudio API are supported
        var webAudio = {
            isSupported: false,
            isCreateMediaStreamSourceSupported: false
        };

        ['AudioContext', 'webkitAudioContext', 'mozAudioContext', 'msAudioContext'].forEach(function(item) {
            if (webAudio.isSupported) {
                return;
            }

            if (item in window) {
                webAudio.isSupported = true;

                if (window[item] && 'createMediaStreamSource' in window[item].prototype) {
                    webAudio.isCreateMediaStreamSourceSupported = true;
                }
            }
        });
        DetectRTC.isAudioContextSupported = webAudio.isSupported;
        DetectRTC.isCreateMediaStreamSourceSupported = webAudio.isCreateMediaStreamSourceSupported;

        // ---------- Detect if SCTP/RTP channels are supported.

        var isRtpDataChannelsSupported = false;
        if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 31) {
            isRtpDataChannelsSupported = true;
        }
        DetectRTC.isRtpDataChannelsSupported = isRtpDataChannelsSupported;

        var isSCTPSupportd = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 28) {
            isSCTPSupportd = true;
        } else if (DetectRTC.browser.isChrome && DetectRTC.browser.version > 25) {
            isSCTPSupportd = true;
        } else if (DetectRTC.browser.isOpera && DetectRTC.browser.version >= 11) {
            isSCTPSupportd = true;
        }
        DetectRTC.isSctpDataChannelsSupported = isSCTPSupportd;

        // ---------

        DetectRTC.isMobileDevice = isMobileDevice; // "isMobileDevice" boolean is defined in "getBrowserInfo.js"

        // ------
        var isGetUserMediaSupported = false;
        if (navigator.getUserMedia) {
            isGetUserMediaSupported = true;
        } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            isGetUserMediaSupported = true;
        }

        if (DetectRTC.browser.isChrome && DetectRTC.browser.version >= 46 && !/^(https:|chrome-extension:)$/g.test(location.protocol || '')) {
            if (typeof document !== 'undefined' && typeof document.domain === 'string' && document.domain.search && document.domain.search(/localhost|127.0./g) === -1) {
                isGetUserMediaSupported = 'Requires HTTPs';
            }
        }

        if (DetectRTC.osName === 'Nodejs') {
            isGetUserMediaSupported = false;
        }
        DetectRTC.isGetUserMediaSupported = isGetUserMediaSupported;

        var displayResolution = '';
        if (screen.width) {
            var width = (screen.width) ? screen.width : '';
            var height = (screen.height) ? screen.height : '';
            displayResolution += '' + width + ' x ' + height;
        }
        DetectRTC.displayResolution = displayResolution;

        function getAspectRatio(w, h) {
            function gcd(a, b) {
                return (b == 0) ? a : gcd(b, a % b);
            }
            var r = gcd(w, h);
            return (w / r) / (h / r);
        }

        DetectRTC.displayAspectRatio = getAspectRatio(screen.width, screen.height).toFixed(2);

        // ----------
        DetectRTC.isCanvasSupportsStreamCapturing = isCanvasSupportsStreamCapturing;
        DetectRTC.isVideoSupportsStreamCapturing = isVideoSupportsStreamCapturing;

        if (DetectRTC.browser.name == 'Chrome' && DetectRTC.browser.version >= 53) {
            if (!DetectRTC.isCanvasSupportsStreamCapturing) {
                DetectRTC.isCanvasSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
            }

            if (!DetectRTC.isVideoSupportsStreamCapturing) {
                DetectRTC.isVideoSupportsStreamCapturing = 'Requires chrome flag: enable-experimental-web-platform-features';
            }
        }

        // ------
        DetectRTC.DetectLocalIPAddress = DetectLocalIPAddress;

        DetectRTC.isWebSocketsSupported = 'WebSocket' in window && 2 === window.WebSocket.CLOSING;
        DetectRTC.isWebSocketsBlocked = !DetectRTC.isWebSocketsSupported;

        if (DetectRTC.osName === 'Nodejs') {
            DetectRTC.isWebSocketsSupported = true;
            DetectRTC.isWebSocketsBlocked = false;
        }

        DetectRTC.checkWebSocketsSupport = function(callback) {
            callback = callback || function() {};
            try {
                var starttime;
                var websocket = new WebSocket('wss://echo.websocket.org:443/');
                websocket.onopen = function() {
                    DetectRTC.isWebSocketsBlocked = false;
                    starttime = (new Date).getTime();
                    websocket.send('ping');
                };
                websocket.onmessage = function() {
                    DetectRTC.WebsocketLatency = (new Date).getTime() - starttime + 'ms';
                    callback();
                    websocket.close();
                    websocket = null;
                };
                websocket.onerror = function() {
                    DetectRTC.isWebSocketsBlocked = true;
                    callback();
                };
            } catch (e) {
                DetectRTC.isWebSocketsBlocked = true;
                callback();
            }
        };

        // -------
        DetectRTC.load = function(callback) {
            callback = callback || function() {};
            checkDeviceSupport(callback);
        };

        // check for microphone/camera support!
        if (typeof checkDeviceSupport === 'function') {
            // checkDeviceSupport();
        }

        if (typeof MediaDevices !== 'undefined') {
            DetectRTC.MediaDevices = MediaDevices;
        } else {
            DetectRTC.MediaDevices = [];
        }

        DetectRTC.hasMicrophone = hasMicrophone;
        DetectRTC.hasSpeakers = hasSpeakers;
        DetectRTC.hasWebcam = hasWebcam;

        DetectRTC.isWebsiteHasWebcamPermissions = isWebsiteHasWebcamPermissions;
        DetectRTC.isWebsiteHasMicrophonePermissions = isWebsiteHasMicrophonePermissions;

        DetectRTC.audioInputDevices = audioInputDevices;
        DetectRTC.audioOutputDevices = audioOutputDevices;
        DetectRTC.videoInputDevices = videoInputDevices;

        // ------
        var isSetSinkIdSupported = false;
        if (typeof document !== 'undefined' && typeof document.createElement === 'function' && 'setSinkId' in document.createElement('video')) {
            isSetSinkIdSupported = true;
        }
        DetectRTC.isSetSinkIdSupported = isSetSinkIdSupported;

        // -----
        var isRTPSenderReplaceTracksSupported = false;
        if (DetectRTC.browser.isFirefox && typeof mozRTCPeerConnection !== 'undefined' /*&& DetectRTC.browser.version > 39*/ ) {
            /*global mozRTCPeerConnection:true */
            if ('getSenders' in mozRTCPeerConnection.prototype) {
                isRTPSenderReplaceTracksSupported = true;
            }
        } else if (DetectRTC.browser.isChrome && typeof webkitRTCPeerConnection !== 'undefined') {
            /*global webkitRTCPeerConnection:true */
            if ('getSenders' in webkitRTCPeerConnection.prototype) {
                isRTPSenderReplaceTracksSupported = true;
            }
        }
        DetectRTC.isRTPSenderReplaceTracksSupported = isRTPSenderReplaceTracksSupported;

        //------
        var isRemoteStreamProcessingSupported = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version > 38) {
            isRemoteStreamProcessingSupported = true;
        }
        DetectRTC.isRemoteStreamProcessingSupported = isRemoteStreamProcessingSupported;

        //-------
        var isApplyConstraintsSupported = false;

        /*global MediaStreamTrack:true */
        if (typeof MediaStreamTrack !== 'undefined' && 'applyConstraints' in MediaStreamTrack.prototype) {
            isApplyConstraintsSupported = true;
        }
        DetectRTC.isApplyConstraintsSupported = isApplyConstraintsSupported;

        //-------
        var isMultiMonitorScreenCapturingSupported = false;
        if (DetectRTC.browser.isFirefox && DetectRTC.browser.version >= 43) {
            // version 43 merely supports platforms for multi-monitors
            // version 44 will support exact multi-monitor selection i.e. you can select any monitor for screen capturing.
            isMultiMonitorScreenCapturingSupported = true;
        }
        DetectRTC.isMultiMonitorScreenCapturingSupported = isMultiMonitorScreenCapturingSupported;

        DetectRTC.isPromisesSupported = !!('Promise' in window);

        // version is generated by "grunt"
        DetectRTC.version = '1.3.9';

        if (typeof DetectRTC === 'undefined') {
            window.DetectRTC = {};
        }

        var MediaStream = window.MediaStream;

        if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
            MediaStream = webkitMediaStream;
        }

        if (typeof MediaStream !== 'undefined' && typeof MediaStream === 'function') {
            DetectRTC.MediaStream = Object.keys(MediaStream.prototype);
        } else DetectRTC.MediaStream = false;

        if (typeof MediaStreamTrack !== 'undefined') {
            DetectRTC.MediaStreamTrack = Object.keys(MediaStreamTrack.prototype);
        } else DetectRTC.MediaStreamTrack = false;

        var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

        if (typeof RTCPeerConnection !== 'undefined') {
            DetectRTC.RTCPeerConnection = Object.keys(RTCPeerConnection.prototype);
        } else DetectRTC.RTCPeerConnection = false;

        window.DetectRTC = DetectRTC;

        if (true /* && !!module.exports*/ ) {
            module.exports = DetectRTC;
        }

        if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return DetectRTC;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    })();

    // globals.js

    if (typeof cordova !== 'undefined') {
        DetectRTC.isMobileDevice = true;
        DetectRTC.browser.name = 'Chrome';
    }

    if (navigator && navigator.userAgent && navigator.userAgent.indexOf('Crosswalk') !== -1) {
        DetectRTC.isMobileDevice = true;
        DetectRTC.browser.name = 'Chrome';
    }

    function fireEvent(obj, eventName, args) {
        if (typeof CustomEvent === 'undefined') {
            return;
        }

        var eventDetail = {
            arguments: args,
            __exposedProps__: args
        };

        var event = new CustomEvent(eventName, eventDetail);
        obj.dispatchEvent(event);
    }

    function setHarkEvents(connection, streamEvent) {
        if (!streamEvent.stream || !getTracks(streamEvent.stream, 'audio').length) return;

        if (!connection || !streamEvent) {
            throw 'Both arguments are required.';
        }

        if (!connection.onspeaking || !connection.onsilence) {
            return;
        }

        if (typeof hark === 'undefined') {
            throw 'hark.js not found.';
        }

        hark(streamEvent.stream, {
            onspeaking: function() {
                connection.onspeaking(streamEvent);
            },
            onsilence: function() {
                connection.onsilence(streamEvent);
            },
            onvolumechange: function(volume, threshold) {
                if (!connection.onvolumechange) {
                    return;
                }
                connection.onvolumechange(merge({
                    volume: volume,
                    threshold: threshold
                }, streamEvent));
            }
        });
    }

    function setMuteHandlers(connection, streamEvent) {
        if (!streamEvent.stream || !streamEvent.stream || !streamEvent.stream.addEventListener) return;

        streamEvent.stream.addEventListener('mute', function(event) {
            event = connection.streamEvents[streamEvent.streamid];

            event.session = {
                audio: event.muteType === 'audio',
                video: event.muteType === 'video'
            };

            connection.onmute(event);
        }, false);

        streamEvent.stream.addEventListener('unmute', function(event) {
            event = connection.streamEvents[streamEvent.streamid];

            event.session = {
                audio: event.unmuteType === 'audio',
                video: event.unmuteType === 'video'
            };

            connection.onunmute(event);
        }, false);
    }

    function getRandomString() {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }

    // Get HTMLAudioElement/HTMLVideoElement accordingly
    // todo: add API documentation for connection.autoCreateMediaElement

    function getRMCMediaElement(stream, callback, connection) {
        if (!connection.autoCreateMediaElement) {
            callback({});
            return;
        }

        var isAudioOnly = false;
        if (!getTracks(stream, 'video').length && !stream.isVideo && !stream.isScreen) {
            isAudioOnly = true;
        }

        if (DetectRTC.browser.name === 'Firefox') {
            if (connection.session.video || connection.session.screen) {
                isAudioOnly = false;
            }
        }

        var mediaElement = document.createElement(isAudioOnly ? 'audio' : 'video');

        mediaElement.srcObject = stream;

        try {
            mediaElement.setAttributeNode(document.createAttribute('autoplay'));
            mediaElement.setAttributeNode(document.createAttribute('playsinline'));
            mediaElement.setAttributeNode(document.createAttribute('controls'));
        } catch (e) {
            mediaElement.setAttribute('autoplay', true);
            mediaElement.setAttribute('playsinline', true);
            mediaElement.setAttribute('controls', true);
        }

        // http://goo.gl/WZ5nFl
        // Firefox don't yet support onended for any stream (remote/local)
        if (DetectRTC.browser.name === 'Firefox') {
            var streamEndedEvent = 'ended';

            if ('oninactive' in mediaElement) {
                streamEndedEvent = 'inactive';
            }

            mediaElement.addEventListener(streamEndedEvent, function() {
                // fireEvent(stream, streamEndedEvent, stream);
                currentUserMediaRequest.remove(stream.idInstance);

                if (stream.type === 'local') {
                    streamEndedEvent = 'ended';

                    if ('oninactive' in stream) {
                        streamEndedEvent = 'inactive';
                    }

                    StreamsHandler.onSyncNeeded(stream.streamid, streamEndedEvent);

                    connection.attachStreams.forEach(function(aStream, idx) {
                        if (stream.streamid === aStream.streamid) {
                            delete connection.attachStreams[idx];
                        }
                    });

                    var newStreamsArray = [];
                    connection.attachStreams.forEach(function(aStream) {
                        if (aStream) {
                            newStreamsArray.push(aStream);
                        }
                    });
                    connection.attachStreams = newStreamsArray;

                    var streamEvent = connection.streamEvents[stream.streamid];

                    if (streamEvent) {
                        connection.onstreamended(streamEvent);
                        return;
                    }
                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                }
            }, false);
        }

        var played = mediaElement.play();
        if (typeof played !== 'undefined') {
            var cbFired = false;
            setTimeout(function() {
                if (!cbFired) {
                    cbFired = true;
                    callback(mediaElement);
                }
            }, 1000);
            played.then(function() {
                if (cbFired) return;
                cbFired = true;
                callback(mediaElement);
            }).catch(function(error) {
                if (cbFired) return;
                cbFired = true;
                callback(mediaElement);
            });
        } else {
            callback(mediaElement);
        }
    }

    // if IE
    if (!window.addEventListener) {
        window.addEventListener = function(el, eventName, eventHandler) {
            if (!el.attachEvent) {
                return;
            }
            el.attachEvent('on' + eventName, eventHandler);
        };
    }

    function listenEventHandler(eventName, eventHandler) {
        window.removeEventListener(eventName, eventHandler);
        window.addEventListener(eventName, eventHandler, false);
    }

    window.attachEventListener = function(video, type, listener, useCapture) {
        video.addEventListener(type, listener, useCapture);
    };

    function removeNullEntries(array) {
        var newArray = [];
        array.forEach(function(item) {
            if (item) {
                newArray.push(item);
            }
        });
        return newArray;
    }


    function isData(session) {
        return !session.audio && !session.video && !session.screen && session.data;
    }

    function isNull(obj) {
        return typeof obj === 'undefined';
    }

    function isString(obj) {
        return typeof obj === 'string';
    }

    var MediaStream = window.MediaStream;

    if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
        MediaStream = webkitMediaStream;
    }

    /*global MediaStream:true */
    if (typeof MediaStream !== 'undefined') {
        if (!('stop' in MediaStream.prototype)) {
            MediaStream.prototype.stop = function() {
                this.getTracks().forEach(function(track) {
                    track.stop();
                });
            };
        }
    }

    function isAudioPlusTab(connection, audioPlusTab) {
        if (connection.session.audio && connection.session.audio === 'two-way') {
            return false;
        }

        if (DetectRTC.browser.name === 'Firefox' && audioPlusTab !== false) {
            return true;
        }

        if (DetectRTC.browser.name !== 'Chrome' || DetectRTC.browser.version < 50) return false;

        if (typeof audioPlusTab === true) {
            return true;
        }

        if (typeof audioPlusTab === 'undefined' && connection.session.audio && connection.session.screen && !connection.session.video) {
            audioPlusTab = true;
            return true;
        }

        return false;
    }

    function getAudioScreenConstraints(screen_constraints) {
        if (DetectRTC.browser.name === 'Firefox') {
            return true;
        }

        if (DetectRTC.browser.name !== 'Chrome') return false;

        return {
            mandatory: {
                chromeMediaSource: screen_constraints.mandatory.chromeMediaSource,
                chromeMediaSourceId: screen_constraints.mandatory.chromeMediaSourceId
            }
        };
    }

    window.iOSDefaultAudioOutputDevice = window.iOSDefaultAudioOutputDevice || 'speaker'; // earpiece or speaker

    function getTracks(stream, kind) {
        if (!stream || !stream.getTracks) {
            return [];
        }

        return stream.getTracks().filter(function(t) {
            return t.kind === (kind || 'audio');
        });
    }

    function isUnifiedPlanSupportedDefault() {
        var canAddTransceiver = false;

        try {
            if (typeof RTCRtpTransceiver === 'undefined') return false;
            if (!('currentDirection' in RTCRtpTransceiver.prototype)) return false;

            var tempPc = new RTCPeerConnection();

            try {
                tempPc.addTransceiver('audio');
                canAddTransceiver = true;
            } catch (e) {}

            tempPc.close();
        } catch (e) {
            canAddTransceiver = false;
        }

        return canAddTransceiver && isUnifiedPlanSuppored();
    }

    function isUnifiedPlanSuppored() {
        var isUnifiedPlanSupported = false;

        try {
            var pc = new RTCPeerConnection({
                sdpSemantics: 'unified-plan'
            });

            try {
                var config = pc.getConfiguration();
                if (config.sdpSemantics == 'unified-plan')
                    isUnifiedPlanSupported = true;
                else if (config.sdpSemantics == 'plan-b')
                    isUnifiedPlanSupported = false;
                else
                    isUnifiedPlanSupported = false;
            } catch (e) {
                isUnifiedPlanSupported = false;
            }
        } catch (e) {
            isUnifiedPlanSupported = false;
        }

        return isUnifiedPlanSupported;
    }

    // ios-hacks.js

    function setCordovaAPIs() {
        // if (DetectRTC.osName !== 'iOS') return;
        if (typeof cordova === 'undefined' || typeof cordova.plugins === 'undefined' || typeof cordova.plugins.iosrtc === 'undefined') return;

        var iosrtc = cordova.plugins.iosrtc;
        window.webkitRTCPeerConnection = iosrtc.RTCPeerConnection;
        window.RTCSessionDescription = iosrtc.RTCSessionDescription;
        window.RTCIceCandidate = iosrtc.RTCIceCandidate;
        window.MediaStream = iosrtc.MediaStream;
        window.MediaStreamTrack = iosrtc.MediaStreamTrack;
        navigator.getUserMedia = navigator.webkitGetUserMedia = iosrtc.getUserMedia;

        iosrtc.debug.enable('iosrtc*');
        if (typeof iosrtc.selectAudioOutput == 'function') {
            iosrtc.selectAudioOutput(window.iOSDefaultAudioOutputDevice || 'speaker'); // earpiece or speaker
        }
        iosrtc.registerGlobals();
    }

    document.addEventListener('deviceready', setCordovaAPIs, false);
    setCordovaAPIs();

    // RTCPeerConnection.js

    var defaults = {};

    function setSdpConstraints(config) {
        var sdpConstraints = {
            OfferToReceiveAudio: !!config.OfferToReceiveAudio,
            OfferToReceiveVideo: !!config.OfferToReceiveVideo
        };

        return sdpConstraints;
    }

    var RTCPeerConnection;
    if (typeof window.RTCPeerConnection !== 'undefined') {
        RTCPeerConnection = window.RTCPeerConnection;
    } else if (typeof mozRTCPeerConnection !== 'undefined') {
        RTCPeerConnection = mozRTCPeerConnection;
    } else if (typeof webkitRTCPeerConnection !== 'undefined') {
        RTCPeerConnection = webkitRTCPeerConnection;
    }

    var RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
    var RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
    var MediaStreamTrack = window.MediaStreamTrack;

    function PeerInitiator(config) {
        if (typeof window.RTCPeerConnection !== 'undefined') {
            RTCPeerConnection = window.RTCPeerConnection;
        } else if (typeof mozRTCPeerConnection !== 'undefined') {
            RTCPeerConnection = mozRTCPeerConnection;
        } else if (typeof webkitRTCPeerConnection !== 'undefined') {
            RTCPeerConnection = webkitRTCPeerConnection;
        }

        RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription;
        RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate;
        MediaStreamTrack = window.MediaStreamTrack;

        if (!RTCPeerConnection) {
            throw 'WebRTC 1.0 (RTCPeerConnection) API are NOT available in this browser.';
        }

        var connection = config.rtcMultiConnection;

        this.extra = config.remoteSdp ? config.remoteSdp.extra : connection.extra;
        this.userid = config.userid;
        this.streams = [];
        this.channels = config.channels || [];
        this.connectionDescription = config.connectionDescription;

        this.addStream = function(session) {
            connection.addStream(session, self.userid);
        };

        this.removeStream = function(streamid) {
            connection.removeStream(streamid, self.userid);
        };

        var self = this;

        if (config.remoteSdp) {
            this.connectionDescription = config.remoteSdp.connectionDescription;
        }

        var allRemoteStreams = {};

        defaults.sdpConstraints = setSdpConstraints({
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
        });

        var peer;

        var renegotiatingPeer = !!config.renegotiatingPeer;
        if (config.remoteSdp) {
            renegotiatingPeer = !!config.remoteSdp.renegotiatingPeer;
        }

        var localStreams = [];
        connection.attachStreams.forEach(function(stream) {
            if (!!stream) {
                localStreams.push(stream);
            }
        });

        if (!renegotiatingPeer) {
            var iceTransports = 'all';
            if (connection.candidates.turn || connection.candidates.relay) {
                if (!connection.candidates.stun && !connection.candidates.reflexive && !connection.candidates.host) {
                    iceTransports = 'relay';
                }
            }

            try {
                // ref: developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration
                var params = {
                    iceServers: connection.iceServers,
                    iceTransportPolicy: connection.iceTransportPolicy || iceTransports
                };

                if (typeof connection.iceCandidatePoolSize !== 'undefined') {
                    params.iceCandidatePoolSize = connection.iceCandidatePoolSize;
                }

                if (typeof connection.bundlePolicy !== 'undefined') {
                    params.bundlePolicy = connection.bundlePolicy;
                }

                if (typeof connection.rtcpMuxPolicy !== 'undefined') {
                    params.rtcpMuxPolicy = connection.rtcpMuxPolicy;
                }

                if (DetectRTC.browser.name === 'Chrome') {
                    params.sdpSemantics = connection.sdpSemantics || 'unified-plan';
                }

                if (!connection.iceServers || !connection.iceServers.length) {
                    params = null;
                    connection.optionalArgument = null;
                }

                peer = new RTCPeerConnection(params, connection.optionalArgument);
            } catch (e) {
                try {
                    var params = {
                        iceServers: connection.iceServers
                    };

                    peer = new RTCPeerConnection(params);
                } catch (e) {
                    peer = new RTCPeerConnection();
                }
            }
        } else {
            peer = config.peerRef;
        }

        if (!peer.getRemoteStreams && peer.getReceivers) {
            peer.getRemoteStreams = function() {
                var stream = new MediaStream();
                peer.getReceivers().forEach(function(receiver) {
                    stream.addTrack(receiver.track);
                });
                return [stream];
            };
        }

        if (!peer.getLocalStreams && peer.getSenders) {
            peer.getLocalStreams = function() {
                var stream = new MediaStream();
                peer.getSenders().forEach(function(sender) {
                    stream.addTrack(sender.track);
                });
                return [stream];
            };
        }

        peer.onicecandidate = function(event) {
            if (!event.candidate) {
                if (!connection.trickleIce) {
                    var localSdp = peer.localDescription;
                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });
                }
                return;
            }

            if (!connection.trickleIce) return;
            config.onLocalCandidate({
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex
            });
        };

        localStreams.forEach(function(localStream) {
            if (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.dontGetRemoteStream) {
                return;
            }

            if (config.dontAttachLocalStream) {
                return;
            }

            localStream = connection.beforeAddingStream(localStream, self);

            if (!localStream) return;

            peer.getLocalStreams().forEach(function(stream) {
                if (localStream && stream.id == localStream.id) {
                    localStream = null;
                }
            });

            if (localStream && localStream.getTracks) {
                localStream.getTracks().forEach(function(track) {
                    try {
                        // last parameter is redundant for unified-plan
                        // starting from chrome version 72
                        peer.addTrack(track, localStream);
                    } catch (e) {}
                });
            }
        });

        peer.oniceconnectionstatechange = peer.onsignalingstatechange = function() {
            var extra = self.extra;
            if (connection.peers[self.userid]) {
                extra = connection.peers[self.userid].extra || extra;
            }

            if (!peer) {
                return;
            }

            config.onPeerStateChanged({
                iceConnectionState: peer.iceConnectionState,
                iceGatheringState: peer.iceGatheringState,
                signalingState: peer.signalingState,
                extra: extra,
                userid: self.userid
            });

            if (peer && peer.iceConnectionState && peer.iceConnectionState.search(/closed|failed/gi) !== -1 && self.streams instanceof Array) {
                self.streams.forEach(function(stream) {
                    var streamEvent = connection.streamEvents[stream.id] || {
                        streamid: stream.id,
                        stream: stream,
                        type: 'remote'
                    };

                    connection.onstreamended(streamEvent);
                });
            }
        };

        var sdpConstraints = {
            OfferToReceiveAudio: !!localStreams.length,
            OfferToReceiveVideo: !!localStreams.length
        };

        if (config.localPeerSdpConstraints) sdpConstraints = config.localPeerSdpConstraints;

        defaults.sdpConstraints = setSdpConstraints(sdpConstraints);

        var streamObject;
        var dontDuplicate = {};

        peer.ontrack = function(event) {
            if (!event || event.type !== 'track') return;

            event.stream = event.streams[event.streams.length - 1];

            if (!event.stream.id) {
                event.stream.id = event.track.id;
            }

            if (dontDuplicate[event.stream.id] && DetectRTC.browser.name !== 'Safari') {
                if (event.track) {
                    event.track.onended = function() { // event.track.onmute = 
                        peer && peer.onremovestream(event);
                    };
                }
                return;
            }

            dontDuplicate[event.stream.id] = event.stream.id;

            var streamsToShare = {};
            if (config.remoteSdp && config.remoteSdp.streamsToShare) {
                streamsToShare = config.remoteSdp.streamsToShare;
            } else if (config.streamsToShare) {
                streamsToShare = config.streamsToShare;
            }

            var streamToShare = streamsToShare[event.stream.id];
            if (streamToShare) {
                event.stream.isAudio = streamToShare.isAudio;
                event.stream.isVideo = streamToShare.isVideo;
                event.stream.isScreen = streamToShare.isScreen;
            } else {
                event.stream.isVideo = !!getTracks(event.stream, 'video').length;
                event.stream.isAudio = !event.stream.isVideo;
                event.stream.isScreen = false;
            }

            event.stream.streamid = event.stream.id;

            allRemoteStreams[event.stream.id] = event.stream;
            config.onRemoteStream(event.stream);

            event.stream.getTracks().forEach(function(track) {
                track.onended = function() { // track.onmute = 
                    peer && peer.onremovestream(event);
                };
            });

            event.stream.onremovetrack = function() {
                peer && peer.onremovestream(event);
            };
        };

        peer.onremovestream = function(event) {
            // this event doesn't works anymore
            event.stream.streamid = event.stream.id;

            if (allRemoteStreams[event.stream.id]) {
                delete allRemoteStreams[event.stream.id];
            }

            config.onRemoteStreamRemoved(event.stream);
        };

        if (typeof peer.removeStream !== 'function') {
            // removeStream backward compatibility
            peer.removeStream = function(stream) {
                stream.getTracks().forEach(function(track) {
                    peer.removeTrack(track, stream);
                });
            };
        }

        this.addRemoteCandidate = function(remoteCandidate) {
            peer.addIceCandidate(new RTCIceCandidate(remoteCandidate));
        };

        function oldAddRemoteSdp(remoteSdp, cb) {
            cb = cb || function() {};

            if (DetectRTC.browser.name !== 'Safari') {
                remoteSdp.sdp = connection.processSdp(remoteSdp.sdp);
            }
            peer.setRemoteDescription(new RTCSessionDescription(remoteSdp), cb, function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            });
        }

        this.addRemoteSdp = function(remoteSdp, cb) {
            cb = cb || function() {};

            if (DetectRTC.browser.name !== 'Safari') {
                remoteSdp.sdp = connection.processSdp(remoteSdp.sdp);
            }

            peer.setRemoteDescription(new RTCSessionDescription(remoteSdp)).then(cb, function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            }).catch(function(error) {
                if (!!connection.enableLogs) {
                    console.error('setRemoteDescription failed', '\n', error, '\n', remoteSdp.sdp);
                }

                cb();
            });
        };

        var isOfferer = true;

        if (config.remoteSdp) {
            isOfferer = false;
        }

        this.createDataChannel = function() {
            var channel = peer.createDataChannel('sctp', {});
            setChannelEvents(channel);
        };

        if (connection.session.data === true && !renegotiatingPeer) {
            if (!isOfferer) {
                peer.ondatachannel = function(event) {
                    var channel = event.channel;
                    setChannelEvents(channel);
                };
            } else {
                this.createDataChannel();
            }
        }

        this.enableDisableVideoEncoding = function(enable) {
            var rtcp;
            peer.getSenders().forEach(function(sender) {
                if (!rtcp && sender.track.kind === 'video') {
                    rtcp = sender;
                }
            });

            if (!rtcp || !rtcp.getParameters) return;

            var parameters = rtcp.getParameters();
            parameters.encodings[1] && (parameters.encodings[1].active = !!enable);
            parameters.encodings[2] && (parameters.encodings[2].active = !!enable);
            rtcp.setParameters(parameters);
        };

        if (config.remoteSdp) {
            if (config.remoteSdp.remotePeerSdpConstraints) {
                sdpConstraints = config.remoteSdp.remotePeerSdpConstraints;
            }
            defaults.sdpConstraints = setSdpConstraints(sdpConstraints);
            this.addRemoteSdp(config.remoteSdp, function() {
                createOfferOrAnswer('createAnswer');
            });
        }

        function setChannelEvents(channel) {
            // force ArrayBuffer in Firefox; which uses "Blob" by default.
            channel.binaryType = 'arraybuffer';

            channel.onmessage = function(event) {
                config.onDataChannelMessage(event.data);
            };

            channel.onopen = function() {
                config.onDataChannelOpened(channel);
            };

            channel.onerror = function(error) {
                config.onDataChannelError(error);
            };

            channel.onclose = function(event) {
                config.onDataChannelClosed(event);
            };

            channel.internalSend = channel.send;
            channel.send = function(data) {
                if (channel.readyState !== 'open') {
                    return;
                }

                channel.internalSend(data);
            };

            peer.channel = channel;
        }

        if (connection.session.audio == 'two-way' || connection.session.video == 'two-way' || connection.session.screen == 'two-way') {
            defaults.sdpConstraints = setSdpConstraints({
                OfferToReceiveAudio: connection.session.audio == 'two-way' || (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio),
                OfferToReceiveVideo: connection.session.video == 'two-way' || connection.session.screen == 'two-way' || (config.remoteSdp && config.remoteSdp.remotePeerSdpConstraints && config.remoteSdp.remotePeerSdpConstraints.OfferToReceiveAudio)
            });
        }

        var streamsToShare = {};
        peer.getLocalStreams().forEach(function(stream) {
            streamsToShare[stream.streamid] = {
                isAudio: !!stream.isAudio,
                isVideo: !!stream.isVideo,
                isScreen: !!stream.isScreen
            };
        });

        function oldCreateOfferOrAnswer(_method) {
            peer[_method](function(localSdp) {
                if (DetectRTC.browser.name !== 'Safari') {
                    localSdp.sdp = connection.processSdp(localSdp.sdp);
                }
                peer.setLocalDescription(localSdp, function() {
                    if (!connection.trickleIce) return;

                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });

                    connection.onSettingLocalDescription(self);
                }, function(error) {
                    if (!!connection.enableLogs) {
                        console.error('setLocalDescription-error', error);
                    }
                });
            }, function(error) {
                if (!!connection.enableLogs) {
                    console.error('sdp-' + _method + '-error', error);
                }
            }, defaults.sdpConstraints);
        }

        function createOfferOrAnswer(_method) {
            peer[_method](defaults.sdpConstraints).then(function(localSdp) {
                if (DetectRTC.browser.name !== 'Safari') {
                    localSdp.sdp = connection.processSdp(localSdp.sdp);
                }
                peer.setLocalDescription(localSdp).then(function() {
                    if (!connection.trickleIce) return;

                    config.onLocalSdp({
                        type: localSdp.type,
                        sdp: localSdp.sdp,
                        remotePeerSdpConstraints: config.remotePeerSdpConstraints || false,
                        renegotiatingPeer: !!config.renegotiatingPeer || false,
                        connectionDescription: self.connectionDescription,
                        dontGetRemoteStream: !!config.dontGetRemoteStream,
                        extra: connection ? connection.extra : {},
                        streamsToShare: streamsToShare
                    });

                    connection.onSettingLocalDescription(self);
                }, function(error) {
                    if (!connection.enableLogs) return;
                    console.error('setLocalDescription error', error);
                });
            }, function(error) {
                if (!!connection.enableLogs) {
                    console.error('sdp-error', error);
                }
            });
        }

        if (isOfferer) {
            createOfferOrAnswer('createOffer');
        }

        peer.nativeClose = peer.close;
        peer.close = function() {
            if (!peer) {
                return;
            }

            try {
                if (peer.nativeClose !== peer.close) {
                    peer.nativeClose();
                }
            } catch (e) {}

            peer = null;
            self.peer = null;
        };

        this.peer = peer;
    }

    // CodecsHandler.js

    var CodecsHandler = (function() {
        function preferCodec(sdp, codecName) {
            var info = splitLines(sdp);

            if (!info.videoCodecNumbers) {
                return sdp;
            }

            if (codecName === 'vp8' && info.vp8LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            if (codecName === 'vp9' && info.vp9LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            if (codecName === 'h264' && info.h264LineNumber === info.videoCodecNumbers[0]) {
                return sdp;
            }

            sdp = preferCodecHelper(sdp, codecName, info);

            return sdp;
        }

        function preferCodecHelper(sdp, codec, info, ignore) {
            var preferCodecNumber = '';

            if (codec === 'vp8') {
                if (!info.vp8LineNumber) {
                    return sdp;
                }
                preferCodecNumber = info.vp8LineNumber;
            }

            if (codec === 'vp9') {
                if (!info.vp9LineNumber) {
                    return sdp;
                }
                preferCodecNumber = info.vp9LineNumber;
            }

            if (codec === 'h264') {
                if (!info.h264LineNumber) {
                    return sdp;
                }

                preferCodecNumber = info.h264LineNumber;
            }

            var newLine = info.videoCodecNumbersOriginal.split('SAVPF')[0] + 'SAVPF ';

            var newOrder = [preferCodecNumber];

            if (ignore) {
                newOrder = [];
            }

            info.videoCodecNumbers.forEach(function(codecNumber) {
                if (codecNumber === preferCodecNumber) return;
                newOrder.push(codecNumber);
            });

            newLine += newOrder.join(' ');

            sdp = sdp.replace(info.videoCodecNumbersOriginal, newLine);
            return sdp;
        }

        function splitLines(sdp) {
            var info = {};
            sdp.split('\n').forEach(function(line) {
                if (line.indexOf('m=video') === 0) {
                    info.videoCodecNumbers = [];
                    line.split('SAVPF')[1].split(' ').forEach(function(codecNumber) {
                        codecNumber = codecNumber.trim();
                        if (!codecNumber || !codecNumber.length) return;
                        info.videoCodecNumbers.push(codecNumber);
                        info.videoCodecNumbersOriginal = line;
                    });
                }

                if (line.indexOf('VP8/90000') !== -1 && !info.vp8LineNumber) {
                    info.vp8LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }

                if (line.indexOf('VP9/90000') !== -1 && !info.vp9LineNumber) {
                    info.vp9LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }

                if (line.indexOf('H264/90000') !== -1 && !info.h264LineNumber) {
                    info.h264LineNumber = line.replace('a=rtpmap:', '').split(' ')[0];
                }
            });

            return info;
        }

        function removeVPX(sdp) {
            var info = splitLines(sdp);

            // last parameter below means: ignore these codecs
            sdp = preferCodecHelper(sdp, 'vp9', info, true);
            sdp = preferCodecHelper(sdp, 'vp8', info, true);

            return sdp;
        }

        function disableNACK(sdp) {
            if (!sdp || typeof sdp !== 'string') {
                throw 'Invalid arguments.';
            }

            sdp = sdp.replace('a=rtcp-fb:126 nack\r\n', '');
            sdp = sdp.replace('a=rtcp-fb:126 nack pli\r\n', 'a=rtcp-fb:126 pli\r\n');
            sdp = sdp.replace('a=rtcp-fb:97 nack\r\n', '');
            sdp = sdp.replace('a=rtcp-fb:97 nack pli\r\n', 'a=rtcp-fb:97 pli\r\n');

            return sdp;
        }

        function prioritize(codecMimeType, peer) {
            if (!peer || !peer.getSenders || !peer.getSenders().length) {
                return;
            }

            if (!codecMimeType || typeof codecMimeType !== 'string') {
                throw 'Invalid arguments.';
            }

            peer.getSenders().forEach(function(sender) {
                var params = sender.getParameters();
                for (var i = 0; i < params.codecs.length; i++) {
                    if (params.codecs[i].mimeType == codecMimeType) {
                        params.codecs.unshift(params.codecs.splice(i, 1));
                        break;
                    }
                }
                sender.setParameters(params);
            });
        }

        function removeNonG722(sdp) {
            return sdp.replace(/m=audio ([0-9]+) RTP\/SAVPF ([0-9 ]*)/g, 'm=audio $1 RTP\/SAVPF 9');
        }

        function setBAS(sdp, bandwidth, isScreen) {
            if (!bandwidth) {
                return sdp;
            }

            if (typeof isFirefox !== 'undefined' && isFirefox) {
                return sdp;
            }

            if (isScreen) {
                if (!bandwidth.screen) {
                    console.warn('It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.');
                } else if (bandwidth.screen < 300) {
                    console.warn('It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.');
                }
            }

            // if screen; must use at least 300kbs
            if (bandwidth.screen && isScreen) {
                sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
            }

            // remove existing bandwidth lines
            if (bandwidth.audio || bandwidth.video) {
                sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
            }

            if (bandwidth.audio) {
                sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + bandwidth.audio + '\r\n');
            }

            if (bandwidth.screen) {
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
            } else if (bandwidth.video) {
                sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.video + '\r\n');
            }

            return sdp;
        }

        // Find the line in sdpLines that starts with |prefix|, and, if specified,
        // contains |substr| (case-insensitive search).
        function findLine(sdpLines, prefix, substr) {
            return findLineInRange(sdpLines, 0, -1, prefix, substr);
        }

        // Find the line in sdpLines[startLine...endLine - 1] that starts with |prefix|
        // and, if specified, contains |substr| (case-insensitive search).
        function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
            var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
            for (var i = startLine; i < realEndLine; ++i) {
                if (sdpLines[i].indexOf(prefix) === 0) {
                    if (!substr ||
                        sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
                        return i;
                    }
                }
            }
            return null;
        }

        // Gets the codec payload type from an a=rtpmap:X line.
        function getCodecPayloadType(sdpLine) {
            var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
            var result = sdpLine.match(pattern);
            return (result && result.length === 2) ? result[1] : null;
        }

        function setVideoBitrates(sdp, params) {
            params = params || {};
            var xgoogle_min_bitrate = params.min;
            var xgoogle_max_bitrate = params.max;

            var sdpLines = sdp.split('\r\n');

            // VP8
            var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
            var vp8Payload;
            if (vp8Index) {
                vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
            }

            if (!vp8Payload) {
                return sdp;
            }

            var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');
            var rtxPayload;
            if (rtxIndex) {
                rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
            }

            if (!rtxIndex) {
                return sdp;
            }

            var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
            if (rtxFmtpLineIndex !== null) {
                var appendrtxNext = '\r\n';
                appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=' + (xgoogle_min_bitrate || '228') + '; x-google-max-bitrate=' + (xgoogle_max_bitrate || '228');
                sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
                sdp = sdpLines.join('\r\n');
            }

            return sdp;
        }

        function setOpusAttributes(sdp, params) {
            params = params || {};

            var sdpLines = sdp.split('\r\n');

            // Opus
            var opusIndex = findLine(sdpLines, 'a=rtpmap', 'opus/48000');
            var opusPayload;
            if (opusIndex) {
                opusPayload = getCodecPayloadType(sdpLines[opusIndex]);
            }

            if (!opusPayload) {
                return sdp;
            }

            var opusFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + opusPayload.toString());
            if (opusFmtpLineIndex === null) {
                return sdp;
            }

            var appendOpusNext = '';
            appendOpusNext += '; stereo=' + (typeof params.stereo != 'undefined' ? params.stereo : '1');
            appendOpusNext += '; sprop-stereo=' + (typeof params['sprop-stereo'] != 'undefined' ? params['sprop-stereo'] : '1');

            if (typeof params.maxaveragebitrate != 'undefined') {
                appendOpusNext += '; maxaveragebitrate=' + (params.maxaveragebitrate || 128 * 1024 * 8);
            }

            if (typeof params.maxplaybackrate != 'undefined') {
                appendOpusNext += '; maxplaybackrate=' + (params.maxplaybackrate || 128 * 1024 * 8);
            }

            if (typeof params.cbr != 'undefined') {
                appendOpusNext += '; cbr=' + (typeof params.cbr != 'undefined' ? params.cbr : '1');
            }

            if (typeof params.useinbandfec != 'undefined') {
                appendOpusNext += '; useinbandfec=' + params.useinbandfec;
            }

            if (typeof params.usedtx != 'undefined') {
                appendOpusNext += '; usedtx=' + params.usedtx;
            }

            if (typeof params.maxptime != 'undefined') {
                appendOpusNext += '\r\na=maxptime:' + params.maxptime;
            }

            sdpLines[opusFmtpLineIndex] = sdpLines[opusFmtpLineIndex].concat(appendOpusNext);

            sdp = sdpLines.join('\r\n');
            return sdp;
        }

        // forceStereoAudio => via webrtcexample.com
        // requires getUserMedia => echoCancellation:false
        function forceStereoAudio(sdp) {
            var sdpLines = sdp.split('\r\n');
            var fmtpLineIndex = null;
            for (var i = 0; i < sdpLines.length; i++) {
                if (sdpLines[i].search('opus/48000') !== -1) {
                    var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
                    break;
                }
            }
            for (var i = 0; i < sdpLines.length; i++) {
                if (sdpLines[i].search('a=fmtp') !== -1) {
                    var payload = extractSdp(sdpLines[i], /a=fmtp:(\d+)/);
                    if (payload === opusPayload) {
                        fmtpLineIndex = i;
                        break;
                    }
                }
            }
            if (fmtpLineIndex === null) return sdp;
            sdpLines[fmtpLineIndex] = sdpLines[fmtpLineIndex].concat('; stereo=1; sprop-stereo=1');
            sdp = sdpLines.join('\r\n');
            return sdp;
        }

        return {
            removeVPX: removeVPX,
            disableNACK: disableNACK,
            prioritize: prioritize,
            removeNonG722: removeNonG722,
            setApplicationSpecificBandwidth: function(sdp, bandwidth, isScreen) {
                return setBAS(sdp, bandwidth, isScreen);
            },
            setVideoBitrates: function(sdp, params) {
                return setVideoBitrates(sdp, params);
            },
            setOpusAttributes: function(sdp, params) {
                return setOpusAttributes(sdp, params);
            },
            preferVP9: function(sdp) {
                return preferCodec(sdp, 'vp9');
            },
            preferCodec: preferCodec,
            forceStereoAudio: forceStereoAudio
        };
    })();

    // backward compatibility
    window.BandwidthHandler = CodecsHandler;

    // OnIceCandidateHandler.js

    var OnIceCandidateHandler = (function() {
        function processCandidates(connection, icePair) {
            var candidate = icePair.candidate;

            var iceRestrictions = connection.candidates;
            var stun = iceRestrictions.stun;
            var turn = iceRestrictions.turn;

            if (!isNull(iceRestrictions.reflexive)) {
                stun = iceRestrictions.reflexive;
            }

            if (!isNull(iceRestrictions.relay)) {
                turn = iceRestrictions.relay;
            }

            if (!iceRestrictions.host && !!candidate.match(/typ host/g)) {
                return;
            }

            if (!turn && !!candidate.match(/typ relay/g)) {
                return;
            }

            if (!stun && !!candidate.match(/typ srflx/g)) {
                return;
            }

            var protocol = connection.iceProtocols;

            if (!protocol.udp && !!candidate.match(/ udp /g)) {
                return;
            }

            if (!protocol.tcp && !!candidate.match(/ tcp /g)) {
                return;
            }

            if (connection.enableLogs) {
                console.debug('Your candidate pairs:', candidate);
            }

            return {
                candidate: candidate,
                sdpMid: icePair.sdpMid,
                sdpMLineIndex: icePair.sdpMLineIndex
            };
        }

        return {
            processCandidates: processCandidates
        };
    })();

    // IceServersHandler.js

    var IceServersHandler = (function() {
        function getIceServers(connection) {
            // resiprocate: 3344+4433
            // pions: 7575
            var iceServers = [{
                    'urls': [
                        'stun:webrtcweb.com:7788'
                    ],
                    'username': 'muazkh',
                    'credential': 'muazkh'
                },
                {
                    'urls': [
                        'turn:webrtcweb.com:7788', // coTURN 7788+8877
                        'turn:webrtcweb.com:8877',
                        'turn:webrtcweb.com:4455', // restund udp
                    ],
                    'username': 'muazkh',
                    'credential': 'muazkh'
                },
                {
                    'urls': [
                        'stun:stun.l.google.com:19302',
                        'stun:stun1.l.google.com:19302',
                        'stun:stun2.l.google.com:19302',
                        'stun:stun.l.google.com:19302?transport=udp',
                    ]
                }
            ];

            return iceServers;
        }

        return {
            getIceServers: getIceServers
        };
    })();

    // getUserMediaHandler.js

    function setStreamType(constraints, stream) {
        if (constraints.mandatory && constraints.mandatory.chromeMediaSource) {
            stream.isScreen = true;
        } else if (constraints.mozMediaSource || constraints.mediaSource) {
            stream.isScreen = true;
        } else if (constraints.video) {
            stream.isVideo = true;
        } else if (constraints.audio) {
            stream.isAudio = true;
        }
    }

    // allow users to manage this object (to support re-capturing of screen/etc.)
    window.currentUserMediaRequest = {
        streams: [],
        mutex: false,
        queueRequests: [],
        remove: function(idInstance) {
            this.mutex = false;

            var stream = this.streams[idInstance];
            if (!stream) {
                return;
            }

            stream = stream.stream;

            var options = stream.currentUserMediaRequestOptions;

            if (this.queueRequests.indexOf(options)) {
                delete this.queueRequests[this.queueRequests.indexOf(options)];
                this.queueRequests = removeNullEntries(this.queueRequests);
            }

            this.streams[idInstance].stream = null;
            delete this.streams[idInstance];
        }
    };

    function getUserMediaHandler(options) {
        if (currentUserMediaRequest.mutex === true) {
            currentUserMediaRequest.queueRequests.push(options);
            return;
        }
        currentUserMediaRequest.mutex = true;

        // easy way to match
        var idInstance = JSON.stringify(options.localMediaConstraints);

        function streaming(stream, returnBack) {
            setStreamType(options.localMediaConstraints, stream);

            var streamEndedEvent = 'ended';

            if ('oninactive' in stream) {
                streamEndedEvent = 'inactive';
            }
            stream.addEventListener(streamEndedEvent, function() {
                delete currentUserMediaRequest.streams[idInstance];

                currentUserMediaRequest.mutex = false;
                if (currentUserMediaRequest.queueRequests.indexOf(options)) {
                    delete currentUserMediaRequest.queueRequests[currentUserMediaRequest.queueRequests.indexOf(options)];
                    currentUserMediaRequest.queueRequests = removeNullEntries(currentUserMediaRequest.queueRequests);
                }
            }, false);

            currentUserMediaRequest.streams[idInstance] = {
                stream: stream
            };
            currentUserMediaRequest.mutex = false;

            if (currentUserMediaRequest.queueRequests.length) {
                getUserMediaHandler(currentUserMediaRequest.queueRequests.shift());
            }

            // callback
            options.onGettingLocalMedia(stream, returnBack);
        }

        if (currentUserMediaRequest.streams[idInstance]) {
            streaming(currentUserMediaRequest.streams[idInstance].stream, true);
        } else {
            var isBlackBerry = !!(/BB10|BlackBerry/i.test(navigator.userAgent || ''));
            if (isBlackBerry || typeof navigator.mediaDevices === 'undefined' || typeof navigator.mediaDevices.getUserMedia !== 'function') {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                navigator.getUserMedia(options.localMediaConstraints, function(stream) {
                    stream.streamid = stream.streamid || stream.id || getRandomString();
                    stream.idInstance = idInstance;
                    streaming(stream);
                }, function(error) {
                    options.onLocalMediaError(error, options.localMediaConstraints);
                });
                return;
            }

            if (typeof navigator.mediaDevices === 'undefined') {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                var getUserMediaSuccess = function() {};
                var getUserMediaFailure = function() {};

                var getUserMediaStream, getUserMediaError;
                navigator.mediaDevices = {
                    getUserMedia: function(hints) {
                        navigator.getUserMedia(hints, function(getUserMediaSuccess) {
                            getUserMediaSuccess(stream);
                            getUserMediaStream = stream;
                        }, function(error) {
                            getUserMediaFailure(error);
                            getUserMediaError = error;
                        });

                        return {
                            then: function(successCB) {
                                if (getUserMediaStream) {
                                    successCB(getUserMediaStream);
                                    return;
                                }

                                getUserMediaSuccess = successCB;

                                return {
                                    then: function(failureCB) {
                                        if (getUserMediaError) {
                                            failureCB(getUserMediaError);
                                            return;
                                        }

                                        getUserMediaFailure = failureCB;
                                    }
                                }
                            }
                        }
                    }
                };
            }

            navigator.mediaDevices.getUserMedia(options.localMediaConstraints).then(function(stream) {
                stream.streamid = stream.streamid || stream.id || getRandomString();
                stream.idInstance = idInstance;

                streaming(stream);
            }).catch(function(error) {
                options.onLocalMediaError(error, options.localMediaConstraints);
            });
        }
    }

    // StreamsHandler.js

    var StreamsHandler = (function() {
        function handleType(type) {
            if (!type) {
                return;
            }

            if (typeof type === 'string' || typeof type === 'undefined') {
                return type;
            }

            if (type.audio && type.video) {
                return null;
            }

            if (type.audio) {
                return 'audio';
            }

            if (type.video) {
                return 'video';
            }

            return;
        }

        function setHandlers(stream, syncAction, connection) {
            if (!stream || !stream.addEventListener) return;

            if (typeof syncAction == 'undefined' || syncAction == true) {
                var streamEndedEvent = 'ended';

                if ('oninactive' in stream) {
                    streamEndedEvent = 'inactive';
                }

                stream.addEventListener(streamEndedEvent, function() {
                    StreamsHandler.onSyncNeeded(this.streamid, streamEndedEvent);
                }, false);
            }

            stream.mute = function(type, isSyncAction) {
                type = handleType(type);

                if (typeof isSyncAction !== 'undefined') {
                    syncAction = isSyncAction;
                }

                if (typeof type == 'undefined' || type == 'audio') {
                    getTracks(stream, 'audio').forEach(function(track) {
                        track.enabled = false;
                        connection.streamEvents[stream.streamid].isAudioMuted = true;
                    });
                }

                if (typeof type == 'undefined' || type == 'video') {
                    getTracks(stream, 'video').forEach(function(track) {
                        track.enabled = false;
                    });
                }

                if (typeof syncAction == 'undefined' || syncAction == true) {
                    StreamsHandler.onSyncNeeded(stream.streamid, 'mute', type);
                }

                connection.streamEvents[stream.streamid].muteType = type || 'both';

                fireEvent(stream, 'mute', type);
            };

            stream.unmute = function(type, isSyncAction) {
                type = handleType(type);

                if (typeof isSyncAction !== 'undefined') {
                    syncAction = isSyncAction;
                }

                graduallyIncreaseVolume();

                if (typeof type == 'undefined' || type == 'audio') {
                    getTracks(stream, 'audio').forEach(function(track) {
                        track.enabled = true;
                        connection.streamEvents[stream.streamid].isAudioMuted = false;
                    });
                }

                if (typeof type == 'undefined' || type == 'video') {
                    getTracks(stream, 'video').forEach(function(track) {
                        track.enabled = true;
                    });

                    // make sure that video unmute doesn't affects audio
                    if (typeof type !== 'undefined' && type == 'video' && connection.streamEvents[stream.streamid].isAudioMuted) {
                        (function looper(times) {
                            if (!times) {
                                times = 0;
                            }

                            times++;

                            // check until five-seconds
                            if (times < 100 && connection.streamEvents[stream.streamid].isAudioMuted) {
                                stream.mute('audio');

                                setTimeout(function() {
                                    looper(times);
                                }, 50);
                            }
                        })();
                    }
                }

                if (typeof syncAction == 'undefined' || syncAction == true) {
                    StreamsHandler.onSyncNeeded(stream.streamid, 'unmute', type);
                }

                connection.streamEvents[stream.streamid].unmuteType = type || 'both';

                fireEvent(stream, 'unmute', type);
            };

            function graduallyIncreaseVolume() {
                if (!connection.streamEvents[stream.streamid].mediaElement) {
                    return;
                }

                var mediaElement = connection.streamEvents[stream.streamid].mediaElement;
                mediaElement.volume = 0;
                afterEach(200, 5, function() {
                    try {
                        mediaElement.volume += .20;
                    } catch (e) {
                        mediaElement.volume = 1;
                    }
                });
            }
        }

        function afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes) {
            startedTimes = (startedTimes || 0) + 1;
            if (startedTimes >= numberOfTimes) return;

            setTimeout(function() {
                callback();
                afterEach(setTimeoutInteval, numberOfTimes, callback, startedTimes);
            }, setTimeoutInteval);
        }

        return {
            setHandlers: setHandlers,
            onSyncNeeded: function(streamid, action, type) {}
        };
    })();

    // Last time updated on: June 08, 2018

    // Latest file can be found here: https://cdn.webrtc-experiment.com/Screen-Capturing.js

    // Muaz Khan     - www.MuazKhan.com
    // MIT License   - www.WebRTC-Experiment.com/licence
    // Documentation - https://github.com/muaz-khan/Chrome-Extensions/tree/master/Screen-Capturing.js
    // Demo          - https://www.webrtc-experiment.com/Screen-Capturing/

    // ___________________
    // Screen-Capturing.js

    // Source code: https://github.com/muaz-khan/Chrome-Extensions/tree/master/desktopCapture
    // Google AppStore installation path: https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk

    // This JavaScript file is aimed to explain steps needed to integrate above chrome extension
    // in your own webpages

    // Usage:
    // getScreenConstraints(function(screen_constraints) {
    //    navigator.mediaDevices.getUserMedia({ video: screen_constraints }).then(onSuccess).catch(onFailure );
    // });

    // First Step: Download the extension, modify "manifest.json" and publish to Google AppStore
    //             https://github.com/muaz-khan/Chrome-Extensions/tree/master/desktopCapture#how-to-publish-yourself

    // Second Step: Listen for postMessage handler
    // postMessage is used to exchange "sourceId" between chrome extension and you webpage.
    // though, there are tons other options as well, e.g. XHR-signaling, websockets, etc.
    window.addEventListener('message', function(event) {
        if (event.origin != window.location.origin) {
            return;
        }

        onMessageCallback(event.data);
    });

    // and the function that handles received messages

    function onMessageCallback(data) {
        // "cancel" button is clicked
        if (data == 'PermissionDeniedError') {
            chromeMediaSource = 'PermissionDeniedError';
            if (screenCallback) return screenCallback('PermissionDeniedError');
            else throw new Error('PermissionDeniedError');
        }

        // extension notified his presence
        if (data == 'rtcmulticonnection-extension-loaded') {
            chromeMediaSource = 'desktop';
        }

        // extension shared temp sourceId
        if (data.sourceId && screenCallback) {
            screenCallback(sourceId = data.sourceId, data.canRequestAudioTrack === true);
        }
    }

    // global variables
    var chromeMediaSource = 'screen';
    var sourceId;
    var screenCallback;

    // this method can be used to check if chrome extension is installed & enabled.
    function isChromeExtensionAvailable(callback) {
        if (!callback) return;

        if (chromeMediaSource == 'desktop') return callback(true);

        // ask extension if it is available
        window.postMessage('are-you-there', '*');

        setTimeout(function() {
            if (chromeMediaSource == 'screen') {
                callback(false);
            } else callback(true);
        }, 2000);
    }

    // this function can be used to get "source-id" from the extension
    function getSourceId(callback) {
        if (!callback) throw '"callback" parameter is mandatory.';
        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage('get-sourceId', '*');
    }

    // this function can be used to get "source-id" from the extension
    function getCustomSourceId(arr, callback) {
        if (!arr || !arr.forEach) throw '"arr" parameter is mandatory and it must be an array.';
        if (!callback) throw '"callback" parameter is mandatory.';

        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage({
            'get-custom-sourceId': arr
        }, '*');
    }

    // this function can be used to get "source-id" from the extension
    function getSourceIdWithAudio(callback) {
        if (!callback) throw '"callback" parameter is mandatory.';
        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage('audio-plus-tab', '*');
    }

    var isFirefox = typeof window.InstallTrigger !== 'undefined';
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && !isOpera;

    function getChromeExtensionStatus(extensionid, callback) {
        if (isFirefox) return callback('not-chrome');

        if (arguments.length != 2) {
            callback = extensionid;
            extensionid = 'ajhifddimkapgcifgcodmmfdlknahffk'; // default extension-id
        }

        var image = document.createElement('img');
        image.src = 'chrome-extension://' + extensionid + '/icon.png';
        image.onload = function() {
            chromeMediaSource = 'screen';
            window.postMessage('are-you-there', '*');
            setTimeout(function() {
                if (chromeMediaSource == 'screen') {
                    callback('installed-disabled');
                } else callback('installed-enabled');
            }, 2000);
        };
        image.onerror = function() {
            callback('not-installed');
        };
    }

    function getScreenConstraintsWithAudio(callback) {
        getScreenConstraints(callback, true);
    }

    // this function explains how to use above methods/objects
    function getScreenConstraints(callback, captureSourceIdWithAudio) {
        var firefoxScreenConstraints = {
            mozMediaSource: 'window',
            mediaSource: 'window'
        };

        if (isFirefox) return callback(null, firefoxScreenConstraints);

        // this statement defines getUserMedia constraints
        // that will be used to capture content of screen
        var screen_constraints = {
            mandatory: {
                chromeMediaSource: chromeMediaSource,
                maxWidth: screen.width > 1920 ? screen.width : 1920,
                maxHeight: screen.height > 1080 ? screen.height : 1080
            },
            optional: []
        };

        // this statement verifies chrome extension availability
        // if installed and available then it will invoke extension API
        // otherwise it will fallback to command-line based screen capturing API
        if (chromeMediaSource == 'desktop' && !sourceId) {
            if (captureSourceIdWithAudio) {
                getSourceIdWithAudio(function(sourceId, canRequestAudioTrack) {
                    screen_constraints.mandatory.chromeMediaSourceId = sourceId;

                    if (canRequestAudioTrack) {
                        screen_constraints.canRequestAudioTrack = true;
                    }
                    callback(sourceId == 'PermissionDeniedError' ? sourceId : null, screen_constraints);
                });
            } else {
                getSourceId(function(sourceId) {
                    screen_constraints.mandatory.chromeMediaSourceId = sourceId;
                    callback(sourceId == 'PermissionDeniedError' ? sourceId : null, screen_constraints);
                });
            }
            return;
        }

        // this statement sets gets 'sourceId" and sets "chromeMediaSourceId" 
        if (chromeMediaSource == 'desktop') {
            screen_constraints.mandatory.chromeMediaSourceId = sourceId;
        }

        // now invoking native getUserMedia API
        callback(null, screen_constraints);
    }

    // TextReceiver.js & TextSender.js

    function TextReceiver(connection) {
        var content = {};

        function receive(data, userid, extra) {
            // uuid is used to uniquely identify sending instance
            var uuid = data.uuid;
            if (!content[uuid]) {
                content[uuid] = [];
            }

            content[uuid].push(data.message);

            if (data.last) {
                var message = content[uuid].join('');
                if (data.isobject) {
                    message = JSON.parse(message);
                }

                // latency detection
                var receivingTime = new Date().getTime();
                var latency = receivingTime - data.sendingTime;

                var e = {
                    data: message,
                    userid: userid,
                    extra: extra,
                    latency: latency
                };

                if (connection.autoTranslateText) {
                    e.original = e.data;
                    connection.Translator.TranslateText(e.data, function(translatedText) {
                        e.data = translatedText;
                        connection.onmessage(e);
                    });
                } else {
                    connection.onmessage(e);
                }

                delete content[uuid];
            }
        }

        return {
            receive: receive
        };
    }

    // TextSender.js
    var TextSender = {
        send: function(config) {
            var connection = config.connection;

            var channel = config.channel,
                remoteUserId = config.remoteUserId,
                initialText = config.text,
                packetSize = connection.chunkSize || 1000,
                textToTransfer = '',
                isobject = false;

            if (!isString(initialText)) {
                isobject = true;
                initialText = JSON.stringify(initialText);
            }

            // uuid is used to uniquely identify sending instance
            var uuid = getRandomString();
            var sendingTime = new Date().getTime();

            sendText(initialText);

            function sendText(textMessage, text) {
                var data = {
                    type: 'text',
                    uuid: uuid,
                    sendingTime: sendingTime
                };

                if (textMessage) {
                    text = textMessage;
                    data.packets = parseInt(text.length / packetSize);
                }

                if (text.length > packetSize) {
                    data.message = text.slice(0, packetSize);
                } else {
                    data.message = text;
                    data.last = true;
                    data.isobject = isobject;
                }

                channel.send(data, remoteUserId);

                textToTransfer = text.slice(data.message.length);

                if (textToTransfer.length) {
                    setTimeout(function() {
                        sendText(null, textToTransfer);
                    }, connection.chunkInterval || 100);
                }
            }
        }
    };

    // FileProgressBarHandler.js

    var FileProgressBarHandler = (function() {
        function handle(connection) {
            var progressHelper = {};

            // www.RTCMultiConnection.org/docs/onFileStart/
            connection.onFileStart = function(file) {
                var div = document.createElement('div');
                div.title = file.name;
                div.innerHTML = '<label>0%</label> <progress></progress>';

                if (file.remoteUserId) {
                    div.innerHTML += ' (Sharing with:' + file.remoteUserId + ')';
                }

                if (!connection.filesContainer) {
                    connection.filesContainer = document.body || document.documentElement;
                }

                connection.filesContainer.insertBefore(div, connection.filesContainer.firstChild);

                if (!file.remoteUserId) {
                    progressHelper[file.uuid] = {
                        div: div,
                        progress: div.querySelector('progress'),
                        label: div.querySelector('label')
                    };
                    progressHelper[file.uuid].progress.max = file.maxChunks;
                    return;
                }

                if (!progressHelper[file.uuid]) {
                    progressHelper[file.uuid] = {};
                }

                progressHelper[file.uuid][file.remoteUserId] = {
                    div: div,
                    progress: div.querySelector('progress'),
                    label: div.querySelector('label')
                };
                progressHelper[file.uuid][file.remoteUserId].progress.max = file.maxChunks;
            };

            // www.RTCMultiConnection.org/docs/onFileProgress/
            connection.onFileProgress = function(chunk) {
                var helper = progressHelper[chunk.uuid];
                if (!helper) {
                    return;
                }
                if (chunk.remoteUserId) {
                    helper = progressHelper[chunk.uuid][chunk.remoteUserId];
                    if (!helper) {
                        return;
                    }
                }

                helper.progress.value = chunk.currentPosition || chunk.maxChunks || helper.progress.max;
                updateLabel(helper.progress, helper.label);
            };

            // www.RTCMultiConnection.org/docs/onFileEnd/
            connection.onFileEnd = function(file) {
                var helper = progressHelper[file.uuid];
                if (!helper) {
                    console.error('No such progress-helper element exist.', file);
                    return;
                }

                if (file.remoteUserId) {
                    helper = progressHelper[file.uuid][file.remoteUserId];
                    if (!helper) {
                        return;
                    }
                }

                var div = helper.div;
                if (file.type.indexOf('image') != -1) {
                    div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><img src="' + file.url + '" title="' + file.name + '" style="max-width: 80%;">';
                } else {
                    div.innerHTML = '<a href="' + file.url + '" download="' + file.name + '">Download <strong style="color:red;">' + file.name + '</strong> </a><br /><iframe src="' + file.url + '" title="' + file.name + '" style="width: 80%;border: 0;height: inherit;margin-top:1em;"></iframe>';
                }
            };

            function updateLabel(progress, label) {
                if (progress.position === -1) {
                    return;
                }

                var position = +progress.position.toFixed(2).split('.')[1] || 100;
                label.innerHTML = position + '%';
            }
        }

        return {
            handle: handle
        };
    })();

    // TranslationHandler.js

    var TranslationHandler = (function() {
        function handle(connection) {
            connection.autoTranslateText = false;
            connection.language = 'en';
            connection.googKey = 'AIzaSyCgB5hmFY74WYB-EoWkhr9cAGr6TiTHrEE';

            // www.RTCMultiConnection.org/docs/Translator/
            connection.Translator = {
                TranslateText: function(text, callback) {
                    // if(location.protocol === 'https:') return callback(text);

                    var newScript = document.createElement('script');
                    newScript.type = 'text/javascript';

                    var sourceText = encodeURIComponent(text); // escape

                    var randomNumber = 'method' + connection.token();
                    window[randomNumber] = function(response) {
                        if (response.data && response.data.translations[0] && callback) {
                            callback(response.data.translations[0].translatedText);
                            return;
                        }

                        if (response.error && response.error.message === 'Daily Limit Exceeded') {
                            console.error('Text translation failed. Error message: "Daily Limit Exceeded."');
                            return;
                        }

                        if (response.error) {
                            console.error(response.error.message);
                            return;
                        }

                        console.error(response);
                    };

                    var source = 'https://www.googleapis.com/language/translate/v2?key=' + connection.googKey + '&target=' + (connection.language || 'en-US') + '&callback=window.' + randomNumber + '&q=' + sourceText;
                    newScript.src = source;
                    document.getElementsByTagName('head')[0].appendChild(newScript);
                },
                getListOfLanguages: function(callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == XMLHttpRequest.DONE) {
                            var response = JSON.parse(xhr.responseText);

                            if (response && response.data && response.data.languages) {
                                callback(response.data.languages);
                                return;
                            }

                            if (response.error && response.error.message === 'Daily Limit Exceeded') {
                                console.error('Text translation failed. Error message: "Daily Limit Exceeded."');
                                return;
                            }

                            if (response.error) {
                                console.error(response.error.message);
                                return;
                            }

                            console.error(response);
                        }
                    }
                    var url = 'https://www.googleapis.com/language/translate/v2/languages?key=' + connection.googKey + '&target=en';
                    xhr.open('GET', url, true);
                    xhr.send(null);
                }
            };
        }

        return {
            handle: handle
        };
    })();

    // _____________________
    // RTCMultiConnection.js

    (function(connection) {
        forceOptions = forceOptions || {
            useDefaultDevices: true
        };

        connection.channel = connection.sessionid = (roomid || location.href.replace(/\/|:|#|\?|\$|\^|%|\.|`|~|!|\+|@|\[|\||]|\|*. /g, '').split('\n').join('').split('\r').join('')) + '';

        var mPeer = new MultiPeers(connection);

        var preventDuplicateOnStreamEvents = {};
        mPeer.onGettingLocalMedia = function(stream, callback) {
            callback = callback || function() {};

            if (preventDuplicateOnStreamEvents[stream.streamid]) {
                callback();
                return;
            }
            preventDuplicateOnStreamEvents[stream.streamid] = true;

            try {
                stream.type = 'local';
            } catch (e) {}

            connection.setStreamEndHandler(stream);

            getRMCMediaElement(stream, function(mediaElement) {
                mediaElement.id = stream.streamid;
                mediaElement.muted = true;
                mediaElement.volume = 0;

                if (connection.attachStreams.indexOf(stream) === -1) {
                    connection.attachStreams.push(stream);
                }

                if (typeof StreamsHandler !== 'undefined') {
                    StreamsHandler.setHandlers(stream, true, connection);
                }

                connection.streamEvents[stream.streamid] = {
                    stream: stream,
                    type: 'local',
                    mediaElement: mediaElement,
                    userid: connection.userid,
                    extra: connection.extra,
                    streamid: stream.streamid,
                    isAudioMuted: true
                };

                try {
                    setHarkEvents(connection, connection.streamEvents[stream.streamid]);
                    setMuteHandlers(connection, connection.streamEvents[stream.streamid]);

                    connection.onstream(connection.streamEvents[stream.streamid]);
                } catch (e) {
                    //
                }

                callback();
            }, connection);
        };

        mPeer.onGettingRemoteMedia = function(stream, remoteUserId) {
            try {
                stream.type = 'remote';
            } catch (e) {}

            connection.setStreamEndHandler(stream, 'remote-stream');

            getRMCMediaElement(stream, function(mediaElement) {
                mediaElement.id = stream.streamid;

                if (typeof StreamsHandler !== 'undefined') {
                    StreamsHandler.setHandlers(stream, false, connection);
                }

                connection.streamEvents[stream.streamid] = {
                    stream: stream,
                    type: 'remote',
                    userid: remoteUserId,
                    extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                    mediaElement: mediaElement,
                    streamid: stream.streamid
                };

                setMuteHandlers(connection, connection.streamEvents[stream.streamid]);

                connection.onstream(connection.streamEvents[stream.streamid]);
            }, connection);
        };

        mPeer.onRemovingRemoteMedia = function(stream, remoteUserId) {
            var streamEvent = connection.streamEvents[stream.streamid];
            if (!streamEvent) {
                streamEvent = {
                    stream: stream,
                    type: 'remote',
                    userid: remoteUserId,
                    extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {},
                    streamid: stream.streamid,
                    mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
                };
            }

            if (connection.peersBackup[streamEvent.userid]) {
                streamEvent.extra = connection.peersBackup[streamEvent.userid].extra;
            }

            connection.onstreamended(streamEvent);

            delete connection.streamEvents[stream.streamid];
        };

        mPeer.onNegotiationNeeded = function(message, remoteUserId, callback) {
            callback = callback || function() {};

            remoteUserId = remoteUserId || message.remoteUserId;
            message = message || '';

            // usually a message looks like this
            var messageToDeliver = {
                remoteUserId: remoteUserId,
                message: message,
                sender: connection.userid
            };

            if (message.remoteUserId && message.message && message.sender) {
                // if a code is manually passing required data
                messageToDeliver = message;
            }

            connectSocket(function() {
                connection.socket.emit(connection.socketMessageEvent, messageToDeliver, callback);
            });
        };

        function onUserLeft(remoteUserId) {
            connection.deletePeer(remoteUserId);
        }

        mPeer.onUserLeft = onUserLeft;
        mPeer.disconnectWith = function(remoteUserId, callback) {
            if (connection.socket) {
                connection.socket.emit('disconnect-with', remoteUserId, callback || function() {});
            }

            connection.deletePeer(remoteUserId);
        };

        connection.socketOptions = {
            // 'force new connection': true, // For SocketIO version < 1.0
            // 'forceNew': true, // For SocketIO version >= 1.0
            'transport': 'polling' // fixing transport:unknown issues
        };

        function connectSocket(connectCallback) {
            connection.socketAutoReConnect = true;

            if (connection.socket) { // todo: check here readySate/etc. to make sure socket is still opened
                if (connectCallback) {
                    connectCallback(connection.socket);
                }
                return;
            }

            if (typeof SocketConnection === 'undefined') {
                if (typeof FirebaseConnection !== 'undefined') {
                    window.SocketConnection = FirebaseConnection;
                } else if (typeof PubNubConnection !== 'undefined') {
                    window.SocketConnection = PubNubConnection;
                } else {
                    throw 'SocketConnection.js seems missed.';
                }
            }

            new SocketConnection(connection, function(s) {
                if (connectCallback) {
                    connectCallback(connection.socket);
                }
            });
        }

        // 1st paramter is roomid
        // 2rd paramter is a callback function
        connection.openOrJoin = function(roomid, callback) {
            callback = callback || function() {};

            connection.checkPresence(roomid, function(isRoomExist, roomid) {
                if (isRoomExist) {
                    connection.sessionid = roomid;

                    var localPeerSdpConstraints = false;
                    var remotePeerSdpConstraints = false;
                    var isOneWay = !!connection.session.oneway;
                    var isDataOnly = isData(connection.session);

                    remotePeerSdpConstraints = {
                        OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    }

                    localPeerSdpConstraints = {
                        OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                        OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                    }

                    var connectionDescription = {
                        remoteUserId: connection.sessionid,
                        message: {
                            newParticipationRequest: true,
                            isOneWay: isOneWay,
                            isDataOnly: isDataOnly,
                            localPeerSdpConstraints: localPeerSdpConstraints,
                            remotePeerSdpConstraints: remotePeerSdpConstraints
                        },
                        sender: connection.userid
                    };

                    beforeJoin(connectionDescription.message, function() {
                        joinRoom(connectionDescription, callback);
                    });
                    return;
                }

                connection.waitingForLocalMedia = true;
                connection.isInitiator = true;

                connection.sessionid = roomid || connection.sessionid;

                if (isData(connection.session)) {
                    openRoom(callback);
                    return;
                }

                connection.captureUserMedia(function() {
                    openRoom(callback);
                });
            });
        };

        // don't allow someone to join this person until he has the media
        connection.waitingForLocalMedia = false;

        connection.open = function(roomid, callback) {
            callback = callback || function() {};

            connection.waitingForLocalMedia = true;
            connection.isInitiator = true;

            connection.sessionid = roomid || connection.sessionid;

            connectSocket(function() {
                if (isData(connection.session)) {
                    openRoom(callback);
                    return;
                }

                connection.captureUserMedia(function() {
                    openRoom(callback);
                });
            });
        };

        // this object keeps extra-data records for all connected users
        // this object is never cleared so you can always access extra-data even if a user left
        connection.peersBackup = {};

        connection.deletePeer = function(remoteUserId) {
            if (!remoteUserId || !connection.peers[remoteUserId]) {
                return;
            }

            var eventObject = {
                userid: remoteUserId,
                extra: connection.peers[remoteUserId] ? connection.peers[remoteUserId].extra : {}
            };

            if (connection.peersBackup[eventObject.userid]) {
                eventObject.extra = connection.peersBackup[eventObject.userid].extra;
            }

            connection.onleave(eventObject);

            if (!!connection.peers[remoteUserId]) {
                connection.peers[remoteUserId].streams.forEach(function(stream) {
                    stream.stop();
                });

                var peer = connection.peers[remoteUserId].peer;
                if (peer && peer.iceConnectionState !== 'closed') {
                    try {
                        peer.close();
                    } catch (e) {}
                }

                if (connection.peers[remoteUserId]) {
                    connection.peers[remoteUserId].peer = null;
                    delete connection.peers[remoteUserId];
                }
            }
        }

        connection.rejoin = function(connectionDescription) {
            if (connection.isInitiator || !connectionDescription || !Object.keys(connectionDescription).length) {
                return;
            }

            var extra = {};

            if (connection.peers[connectionDescription.remoteUserId]) {
                extra = connection.peers[connectionDescription.remoteUserId].extra;
                connection.deletePeer(connectionDescription.remoteUserId);
            }

            if (connectionDescription && connectionDescription.remoteUserId) {
                connection.join(connectionDescription.remoteUserId);

                connection.onReConnecting({
                    userid: connectionDescription.remoteUserId,
                    extra: extra
                });
            }
        };

        connection.join = function(remoteUserId, options) {
            connection.sessionid = (remoteUserId ? remoteUserId.sessionid || remoteUserId.remoteUserId || remoteUserId : false) || connection.sessionid;
            connection.sessionid += '';

            var localPeerSdpConstraints = false;
            var remotePeerSdpConstraints = false;
            var isOneWay = false;
            var isDataOnly = false;

            if ((remoteUserId && remoteUserId.session) || !remoteUserId || typeof remoteUserId === 'string') {
                var session = remoteUserId ? remoteUserId.session || connection.session : connection.session;

                isOneWay = !!session.oneway;
                isDataOnly = isData(session);

                remotePeerSdpConstraints = {
                    OfferToReceiveAudio: connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                    OfferToReceiveVideo: connection.sdpConstraints.mandatory.OfferToReceiveVideo
                };

                localPeerSdpConstraints = {
                    OfferToReceiveAudio: isOneWay ? !!connection.session.audio : connection.sdpConstraints.mandatory.OfferToReceiveAudio,
                    OfferToReceiveVideo: isOneWay ? !!connection.session.video || !!connection.session.screen : connection.sdpConstraints.mandatory.OfferToReceiveVideo
                };
            }

            options = options || {};

            var cb = function() {};
            if (typeof options === 'function') {
                cb = options;
                options = {};
            }

            if (typeof options.localPeerSdpConstraints !== 'undefined') {
                localPeerSdpConstraints = options.localPeerSdpConstraints;
            }

            if (typeof options.remotePeerSdpConstraints !== 'undefined') {
                remotePeerSdpConstraints = options.remotePeerSdpConstraints;
            }

            if (typeof options.isOneWay !== 'undefined') {
                isOneWay = options.isOneWay;
            }

            if (typeof options.isDataOnly !== 'undefined') {
                isDataOnly = options.isDataOnly;
            }

            var connectionDescription = {
                remoteUserId: connection.sessionid,
                message: {
                    newParticipationRequest: true,
                    isOneWay: isOneWay,
                    isDataOnly: isDataOnly,
                    localPeerSdpConstraints: localPeerSdpConstraints,
                    remotePeerSdpConstraints: remotePeerSdpConstraints
                },
                sender: connection.userid
            };

            beforeJoin(connectionDescription.message, function() {
                connectSocket(function() {
                    joinRoom(connectionDescription, cb);
                });
            });
            return connectionDescription;
        };

        function joinRoom(connectionDescription, cb) {
            connection.socket.emit('join-room', {
                sessionid: connection.sessionid,
                session: connection.session,
                mediaConstraints: connection.mediaConstraints,
                sdpConstraints: connection.sdpConstraints,
                streams: getStreamInfoForAdmin(),
                extra: connection.extra,
                password: typeof connection.password !== 'undefined' && typeof connection.password !== 'object' ? connection.password : ''
            }, function(isRoomJoined, error) {
                if (isRoomJoined === true) {
                    if (connection.enableLogs) {
                        console.log('isRoomJoined: ', isRoomJoined, ' roomid: ', connection.sessionid);
                    }

                    if (!!connection.peers[connection.sessionid]) {
                        // on socket disconnect & reconnect
                        return;
                    }

                    mPeer.onNegotiationNeeded(connectionDescription);
                }

                if (isRoomJoined === false) {
                    if (connection.enableLogs) {
                        console.warn('isRoomJoined: ', error, ' roomid: ', connection.sessionid);
                    }

                    // [disabled] retry after 3 seconds
                    false && setTimeout(function() {
                        joinRoom(connectionDescription, cb);
                    }, 3000);
                }

                cb(isRoomJoined, connection.sessionid, error);
            });
        }

        connection.publicRoomIdentifier = '';

        function openRoom(callback) {
            if (connection.enableLogs) {
                console.log('Sending open-room signal to socket.io');
            }

            connection.waitingForLocalMedia = false;
            connection.socket.emit('open-room', {
                sessionid: connection.sessionid,
                session: connection.session,
                mediaConstraints: connection.mediaConstraints,
                sdpConstraints: connection.sdpConstraints,
                streams: getStreamInfoForAdmin(),
                extra: connection.extra,
                identifier: connection.publicRoomIdentifier,
                password: typeof connection.password !== 'undefined' && typeof connection.password !== 'object' ? connection.password : ''
            }, function(isRoomOpened, error) {
                if (isRoomOpened === true) {
                    if (connection.enableLogs) {
                        console.log('isRoomOpened: ', isRoomOpened, ' roomid: ', connection.sessionid);
                    }
                    callback(isRoomOpened, connection.sessionid);
                }

                if (isRoomOpened === false) {
                    if (connection.enableLogs) {
                        console.warn('isRoomOpened: ', error, ' roomid: ', connection.sessionid);
                    }

                    callback(isRoomOpened, connection.sessionid, error);
                }
            });
        }

        function getStreamInfoForAdmin() {
            try {
                return connection.streamEvents.selectAll('local').map(function(event) {
                    return {
                        streamid: event.streamid,
                        tracks: event.stream.getTracks().length
                    };
                });
            } catch (e) {
                return [];
            }
        }

        function beforeJoin(userPreferences, callback) {
            if (connection.dontCaptureUserMedia || userPreferences.isDataOnly) {
                callback();
                return;
            }

            var localMediaConstraints = {};

            if (userPreferences.localPeerSdpConstraints.OfferToReceiveAudio) {
                localMediaConstraints.audio = connection.mediaConstraints.audio;
            }

            if (userPreferences.localPeerSdpConstraints.OfferToReceiveVideo) {
                localMediaConstraints.video = connection.mediaConstraints.video;
            }

            var session = userPreferences.session || connection.session;

            if (session.oneway && session.audio !== 'two-way' && session.video !== 'two-way' && session.screen !== 'two-way') {
                callback();
                return;
            }

            if (session.oneway && session.audio && session.audio === 'two-way') {
                session = {
                    audio: true
                };
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, callback);
                            } else {
                                callback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.getScreenConstraints(function(error, screen_constraints) {
                            connection.invokeGetUserMedia({
                                audio: isAudioPlusTab(connection) ? getAudioScreenConstraints(screen_constraints) : false,
                                video: screen_constraints,
                                isScreen: true
                            }, (session.audio || session.video) && !isAudioPlusTab(connection) ? connection.invokeGetUserMedia(null, callback) : callback);
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, callback, session);
                }
            }
        }

        connection.getUserMedia = connection.captureUserMedia = function(callback, sessionForced) {
            callback = callback || function() {};
            var session = sessionForced || connection.session;

            if (connection.dontCaptureUserMedia || isData(session)) {
                callback();
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                var nonScreenSession = {};
                                for (var s in session) {
                                    if (s !== 'screen') {
                                        nonScreenSession[s] = session[s];
                                    }
                                }
                                connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession);
                                return;
                            }
                            callback(screen);
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.getScreenConstraints(function(error, screen_constraints) {
                            if (error) {
                                throw error;
                            }

                            connection.invokeGetUserMedia({
                                audio: isAudioPlusTab(connection) ? getAudioScreenConstraints(screen_constraints) : false,
                                video: screen_constraints,
                                isScreen: true
                            }, function(stream) {
                                if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                    var nonScreenSession = {};
                                    for (var s in session) {
                                        if (s !== 'screen') {
                                            nonScreenSession[s] = session[s];
                                        }
                                    }
                                    connection.invokeGetUserMedia(sessionForced, callback, nonScreenSession);
                                    return;
                                }
                                callback(stream);
                            });
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(sessionForced, callback, session);
                }
            }
        };

        connection.onbeforeunload = function(arg1, dontCloseSocket) {
            if (!connection.closeBeforeUnload) {
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.onNegotiationNeeded({
                    userLeft: true
                }, participant);

                if (connection.peers[participant] && connection.peers[participant].peer) {
                    connection.peers[participant].peer.close();
                }

                delete connection.peers[participant];
            });

            if (!dontCloseSocket) {
                connection.closeSocket();
            }

            connection.isInitiator = false;
        };

        if (!window.ignoreBeforeUnload) {
            // user can implement its own version of window.onbeforeunload
            connection.closeBeforeUnload = true;
            window.addEventListener('beforeunload', connection.onbeforeunload, false);
        } else {
            connection.closeBeforeUnload = false;
        }

        connection.userid = getRandomString();
        connection.changeUserId = function(newUserId, callback) {
            callback = callback || function() {};
            connection.userid = newUserId || getRandomString();
            connection.socket.emit('changed-uuid', connection.userid, callback);
        };

        connection.extra = {};
        connection.attachStreams = [];

        connection.session = {
            audio: true,
            video: true
        };

        connection.enableFileSharing = false;

        // all values in kbps
        connection.bandwidth = {
            screen: false,
            audio: false,
            video: false
        };

        connection.codecs = {
            audio: 'opus',
            video: 'VP9'
        };

        connection.processSdp = function(sdp) {
            // ignore SDP modification if unified-pan is supported
            if (isUnifiedPlanSupportedDefault()) {
                return sdp;
            }

            if (DetectRTC.browser.name === 'Safari') {
                return sdp;
            }

            if (connection.codecs.video.toUpperCase() === 'VP8') {
                sdp = CodecsHandler.preferCodec(sdp, 'vp8');
            }

            if (connection.codecs.video.toUpperCase() === 'VP9') {
                sdp = CodecsHandler.preferCodec(sdp, 'vp9');
            }

            if (connection.codecs.video.toUpperCase() === 'H264') {
                sdp = CodecsHandler.preferCodec(sdp, 'h264');
            }

            if (connection.codecs.audio === 'G722') {
                sdp = CodecsHandler.removeNonG722(sdp);
            }

            if (DetectRTC.browser.name === 'Firefox') {
                return sdp;
            }

            if (connection.bandwidth.video || connection.bandwidth.screen) {
                sdp = CodecsHandler.setApplicationSpecificBandwidth(sdp, connection.bandwidth, !!connection.session.screen);
            }

            if (connection.bandwidth.video) {
                sdp = CodecsHandler.setVideoBitrates(sdp, {
                    min: connection.bandwidth.video * 8 * 1024,
                    max: connection.bandwidth.video * 8 * 1024
                });
            }

            if (connection.bandwidth.audio) {
                sdp = CodecsHandler.setOpusAttributes(sdp, {
                    maxaveragebitrate: connection.bandwidth.audio * 8 * 1024,
                    maxplaybackrate: connection.bandwidth.audio * 8 * 1024,
                    stereo: 1,
                    maxptime: 3
                });
            }

            return sdp;
        };

        if (typeof CodecsHandler !== 'undefined') {
            connection.BandwidthHandler = connection.CodecsHandler = CodecsHandler;
        }

        connection.mediaConstraints = {
            audio: {
                mandatory: {},
                optional: connection.bandwidth.audio ? [{
                    bandwidth: connection.bandwidth.audio * 8 * 1024 || 128 * 8 * 1024
                }] : []
            },
            video: {
                mandatory: {},
                optional: connection.bandwidth.video ? [{
                    bandwidth: connection.bandwidth.video * 8 * 1024 || 128 * 8 * 1024
                }, {
                    facingMode: 'user'
                }] : [{
                    facingMode: 'user'
                }]
            }
        };

        if (DetectRTC.browser.name === 'Firefox') {
            connection.mediaConstraints = {
                audio: true,
                video: true
            };
        }

        if (!forceOptions.useDefaultDevices && !DetectRTC.isMobileDevice) {
            DetectRTC.load(function() {
                var lastAudioDevice, lastVideoDevice;
                // it will force RTCMultiConnection to capture last-devices
                // i.e. if external microphone is attached to system, we should prefer it over built-in devices.
                DetectRTC.MediaDevices.forEach(function(device) {
                    if (device.kind === 'audioinput' && connection.mediaConstraints.audio !== false) {
                        lastAudioDevice = device;
                    }

                    if (device.kind === 'videoinput' && connection.mediaConstraints.video !== false) {
                        lastVideoDevice = device;
                    }
                });

                if (lastAudioDevice) {
                    if (DetectRTC.browser.name === 'Firefox') {
                        if (connection.mediaConstraints.audio !== true) {
                            connection.mediaConstraints.audio.deviceId = lastAudioDevice.id;
                        } else {
                            connection.mediaConstraints.audio = {
                                deviceId: lastAudioDevice.id
                            }
                        }
                        return;
                    }

                    if (connection.mediaConstraints.audio == true) {
                        connection.mediaConstraints.audio = {
                            mandatory: {},
                            optional: []
                        }
                    }

                    if (!connection.mediaConstraints.audio.optional) {
                        connection.mediaConstraints.audio.optional = [];
                    }

                    var optional = [{
                        sourceId: lastAudioDevice.id
                    }];

                    connection.mediaConstraints.audio.optional = optional.concat(connection.mediaConstraints.audio.optional);
                }

                if (lastVideoDevice) {
                    if (DetectRTC.browser.name === 'Firefox') {
                        if (connection.mediaConstraints.video !== true) {
                            connection.mediaConstraints.video.deviceId = lastVideoDevice.id;
                        } else {
                            connection.mediaConstraints.video = {
                                deviceId: lastVideoDevice.id
                            }
                        }
                        return;
                    }

                    if (connection.mediaConstraints.video == true) {
                        connection.mediaConstraints.video = {
                            mandatory: {},
                            optional: []
                        }
                    }

                    if (!connection.mediaConstraints.video.optional) {
                        connection.mediaConstraints.video.optional = [];
                    }

                    var optional = [{
                        sourceId: lastVideoDevice.id
                    }];

                    connection.mediaConstraints.video.optional = optional.concat(connection.mediaConstraints.video.optional);
                }
            });
        }

        connection.sdpConstraints = {
            mandatory: {
                OfferToReceiveAudio: true,
                OfferToReceiveVideo: true
            },
            optional: [{
                VoiceActivityDetection: false
            }]
        };

        connection.sdpSemantics = null; // "unified-plan" or "plan-b", ref: webrtc.org/web-apis/chrome/unified-plan/
        connection.iceCandidatePoolSize = null; // 0
        connection.bundlePolicy = null; // max-bundle
        connection.rtcpMuxPolicy = null; // "require" or "negotiate"
        connection.iceTransportPolicy = null; // "relay" or "all"
        connection.optionalArgument = {
            optional: [{
                DtlsSrtpKeyAgreement: true
            }, {
                googImprovedWifiBwe: true
            }, {
                googScreencastMinBitrate: 300
            }, {
                googIPv6: true
            }, {
                googDscp: true
            }, {
                googCpuUnderuseThreshold: 55
            }, {
                googCpuOveruseThreshold: 85
            }, {
                googSuspendBelowMinBitrate: true
            }, {
                googCpuOveruseDetection: true
            }],
            mandatory: {}
        };

        connection.iceServers = IceServersHandler.getIceServers(connection);

        connection.candidates = {
            host: true,
            stun: true,
            turn: true
        };

        connection.iceProtocols = {
            tcp: true,
            udp: true
        };

        // EVENTs
        connection.onopen = function(event) {
            if (!!connection.enableLogs) {
                console.info('Data connection has been opened between you & ', event.userid);
            }
        };

        connection.onclose = function(event) {
            if (!!connection.enableLogs) {
                console.warn('Data connection has been closed between you & ', event.userid);
            }
        };

        connection.onerror = function(error) {
            if (!!connection.enableLogs) {
                console.error(error.userid, 'data-error', error);
            }
        };

        connection.onmessage = function(event) {
            if (!!connection.enableLogs) {
                console.debug('data-message', event.userid, event.data);
            }
        };

        connection.send = function(data, remoteUserId) {
            connection.peers.send(data, remoteUserId);
        };

        connection.close = connection.disconnect = connection.leave = function() {
            connection.onbeforeunload(false, true);
        };

        connection.closeEntireSession = function(callback) {
            callback = callback || function() {};
            connection.socket.emit('close-entire-session', function looper() {
                if (connection.getAllParticipants().length) {
                    setTimeout(looper, 100);
                    return;
                }

                connection.onEntireSessionClosed({
                    sessionid: connection.sessionid,
                    userid: connection.userid,
                    extra: connection.extra
                });

                connection.changeUserId(null, function() {
                    connection.close();
                    callback();
                });
            });
        };

        connection.onEntireSessionClosed = function(event) {
            if (!connection.enableLogs) return;
            console.info('Entire session is closed: ', event.sessionid, event.extra);
        };

        connection.onstream = function(e) {
            var parentNode = connection.videosContainer;
            parentNode.insertBefore(e.mediaElement, parentNode.firstChild);
            var played = e.mediaElement.play();

            if (typeof played !== 'undefined') {
                played.catch(function() {
                    /*** iOS 11 doesn't allow automatic play and rejects ***/
                }).then(function() {
                    setTimeout(function() {
                        e.mediaElement.play();
                    }, 2000);
                });
                return;
            }

            setTimeout(function() {
                e.mediaElement.play();
            }, 2000);
        };

        connection.onstreamended = function(e) {
            if (!e.mediaElement) {
                e.mediaElement = document.getElementById(e.streamid);
            }

            if (!e.mediaElement || !e.mediaElement.parentNode) {
                return;
            }

            e.mediaElement.parentNode.removeChild(e.mediaElement);
        };

        connection.direction = 'many-to-many';

        connection.removeStream = function(streamid, remoteUserId) {
            var stream;
            connection.attachStreams.forEach(function(localStream) {
                if (localStream.id === streamid) {
                    stream = localStream;
                }
            });

            if (!stream) {
                console.warn('No such stream exist.', streamid);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                if (remoteUserId && participant !== remoteUserId) {
                    return;
                }

                var user = connection.peers[participant];
                try {
                    user.peer.removeStream(stream);
                } catch (e) {}
            });

            connection.renegotiate();
        };

        connection.addStream = function(session, remoteUserId) {
            if (!!session.getTracks) {
                if (connection.attachStreams.indexOf(session) === -1) {
                    if (!session.streamid) {
                        session.streamid = session.id;
                    }

                    connection.attachStreams.push(session);
                }
                connection.renegotiate(remoteUserId);
                return;
            }

            if (isData(session)) {
                connection.renegotiate(remoteUserId);
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, function(stream) {
                                    gumCallback(stream);
                                });
                            } else {
                                gumCallback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.getScreenConstraints(function(error, screen_constraints) {
                            if (error) {
                                if (error === 'PermissionDeniedError') {
                                    if (session.streamCallback) {
                                        session.streamCallback(null);
                                    }
                                    if (connection.enableLogs) {
                                        console.error('User rejected to share his screen.');
                                    }
                                    return;
                                }
                                return alert(error);
                            }

                            connection.invokeGetUserMedia({
                                audio: isAudioPlusTab(connection) ? getAudioScreenConstraints(screen_constraints) : false,
                                video: screen_constraints,
                                isScreen: true
                            }, function(stream) {
                                if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                    connection.invokeGetUserMedia(null, function(stream) {
                                        gumCallback(stream);
                                    });
                                } else {
                                    gumCallback(stream);
                                }
                            });
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, gumCallback);
                }
            }

            function gumCallback(stream) {
                if (session.streamCallback) {
                    session.streamCallback(stream);
                }

                connection.renegotiate(remoteUserId);
            }
        };

        connection.invokeGetUserMedia = function(localMediaConstraints, callback, session) {
            if (!session) {
                session = connection.session;
            }

            if (!localMediaConstraints) {
                localMediaConstraints = connection.mediaConstraints;
            }

            getUserMediaHandler({
                onGettingLocalMedia: function(stream) {
                    var videoConstraints = localMediaConstraints.video;
                    if (videoConstraints) {
                        if (videoConstraints.mediaSource || videoConstraints.mozMediaSource) {
                            stream.isScreen = true;
                        } else if (videoConstraints.mandatory && videoConstraints.mandatory.chromeMediaSource) {
                            stream.isScreen = true;
                        }
                    }

                    if (!stream.isScreen) {
                        stream.isVideo = !!getTracks(stream, 'video').length;
                        stream.isAudio = !stream.isVideo && getTracks(stream, 'audio').length;
                    }

                    mPeer.onGettingLocalMedia(stream, function() {
                        if (typeof callback === 'function') {
                            callback(stream);
                        }
                    });
                },
                onLocalMediaError: function(error, constraints) {
                    mPeer.onLocalMediaError(error, constraints);
                },
                localMediaConstraints: localMediaConstraints || {
                    audio: session.audio ? localMediaConstraints.audio : false,
                    video: session.video ? localMediaConstraints.video : false
                }
            });
        };

        function applyConstraints(stream, mediaConstraints) {
            if (!stream) {
                if (!!connection.enableLogs) {
                    console.error('No stream to applyConstraints.');
                }
                return;
            }

            if (mediaConstraints.audio) {
                getTracks(stream, 'audio').forEach(function(track) {
                    track.applyConstraints(mediaConstraints.audio);
                });
            }

            if (mediaConstraints.video) {
                getTracks(stream, 'video').forEach(function(track) {
                    track.applyConstraints(mediaConstraints.video);
                });
            }
        }

        connection.applyConstraints = function(mediaConstraints, streamid) {
            if (!MediaStreamTrack || !MediaStreamTrack.prototype.applyConstraints) {
                alert('track.applyConstraints is NOT supported in your browser.');
                return;
            }

            if (streamid) {
                var stream;
                if (connection.streamEvents[streamid]) {
                    stream = connection.streamEvents[streamid].stream;
                }
                applyConstraints(stream, mediaConstraints);
                return;
            }

            connection.attachStreams.forEach(function(stream) {
                applyConstraints(stream, mediaConstraints);
            });
        };

        function replaceTrack(track, remoteUserId, isVideoTrack) {
            if (remoteUserId) {
                mPeer.replaceTrack(track, remoteUserId, isVideoTrack);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.replaceTrack(track, participant, isVideoTrack);
            });
        }

        connection.replaceTrack = function(session, remoteUserId, isVideoTrack) {
            session = session || {};

            if (!RTCPeerConnection.prototype.getSenders) {
                connection.addStream(session);
                return;
            }

            if (session instanceof MediaStreamTrack) {
                replaceTrack(session, remoteUserId, isVideoTrack);
                return;
            }

            if (session instanceof MediaStream) {
                if (getTracks(session, 'video').length) {
                    replaceTrack(getTracks(session, 'video')[0], remoteUserId, true);
                }

                if (getTracks(session, 'audio').length) {
                    replaceTrack(getTracks(session, 'audio')[0], remoteUserId, false);
                }
                return;
            }

            if (isData(session)) {
                throw 'connection.replaceTrack requires audio and/or video and/or screen.';
                return;
            }

            if (session.audio || session.video || session.screen) {
                if (session.screen) {
                    if (DetectRTC.browser.name === 'Edge') {
                        navigator.getDisplayMedia({
                            video: true,
                            audio: isAudioPlusTab(connection)
                        }).then(function(screen) {
                            screen.isScreen = true;
                            mPeer.onGettingLocalMedia(screen);

                            if ((session.audio || session.video) && !isAudioPlusTab(connection)) {
                                connection.invokeGetUserMedia(null, gumCallback);
                            } else {
                                gumCallback(screen);
                            }
                        }, function(error) {
                            console.error('Unable to capture screen on Edge. HTTPs and version 17+ is required.');
                        });
                    } else {
                        connection.getScreenConstraints(function(error, screen_constraints) {
                            if (error) {
                                return alert(error);
                            }

                            connection.invokeGetUserMedia({
                                audio: isAudioPlusTab(connection) ? getAudioScreenConstraints(screen_constraints) : false,
                                video: screen_constraints,
                                isScreen: true
                            }, (session.audio || session.video) && !isAudioPlusTab(connection) ? connection.invokeGetUserMedia(null, gumCallback) : gumCallback);
                        });
                    }
                } else if (session.audio || session.video) {
                    connection.invokeGetUserMedia(null, gumCallback);
                }
            }

            function gumCallback(stream) {
                connection.replaceTrack(stream, remoteUserId, isVideoTrack || session.video || session.screen);
            }
        };

        connection.resetTrack = function(remoteUsersIds, isVideoTrack) {
            if (!remoteUsersIds) {
                remoteUsersIds = connection.getAllParticipants();
            }

            if (typeof remoteUsersIds == 'string') {
                remoteUsersIds = [remoteUsersIds];
            }

            remoteUsersIds.forEach(function(participant) {
                var peer = connection.peers[participant].peer;

                if ((typeof isVideoTrack === 'undefined' || isVideoTrack === true) && peer.lastVideoTrack) {
                    connection.replaceTrack(peer.lastVideoTrack, participant, true);
                }

                if ((typeof isVideoTrack === 'undefined' || isVideoTrack === false) && peer.lastAudioTrack) {
                    connection.replaceTrack(peer.lastAudioTrack, participant, false);
                }
            });
        };

        connection.renegotiate = function(remoteUserId) {
            if (remoteUserId) {
                mPeer.renegotiatePeer(remoteUserId);
                return;
            }

            connection.peers.getAllParticipants().forEach(function(participant) {
                mPeer.renegotiatePeer(participant);
            });
        };

        connection.setStreamEndHandler = function(stream, isRemote) {
            if (!stream || !stream.addEventListener) return;

            isRemote = !!isRemote;

            if (stream.alreadySetEndHandler) {
                return;
            }
            stream.alreadySetEndHandler = true;

            var streamEndedEvent = 'ended';

            if ('oninactive' in stream) {
                streamEndedEvent = 'inactive';
            }

            stream.addEventListener(streamEndedEvent, function() {
                if (stream.idInstance) {
                    currentUserMediaRequest.remove(stream.idInstance);
                }

                if (!isRemote) {
                    // reset attachStreams
                    var streams = [];
                    connection.attachStreams.forEach(function(s) {
                        if (s.id != stream.id) {
                            streams.push(s);
                        }
                    });
                    connection.attachStreams = streams;
                }

                // connection.renegotiate();

                var streamEvent = connection.streamEvents[stream.streamid];
                if (!streamEvent) {
                    streamEvent = {
                        stream: stream,
                        streamid: stream.streamid,
                        type: isRemote ? 'remote' : 'local',
                        userid: connection.userid,
                        extra: connection.extra,
                        mediaElement: connection.streamEvents[stream.streamid] ? connection.streamEvents[stream.streamid].mediaElement : null
                    };
                }

                if (isRemote && connection.peers[streamEvent.userid]) {
                    // reset remote "streams"
                    var peer = connection.peers[streamEvent.userid].peer;
                    var streams = [];
                    peer.getRemoteStreams().forEach(function(s) {
                        if (s.id != stream.id) {
                            streams.push(s);
                        }
                    });
                    connection.peers[streamEvent.userid].streams = streams;
                }

                if (streamEvent.userid === connection.userid && streamEvent.type === 'remote') {
                    return;
                }

                if (connection.peersBackup[streamEvent.userid]) {
                    streamEvent.extra = connection.peersBackup[streamEvent.userid].extra;
                }

                connection.onstreamended(streamEvent);

                delete connection.streamEvents[stream.streamid];
            }, false);
        };

        connection.onMediaError = function(error, constraints) {
            if (!!connection.enableLogs) {
                console.error(error, constraints);
            }
        };

        connection.autoCloseEntireSession = false;

        connection.filesContainer = connection.videosContainer = document.body || document.documentElement;
        connection.isInitiator = false;

        connection.shareFile = mPeer.shareFile;
        if (typeof FileProgressBarHandler !== 'undefined') {
            FileProgressBarHandler.handle(connection);
        }

        if (typeof TranslationHandler !== 'undefined') {
            TranslationHandler.handle(connection);
        }

        connection.token = getRandomString;

        connection.onNewParticipant = function(participantId, userPreferences) {
            connection.acceptParticipationRequest(participantId, userPreferences);
        };

        connection.acceptParticipationRequest = function(participantId, userPreferences) {
            if (userPreferences.successCallback) {
                userPreferences.successCallback();
                delete userPreferences.successCallback;
            }

            mPeer.createNewPeer(participantId, userPreferences);
        };

        if (typeof StreamsHandler !== 'undefined') {
            connection.StreamsHandler = StreamsHandler;
        }

        connection.onleave = function(userid) {};

        connection.invokeSelectFileDialog = function(callback) {
            var selector = new FileSelector();
            selector.accept = '*.*';
            selector.selectSingleFile(callback);
        };

        connection.onmute = function(e) {
            if (!e || !e.mediaElement) {
                return;
            }

            if (e.muteType === 'both' || e.muteType === 'video') {
                e.mediaElement.src = null;
                var paused = e.mediaElement.pause();
                if (typeof paused !== 'undefined') {
                    paused.then(function() {
                        e.mediaElement.poster = e.snapshot || 'https://cdn.webrtc-experiment.com/images/muted.png';
                    });
                } else {
                    e.mediaElement.poster = e.snapshot || 'https://cdn.webrtc-experiment.com/images/muted.png';
                }
            } else if (e.muteType === 'audio') {
                e.mediaElement.muted = true;
            }
        };

        connection.onunmute = function(e) {
            if (!e || !e.mediaElement || !e.stream) {
                return;
            }

            if (e.unmuteType === 'both' || e.unmuteType === 'video') {
                e.mediaElement.poster = null;
                e.mediaElement.srcObject = e.stream;
                e.mediaElement.play();
            } else if (e.unmuteType === 'audio') {
                e.mediaElement.muted = false;
            }
        };

        connection.onExtraDataUpdated = function(event) {
            event.status = 'online';
            connection.onUserStatusChanged(event, true);
        };

        connection.getAllParticipants = function(sender) {
            return connection.peers.getAllParticipants(sender);
        };

        if (typeof StreamsHandler !== 'undefined') {
            StreamsHandler.onSyncNeeded = function(streamid, action, type) {
                connection.peers.getAllParticipants().forEach(function(participant) {
                    mPeer.onNegotiationNeeded({
                        streamid: streamid,
                        action: action,
                        streamSyncNeeded: true,
                        type: type || 'both'
                    }, participant);
                });
            };
        }

        connection.connectSocket = function(callback) {
            connectSocket(callback);
        };

        connection.closeSocket = function() {
            try {
                io.sockets = {};
            } catch (e) {};

            if (!connection.socket) return;

            if (typeof connection.socket.disconnect === 'function') {
                connection.socket.disconnect();
            }

            if (typeof connection.socket.resetProps === 'function') {
                connection.socket.resetProps();
            }

            connection.socket = null;
        };

        connection.getSocket = function(callback) {
            if (!callback && connection.enableLogs) {
                console.warn('getSocket.callback paramter is required.');
            }

            callback = callback || function() {};

            if (!connection.socket) {
                connectSocket(function() {
                    callback(connection.socket);
                });
            } else {
                callback(connection.socket);
            }

            return connection.socket; // callback is preferred over return-statement
        };

        connection.getRemoteStreams = mPeer.getRemoteStreams;

        var skipStreams = ['selectFirst', 'selectAll', 'forEach'];

        connection.streamEvents = {
            selectFirst: function(options) {
                return connection.streamEvents.selectAll(options)[0];
            },
            selectAll: function(options) {
                if (!options) {
                    // default will always be all streams
                    options = {
                        local: true,
                        remote: true,
                        isScreen: true,
                        isAudio: true,
                        isVideo: true
                    };
                }

                if (options == 'local') {
                    options = {
                        local: true
                    };
                }

                if (options == 'remote') {
                    options = {
                        remote: true
                    };
                }

                if (options == 'screen') {
                    options = {
                        isScreen: true
                    };
                }

                if (options == 'audio') {
                    options = {
                        isAudio: true
                    };
                }

                if (options == 'video') {
                    options = {
                        isVideo: true
                    };
                }

                var streams = [];
                Object.keys(connection.streamEvents).forEach(function(key) {
                    var event = connection.streamEvents[key];

                    if (skipStreams.indexOf(key) !== -1) return;
                    var ignore = true;

                    if (options.local && event.type === 'local') {
                        ignore = false;
                    }

                    if (options.remote && event.type === 'remote') {
                        ignore = false;
                    }

                    if (options.isScreen && event.stream.isScreen) {
                        ignore = false;
                    }

                    if (options.isVideo && event.stream.isVideo) {
                        ignore = false;
                    }

                    if (options.isAudio && event.stream.isAudio) {
                        ignore = false;
                    }

                    if (options.userid && event.userid === options.userid) {
                        ignore = false;
                    }

                    if (ignore === false) {
                        streams.push(event);
                    }
                });

                return streams;
            }
        };

        connection.socketURL = '/'; // generated via config.json
        connection.socketMessageEvent = 'RTCMultiConnection-Message'; // generated via config.json
        connection.socketCustomEvent = 'RTCMultiConnection-Custom-Message'; // generated via config.json
        connection.DetectRTC = DetectRTC;

        connection.setCustomSocketEvent = function(customEvent) {
            if (customEvent) {
                connection.socketCustomEvent = customEvent;
            }

            if (!connection.socket) {
                return;
            }

            connection.socket.emit('set-custom-socket-event-listener', connection.socketCustomEvent);
        };

        connection.getNumberOfBroadcastViewers = function(broadcastId, callback) {
            if (!connection.socket || !broadcastId || !callback) return;

            connection.socket.emit('get-number-of-users-in-specific-broadcast', broadcastId, callback);
        };

        connection.onNumberOfBroadcastViewersUpdated = function(event) {
            if (!connection.enableLogs || !connection.isInitiator) return;
            console.info('Number of broadcast (', event.broadcastId, ') viewers', event.numberOfBroadcastViewers);
        };

        connection.onUserStatusChanged = function(event, dontWriteLogs) {
            if (!!connection.enableLogs && !dontWriteLogs) {
                console.info(event.userid, event.status);
            }
        };

        connection.getUserMediaHandler = getUserMediaHandler;
        connection.multiPeersHandler = mPeer;
        connection.enableLogs = true;
        connection.setCustomSocketHandler = function(customSocketHandler) {
            if (typeof SocketConnection !== 'undefined') {
                SocketConnection = customSocketHandler;
            }
        };

        // default value should be 15k because [old]Firefox's receiving limit is 16k!
        // however 64k works chrome-to-chrome
        connection.chunkSize = 40 * 1000;

        connection.maxParticipantsAllowed = 1000;

        // eject or leave single user
        connection.disconnectWith = mPeer.disconnectWith;

        // check if room exist on server
        // we will pass roomid to the server and wait for callback (i.e. server's response)
        connection.checkPresence = function(roomid, callback) {
            roomid = roomid || connection.sessionid;

            if (SocketConnection.name === 'SSEConnection') {
                SSEConnection.checkPresence(roomid, function(isRoomExist, _roomid, extra) {
                    if (!connection.socket) {
                        if (!isRoomExist) {
                            connection.userid = _roomid;
                        }

                        connection.connectSocket(function() {
                            callback(isRoomExist, _roomid, extra);
                        });
                        return;
                    }
                    callback(isRoomExist, _roomid);
                });
                return;
            }

            if (!connection.socket) {
                connection.connectSocket(function() {
                    connection.checkPresence(roomid, callback);
                });
                return;
            }

            connection.socket.emit('check-presence', roomid + '', function(isRoomExist, _roomid, extra) {
                if (connection.enableLogs) {
                    console.log('checkPresence.isRoomExist: ', isRoomExist, ' roomid: ', _roomid);
                }
                callback(isRoomExist, _roomid, extra);
            });
        };

        connection.onReadyForOffer = function(remoteUserId, userPreferences) {
            connection.multiPeersHandler.createNewPeer(remoteUserId, userPreferences);
        };

        connection.setUserPreferences = function(userPreferences) {
            if (connection.dontAttachStream) {
                userPreferences.dontAttachLocalStream = true;
            }

            if (connection.dontGetRemoteStream) {
                userPreferences.dontGetRemoteStream = true;
            }

            return userPreferences;
        };

        connection.updateExtraData = function() {
            connection.socket.emit('extra-data-updated', connection.extra);
        };

        connection.enableScalableBroadcast = false;
        connection.maxRelayLimitPerUser = 3; // each broadcast should serve only 3 users

        connection.dontCaptureUserMedia = false;
        connection.dontAttachStream = false;
        connection.dontGetRemoteStream = false;

        connection.onReConnecting = function(event) {
            if (connection.enableLogs) {
                console.info('ReConnecting with', event.userid, '...');
            }
        };

        connection.beforeAddingStream = function(stream) {
            return stream;
        };

        connection.beforeRemovingStream = function(stream) {
            return stream;
        };

        if (typeof isChromeExtensionAvailable !== 'undefined') {
            connection.checkIfChromeExtensionAvailable = isChromeExtensionAvailable;
        }

        if (typeof isFirefoxExtensionAvailable !== 'undefined') {
            connection.checkIfChromeExtensionAvailable = isFirefoxExtensionAvailable;
        }

        if (typeof getChromeExtensionStatus !== 'undefined') {
            connection.getChromeExtensionStatus = getChromeExtensionStatus;
        }

        connection.getScreenConstraints = function(callback, audioPlusTab) {
            if (isAudioPlusTab(connection, audioPlusTab)) {
                audioPlusTab = true;
            }

            getScreenConstraints(function(error, screen_constraints) {
                if (!error) {
                    screen_constraints = connection.modifyScreenConstraints(screen_constraints);
                    callback(error, screen_constraints);
                }
            }, audioPlusTab);
        };

        connection.modifyScreenConstraints = function(screen_constraints) {
            return screen_constraints;
        };

        connection.onPeerStateChanged = function(state) {
            if (connection.enableLogs) {
                if (state.iceConnectionState.search(/closed|failed/gi) !== -1) {
                    console.error('Peer connection is closed between you & ', state.userid, state.extra, 'state:', state.iceConnectionState);
                }
            }
        };

        connection.isOnline = true;

        listenEventHandler('online', function() {
            connection.isOnline = true;
        });

        listenEventHandler('offline', function() {
            connection.isOnline = false;
        });

        connection.isLowBandwidth = false;
        if (navigator && navigator.connection && navigator.connection.type) {
            connection.isLowBandwidth = navigator.connection.type.toString().toLowerCase().search(/wifi|cell/g) !== -1;
            if (connection.isLowBandwidth) {
                connection.bandwidth = {
                    audio: false,
                    video: false,
                    screen: false
                };

                if (connection.mediaConstraints.audio && connection.mediaConstraints.audio.optional && connection.mediaConstraints.audio.optional.length) {
                    var newArray = [];
                    connection.mediaConstraints.audio.optional.forEach(function(opt) {
                        if (typeof opt.bandwidth === 'undefined') {
                            newArray.push(opt);
                        }
                    });
                    connection.mediaConstraints.audio.optional = newArray;
                }

                if (connection.mediaConstraints.video && connection.mediaConstraints.video.optional && connection.mediaConstraints.video.optional.length) {
                    var newArray = [];
                    connection.mediaConstraints.video.optional.forEach(function(opt) {
                        if (typeof opt.bandwidth === 'undefined') {
                            newArray.push(opt);
                        }
                    });
                    connection.mediaConstraints.video.optional = newArray;
                }
            }
        }

        connection.getExtraData = function(remoteUserId, callback) {
            if (!remoteUserId) throw 'remoteUserId is required.';

            if (typeof callback === 'function') {
                connection.socket.emit('get-remote-user-extra-data', remoteUserId, function(extra, remoteUserId, error) {
                    callback(extra, remoteUserId, error);
                });
                return;
            }

            if (!connection.peers[remoteUserId]) {
                if (connection.peersBackup[remoteUserId]) {
                    return connection.peersBackup[remoteUserId].extra;
                }
                return {};
            }

            return connection.peers[remoteUserId].extra;
        };

        if (!!forceOptions.autoOpenOrJoin) {
            connection.openOrJoin(connection.sessionid);
        }

        connection.onUserIdAlreadyTaken = function(useridAlreadyTaken, yourNewUserId) {
            // via #683
            connection.close();
            connection.closeSocket();

            connection.isInitiator = false;
            connection.userid = connection.token();

            connection.join(connection.sessionid);

            if (connection.enableLogs) {
                console.warn('Userid already taken.', useridAlreadyTaken, 'Your new userid:', connection.userid);
            }
        };

        connection.trickleIce = true;
        connection.version = '3.6.8';

        connection.onSettingLocalDescription = function(event) {
            if (connection.enableLogs) {
                console.info('Set local description for remote user', event.userid);
            }
        };

        connection.resetScreen = function() {
            sourceId = null;
            if (DetectRTC && DetectRTC.screen) {
                delete DetectRTC.screen.sourceId;
            }

            currentUserMediaRequest = {
                streams: [],
                mutex: false,
                queueRequests: []
            };
        };

        // if disabled, "event.mediaElement" for "onstream" will be NULL
        connection.autoCreateMediaElement = true;

        // set password
        connection.password = null;

        // set password
        connection.setPassword = function(password, callback) {
            callback = callback || function() {};
            if (connection.socket) {
                connection.socket.emit('set-password', password, callback);
            } else {
                connection.password = password;
                callback(true, connection.sessionid, null);
            }
        };

        connection.onSocketDisconnect = function(event) {
            if (connection.enableLogs) {
                console.warn('socket.io connection is closed');
            }
        };

        connection.onSocketError = function(event) {
            if (connection.enableLogs) {
                console.warn('socket.io connection is failed');
            }
        };

        // error messages
        connection.errors = {
            ROOM_NOT_AVAILABLE: 'Room not available',
            INVALID_PASSWORD: 'Invalid password',
            USERID_NOT_AVAILABLE: 'User ID does not exist',
            ROOM_PERMISSION_DENIED: 'Room permission denied',
            ROOM_FULL: 'Room full',
            DID_NOT_JOIN_ANY_ROOM: 'Did not join any room yet',
            INVALID_SOCKET: 'Invalid socket',
            PUBLIC_IDENTIFIER_MISSING: 'publicRoomIdentifier is required',
            INVALID_ADMIN_CREDENTIAL: 'Invalid username or password attempted'
        };
    })(this);

};

if (true /* && !!module.exports*/ ) {
    module.exports = exports = RTCMultiConnection;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return RTCMultiConnection;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video-list"
  }, _vm._l((_vm.videoList), function(item) {
    return _c('div', {
      key: item.id,
      staticClass: "video-item",
      attrs: {
        "video": item
      }
    }, [_c('video', {
      ref: "videos",
      refInFor: true,
      attrs: {
        "controls": "",
        "autoplay": "",
        "playsinline": "",
        "height": _vm.cameraHeight,
        "id": item.id
      },
      domProps: {
        "muted": item.muted
      }
    })])
  }), 0)
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("62bb3ac2", content, true);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(13)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});