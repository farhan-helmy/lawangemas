<script setup>
import { ref } from "vue";
import { useTransactionTypeStore } from "@/stores/transaction-type";
import { storeToRefs } from "pinia";
import { useTransactionStore } from "@/stores/transaction";
const { transactionTypeOptions } = storeToRefs(useTransactionTypeStore());
let transactionStore = useTransactionStore();
let successModal = ref(false);

transactionStore.$onAction(({ after }) => {
  after(() => {
    successModal.value = true;
  });
});
async function submitHandler(data) {
  await transactionStore.add(data);
}
</script>

<template>
  <div class="py-4">
    <FormKit type="form" submit-lable="Add Transaction" @submit="submitHandler">
      <FormKit
        name="amount"
        type="number"
        label="Jumlah"
        validation="required"
        placeholder="RM"
      />
      <FormKit
        type="date"
        name="date"
        label="Date"
        help="Bila transaction ini dilakukan?"
        validation="required"
      />

      <FormKit
        type="select"
        name="transactionType"
        label="Jenis transaksi"
        placeholder="Pilih jenis transaksi"
        :options="transactionTypeOptions"
        validation="required"
      />
    </FormKit>
  </div>
</template>