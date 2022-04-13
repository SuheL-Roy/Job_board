<template>
  <form
    @submit.prevent="handleSubmit"
    action="#"
    class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12"
  >
    <h1 class="text-xl font-semibold text-slate-700">Register</h1>
    <div class="flex flex-col w-full">
      <Input
        v-model="form.name"
        :helperText="getErrorMessage('name')"
        :hasError="Boolean(getErrorMessage('name'))"
        name="name"
        label="Name"
      />
    </div>

    <div class="flex flex-col w-full">
     
      <Input
        v-model="form.email"
        :helperText="getErrorMessage('email')"
        :hasError="Boolean(getErrorMessage('email'))"
        name="name"
        label="Email"
      />
    </div>

    <div class="flex flex-col w-full">
      <Input
        v-model="form.password"
        :helperText="getErrorMessage('password')"
        :hasError="Boolean(getErrorMessage('password'))"
        name="name"
        label="PassWord"
        type="password"
      />
    </div>

    <div class="flex flex-col w-full">
       <Input
        v-model="form.password_confirmation"
        :helperText="getErrorMessage('password_confirmation')"
        :hasError="Boolean(getErrorMessage('password_confirmation'))"
        name="name"
        label="Password_confirmation"
        type="password"
      />
    </div>

    <!-- <button class="button">Register</button> -->
    <Button :loading="loading">Register</Button>
  </form>
</template>

<script setup>
import {useRouter} from 'vue-router';
import { ref, reactive } from "vue";
//import axios from "axios"
import api from "../helper/api.js";
import Input from "../components/Form/Input.vue";
import useForm from '../hooks/UserForm';
import Button from '../components/Form/Button.vue';
const router = useRouter();

const { submit, getErrorMessage, response, loading } = useForm();


const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});


const handleSubmit = async (e) => {
 submit(form, "/api/auth/register").then((response) => {
    router.push({ name: "login" });
    //console.log(response);
  });
}
</script>
