export default async function login(data) {
  try {
    let res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/user/login`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
}

export function getUser() {
  let user = fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user/me`, {
    credentials: "include",
  })
    .then((response) => response.json())
    .then((user) => {
      return user;
    })
    .catch((e) => {
      throw new Error(e);
    });
  return user;
}

export async function logout() {
  await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user/logout`);
}
