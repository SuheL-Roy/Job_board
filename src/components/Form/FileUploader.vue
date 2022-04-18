<template>
  <div
    v-if="modelValue"
    class="flex items-center justify-between p-3 border border-slate-700"
  >
    <div class="flex items-center gap-2">
      <img class="w-10" :src="modelValue" alt="" />
      <p>Company Logo</p>
    </div>

    <button type="button" @click="handleDelete" class="text-3xl text-red-500">
      &times;
    </button>
  </div>
  <FilePond  v-if="!modelValue" :server="serverConfig" name="file" />
</template>

<script setup>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import api from "../../helper/api";

const props = defineProps({
  modelValue: {
    default: "",
    type: String,
  },
});

const FilePond = vueFilePond();
const emit = defineEmits(["update:modelValue"]);
let serverConfig = {
  process: {
    url: "https://jobs-api.return0.codes/api/uploads",
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    withCredentials: false,
    onload: (response) => {
      // $emits("update:modelValue", JSON.parse(response).url);
      // console.log(response);
      emit("update:modelValue", JSON.parse(response).url);
    },
  },
};

const handleDelete =()=>{
   console.log("dhhd") 
   api.delete(`/api/uploads?url=${props.modelValue}`);
   emit("update:modelValue", "");
}
</script>

<style></style>
