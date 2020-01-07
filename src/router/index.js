import Vue from 'vue';
import VueRouter from 'vue-router';
import cookieUtils from '@/utils/cookie/index';
import { Toast } from 'vant';

// 路由模块
import { aboutUs, appDownload } from './modules/about-download/index';
import Home from './modules/home/index';
import { formLogin, formRegister, formRetrievePassword } from './modules/form/index';
import Menu from './modules/menu/index';
import Class from './modules/class/index';
import CollegeCourseDetail from './modules/class-details/index';
import { Streaming, StreamingList } from './modules/streaming/index';
import { newsRouter, newsDetails } from './modules/news/index';
import {Essay, EssayDetails} from './modules/essay/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      Home,
      aboutUs,
      appDownload,
      Class,
      CollegeCourseDetail,
      newsRouter,
      newsDetails,

    ]
  },
  formLogin,
  formRegister,
  formRetrievePassword,
  Menu,
  Streaming,
  StreamingList,
  {
    path: '/test',
    component: () => import('@/views/test/index.vue')
  },
  {
    path: '*',
    redirect: '/home'
  },
  Essay,
  EssayDetails,
];

const router = new VueRouter({
  routes,
});

// 路由权限控制
router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    if (cookieUtils.getCookie('yetLogin')) {
      next()
    } else {
      Toast.fail('请登录');
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  } else {
    next()
  }
})

export default router;
