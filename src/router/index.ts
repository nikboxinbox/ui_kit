import { createRouter, createWebHistory } from "vue-router";
import Index from '@/views/Index.vue'
import ButtonPage from '@/views/ButtonPage.vue'
import TypographyPage from '@/views/TypographyPage.vue'
import CheckboxPage from '@/views/CheckboxPage.vue'
import LogoPage from '@/views/LogoPage.vue'
import SwitcherPage from '@/views/SwitcherPage.vue'
import ModalPage from '@/views/ModalPage.vue'
import BackgroundImgPage from '@/views/BackgroundImgPage.vue'
import InputPage from '@/views/InputPage.vue'
import PopupPage from '@/views/PopupPage.vue'

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
        {
            path: '/input',
            name: 'Input',
            component: InputPage
        },
        {
            path: '/popup',
            name: 'Popup',
            component: PopupPage
        },
    ]
})

export default router;