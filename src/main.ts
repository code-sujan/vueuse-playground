import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Routes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import App from './App.vue'
import '~/modules/integrations'
import '~/modules/firebase'

import 'splitpanes/dist/splitpanes.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/main.css'

createApp(App)
  .use(createRouter({
    history: createWebHistory(),
    routes: Routes,
  }))
  .use(createPinia())
  .mount('#app')
