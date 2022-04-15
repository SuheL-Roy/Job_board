
<template>
  <suspense>
    <template #fallback>
      <Loading :active="true" />
    </template>
    <Job />
  </suspense>
</template>

<script setup>
import Job from "../components/Job.vue";
import Loading from "vue-loading-overlay";
</script>

<style>
</style>