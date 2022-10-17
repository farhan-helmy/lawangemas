
<script setup>
defineProps({
  errorMessage: String,
});
</script>

<template>
  <div class="mb-4">
    <div class="max-w-[370px] w-full mx-auto bg-white flex rounded-r relative">
      <svg
        class="absolute right-4 my-auto top-4 cursor-pointer"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="$emit('close')"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.06694 0.183058C0.822864 -0.0610194 0.427136 -0.0610194 0.183058 0.183058C-0.0610194 0.427136 -0.0610194 0.822864 0.183058 1.06694L4.11612 5L0.183058 8.93306C-0.0610194 9.17714 -0.0610194 9.57286 0.183058 9.81694C0.427136 10.061 0.822864 10.061 1.06694 9.81694L5 5.88388L8.93306 9.81694C9.17714 10.061 9.57286 10.061 9.81694 9.81694C10.061 9.57286 10.061 9.17714 9.81694 8.93306L5.88388 5L9.81694 1.06694C10.061 0.822864 10.061 0.427136 9.81694 0.183058C9.57286 -0.0610194 9.17714 -0.0610194 8.93306 0.183058L5 4.11612L1.06694 0.183058Z"
          fill="#1F2937"
        />
      </svg>
      <div class="min-w-[4px] bg-red-500"></div>
      <div class="py-2 px-2 mt-2">
        <div aria-label="text">
          <p class="text-base font-semibold leading-normal text-gray-800 mb-2">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>