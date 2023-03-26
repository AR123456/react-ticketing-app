import axios from "axios";
// add proxy to front end
const API_URL = "/api/users/";
// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    // save to local storage - it can only hold strings
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  // user data and token
  return response.data;
};
// logout user
const logout = () => localStorage.removeItem("user");
const authService = {
  register,
  logout,
};
export default authService;
