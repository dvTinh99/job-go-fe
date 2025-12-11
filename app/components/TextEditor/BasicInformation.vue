<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import type { DateValue } from '@internationalized/date'
import { getLocalTimeZone, today } from '@internationalized/date'
import { Button } from '@/components/ui/button'

import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref, type Ref } from 'vue'
const showCalendar = ref<boolean>(false)
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>

const openCalendar = () => (showCalendar.value = !showCalendar.value)
</script>
<template>
  <div>
    <!-- title -->
    <div class="grid w-full items-center gap-1.5">
      <Label for="title">Title</Label>
      <Input id="title" class="w-full" type="text" placeholder="Title" />
    </div>
  </div>

  <div class="flex gap-2">
    <div class="w-full flex flex-col gap-2">
      <!-- Salary -->
      <Label for="title">Salary</Label>
      <Input class="w-full" type="text" placeholder="From" />
      <Input class="w-full" type="text" placeholder="To" />
    </div>
    <div class="">
      <!-- Deadline -->
      <Label for="title">Deadline</Label>
      <Button class="w-[250px]" @click="openCalendar">open</Button>
      <Calendar
        v-if="showCalendar"
        v-model="value"
        :weekday-format="'short'"
        class="absolute rounded-md border bg-white z-99"
      />
    </div>
    <div class="w-full items-center gap-1.5">
      <!-- localtion -->
      <Label for="title">Location</Label>
      <Input id="title" class="w-full" type="text" placeholder="Location" />
    </div>
  </div>
</template>
