import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// import  firebase  from "firebase/app";
// import  "firebase/firestore";

import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCT7P_DLvQGdZaS__Y_Z0Eb_w9R4RHJYY4",
  authDomain: "ite225-porames-79225.firebaseapp.com",
  projectId: "ite225-porames-79225",
  storageBucket: "ite225-porames-79225.appspot.com",
  messagingSenderId: "36814806052",
  appId: "1:36814806052:web:78180e928401d17caf8cb1",
  measurementId: "G-76MFT1C0XH"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  firebase,  
  render: h => h(App)
}).$mount('#app')
