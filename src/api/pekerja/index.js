export default async function addPekerja(pekerjaData) {
  try {
    let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(pekerjaData),
    });

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function getPekerja(id) {
  try {
    return await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee/${id}`, {
      credentials: "include",
    });
  } catch (e) {
    throw new Error(e);
  }
}

export async function getSemuaPekerja() {
  try {
    let pekerjaData = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/employee`,
      {
        credentials: "include",
      }
    );

    return await pekerjaData.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function updatePekerja(updatePekerjaData) {
  let { id } = updatePekerjaData;
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/employee/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updatePekerjaData),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export async function deletePekerja(pekerjaId) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/employee/${pekerjaId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}
