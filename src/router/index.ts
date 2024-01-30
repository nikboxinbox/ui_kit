import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import TypographyPage from '@/views/TypographyPage.vue'
import CheckboxPage from '@/views/CheckboxPage.vue'
import LogoPage from '@/views/LogoPage.vue'

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
            component: TypographyPage
        },
        {
            path: '/checkbox',
            name: 'Checkbox',
            component: CheckboxPage
        },
        {
            path: '/logo',
            name: 'Logo',
            component: LogoPage
        },
    ]
})

export default router;