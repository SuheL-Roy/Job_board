
import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Contact from '../pages/Contact.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue'
import useAuthStore from '../store/auth';
import TagAcrive from '../components/TagAcrive.vue';
import JobDetails from '../pages/JobDetail.vue';
import MyJob from '../components/Myjob.vue';
import JobFromLayout from '../components/JobFromLayout.vue';
import Update from '../pages/Update.vue';
import Create from '../pages/Create.vue';

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
        name:"jobFromLayout",
        path:'/jobs',
        component:JobFromLayout,
        meta:{
            auth:true
        },
        children:[

            {
                name:"create",
                path:'create',
                component:Create,
            },

            {
                name:"update",
                path:'update/:id',
                component:Update,
            },

        ]
       
    },
    {
        name:"jobDetails",
        path:'/:slug',
        component:JobDetails,
    },
    {
        name:"myJob",
        path:'/my-job',
        component:MyJob,
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
