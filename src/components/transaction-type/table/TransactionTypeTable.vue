
<script setup>
import { useTransactionTypeStore } from "@/stores/transaction-type";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { onClickOutside } from '@vueuse/core'
const { transactionType, message } = storeToRefs(useTransactionTypeStore());
let transactionTypeStore = useTransactionTypeStore()
let name = ref("");
let editValue = ref("");
let target = ref(null)

onClickOutside(target, (event) => {
  editValue.value = ""
})

function editTransactionType(data) {
  editValue.value = data.id
  name.value = data.name
}

async function postEdit() {
  let data = {
    id: editValue.value,
    name: name.value
  }
  //console.log(data)
  await transactionTypeStore.update(data)
  editValue.value = ""
}

async function postDelete(id) {
  let data = {
    id
  }
  await transactionTypeStore.delete(data)
}
</script>

<template>

  <body class="flex items-center justify-center py-12">
    <div class="bg-white shadow w-1/2 md:w-3/2 px-4 py-5">
      <div class="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg sticky top-0">
        <div class="sm:flex items-center justify-between">
          <p tabindex="0" class="
              focus:outline-none
              text-base
            
              font-bold
              leading-normal
              text-gray-800
            ">
            Jenis Transaksi
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
               w-1/2
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
                " placeholder="Search" />
            </div>

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
      <div v-if="message !== null">
        {{message}}
      </div>
      <div ref="target" class="w-full overflow-auto h-full" v-if="message === null">
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr class="h-20 w-full text-sm leading-none text-gray-600">
              <th tabindex="0" class="focus:outline-none font-bold text-left pl-2">
                Name
              </th>

            </tr>
          </thead>

          <tbody class="w-full">
            <tr v-for="transactiontype in transactionType" :key="transactiontype.id" class="
                h-20
                text-sm    
                leading-none
                text-gray-700
                border-b border-t border-gray-200
                bg-white
                hover:bg-gray-100
              ">
              <td tabindex="0" class="focus:outline-none pl-4 font-bold text-xl">

                <div v-if="editValue === transactiontype.id">
                  <div class="flex justify-left gap-2">
                    <input type="text" name="name" v-model="name" class="outline outline-1 rounded-xl" />
                    <button class="rounded-full bg-green-700 px-2 font-thin border border-solid text-white"
                      @click="postEdit">
                      ok
                    </button>
                  </div>
                </div>

                <div v-else @click="editTransactionType(transactiontype)">
                  <span class=" rounded-lg px-2 text-black ">
                    {{ transactiontype.name }}
                  </span>

                </div>
              </td>
              <td>
                <button class="bg-red-600 py-4 px-4 text-white font-light text-center rounded-lg"
                  @click="postDelete(transactiontype.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  </body>
</template>


<style>

</style>
