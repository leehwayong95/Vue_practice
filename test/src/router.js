import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
        paht: "/",
        component: Home
        },
        {
        paht: "/about",
        component: About
        }  
    ]
});

export default router;