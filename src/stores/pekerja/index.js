import addPekerja, { getSemuaPekerja } from "@/api/pekerja";
import { defineStore } from "pinia";

export const usePekerjaStore = defineStore("PekerjaStore", {
  state: () => {
    return {
      pekerja: [],
      successMessage: null,
    };
  },
  actions: {
    async getAll() {
      let allPekerjaData = await getSemuaPekerja();
      this.pekerja = allPekerjaData;
    },
    async add(dataPekerja) {
      const employeeResponseData = await addPekerja(dataPekerja);
      this.pekerja.push(employeeResponseData.employee);
      this.successMessage = employeeResponseData.message;
      //console.log(employeeResponseData);
    },
    dismissModal() {
      this.successMessage = null;
    },
  },
});
