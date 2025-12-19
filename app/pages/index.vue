<script setup lang="ts">
// const data = useApi
</script>

<template>
  <div class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-indigo-600">JobsGO</a>
      <nav class="space-x-4 text-lg">
        <a href="#" class="hover:text-indigo-600">Trang chủ</a>
        <a href="#" class="hover:text-indigo-600">Tìm việc</a>
        <a href="#" class="hover:text-indigo-600">Tạo CV</a>
        <a href="/login" class="hover:text-indigo-600">Đăng nhập</a>
      </nav>
    </div>
  </header>

  <!-- Hero -->
  <section class="bg-indigo-600 text-white py-20">
    <div class="container mx-auto text-center px-6">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Tìm việc làm mơ ước cùng JobsGO!</h1>
      <p class="text-xl mb-8">Hàng ngàn cơ hội việc làm mới mỗi ngày.</p>
      <a href="#jobs" class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">Tìm việc ngay</a>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="container mx-auto px-6 py-14">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h2 class="text-4xl font-bold text-indigo-600">120,000+</h2>
        <p class="mt-2 text-lg">Nhà tuyển dụng uy tín</p>
      </div>
      <div>
        <h2 class="text-4xl font-bold text-indigo-600">1,200,000+</h2>
        <p class="mt-2 text-lg">Lượt tải ứng dụng</p>
      </div>
      <div>
        <h2 class="text-4xl font-bold text-indigo-600">27,000+</h2>
        <p class="mt-2 text-lg">Việc làm đang tuyển</p>
      </div>
    </div>
  </section>

  <!-- Jobs List -->
  <section id="jobs" class="container mx-auto px-6 py-14">
    <h2 class="text-3xl font-bold text-center mb-8">Việc làm nổi bật</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Job card -->
      <div class="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
        <h3 class="font-semibold text-xl mb-2">Nhân viên Kinh Doanh</h3>
        <p class="text-gray-600 mb-3">Công ty ABC • Hồ Chí Minh</p>
        <p class="text-indigo-600 font-bold">15 - 25 triệu VNĐ</p>
        <a href="#" class="inline-block mt-3 text-indigo-600 font-semibold hover:underline">Xem chi tiết</a>
      </div>

      <div class="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
        <h3 class="font-semibold text-xl mb-2">Kỹ Sư Phần Mềm</h3>
        <p class="text-gray-600 mb-3">Công ty XYZ • Hà Nội</p>
        <p class="text-indigo-600 font-bold">25 - 35 triệu VNĐ</p>
        <a href="#" class="inline-block mt-3 text-indigo-600 font-semibold hover:underline">Xem chi tiết</a>
      </div>

      <div class="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition">
        <h3 class="font-semibold text-xl mb-2">Nhân viên Chăm Sóc KH</h3>
        <p class="text-gray-600 mb-3">Công ty DEF • Đà Nẵng</p>
        <p class="text-indigo-600 font-bold">10 - 15 triệu VNĐ</p>
        <a href="#" class="inline-block mt-3 text-indigo-600 font-semibold hover:underline">Xem chi tiết</a>
      </div>

    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-indigo-600 text-white py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-4">Chưa có CV? Tạo ngay!</h2>
      <a href="#" class="bg-white text-indigo-600 px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Tạo CV Online</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-gray-300 py-8">
    <div class="container mx-auto text-center">
      <p>© 2025 JobsGO — Kết nối bạn với cơ hội nghề nghiệp tốt nhất.</p>
      <p class="mt-2 text-sm">Trang thông tin tuyển dụng việc làm hàng đầu Việt Nam.</p>
    </div>
  </footer>

</div>
</template>
