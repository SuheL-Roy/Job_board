<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-xl font-semibold">Post a new Job</h1>
    <form class="flex flex-col gap-4 mt-8 mb-8">
      <Input name="title" label="Job title" v-model="form.title" />
      <Input name="title" label="Job location" v-model="form.location" />
      <Input name="title" label="Application Link" v-model="form.link" />
      <Input name="title" label="company Name" v-model="form.company_name" />
      <Input name="title" label="Description" v-model="form.description" />
      <Input name="title" label="Company Logo" v-model="form.company_logo" />
      <SelectInput />
    </form>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Input from "../components/Form/Input.vue";
import SelectInput from "../components/Form/SelectInput.vue";

const form = reactive({
  title: "",
  location: "",
  link: "",
  company_name: "",
  description: "",
  company_logo: "",
});
</script>

<style></style>
