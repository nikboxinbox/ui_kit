import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import Typography from '@/views/Typography.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/button',
            name: 'Button',
            component: ButtonPage
        },
        {
            path: '/typography',
            name: 'Typography',
            component: Typography
        },
    ]
})

export default router;