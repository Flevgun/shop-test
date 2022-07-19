import { createRouter, createWebHistory } from "vue-router";



const routes = [
    {
        path: '/',
        name: 'catalog',
        component: () => import('../components/Catalog.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('../components/Cart.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })


export default router;