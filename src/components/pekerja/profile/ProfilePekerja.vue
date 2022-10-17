<script setup>
import { ref } from "vue";
import EditEmployee from "../modal/EditEmployee.vue";

let openEditEmployeeModal = ref(false);
</script>


<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center justify-center w-1/2 py-8">
      <!-- Card code block start -->
      <div class="bg-white dark:bg-gray-800 shadow rounded">
        <div class="relative">
          <img
            class="h-56 shadow rounded-t w-full object-cover object-center"
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
            alt=""
          />
          <div
            class="
              inset-0
              m-auto
              w-24
              h-24
              absolute
              bottom-0
              -mb-12
              xl:ml-10
              rounded
              border-2
              shadow
              border-white
            "
          >
            <img
              class="w-full h-full overflow-hidden object-cover rounded"
              src="https://ui-avatars.com/api/?name=Farhan+Helmy"
              alt=""
            />
          </div>
        </div>
        <div class="px-5 xl:px-10 pb-10 mt-10">
          <div
            class="
              pt-3
              xl:pt-5
              flex flex-col
              xl:flex-row
              items-start
              xl:items-center
              justify-between
            "
          >
            <div class="xl:pr-16 w-full xl:w-2/3">
              <div
                class="
                  text-center
                  xl:text-left
                  mb-3
                  xl:mb-0
                  flex flex-col
                  xl:flex-row
                  items-center
                  justify-between
                  xl:justify-start
                "
              >
                <h2
                  class="
                    mb-3
                    xl:mb-0 xl:mr-4
                    text-2xl text-gray-800
                    dark:text-gray-100
                    font-medium
                    tracking-normal
                  "
                >
                  Farhan Helmy
                </h2>
              </div>
              <p
                class="
                  text-center
                  xl:text-left
                  mt-2
                  text-sm
                  tracking-normal
                  text-gray-200
                  dark:text-gray-200
                  leading-5
                  font-mono
                "
              >
                CHEF | COOK
              </p>
            </div>

            <div
              class="
                w-full
                xl:w-2/3
                flex-col
                md:flex-row
                justify-center
                xl:justify-end
                flex
                md:pl-6
              "
            >
              <button
                @click="openEditEmployeeModal = !openEditEmployeeModal"
                class="
                  focus:outline-none
                  ml-0
                  md:ml-5
                  bg-orange-700
                  dark:bg-orange-600
                  transition
                  duration-150
                  ease-in-out
                  hover:bg-indigo-600
                  rounded
                  text-white
                  px-3
                  md:px-6
                  py-2
                  text-sm
                "
              >
                Ubah
              </button>
              <button
                class="
                  focus:outline-none
                  ml-0
                  md:ml-5
                  bg-indigo-700
                  dark:bg-indigo-600
                  transition
                  duration-150
                  ease-in-out
                  hover:bg-indigo-600
                  rounded
                  text-white
                  px-3
                  md:px-6
                  py-2
                  text-sm
                "
              >
                Gaji
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Card code block end -->
    </div>
    <EditEmployee
      v-if="openEditEmployeeModal"
      @close="openEditEmployeeModal = !openEditEmployeeModal"
    />
  </div>
</template>

