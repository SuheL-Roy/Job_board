
import { defineStore } from 'pinia'
import api from '../helper/api';

const useAuthStore = defineStore("auth", {
    state() {
      return {
        user: {},
        loggedIn: false,
      };
    },
    actions: {
      async boot() {
        return new Promise(async (resolve, reject) => {
          const { ok, data } = await api.get("/api/auth/me");
          if (ok) {
            this.loggedIn = true;
            this.user = data;
          }
          resolve(data);
        });
      },
      logout(){
        return new Promise(async(resolve,reject)=>{
          const {ok} = await api.post("/api/auth/logout");
          if(ok){
            this.loggedIn = false;
            this.user = {},
            localStorage.removeItem('token')
            resolve(true)
          }else{
            reject(true)
          }
        });
      }
    },
  });
  
  export default useAuthStore;