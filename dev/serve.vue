<script>
    import { defineComponent } from 'vue';
    import { VueWebRTC } from '@/entry.esm';

    export default defineComponent({
        name: 'ServeDev',
        components: {
            'vue-webrtc': VueWebRTC
        },
        mounted: function () {
            this.$refs.webrtc.join()
        }
    });
</script>

<template>
    <div id="app">
        <vue-webrtc ref="webrtc" width="100%" roomId="sample-room"/>
    </div>
</template>
