import {createRouter, createWebHistory} from "vue-router";

import Index from '@/pages/Index';
import Portfolio from "@/pages/Portfolio";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/portfolio',
            component: Portfolio
        }
    ]
})

export default router;
