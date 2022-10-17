<script setup>
import { ref } from "vue";
let salaryTypeOptions = ref(["Allowance", "Kitchen"]);
let pekerja = ref(["Farhan", "Syauqi"]);
function submitHandler(data) {
  console.log(data);
}
</script>

<template>
  <div class="py-4">
    <FormKit type="form" submit-lable="Add Gaji" @submit="submitHandler">
      <div class="flex flex-row gap-8">
        <FormKit
          name="Jumlah"
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
      </div>
      <div class="flex flex-col">
        <FormKit
          type="select"
          name="gaji-type"
          label="Jenis gaji"
          placeholder="Pilih jenis gaji"
          :options="salaryTypeOptions"
          validation="required"
        />
        <FormKit
          type="select"
          name="pekerja"
          label="Pekerja"
          placeholder="Pilih pekerja"
          :options="pekerja"
          validation="required"
        />
      </div>
    </FormKit>
  </div>
</template>