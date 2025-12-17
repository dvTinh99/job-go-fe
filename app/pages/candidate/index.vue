<script setup lang="ts">
// const data = useApi
</script>

<template>
  <div class="bg-gray-100 text-gray-800">
    <!-- Container chính -->
    <div class="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <!-- Header cá nhân -->
      <div class="bg-indigo-600 text-white rounded-t-lg p-8 flex items-center space-x-6">
        <img
          src="https://via.placeholder.com/120"
          alt="Ảnh đại diện"
          class="w-28 h-28 rounded-full border-4 border-white object-cover"
        />
        <div>
          <h1 class="text-3xl font-bold">Nguyễn Văn A</h1>
          <p class="mt-1 text-lg">Frontend Developer</p>
          <div class="mt-1 text-sm opacity-90">
            <span>Email: example@mail.com</span><br />
            <span>Số điện thoại: 0123 456 789</span><br />
            <span>Địa điểm: TP. Hồ Chí Minh</span>
          </div>
        </div>
      </div>

      <!-- Nội dung chính -->
      <div class="p-8 space-y-8">
        <!-- Mục Mục tiêu nghề nghiệp -->
        <section>
          <h2 class="text-2xl font-semibold border-b border-gray-200 pb-2">Mục tiêu nghề nghiệp</h2>
          <p class="mt-2 text-gray-700">Tôi là lập trình viên Frontend với 3 năm kinh nghiệm...</p>
        </section>

        <!-- Mục Kinh nghiệm làm việc -->
        <section>
          <h2 class="text-2xl font-semibold border-b border-gray-200 pb-2">Kinh nghiệm làm việc</h2>
          <div class="mt-4 space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 class="text-xl font-semibold">Frontend Developer – Công ty ABC</h3>
              <span class="text-sm text-gray-600">2022 – Nay</span>
              <p class="mt-2 text-gray-700">
                • Phát triển giao diện web bằng Tailwind CSS, Vue.js… <br />
                • Tối ưu tốc độ, UX & responsive trên nhiều thiết bị
              </p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 class="text-xl font-semibold">Junior Web Developer – Công ty XYZ</h3>
              <span class="text-sm text-gray-600">2020 – 2022</span>
              <p class="mt-2 text-gray-700">
                • Xây dựng trang web marketing, landing page… <br />
                • Hỗ trợ test UI và fix lỗi trên sản phẩm thực tế
              </p>
            </div>
          </div>
        </section>

        <!-- Mục Học vấn -->
        <section>
          <h2 class="text-2xl font-semibold border-b border-gray-200 pb-2">Học vấn</h2>
          <ul class="mt-4 list-disc list-inside text-gray-700">
            <li>
              <span class="font-medium">Đại học Bách Khoa TP. HCM</span> – Cử nhân Công nghệ thông
              tin (2016 – 2020)
            </li>
          </ul>
        </section>

        <!-- Mục Kỹ năng -->
        <section>
          <h2 class="text-2xl font-semibold border-b border-gray-200 pb-2">Kỹ năng</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">HTML</span>
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">CSS</span>
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
              >Tailwind CSS</span
            >
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
              >JavaScript</span
            >
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
            <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
          </div>
        </section>

        <upload-resume />

        <!-- Mục Liên hệ / Portfolio -->
        <section class="text-center">
          <a
            href="#"
            class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Xem Portfolio / Liên hệ
          </a>
        </section>
      </div>
    </div>
  </div>
</template>
