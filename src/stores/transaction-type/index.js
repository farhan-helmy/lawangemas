import addTransactionType, {
  getTransactionType,
  getTransactionTypes,
  updateTransactionType,
  deleteTransactionType,
} from "@/api/transactionType";
import { defineStore } from "pinia";

export const useTransactionTypeStore = defineStore("TransactionTypeStore", {
  state: () => ({
    transactionType: [],
    transactionTypeOptions: [],
    message: null,
  }),
  actions: {
    async add(transactionTypeData) {
      const transactionTypeReponseData = await addTransactionType(
        transactionTypeData
      );
      //console.log(res);
      this.transactionType.push(transactionTypeReponseData);
      this.message = null;
    },
    async getAll() {
      let data = await getTransactionTypes();

      if (data.result !== null) {
        this.transactionType = data;
        this.transactionType.forEach((data) => {
          this.transactionTypeOptions.push(data.name);
        });
      } else {
        this.message = data.message;
      }
    },
    async update(transactionTypeData) {
      await updateTransactionType(transactionTypeData);
      this.transactionType = this.transactionType.map((transactiontype) => {
        if (transactiontype.id === transactionTypeData.id) {
          return { ...transactiontype, name: transactionTypeData.name };
        }
        return transactiontype;
      });
    },
    async delete(transactionId) {
      await deleteTransactionType(transactionId);
      this.transactionType = this.transactionType.filter(
        (transactiontype) => transactiontype.id !== transactionId.id
      );

      if (this.transactionType.length === 0) {
        this.message = "Tiada jenis transaksi";
      }
    },
  },
  getters: {
    getTransactionTypeById: (state) => {
      return (transactionTypeId) =>
        state.transactionType.find(
          (transactionType) => transactionType.id === transactionTypeId
        );
    },
  },
});
