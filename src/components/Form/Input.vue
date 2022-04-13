<template>
  <div class="flex flex-col w-full">
    <label :for="name">{{label}}</label>
    <input
      type="text"
      :name="name"
      id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-slate-50 rounded-sm w-full"
      v-bind="$attrs"
    />
    <p v-if="helperText" class="text-sm" :class="{ 'text-red-500': hasError }">
      {{ helperText }}
    </p>
    <!-- <P>{{helperText}}</P> -->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>
<script setup>
defineProps({
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
defineEmits(["update:modelValue"]);
</script>

<style>
</style>