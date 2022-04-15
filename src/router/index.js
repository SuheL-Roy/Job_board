
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue'
import useAuthStore from '../store/auth';
import TagAcrive from '../components/TagAcrive.vue';
import JobDetails from '../pages/JobDetail.vue';


const routes=[
    {
        path:'/',
        name:"home",
        component:Home,
        meta:{
            auth:true
        }
       
    },
    {
        name:"jobDetails",
        path:'/:slug',
        component:JobDetails,
    },
    {
        path:'/tags/:slug',
        name:"tagArchive",
        component:TagAcrive,
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

router.beforeEach((to,from,next)=>{

     const auth = useAuthStore();

    if (to.meta?.auth && !auth.loggedIn) {
       return next("/login");
      }
    next();
})


export default router;
