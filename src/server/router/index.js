

import { createRouter , createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
const routes = [

    {
        path:'/',
        name :'Home',
        component:Home
        
    },
    {
        path:'/register',
        name :'register',
        component: ()=> import('../views/Register.vue')
        
    },
    {
        path:'/about',
        name :'about',
        component: ()=> import('../views/About.vue')
        
    },
    {
        path:'/about/:id',
        name :'About',
        component: ()=> import('../views/About.vue')
        
    },
]


const router = createRouter({

    history:createWebHistory(process.env.BASE_URL),
    routes
});


export default router;
