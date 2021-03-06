import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'colaboradores', component: () => import('pages/Colaboradores.vue') },
      { path: 'equipamentos', component: () => import('pages/Equipamentos.vue') },
      { path: 'fluxo', component: () => import('pages/Fluxo.vue') }
    ]
  },
  {
    path: '/bpf',
    component: () => import('layouts/LayoutBpf.vue'),
    children: [
      { path: '', component: () => import('pages/Bpf.vue') }
    ]
  }
]

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }


export default routes
