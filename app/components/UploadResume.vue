<script setup lang="ts">
const {
  file,
  error,
  status,
  progress,
  uploadedUrl,
  openFileDialog,
  upload
} = useUploadFile()
</script>

<template>
  <button @click="openFileDialog">
    Chọn CV
  </button>

  <p v-if="file">📄 {{ file.name }}</p>
  <p v-if="error" class="text-red-500">{{ error }}</p>

  <button
    @click="upload"
    :disabled="!file || status === 'uploading'"
  >
    Upload
  </button>

  <div v-if="status === 'uploading'">
    Uploading... {{ progress }}%
  </div>

  <p v-if="uploadedUrl" class="text-green-600">
    Upload thành công!
  </p>
</template>
