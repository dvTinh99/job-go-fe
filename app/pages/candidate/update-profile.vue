<template>
    <div class="bg-gray-100">

<div class="max-w-4xl mx-auto py-12 px-4">

  <!-- Title -->
  <h1 class="text-3xl font-bold text-center text-indigo-600 mb-10">
    Chỉnh Sửa Hồ Sơ Ứng Viên
  </h1>

  <form class="bg-white rounded-xl shadow p-8 space-y-8">

    <!-- Avatar -->
    <div class="flex items-center gap-6">
      <img
        src="https://via.placeholder.com/120"
        class="w-28 h-28 rounded-full border-4 border-indigo-500"
        alt="Avatar"
      />
      <div>
        <label class="block text-lg font-semibold mb-2">
          Ảnh đại diện
        </label>
        <input type="file" class="block text-lg">
      </div>
    </div>

    <!-- Name -->
    <div>
      <label class="block text-lg font-semibold mb-2">
        Họ và tên
      </label>
      <input
        type="text"
        value="Nguyễn Văn A"
        class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <!-- Job title -->
    <div>
      <label class="block text-lg font-semibold mb-2">
        Vị trí mong muốn
      </label>
      <input
        type="text"
        value="Frontend Developer"
        class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <!-- Email & Phone -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block text-lg font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          value="nguyenvana@gmail.com"
          class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-lg font-semibold mb-2">
          Số điện thoại
        </label>
        <input
          type="text"
          value="0909 123 456"
          class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>
    </div>

    <!-- Location -->
    <div>
      <label class="block text-lg font-semibold mb-2">
        Địa điểm làm việc
      </label>
      <input
        type="text"
        value="Hồ Chí Minh"
        class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <!-- Skills -->
    <div>
      <label class="block text-lg font-semibold mb-3">
        Kỹ năng
      </label>
      <div class="flex flex-wrap gap-3 mb-3">
        <span class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-lg">
          HTML ✕
        </span>
        <span class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-lg">
          CSS ✕
        </span>
        <span class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-lg">
          JavaScript ✕
        </span>
      </div>
      <input
        type="text"
        placeholder="Nhập kỹ năng và nhấn Enter"
        class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />
    </div>

    <!-- About -->
    <div>
      <label class="block text-lg font-semibold mb-2">
        Giới thiệu bản thân
      </label>
      <textarea
        rows="5"
        class="w-full border rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      >Frontend Developer với 3 năm kinh nghiệm, yêu thích xây dựng giao diện thân thiện.</textarea>
    </div>

    <!-- Buttons -->
    <div class="flex justify-end gap-4 pt-6">
      <button
        type="button"
        class="px-6 py-3 text-lg rounded-lg border hover:bg-gray-100">
        Hủy
      </button>
      <button
        type="submit"
        class="px-8 py-3 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Lưu thay đổi
      </button>
    </div>

  </form>
</div>

</div>
</template>