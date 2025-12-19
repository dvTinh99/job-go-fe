<script setup lang="ts">
// const data = useApi
</script>

<template>
<div class="bg-gray-100">

<!-- Container -->
<div class="max-w-6xl mx-auto py-12 px-4">

  <!-- Header Profile -->
  <div class="bg-white rounded-xl shadow p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
    
    <!-- Avatar -->
    <img
      src="https://via.placeholder.com/120"
      class="w-32 h-32 rounded-full border-4 border-indigo-500"
      alt="Avatar"
    />

    <!-- Info -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-gray-800">Nguyễn Văn A</h1>
      <p class="text-xl text-indigo-600 mt-1">Frontend Developer</p>

      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
        <p>📧 nguyenvana@gmail.com</p>
        <p>📞 0909 123 456</p>
        <p>📍 Hồ Chí Minh</p>
        <p>💼 3 năm kinh nghiệm</p>
      </div>
    </div>

    <!-- Action -->
    <div>
      <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700">
        Chỉnh sửa hồ sơ
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- Left Column -->
    <div class="space-y-6">

      <!-- Skills -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Kỹ năng</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-lg">HTML</span>
          <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-lg">CSS</span>
          <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-lg">JavaScript</span>
          <span class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-lg">Vue / Nuxt</span>
        </div>
      </div>

      <!-- CV -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Hồ sơ đính kèm</h2>
        <a href="#" class="text-indigo-600 text-lg font-semibold hover:underline">
          📄 Xem CV (PDF)
        </a>
      </div>

    </div>

    <!-- Right Column -->
    <div class="lg:col-span-2 space-y-6">

      <!-- About -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Giới thiệu bản thân</h2>
        <p class="text-lg leading-relaxed text-gray-700">
          Tôi là Frontend Developer với hơn 3 năm kinh nghiệm phát triển website
          bằng HTML, CSS, JavaScript và Vue/Nuxt. Tôi yêu thích xây dựng giao diện
          thân thiện, dễ sử dụng và tối ưu trải nghiệm người dùng.
        </p>
      </div>

      <!-- Experience -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Kinh nghiệm làm việc</h2>

        <div class="border-l-4 border-indigo-600 pl-4 mb-4">
          <h3 class="text-xl font-semibold">Frontend Developer</h3>
          <p class="text-lg text-gray-600">Công ty ABC • 2022 - Hiện tại</p>
          <p class="text-lg mt-2">
            Phát triển giao diện website, tối ưu UI/UX, làm việc với API.
          </p>
        </div>

        <div class="border-l-4 border-indigo-600 pl-4">
          <h3 class="text-xl font-semibold">Web Developer</h3>
          <p class="text-lg text-gray-600">Công ty XYZ • 2020 - 2022</p>
          <p class="text-lg mt-2">
            Xây dựng landing page, website doanh nghiệp bằng HTML/CSS.
          </p>
        </div>
      </div>

      <!-- Education -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-2xl font-semibold mb-4">Học vấn</h2>
        <p class="text-lg">
          🎓 Đại học Công Nghệ Thông Tin – Đại học Quốc Gia TP.HCM
        </p>
      </div>

    </div>
  </div>
</div>

</div>

</template>
