<script setup>
import { useAuthStore } from "@/stores/auth";
import { useTransactionStore } from "@/stores/transaction";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useTransactionTypeStore } from "@/stores/transaction-type";
import { usePekerjaStore } from "@/stores/pekerja";

let userName = ref("");
let authStore = useAuthStore();
let transactionStore = useTransactionStore();
let transactionTypeStore = useTransactionTypeStore();
let employeeStore = usePekerjaStore();
let router = useRouter();

async function logout() {
  await authStore.logoutUser();
  router.push("/?status=Logout%20Successful!");
}
onMounted(async () => {
  await authStore.getAuthUser();
  await transactionStore.getAll();
  await transactionTypeStore.getAll();
  await employeeStore.getAll();
  if (authStore.user.message === "unauthorized") {
    router.push("/?status=Unauthorized");
  }
  userName.value = authStore.user.name;
});
</script>

<template>
  <div class="flex bg-gray-200 max-h-screen relative min-h-screen">
    <!-- Sidebar starts -->
    <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
    <div class="w-64 bg-indigo-900 shadow flex-col justify-between hidden sm:flex">
      <div>
        <div class="pt-8 w-full flex items-center px-8">
          <div class="
              text-xl
              font-bold font-mono
              py-2
              px-2
              bg-gray-200
              rounded-2xl
            ">
            Sizzling AEON
          </div>
        </div>
        <ul class="mt-8">
          <router-link to="/dashboard">
            <li class="
                flex
                w-full
                justify-between
                text-gray-100
                hover:text-gray-300 hover:bg-indigo-800
                cursor-pointer
                items-center
                py-3
                px-8
              ">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid" width="18" height="18"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>
                <router-link to="/dashboard">
                  <span class="text-sm ml-2">Dashboard</span>
                </router-link>
              </div>
            </li>
          </router-link>
          <router-link to="/transaction">
            <li class="
                flex
                w-full
                justify-between
                text-gray-100
                hover:text-gray-300 hover:bg-indigo-800
                cursor-pointer
                items-center
                py-3
                px-8
              ">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-puzzle" width="18"
                  height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                  </path>
                </svg>

                <span class="text-sm ml-2">Transaksi</span>
              </div>
            </li>
          </router-link>
          <router-link to="/transaction/type">
            <li class="
                flex
                w-full
                justify-between
                text-gray-100
                hover:text-gray-300 hover:bg-indigo-800
                cursor-pointer
                items-center
                py-3
                px-8
              ">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stack" width="18"
                  height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="12 4 4 8 12 12 20 8 12 4" />
                  <polyline points="4 12 12 16 20 12" />
                  <polyline points="4 16 12 20 20 16" />
                </svg>
                <span class="text-sm ml-2">Jenis Transaksi</span>
              </div>
            </li>
          </router-link>
          <router-link to="/pekerja">
            <li class="
                flex
                w-full
                justify-between
                text-gray-100
                hover:text-gray-300 hover:bg-indigo-800
                cursor-pointer
                items-center
                py-3
                px-8
              ">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="18"
                  height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                  <circle cx="12" cy="12" r="9"></circle>
                </svg>

                <span class="text-sm ml-2">Pekerja</span>
              </div>
            </li>
          </router-link>
          <router-link to="/gaji">
            <li class="
                flex
                w-full
                justify-between
                text-gray-100
                hover:text-gray-300 hover:bg-indigo-800
                cursor-pointer
                items-center
                py-3
                px-8
              ">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="20" height="20"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="7 8 3 12 7 16"></polyline>
                  <polyline points="17 8 21 12 17 16"></polyline>
                  <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>

                <span class="text-sm ml-2">Gaji</span>
              </div>
            </li>
          </router-link>
        </ul>
        <div class="flex items-center absolute bottom-0 mb-16 px-8">
          <div class="w-10 h-10 bg-cover rounded-md mr-3">
            <img src="https://ui-avatars.com/api/?name=farhan" alt=""
              class="rounded-full h-full w-full overflow-hidden shadow" />
          </div>
          <div>
            <p class="text-gray-200 text-sm font-medium">
              {{ userName }}
            </p>
            <button @click="logout" class="text-gray-200 text-xs bg-red-500 px-6 py-2 rounded-xl">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div class="px-8 bg-indigo-800">
        <ul class="w-full flex items-center justify-between">
          <li class="cursor-pointer text-white pt-5 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
          </li>
          <li class="cursor-pointer text-white pt-5 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
              <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
            </svg>
          </li>
          <li class="cursor-pointer text-white pt-5 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
              </path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </li>
          <li class="cursor-pointer text-white pt-5 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="20" height="20"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <rect x="3" y="4" width="18" height="4" rx="2"></rect>
              <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
              <line x1="10" y1="12" x2="14" y2="12"></line>
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <!--Mobile responsive sidebar-->
    <!-- Sidebar ends -->
    <!-- Remove class [ h-64 ] when adding a card block -->
    <div class="mx-auto md:w-4/5 w-11/12 px-6">
      <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->
      <div class="w-full overflow-auto rounded max-h-screen min-h-screen">
        <div v-auto-animate>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>


