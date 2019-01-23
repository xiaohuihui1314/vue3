import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index');
const home = () => import('@/pages/views/home');
const view1 = () => import('@/pages/views/view1');
const view2 = () => import('@/pages/views/view2');
const view3 = () => import('@/pages/views/view3');
Vue.use(Router);
const routerList = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/home',
    component: index,
    children: [
      {
        path: '',
        name:'home',
        component: home
      }
    ]
  },
  {
    path: '/view1',
    component: index,
    children: [
      {
        path: '',
        name: 'view1',
        component: view1
      }
    ]
  },
  {
    path: '/view2',
    component: index,
    children: [
      {
        path: '',
        name: 'view2',
        component: view2
      }
    ]
  },
  {
    path: '/view3',
    component: index,
    children: [
      {
        path: '',
        name: 'view3',
        component: view3
      }
    ]
  }
];
export default new Router({
  routes: routerList
});
