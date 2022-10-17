
<script setup>
import { useTransactionStore } from "@/stores/transaction";
import { storeToRefs } from "pinia";
import { ref, computed, reactive } from "vue";
const { transactions, message } = storeToRefs(useTransactionStore());

let searchQuery = ref("")

let transactionsData = reactive([])
transactionsData = transactions;
const searchedProducts = computed(() => {
  return transactionsData.value.filter((transaction) => {
    return (
      transaction.transactionType
        .toLowerCase()
        .indexOf(searchQuery.value.toLowerCase()) != -1
    );
  });
});

function sortDate() {
  transactionsData.value.sort((a, b) => {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c - d;
  })
}

function sortDateDown() {
  transactionsData.value.sort((a, b) => {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  })
}

</script>

<template>

  <body class="flex items-center justify-center py-12">
    <div class="bg-white shadow w-3/4 md:w-3/2 px-4 py-5">
      <div class="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg sticky top-0">
        <div class="sm:flex items-center justify-between">
          <p tabindex="0" class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            ">
            Transaksi
          </p>
          <div class="flex items-center mt-4 sm:mt-0">
            <div aria-label="search bar" tabindex="0" class="
                focus:outline-none focus:ring-2 focus:ring-gray-600
                flex
                items-center
                pl-3
                bg-white
                border
                rounded-md
                border-gray-200
                sm:w-1/2 sm:ml-4
                lg:w-full
              ">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                  stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17.5 17.5L12.5 12.5" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              <input type="text" class="
                  py-2.5
                  pl-1
                  w-40
                  sm:w-64
                  focus:outline-none
                  text-sm
                  rounded-md
                  text-gray-600
                  placeholder-gray-400
                " placeholder="Search" v-model="searchQuery" />
            </div>
            <router-link to="/transaction/add">
              <button class="
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                  inline-flex
                  ml-3
                  whitespace-nowrap
                  items-start
                  justify-start
                  px-6
                  py-3
                  bg-indigo-700
                  hover:bg-indigo-600
                  focus:outline-none
                  rounded
                ">
                <p class="text-xs sm:text-sm font-medium leading-none text-white">
                  + Transaksi
                </p>
              </button>
            </router-link>
            <router-link to="/transaction/type/add">
              <button class="
                  focus:ring-2 focus:ring-offset-2 focus:ring-orange-600
                  inline-flex
                  ml-3
                  whitespace-nowrap
                  items-start
                  justify-start
                  px-6
                  py-3
                  bg-orange-700
                  hover:bg-orange-600
                  focus:outline-none
                  rounded
                ">
                <p class="text-xs sm:text-sm font-medium leading-none text-white">
                  + Jenis Transaksi
                </p>
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full overflow-auto h-full">
        <table class="w-full whitespace-nowrap" v-if="transactions.length > 0">
          <thead>
            <tr class="h-20 w-full text-sm leading-none text-gray-600">
              <th tabindex="0" class="focus:outline-none font-normal text-left pl-4 mr-0">
                Date
                <button @click="sortDate" class="rounded-full bg-black px-1 py-1 ml-4 text-white font-light">
                  Sort Down
                </button>
                <button @click="sortDateDown" class="rounded-full bg-stone-400 px-1 py-1 ml-4 text-white font-light">
                  Sort Up
                </button>
              </th>
              <th tabindex="0" class="focus:outline-none font-normal text-left pl-10">
                Category
              </th>
              <th tabindex="0" class="focus:outline-none font-normal text-left pl-10">
                Amount
              </th>
              <th tabindex="0" class="focus:outline-none font-normal text-left pl-10">
                Status
              </th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-for="transaction in searchedProducts" :key="transaction.id" class="
                h-20
                text-sm
                leading-none
                text-gray-700
                border-b border-t border-gray-200
                bg-white
                hover:bg-gray-100
              ">
              <td class="focus:outline-none pl-4">
                {{ new Date(transaction.date).toDateString() }}
              </td>

              <td class="pl-10">
                <div class="
                    w-20
                    h-6
                    flex
                    items-center
                    justify-center
                    bg-blue-100
                    rounded-full
                  ">
                  <p tabindex="0" class="focus:outline-none text-xs leading-3 text-blue-700">
                    {{ transaction.transactionType }}
                  </p>
                </div>
              </td>
              <td tabindex="0" class="focus:outline-none pl-10">
                RM {{ transaction.amount }}
              </td>
              <td class="pl-10">
                <div class="flex items-center">
                  <router-link :to="{ path: '/transaction/' + transaction.id}">
                    <button class="
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-indigo-600
                      focus:outline-none
                      bg-gray-100
                      mr-5
                      hover:bg-gray-200
                      py-2.5
                      px-5
                      rounded
                      text-sm
                      leading-3
                      text-gray-600
                    ">
                      View
                    </button>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="flex justify-center">
          <span class="text-black text-3xl font-bold">Transactions Empty</span>
        </div>
      </div>
    </div>
  </body>
</template>


<style>

</style>
