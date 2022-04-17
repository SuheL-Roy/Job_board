<template>
  <div
    class="
      flex
      justify-between
      max-w-6xl
      px-2
      py-10
      mx-auto
      border-t-4 border-indigo-500
      xl:px-0
    "
  >
    <!-- <h2 class="text-2xl font-semibold text-indigo-500" >JOB Board</h2> -->
    <h2 class="text-2xl font-semibold text-indigo-500">
      <router-link :to="{ name:'home' }" > JOB Board </router-link>
    </h2>

    <nav v-if="auth.loggedIn" class="flex gap-4 items-center">
      <router-link class="text-base" :to="{ name:'myJob' }">My posts</router-link>
      <router-link class="text-base button" :to="{ name:'create' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Post a job</span>
      </router-link>
      <p>{{ auth.user.name }}</p>
      <button @click="logout">Logout</button>
    </nav>
    <nav v-else class="flex gap-4 items-center">
      <router-link class="text-base" :to="{ name:'login' }">Login</router-link>
      <router-link class="text-base button" :to="{name:'register' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Join</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import useAuthStore from "../store/Auth";
import { useRouter } from "vue-router";

const router = useRouter()
//let loggedIn = false;
const auth =  useAuthStore();

const logout =()=> {
  // console.log('hi');
  auth.logout().then(()=>{
    router.push({ name:'login'})
  }).catch((err)=>{
    alert('something went wrong');
  })
}

</script>