<script setup lang="ts">
import { Label } from '@/components/ui/label'
import GenaralInformation from '@/components/TextEditor/GenaralInformation.vue'
import BasicInformation from '@/components/TextEditor/BasicInformation.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

definePageMeta({
  layout: 'admin',
})
</script>
<template>
  <section class="bg-gray-50 py-16">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center text-indigo-600 mb-8">Đăng Việc Làm Mới</h2>

      <form class="space-y-6">
        <!-- Job Title -->
        <div>
          <label class="block font-semibold mb-2">Tên công việc</label>
          <input
            type="text"
            placeholder="VD: Nhân viên Kinh doanh"
            class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <!-- Company Name -->
        <div>
          <label class="block font-semibold mb-2">Tên công ty</label>
          <input
            type="text"
            placeholder="VD: Công ty TNHH ABC"
            class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <!-- Location & Job Type -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block font-semibold mb-2">Địa điểm làm việc</label>
            <input
              type="text"
              placeholder="Hồ Chí Minh"
              class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label class="block font-semibold mb-2">Hình thức làm việc</label>
            <select
              class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option>Toàn thời gian</option>
              <option>Bán thời gian</option>
              <option>Thực tập</option>
              <option>Remote</option>
            </select>
          </div>
        </div>

        <!-- Salary -->
        <div>
          <label class="block font-semibold mb-2">Mức lương</label>
          <input
            type="text"
            placeholder="VD: 15 - 25 triệu VNĐ"
            class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block font-semibold mb-2">Mô tả công việc</label>
          <textarea
            rows="4"
            placeholder="Mô tả chi tiết công việc..."
            class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>
        </div>

        <!-- Requirements -->
        <div>
          <label class="block font-semibold mb-2">Yêu cầu ứng viên</label>
          <textarea
            rows="4"
            placeholder="Yêu cầu kỹ năng, kinh nghiệm..."
            class="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>
        </div>

        <!-- Submit -->
        <div class="text-center pt-6">
          <button
            type="submit"
            class="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow"
          >
            Đăng Việc Ngay
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
