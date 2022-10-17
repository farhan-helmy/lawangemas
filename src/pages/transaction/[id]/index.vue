<script setup>
import { ref, onMounted } from "vue";
import { useTransactionStore } from "@/stores/transaction";
import { useTransactionTypeStore } from "@/stores/transaction-type";
import { storeToRefs } from "pinia";

let transactionStore = useTransactionStore();

const { transactionTypeOptions } = storeToRefs(useTransactionTypeStore());
const { transaction } = storeToRefs(useTransactionStore());

let edit = ref(false);
let updateTransactionData = ref({});
let props = defineProps({
    id: String,
});

async function postEdit() {
    updateTransactionData.value.id = props.id
    await transactionStore.update(updateTransactionData.value)
    await transactionStore.getOne(props.id)
    edit.value = false
}

onMounted(async () => {
    await transactionStore.getOne(props.id)
})
</script>

<template>
    <div class="container mx-auto">
        <div class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md">
            <div v-if="edit">
                <p class="text-lg text-gray-800 font-semibold pb-3">
                    Transaksi
                    <span class="bg-gray-200 rounded-full font-normal">
                        {{ transaction.id }}
                    </span>
                    <input type="hidden" v-model="updateTransactionData.id" name="" id="">
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold">Jumlah:</span>
                    <input type="number" v-model="updateTransactionData.amount"
                        class="ml-2 outline outline-1 border rounded-lg" />
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold"> Jenis: </span>
                    <select name="jenisTransaksi" v-model="updateTransactionData.transactionType"
                        class="ml-2 outline outline-1 border rounded-lg">
                        <option v-for="transactionTypeOption in transactionTypeOptions" :value="transactionTypeOption">
                            {{ transactionTypeOption }}
                        </option>
                    </select>
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold">Tarikh:</span>
                    <input type="date" name="datetime" class="ml-2 outline outline-1 border rounded-lg"
                        v-model="updateTransactionData.date" />
                </p>
                <div class="flex gap-2">
                    <button @click="edit = !edit"
                        class="focus:outline-none bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-5 py-2 text-xs">
                        Cancel Edit
                    </button>
                    <button @click="postEdit()"
                        class="focus:outline-none bg-green-700 transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-5 py-2 text-xs">
                        Submit
                    </button>
                </div>
            </div>

            <div v-if="transaction && edit !== true">
                <p class="text-lg text-gray-800 font-semibold pb-3">
                    Transaksi
                    <span class="bg-gray-200 rounded-full font-normal">{{ transaction.id }}
                    </span>
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold">Jumlah:</span> RM {{ transaction.amount }}
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold"> Jenis: </span>{{ transaction.transactionType }}
                </p>
                <p class="text-sm text-gray-600 pb-3 font-normal">
                    <span class="font-bold">Tarikh:</span>
                    {{ new Date(transaction.date).toDateString() }}
                </p>

                <button @click="edit = !edit"
                    class="focus:outline-none bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-5 py-2 text-xs">
                    Edit
                </button>
            </div>
        </div>
    </div>
</template>
