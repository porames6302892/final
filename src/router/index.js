import Vue from "vue";
import VueRouter from "vue-router";

import About from "../views/About.vue";
import Guide from "../views/Guide.vue";
import CRUD from "../views/CRUD.vue";
import ABC from "../components/HelloWorld.vue";
import CRUDjson from "../views/CRUDjson.vue";
import CRUDLocalStorage from "../views/CRUDLocalStorage.vue" 
import porames from "../views/porames.vue" 
import SigninForm from "../views/SigninForm.vue" 
import Profile from "../views/Profile.vue" 
import porames1 from "../views/1.vue" 


import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: porames,
    meta: { 
      requiresAuth: true, },
  },
  {
    path: "/1",
    name: "porames1",
    component: porames1,
    meta: { 
      requiresAuth: true, },
  },
  


  {
    path: "/signinform",
    name: "Sign in Form",
    component: SigninForm,
  },


  {
    path: "/abc",
    name: "ABC",
    component: ABC,
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide,
  },
  {
    path: "/crud",
    name: "CRUD",
    component: CRUD,
  },
  
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { 
      requiresAuth: true, },
  },
  {
    path: "/crudlocalstorage",
    name: "CRUDLocalStorage",
    component: CRUDLocalStorage,
  },
  {
    path: "/crudjson",
    name: "Crudjson",
    component: CRUDjson,  
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  // base: "/ite",
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const auth = getAuth(); 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next(); 
      } else { 
        next({ path: "/signinform" }); 
      } 
    }); 
  } else { 
    next(); 
  } 
});

export default router;
