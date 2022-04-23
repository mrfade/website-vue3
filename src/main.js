import { createApp } from 'vue'
import App from './App.vue'

import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/animations/shift-away.css'

import VueLanyard from './plugins/vue-lanyard'

const app = createApp(App)

app.use(VueTippy, {
  defaultProps: {
    placement: 'bottom',
    animateFill: true,
  },
})

app.use(VueLanyard)

app.mount('#app')
