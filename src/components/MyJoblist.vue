
<template>
  <div class="max-w-6xl mx-auto">
    <JobList v-for="job in jobs" :key="job.id" :job="job" />
    <div ref="target"  class="my-8 text-center">
      <SyncLoader color="#6560EC" v-if="PaginationLoad"/>
   </div>
  </div>
</template>

<script setup>
import api from "../helper/api";
import { useIntersectionObserver } from "@vueuse/core";
import SyncLoader from "vue-spinner/src/SyncLoader.vue"
import JobList from "../components/JobList.vue";
import { onMounted, reactive, ref } from "vue";
import useAuthStore from "../store/Auth";
const loading = ref(false);
const PaginationLoad = ref(false);

const auth = useAuthStore();

const jobs = ref([]);
const target = ref(null);

const pagination = reactive({
  page:1,
  last_page:null
}) 


  const { ok, data } = await api.get(`/api/jobs?user_id=${auth.user.id}`);

  if (!ok) alert("something went wrong");


  jobs.value = data.data;

  pagination.last_page= data.meta.last_page;
  pagination.page=data.meta.current_page;


useIntersectionObserver(target, async([{ isIntersecting }]) => {
  if(isIntersecting && pagination.page < pagination.last_page){
   PaginationLoad.value = true;
   const { ok, data } = await api.get(`/api/jobs?page=${++pagination.page}&user_id=${auth.user.id}`);
   if(!ok) alert('failed to job load');
   jobs.value = [...jobs.value,...data.data];
   PaginationLoad.value = false;
  }
});
</script>

<style></style>
