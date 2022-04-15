<template>
  <div class="max-w-6xl mx-auto">
    <suspense>
      <template #fallback>
        <Loading :active="true" />
      </template>
      <JobDetails />
    </suspense>
  </div>
</template>

<script setup>
import JobDetails from "../components/JobDetails.vue";
import Loading from "vue-loading-overlay";
</script>

<style></style>
