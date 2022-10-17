import { defineStore } from "pinia";
import addTransaction, {
  getTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "@/api/transaction";

export const useTransactionStore = defineStore("TransactionStore", {
  state: () => ({
    transactions: [],
    transaction: null,
    message: null,
  }),
  actions: {
    async add(transactionData) {
      let transactionResponseData = await addTransaction(transactionData);
      this.transactions.push(transactionResponseData);
    },
    async getAll() {
      this.transactions = await getTransactions();
    },
    async getOne(transactionId) {
      this.transaction = await getTransaction(transactionId);
    },
    async update(transactionData) {
      let transactionUpdateDataResponse = await updateTransaction(
        transactionData
      );
      this.transactions = this.transactions.map((transaction) => {
        if (transaction.id === transactionData.id) {
          return {
            ...transaction,
            amount: transactionUpdateDataResponse.amount,
            transactionType: transactionUpdateDataResponse.transactionType,
            date: transactionUpdateDataResponse.date,
          };
        }
        return transaction;
      });
    },
    async delete(transactionId) {
      await deleteTransaction(transactionId);
    },
  },
  getters: {
    getTransactionById: (state) => {
      return (transactionId) => {
        return state.transactions.find(
          (transaction) => transaction.id === transactionId
        );
      };
    },
  },
});
