export const newsRouter = {
  path: '/home/news-advisory',
  component: () => import('@/views/news/index.vue'),
  redirect: '/home/news-advisory/business',
  children: [
    {
      path: 'business',
      component: () => import('@/views/news/children/business.vue')
    },
    {
      path: 'industry',
      component: () => import('@/views/news/children/industry.vue')
    },
  ]
}

export const newsDetails = {
  path: '/home/news-advisory/:id',
  name: 'homeNewsAdvisoryDetail',
  component: () => import('@/views/news/children/new-details.vue'),
}