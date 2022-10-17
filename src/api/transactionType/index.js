export default async function addTransactionType(transactionTypeData) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactionType/create`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionTypeData),
        credentials: "include",
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTransactionType(id) {
  try {
    return await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactionType/${id}`
    );
  } catch (e) {
    throw new Error(e);
  }
}

export async function getTransactionTypes() {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactionType`,
      {
        credentials: "include",
      }
    );

    return res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateTransactionType(updateTransactionTypeData) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactionType/update`,
      {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updateTransactionTypeData),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function deleteTransactionType(transactionTypeId) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/transactionType/delete`,
      {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(transactionTypeId),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}
