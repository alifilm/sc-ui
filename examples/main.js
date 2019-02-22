// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import demoBlock from './components/demo-block.vue'
import router from './router'
import VueRouter from 'vue-router'

import '../packages/theme-chalk/src/index.scss'
import scUi from '../packages/index'

Vue.use(scUi)
console.log(scUi)

import headerPart from './components/header'
import slideNav from './components/slideNav'

Vue.component('header-part',headerPart)
Vue.component('slide-nav',slideNav)

Vue.component('demo-block',demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})