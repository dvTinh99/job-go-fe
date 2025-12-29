<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="text-sm text-gray-500 mb-6">
        <NuxtLink to="/" class="hover:text-indigo-600">Trang chủ</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/jobs" class="hover:text-indigo-600">Việc làm</NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-700">{{ job.title }}</span>
      </nav>

      <!-- Job Header -->
      <div class="bg-white rounded-2xl border shadow-sm p-6 lg:p-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h1 class="text-2xl lg:text-3xl font-bold text-gray-900">
              {{ job.title }}
            </h1>

            <div class="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 {{ job.location }}</span>
              <span>💼 {{ job.type }}</span>
              <span>🎓 {{ job.experience }}</span>
            </div>

            <div class="mt-4 text-indigo-600 text-xl font-semibold">
              {{ job.salary }}
            </div>
          </div>

          <div class="flex gap-3">
            <button
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
              Ứng tuyển ngay
            </button>

            <button
              class="border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-4 py-3 rounded-xl transition"
            >
              Lưu việc
            </button>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- LEFT -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <section class="bg-white rounded-2xl border shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Mô tả công việc</h2>
            <div class="text-gray-700 leading-relaxed space-y-3" v-html="job.description"></div>
          </section>

          <!-- Requirements -->
          <section class="bg-white rounded-2xl border shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Yêu cầu ứng viên</h2>
            <ul class="space-y-2">
              <li v-for="(item, i) in job.requirements" :key="i" class="flex gap-2 text-gray-700">
                <span class="text-indigo-600">✔</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>

          <!-- Benefits -->
          <section class="bg-white rounded-2xl border shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Quyền lợi</h2>
            <ul class="space-y-2">
              <li v-for="(item, i) in job.benefits" :key="i" class="flex gap-2 text-gray-700">
                <span class="text-green-600">🎁</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <!-- RIGHT -->
        <aside class="space-y-6">
          <!-- Company -->
          <div class="bg-white rounded-2xl border shadow-sm p-6">
            <div class="text-center">
              <div
                class="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl"
              >
                {{ job.company.name.charAt(0) }}
              </div>

              <h3 class="mt-4 text-lg font-semibold text-gray-900">
                {{ job.company.name }}
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                {{ job.company.industry }}
              </p>
            </div>

            <div class="mt-4 text-sm text-gray-700 space-y-2">
              <p><strong>Địa chỉ:</strong> {{ job.company.address }}</p>
              <p>
                <strong>Website:</strong>
                <a
                  :href="job.company.website"
                  target="_blank"
                  class="text-indigo-600 hover:underline"
                >
                  {{ job.company.website }}
                </a>
              </p>
            </div>

            <button
              class="mt-6 w-full border border-indigo-600 text-indigo-600 py-2 rounded-xl hover:bg-indigo-50 transition"
            >
              Xem công ty
            </button>
          </div>

          <!-- Job Summary -->
          <div class="bg-white rounded-2xl border shadow-sm p-6 text-sm">
            <div class="flex justify-between text-gray-600">
              <span>Ngày đăng</span>
              <span class="font-medium text-gray-900">{{ job.postedAt }}</span>
            </div>

            <div class="flex justify-between text-gray-600 mt-3">
              <span>Hạn nộp</span>
              <span class="font-medium text-gray-900">{{ job.deadline }}</span>
            </div>
          </div>

          <!-- Sticky Apply -->
          <div class="sticky top-24">
            <button
              class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Ứng tuyển ngay
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const job = ref({
  title: 'Nhân viên Telesales / Tư vấn tại văn phòng',
  location: 'Hà Nội',
  type: 'Toàn thời gian',
  experience: 'Không yêu cầu kinh nghiệm',
  salary: '9 – 20 triệu',
  postedAt: '2 ngày trước',
  deadline: '31/12/2025',
  description: `
    <p>• Tư vấn khách hàng qua điện thoại theo data có sẵn</p>
    <p>• Giới thiệu sản phẩm, dịch vụ của công ty</p>
    <p>• Chăm sóc khách hàng cũ và mới</p>
  `,
  requirements: [
    'Không yêu cầu kinh nghiệm',
    'Giao tiếp tốt, giọng nói rõ ràng',
    'Có tinh thần học hỏi',
  ],
  benefits: [
    'Thu nhập hấp dẫn, thưởng KPI',
    'Được đào tạo bài bản',
    'Môi trường làm việc trẻ trung',
  ],
  company: {
    name: 'Công ty TNHH ABC',
    industry: 'Dịch vụ & Tư vấn',
    address: 'Cầu Giấy, Hà Nội',
    website: 'https://example.com',
  },
})
</script>
