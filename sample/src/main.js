import { createApp } from 'vue'
import App from './App.vue'
import 'setimmediate'; // HACK: https://github.com/winstonjs/winston/issues/1354

createApp(App).mount('#app')
