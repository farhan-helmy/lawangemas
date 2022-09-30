export async function login(data) {
  let res = await fetch(`${process.env.API_URL_LOCAL}/auth/user/login`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
