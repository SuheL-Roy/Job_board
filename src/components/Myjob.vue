<template>
  <div class="max-w-6xl mx-auto">
    <suspense>
      <template #fallback>
        <Loading :active="true" />
      </template>
      <MyJoblist />
    </suspense>
  </div>
</template>

<script setup>
import MyJoblist from './MyJoblist.vue';
import Loading from 'vue-loading-overlay';

</script>

<style>

</style>