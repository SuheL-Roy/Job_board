<template>
   <div class="p-4 prose border prose-base max-w-none border-slate-500">
  <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps({
    modelValue:{
        default:"",
        type:String
    }
})

const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  onUpdate: ({editor}) => {
        // HTML
         emit('update:modelValue', editor.getHTML());
       // console.log('editor update',editor.getHTML());
      },
})
</script>

<style>
  .ProseMirror-focused{
      outline: none;
  }
</style>