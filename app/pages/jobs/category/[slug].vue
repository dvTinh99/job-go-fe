<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 mb-6">
        <NuxtLink to="/" class="hover:text-indigo-600">Trang chủ</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/jobs" class="hover:text-indigo-600">Việc làm</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-700">{{ categoryName }}</span>
      </nav>

      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-2xl lg:text-3xl font-bold text-gray-900">Việc làm {{ categoryName }}</h1>
        <p class="text-gray-600 mt-2">{{ jobs.length }} việc làm đang tuyển dụng</p>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- FILTER SIDEBAR -->
        <aside class="lg:col-span-1 space-y-6">
          <!-- Location -->
          <div class="bg-white rounded-2xl border shadow-sm p-5">
            <h3 class="font-semibold text-gray-900 mb-4">Địa điểm</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li v-for="loc in locations" :key="loc">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" class="rounded text-indigo-600" />
                  <span>{{ loc }}</span>
                </label>
              </li>
            </ul>
          </div>

          <!-- Salary -->
          <div class="bg-white rounded-2xl border shadow-sm p-5">
            <h3 class="font-semibold text-gray-900 mb-4">Mức lương</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li v-for="salary in salaries" :key="salary">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="salary" class="text-indigo-600" />
                  <span>{{ salary }}</span>
                </label>
              </li>
            </ul>
          </div>
        </aside>

        <!-- JOB LIST -->
        <div class="lg:col-span-3 space-y-6">
          <!-- Sort -->
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-600">Sắp xếp theo</div>
            <select
              class="border border-gray-300 rounded-xl px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Mới nhất</option>
              <option>Lương cao</option>
              <option>Phù hợp nhất</option>
            </select>
          </div>

          <!-- Job Card -->
          <div
            v-for="job in jobs"
            :key="job.id"
            class="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
          >
            <div class="flex justify-between gap-6">
              <div>
                <NuxtLink
                  :to="`/jobs/${job.slug}`"
                  class="text-lg font-semibold text-gray-900 hover:text-indigo-600"
                >
                  {{ job.title }}
                </NuxtLink>

                <div class="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
                  <span>🏢 {{ job.company }}</span>
                  <span>📍 {{ job.location }}</span>
                  <span>💼 {{ job.type }}</span>
                </div>

                <div class="mt-3 text-indigo-600 font-semibold">
                  {{ job.salary }}
                </div>
              </div>

              <div class="flex flex-col items-end justify-between">
                <span class="text-xs text-gray-500">
                  {{ job.postedAt }}
                </span>

                <button
                  class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
                >
                  Ứng tuyển
                </button>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex justify-center gap-2 pt-6">
            <button class="px-4 py-2 border rounded-lg">1</button>
            <button class="px-4 py-2 border rounded-lg">2</button>
            <button class="px-4 py-2 border rounded-lg">3</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const categoryName = 'Kinh doanh / Bán hàng'

const locations = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng']
const salaries = ['Dưới 10 triệu', '10 – 20 triệu', 'Trên 20 triệu']

const jobs = ref([
  {
    id: 1,
    slug: 'nhan-vien-telesales',
    title: 'Nhân viên Telesales',
    company: 'Công ty ABC',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '9 – 20 triệu',
    postedAt: '2 ngày trước',
  },
  {
    id: 2,
    slug: 'nhan-vien-kinh-doanh',
    title: 'Nhân viên Kinh doanh',
    company: 'Công ty XYZ',
    location: 'TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    salary: '12 – 25 triệu',
    postedAt: '1 ngày trước',
  },
])
</script>
