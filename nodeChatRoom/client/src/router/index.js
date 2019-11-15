import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Layout from '../layout';
const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/', // 首页-tab
          component: () => import('@/views/home/index')
        },
        {
          path: '/message', // 消息
          component: () => import('@/views/message/index')
        },
        {
          path: '/profile', // 我的
          component: () => import('@/views/profile/index')
        }
      ]
    },
    {
      path: '/chatDetail', // 聊天室
      component: () => import('@/views/chatDetail/index')
    }
  ]
});
export default router;
