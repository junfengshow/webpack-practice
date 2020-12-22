
export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: './layouts/BasicLayout',
    routes: [
      { path: '/leetcode', component: './pages/LeetCode/LeetCode', },
      { path: '/style', component: './pages/StyleQuestions/StyleQuestions'},
    ]
  }
]
