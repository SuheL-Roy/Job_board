import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from 'pinia';
import router from './router/index';
import "vue-loading-overlay/dist/vue-loading.css";
import useAuthStore from './store/Auth';
// import 'vue-loading-overlay/dist/vue-loading.css';
//import VueObserveVisibility from 'vue-observe-visibility'


// const app = createApp(App);
// const Auth = useAuthStore();

// const pania = createPinia();
// app.use(pania);



//createApp(App).use(router).mount("#app");


const app = createApp(App);

const pania = createPinia();
app.use(pania);

//app.use(VueObserveVisibility)


const auth = useAuthStore();

auth.boot().then(() => {
  app.use(router);
  router.isReady().then(() => {
    app.mount("#app");
  });
});
