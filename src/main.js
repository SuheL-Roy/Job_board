import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from 'pinia';
import router from './router/index';
import useAuthStore from './store/Auth';

// const app = createApp(App);
// const Auth = useAuthStore();

// const pania = createPinia();
// app.use(pania);



//createApp(App).use(router).mount("#app");


const app = createApp(App);

const pania = createPinia();
app.use(pania);

const auth = useAuthStore();

auth.boot().then(() => {
  app.use(router);
  router.isReady().then(() => {
    app.mount("#app");
  });
});
