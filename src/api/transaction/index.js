export default async function addTransaction(transactionData) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transaction/create`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(transactionData),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTransaction(transactionId) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transaction/${transactionId}`,
      {
        credentials: "include",
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTransactions() {
  try {
    let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/transaction`, {
      credentials: "include",
    });

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateTransaction(updateTransactionData) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transaction/update`,
      {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updateTransactionData),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function deleteTransaction(transactionId) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transaction/delete`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionId),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}
