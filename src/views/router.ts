// import { createRouter, createMemoryHistory } from 'vue-router';
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

const Home = require ('./components/Home.vue');
const About = require('./components/About.vue');

export default function() {
  return createRouter({
    history: createMemoryHistory(),  // Sử dụng bộ nhớ khi render server-side
    routes: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  });
}

