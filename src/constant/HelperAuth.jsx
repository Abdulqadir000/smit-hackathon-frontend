export const getUserToken = () => {
  const usertoken = sessionStorage.getItem("jwtToken");
  if (!usertoken) return null;
  return usertoken;
};

export const getCurrentUser = () => {
  const token = sessionStorage.getItem("user");
  if (!token) return null;
  return JSON.parse(token); // Use JSON.parse if you're saving an object
};

export async function LogoutUser() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("jwtToken");
  window.location.reload();
}

console.log("JWT Token:", sessionStorage.getItem("jwtToken"));
console.log("User:", sessionStorage.getItem("user"));
