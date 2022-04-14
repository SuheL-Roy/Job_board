<template>
  <div class="max-w-6xl mx-auto">
   <JobList v-for="job in jobs" :key="job.id" :job="job"/>
  </div>
</template>

<script setup>
import api from "../helper/api";
import JobList from '../components/JobList.vue';
import { onMounted, ref } from "vue";
const loading = ref(false);

const jobs = ref([]);
//console.log(jobs);
onMounted(async () => {
  loading.value = true;

  const { ok, data } = await api.get("/api/jobs");

  if (!ok) alert("something went wrong");

  loading.value = false;

  jobs.value = data.data;

  console.log(data.data);
});
</script>

<style>
</style>