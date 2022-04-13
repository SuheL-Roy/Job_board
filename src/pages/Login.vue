<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-start gap-4 p-3 mx-auto md:w-6/12">
    <h1 class="text-xl font-semibold text-slate-700 ">Login</h1>

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

    <!-- <button class="button">Login</button> -->
    <Button :loading="loading">Login</Button>
  </form>
</template>

<script setup>
 import Input from '../components/Form/Input.vue';
 import { useRouter } from "vue-router";
 import { reactive } from "vue";
 import Button from '../components/Form/Button.vue';
 import useForm from '../hooks/UserForm';
 const router = useRouter();

 const { submit, getErrorMessage, response, loading } = useForm();


 const form = reactive({
  email: "",
  password: "",
 });

 const handleSubmit = async (e) => {
 submit(form, "/api/auth/login").then((response) => {
    router.push({ name: "home" });
    //console.log(response);
  });
}

</script>