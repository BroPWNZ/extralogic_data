import { createRouter, createWebHistory } from 'vue-router'

import FormLayout from "@/components/FormLayout";
import FormCart from "@/components/FormCart";
import FormNew from "@/components/FormNew";

const routes = [
    {
        path: '/',
        name: 'Forms',
        component: FormLayout
    },
    {
        path: '/new',
        name: 'FormNew',
        component: FormNew
    },
    {
        path: '/form/:_id',
        name: 'FormCart',
        component: FormCart
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router