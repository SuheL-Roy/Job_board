
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue'


const routes=[
    {
        path:'/',
        name:"home",
        component:Home,
       
    },
    {
        path: "/Con-tact",
        name:"contact",
        component: Contact
    },

    {
        path: "/register",
        name:"register",
        component: Register
    },
    {
        path: "/login",
        name:"login",
        component: Login
    },
    
   
   

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router;
