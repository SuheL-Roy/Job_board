<template>
  <div class="max-w-6xl mx-auto">
    <!-- <div class="max-w-xl mx-auto"> -->
    <h1 class="text-2xl font-semibold">Jobs of #{{ route.params.slug }}</h1>
    <!-- </div> -->
    <Loading :active="loading" />
    <JobList v-for="job in jobs" :key="job.id" :job="job" />
    <div ref="target" class="my-8 text-center">
      <SyncLoader color="#6560EC" v-if="PaginationLoad" />
    </div>
  </div>
</template>

<script setup>
import api from "../helper/api";
import { useIntersectionObserver } from "@vueuse/core";
import SyncLoader from "vue-spinner/src/SyncLoader.vue";
import JobList from "../components/JobList.vue";
import Loading from "vue-loading-overlay";
import { useRoute } from "vue-router";
import { onMounted, reactive, ref, watch } from "vue";
const loading = ref(false);
const PaginationLoad = ref(false);
const route = useRoute();

const jobs = ref([]);
const target = ref(null);

const pagination = reactive({
  page: 1,
  last_page: null,
});

const loadjobs = async() => {
 const { ok, data } = await api.get(`/api/tags/${route.params.slug}/jobs`);

  if (!ok) alert("something went wrong");

  loading.value = false;

  jobs.value = data.data;

  pagination.last_page = data.meta.last_page;
  pagination.page = data.meta.current_page;

}

//console.log(jobs);
onMounted(() => {
  loading.value = true;
  loadjobs()
  // PaginationLoad.value = true;

//   const { ok, data } = await api.get(`/api/tags/${route.params.slug}/jobs`);

//   if (!ok) alert("something went wrong");

//   loading.value = false;

//   jobs.value = data.data;

//   pagination.last_page = data.meta.last_page;
//   pagination.page = data.meta.current_page;

  //console.log(data.data);
});

watch(
  () => route.params.slug,
  async () => {
    loading.value = true;
    if(route.params.slug){
     loadjobs();
    }
    

    // PaginationLoad.value = true;

    // const { ok, data } = await api.get(`/api/tags/${route.params.slug}/jobs`);

    // if (!ok) alert("something went wrong");

    // loading.value = false;

    // jobs.value = data.data;

    // pagination.last_page = data.meta.last_page;
    // pagination.page = data.meta.current_page;
  }
);

useIntersectionObserver(target, async ([{ isIntersecting }]) => {
  if (isIntersecting && pagination.page < pagination.last_page) {
    PaginationLoad.value = true;
    const { ok, data } = await api.get(
      `/api/tags/${route.params.slug}/jobs?page=${++pagination.page}`
    );
    if (!ok) alert("failed to job load");
    jobs.value = [...jobs.value, ...data.data];
    PaginationLoad.value = false;
  }
});
</script>

<style></style>

<style></style>
