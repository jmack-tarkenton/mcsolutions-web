import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

export enum RouteNames {
  Home = 'Home',
  About = 'About',
  Contact = 'Contact',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: () => import('@/views/Home.vue'),
  },
  {
    name: RouteNames.About,
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    name: RouteNames.Contact,
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
