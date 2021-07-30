import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
  },
];

export function createRouter () {
  return new VueRouter({
    mode: 'hash',
    routes,
  });
}
