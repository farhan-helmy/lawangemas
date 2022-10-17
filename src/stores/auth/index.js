import login, { getUser, logout } from "@/api/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
  state: () => {
    return {
      user: null,
      authErrorMessage: null,
    };
  },
  actions: {
    async loginUser(userData) {
      let res = await login(userData);

      if (res.status === 401) {
        this.authErrorMessage = res.message;
      }
    },
    async getAuthUser() {
      this.user = await getUser();
    },
    async logoutUser() {
      await logout();
      this.user = null;
    },
  },
});
