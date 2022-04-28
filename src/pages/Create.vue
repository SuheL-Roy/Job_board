<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-xl font-semibold">Post a new Job</h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 mt-8 mb-8">
      <Input name="title" label="Job title" v-model="form.title" />
      <Input name="title" label="Job location" v-model="form.location" />
      <Input name="title" label="Application Link" v-model="form.link" />
      <Input name="title" label="company Name" v-model="form.company_name" />
      <Input name="title" label="Description" v-model="form.description" />
      <!-- <Input name="title" label="Tags" v-model="form.tags" /> -->
      <JobtagInput class="bg-slate-50 rounded-sm w-full" v-model="form.tags"  name="Tags"/>
      <SelectInput :options="options" v-model="form.type" label="Select job type" />
      <FileUploader v-model="form.company_logo"/>
      <Editior v-model="form.description" label="description"/>

      <Button :loading="loading">Submit</Button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Loading from "vue-loading-overlay";
import { reactive, ref } from "@vue/reactivity";
import Input from "../components/Form/Input.vue";
import SelectInput from "../components/Form/SelectInput.vue";
import Editior from '../components/Form/Editior.vue';
import JobtagInput from "../components/Form/JobtagInput.vue";
import FileUploader from "../components/Form/FileUploader.vue";
import Button from "../components/Form/Button.vue";
import api from "../helper/api";
import userForm from "../hooks/UserForm";

const router = useRouter();

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
  description: "",
  company_logo: "",
  type: "",
  tags: [],
});

const loading = ref(false);
const { submit, getErrorMessage } = userForm();

const handleSubmit =()=>{
 loading.value = true;
  let tags = form.tags.map((tag) => tag.value);
  submit({ ...form, tags }, "/api/jobs")
    .then(() => {
      loading.value = false;
      router.push({ name: "home" });
    })
    .catch(() => {
      loading.value = false;
    });
}
</script>

<style></style>
