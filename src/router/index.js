import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../modules/counter/CustomCounter.vue'),
    },
    {
      path: '/tasks-list',
      name: 'tasks-list',
      component: () => import('../modules/tasksList/TasksList.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../modules/form/views/FormView.vue'),
    },
  ],
});
export default router;
