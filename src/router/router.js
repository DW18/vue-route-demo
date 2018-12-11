import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../components/index.vue"
import aa from "../components/About.vue"
import User from "../components/User.vue"
import Phone from "../components/Phone.vue"
import Computer from "../components/Computer.vue"
import Tablet from "../components/Tablet.vue"



const routes = [
    {
        path:"/home",
        component: Home,
        children:[
            {
                path:"phone",
                component:Phone
            },
            {
                path:"tablet",
                name:"tablet",
                component:Tablet
            },
            {
                path:"computer",
                component:Computer
            },
            {
                path:"",
                component:Phone
            }
        ]
    },
    {
        path:"/about",
        name:"about",
        component: aa
    },
    {
        path:"*",
        redirect: '/home' 
    },
    {
        path:"/user/:id",
        name:"user",
        component:User
    }
]

var router = new VueRouter({
    routes
})

export default router;