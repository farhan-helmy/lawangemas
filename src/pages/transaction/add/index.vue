<script setup>
import AddTransactionForm from "@/components/transaction/form/AddTransactionForm.vue";
import AddTransactionTypeForm from "@/components/transaction-type/modal/AddTransactionTypeForm.vue";
import Success from "@/components/alert/Success.vue";
import { useTransactionStore } from "@/stores/transaction";

import { ref } from "vue";
let transactionStore = useTransactionStore();
let successModal = ref(false);
let openModal = ref(false);

transactionStore.$onAction(({ after }) => {
  after(() => {
    successModal.value = true;
  });
});
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-20">
    <div class="w-full">
      <Success
        v-if="successModal"
        @close="successModal = !successModal"
        message="Transaction added"
      />
    </div>

    <div
      class="
        flex flex-col
        items-center
        justify-center
        bg-gray-100
        border border-solid
        rounded-lg
        w-1/2
      "
    >
      <div class="pt-4 w-full border pl-4 pb-2 flex justify-between">
        <h1 class="text-xl font-bold">Tambah transaksi</h1>
        <button
          @click="openModal = !openModal"
          class="text-xs py-2 px-2 bg-indigo-600 rounded-lg text-white mr-2"
        >
          + Jenis Transaksi
        </button>
      </div>
      <AddTransactionForm />
    </div>
  </div>
  <AddTransactionTypeForm v-if="openModal" @close="openModal = !openModal" />
</template>
