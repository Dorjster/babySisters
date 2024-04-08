export const removeToken = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};
