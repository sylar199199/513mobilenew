export const formLogin = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/form/login.vue')
};
export const formRegister = {
  path: '/register',
  name: 'register',
  component: () => import('@/views/form/register.vue')
};
export const formRetrievePassword = {
  path: '/retrieve-password',
  name: 'retrieve-password',
  component: () => import('@/views/form/retrieve-password.vue')
};
