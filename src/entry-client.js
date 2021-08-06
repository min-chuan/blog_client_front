import { createApp } from './app'

const { app, router, store } = createApp()

// 替换 store 的根状态
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})