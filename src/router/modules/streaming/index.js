export const Streaming ={
  path: '/streaming',
  component: () => import('@/views/streaming/index.vue'),
  /* meta: {
    requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
  } */
}
export const StreamingList ={
  path: '/streaming-list',
  component: () => import('@/views/streaming/streaming-list.vue'),
  /* meta: {
    requireAuth: true // 在需要登录的路由的meta中添加响应的权限标识
  } */
}
