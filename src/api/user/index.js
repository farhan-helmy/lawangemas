async function getAuthUser() {
  let res = await fetch(`${API_URL_LOCAL}/auth/user/me`);

  return res.json();
}
