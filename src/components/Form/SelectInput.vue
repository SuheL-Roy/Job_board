<template>
  <div class="flex flex-col w-full">
    <label :for="name">{{label}}</label>
    <select @input="$emit('update:modelValue', $event.target.value)">
      <option
        :selected="modelValue === option.value"
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <p v-if="helperText" class="text-sm" :class="{ 'text-red-500': hasError }">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    default: "",
    type: String,
  },
  name: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    default: "",
    required: true,
  },  
  helperText: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});
</script>
