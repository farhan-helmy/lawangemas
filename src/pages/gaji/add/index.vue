<script setup>
import AddTransactionForm from "@/components/transaction/form/AddTransactionForm.vue";
import AddTransactionTypeForm from "@/components/transaction-type/modal/AddTransactionTypeForm.vue";
import { ref } from "vue";
import AddSalaryForm from "../../../components/gaji/form/AddSalaryForm.vue";
import AddSalaryTypeForm from "../../../components/gaji/form/AddSalaryTypeForm.vue";

let openModal = ref(false);
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-32">
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
        <h1 class="text-xl font-bold">Tambah gaji</h1>
        <button
          @click="openModal = !openModal"
          class="text-xs py-2 px-2 bg-indigo-600 rounded-lg text-white mr-2"
        >
          + Jenis Gaji
        </button>
      </div>
      <AddSalaryForm />
    </div>
  </div>
  <AddSalaryTypeForm v-if="openModal" @close="openModal = !openModal" />
</template>
