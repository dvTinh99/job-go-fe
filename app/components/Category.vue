<template>
    <div class="relative inline-block group">
  <!-- Button -->
  <button class="px-4 py-2 bg-indigo-600 text-white rounded-md">
    Menu
  </button>

  <!-- Dropdown -->
  <div
    class="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg
           hidden group-hover:block">

    <!-- Normal item -->
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
      Item 1
    </a>

    <!-- Item with submenu -->
    <div class="relative group/submenu">
      <div
        class="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Item 2
        <span class="text-sm">▶</span>
      </div>

      <!-- Submenu -->
      <div
        class="absolute top-0 left-full ml-1 w-48 bg-white border rounded-md shadow-lg
               hidden group-hover/submenu:block">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
          Sub item 1
        </a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
          Sub item 2
        </a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">
          Sub item 3
        </a>
      </div>
    </div>

    <!-- Normal item -->
    <a href="#" class="block px-4 py-2 hover:bg-gray-100">
      Item 3
    </a>

  </div>
</div>

</template>