<template>
  
    <select name="" id="" v-model="selected" >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const options = ref([
    {
        label:"FullTime",
        value:"full_time"
    },
     {
        label:"PartTime",
        value:"part_time"
    },
     {
        label:"Contract",
        value:"contract"
    },
     {
        label:"Temporary",
        value:"temporary"
    },
     {
        label:"Internship",
        value:"internship"
    },
    {
        label:"Volunteer",
        value:"volunteer"
    },
    {
        label:"Remote",
        value:"remote"
    }
])
const selected = ref(null); 
</script>