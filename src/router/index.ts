import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import TypographyPage from '@/views/TypographyPage.vue'
import CheckboxPage from '@/views/CheckboxPage.vue'
import LogoPage from '@/views/LogoPage.vue'
import SwitcherPage from '@/views/SwitcherPage.vue'
import ModalPage from '@/views/ModalPage.vue'
import BackgroundImgPage from '@/views/BackgroundImgPage.vue'

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
        {
            path: '/switcher',
            name: 'Switcher',
            component: SwitcherPage
        },
        {
            path: '/modal',
            name: 'Modal',
            component: ModalPage
        },
        {
            path: '/background-waves',
            name: 'Background',
            component: BackgroundImgPage
        },
    ]
})

export default router;