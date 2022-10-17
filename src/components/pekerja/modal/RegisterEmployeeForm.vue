<script setup>
import { usePekerjaStore } from "@/stores/pekerja";
import { ref } from "vue";

const pekerjaStore = usePekerjaStore();
let successAlert = ref(false)

pekerjaStore.$onAction(
  ({
    after, // hook after the action returns or resolves
  }) => {
    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after(() => {
      successAlert.value = true;
    });
  }
);

async function submitHandler(data) {
  await pekerjaStore.add(data)
}
</script>

<template>

  <div class="
      backdrop-blur-sm
      py-12
      transition
      duration-150
      ease-in-out
      z-10
      absolute
      top-0
      right-0
      bottom-0
      left-0
    " id="modal">

    <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">

      <div class="
          relative
          py-8
          px-5
          md:px-10
          bg-white
          shadow-md
          rounded-lg
          border border-gray-400
        ">

        <div class="w-full flex justify-start text-gray-600 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52"
            viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
          </svg>
        </div>

        <h1 class="
            text-gray-800
            font-lg font-bold
            tracking-normal
            leading-tight
            mb-4
          ">
          Daftar Pekerja
        </h1>
        <FormKit type="form" @submit="submitHandler">
          <FormKit type="text" name="name" help="Nama pekerja" validation="required">
          </FormKit>
          <FormKit type="email" name="email" help="Email pekerja" validation="required">
          </FormKit>
        </FormKit>
        <div class="
            cursor-pointer
            absolute
            top-0
            right-0
            mt-4
            mr-5
            text-gray-400
            hover:text-gray-600
            transition
            duration-150
            ease-in-out
          " @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20"
            height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>


