
<script setup>
</script>

<template>
  <body class="flex items-center justify-center py-12">
    <div class="bg-white shadow w-3/4 md:w-3/2 px-4 py-5">
      <div class="mb-5 sm:mb-10 rounded-tl-lg rounded-tr-lg sticky top-0">
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            "
          >
            Gaji
          </p>
          <div class="flex items-center mt-4 sm:mt-0">
            <div
              aria-label="search bar"
              tabindex="0"
              class="
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
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                  stroke="#9CA3AF"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17.5 17.5L12.5 12.5"
                  stroke="#9CA3AF"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <input
                type="text"
                class="
                  py-2.5
                  pl-1
                  w-40
                  sm:w-64
                  focus:outline-none
                  text-sm
                  rounded-md
                  text-gray-600
                  placeholder-gray-400
                "
                placeholder="Search"
              />
            </div>
            <router-link to="/gaji/add">
              <button
                class="
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
                "
              >
                <p
                  class="text-xs sm:text-sm font-medium leading-none text-white"
                >
                  + Gaji
                </p>
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="">
        <div class="w-full overflow-auto h-full">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr class="h-20 w-full text-sm leading-none text-gray-600">
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left pl-4"
                >
                  Tarikh
                </th>
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left pl-10"
                >
                  Jumlah
                </th>
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left pl-10"
                >
                  Pekerja
                </th>
                <th
                  tabindex="0"
                  class="focus:outline-none font-normal text-left pl-10 w-32"
                ></th>
              </tr>
            </thead>
            <tbody class="w-full">
              <tr
                class="
                  h-20
                  text-sm
                  leading-none
                  text-gray-700
                  border-b border-t border-gray-200
                  bg-white
                  hover:bg-gray-100
                "
              >
                <td tabindex="0" class="focus:outline-none pl-4">06/02/2020</td>

                <td tabindex="0" class="focus:outline-none pl-10">RM2100.00</td>
                <td class="pl-10 cursor-pointer">
                  <div class="flex items-center">
                    <div class="w-10 h-10">
                      <img
                        class="w-full h-full"
                        src="https://ui-avatars.com/api/?name=farhan"
                        alt="UX Design and Visual Strategy"
                      />
                    </div>
                    <div class="pl-4">
                      <p class="font-medium leading-3 text-gray-600 pt-2">
                        Farhan Helmy
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-10">
                  <div class="flex items-center">
                    <button
                      class="
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
                      "
                    >
                      View
                    </button>
                    <button
                      class="focus:ring-2 rounded-md focus:outline-none"
                      role="button"
                      aria-label="options"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>


<style>
</style>
