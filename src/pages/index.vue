<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import ErrorComponent from "../components/error/ErrorComponent.vue";

let router = useRouter();
let route = useRoute();
let authStore = useAuthStore();

let errorMessage = ref("");
let error = ref(false);
async function submitHandler(data) {
  await authStore.loginUser(data);

  if (authStore.authErrorMessage) {
    error.value = true;
  } else {
    router.push("/dashboard");
  }
}

onMounted(() => {
  if (Object.keys(route.query).length !== 0) {
    error.value = true;
    errorMessage.value = route.query.status;
  }
});
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
      <div v-auto-animate>
        <ErrorComponent
          v-if="error"
          :error-message="authStore.authErrorMessage || errorMessage || ''"
          @close="error = false"
        />
      </div>

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

          <div class="pt-4">
            <FormKit type="form" submit-label="Login" @submit="submitHandler">
              <FormKit
                name="email"
                label="Email address"
                validation="required|email"
              />
              <FormKit
                name="password"
                label="Password"
                validation="required"
                type="password"
              />
            </FormKit>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<route lang="yaml">
meta:
  layout: auth
</route>
