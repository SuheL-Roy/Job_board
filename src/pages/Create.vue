<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-xl font-semibold">Post a new Job</h1>
    <pre>
      {{form}}
    </pre>
    <form class="flex flex-col gap-4 mt-8 mb-8">
      <Input name="title" label="Job title" v-model="form.title" />
      <Input name="title" label="Job location" v-model="form.location" />
      <Input name="title" label="Application Link" v-model="form.link" />
      <Input name="title" label="company Name" v-model="form.company_name" />
      <Input name="title" label="Description" v-model="form.description" />
      <SelectInput :options="options" v-model="form.type" label="Select job type" />
      <FileUploader v-model="form.company_logo"/>
      <Editior v-model="form.description"/>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import Input from "../components/Form/Input.vue";
import SelectInput from "../components/Form/SelectInput.vue";
import Editior from '../components/Form/Editior.vue';
import FileUploader from "../components/Form/FileUploader.vue";

const options = ref([
  {
    label: "FullTime",
    value: "full_time",
  },
  {
    label: "PartTime",
    value: "part_time",
  },
  {
    label: "Contract",
    value: "contract",
  },
  {
    label: "Temporary",
    value: "temporary",
  },
  {
    label: "Internship",
    value: "internship",
  },
  {
    label: "Volunteer",
    value: "volunteer",
  },
  {
    label: "Remote",
    value: "remote",
  },
]);

const form = reactive({
  title: "",
  location: "",
  link: "",
  company_name: "",
  description: "<h3>description</h3>",
  company_logo: "",
  type: "internship",
});
</script>

<style></style>
