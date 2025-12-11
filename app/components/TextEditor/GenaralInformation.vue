<script setup lang="ts">
import { Label } from '@/components/ui/label'
import SelectOption from '@/components/SelectOption.vue'
import { Separator } from '@/components/ui/separator'
</script>
<template>
  <div class="">
    <div class="p-2 flex flex-col gap-3 border border-1">
      <Label for="text-editor" class="mb-1.5">Sumary Information</Label>

      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Loại Hình :</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Vij tris :</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Yêu cầu bằng cấp :</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Ngày đăng tuyển:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Yêu cầu kinh nghiệm:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Số lượng tuyển:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Yêu cầu độ tuổi:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Yêu cầu giới tính:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Thòi gian làm việc:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Ngành nghề:</Label>
        <select-option />
      </div>
      <separator />
      <div class="flex items-center">
        <Label for="text-editor">Địa Điểm:</Label>
        <select-option />
      </div>
    </div>
  </div>
</template>
