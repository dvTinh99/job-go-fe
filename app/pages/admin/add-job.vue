<script setup lang="ts">
import { Label } from '@/components/ui/label'
import GenaralInformation from '@/components/TextEditor/GenaralInformation.vue'
import BasicInformation from '@/components/TextEditor/BasicInformation.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const authStore = useAuthStore()
console.log('authStore', authStore.$state);

definePageMeta({
  layout: 'admin',
})
</script>
<template>
  <div class="p-5 h-full flex">
    <div class="flex flex-col gap-3 w-[70%]">
      <basic-information />

      <div class="h-[40vh]">
        <!-- text editor -->
        <Label for="text-editor" class="mb-1.5">Description</Label>
        <quill-editor id="text-editor" theme="snow" toolbar="essential" />
      </div>
    </div>
    <div class="w-[30%] p-2 scroll-auto">
      <genaral-information />
    </div>
  </div>
</template>
