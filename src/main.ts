import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import router from './router'


const app = createApp(App)
.use(router)

Object.values(
    import.meta.glob<{ install: any }>('./plugins/*.ts', { eager: true }),
  ).forEach(i => i.install?.(app))

  app.mount('#app')