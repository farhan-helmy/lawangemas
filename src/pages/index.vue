<script setup>
function login(data) {
  console.log(data);
}
</script>

<template>
  <body class="min-h-screen">
    <div
      class="
        min-h-screen
        bg-gradient-to-tl
        from-green-400
        to-indigo-900
        w-full
        py-16
        px-4
      "
    >
      <div class="flex flex-col items-center justify-center">
        <div class="text-6xl font-semibold">Sizzling Aeon</div>
        <div
          class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16"
        >
          <p
            tabindex="0"
            role="heading"
            aria-label="Login to your account"
            class="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>

          <div></div>
        </div>
      </div>
    </div>
  </body>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
