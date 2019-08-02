// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import Post from './components/Post.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
