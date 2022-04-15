<template>
  <div class="max-w-6xl mx-auto">
    <JobList :job="job" :show_details_button="false" />
    <div class="max-w-3xl mx-auto mt-10">
      <div
        v-if="job.description"
        v-html="job.description"
        class="typography"
      ></div>
    </div>
     <p class="text-xl italic text-center text-slate-700">No description</p>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import api from "../helper/api";
import JobList from "./JobList.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const job = ref(null);

const { ok, data } = await api.get(`/api/jobs/${route.params.slug}`);
if (!ok) alert("fail to load data");

job.value = data.data;
</script>

<style></style>
