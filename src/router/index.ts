import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import Typography from '@/views/Typography.vue'
import CheckboxPage from '@/views/CheckboxPage.vue'

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
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: CheckboxPage
        },
    ]
})

export default router;