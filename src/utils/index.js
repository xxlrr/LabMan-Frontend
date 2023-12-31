// Import all the modules from which the utility functions are exported here first
// And then export it all together
import { request } from "./request";
import { setToken, getToken, removeToken } from "./token";
import { setUserInfo, getUserInfo, removeUserInfo } from "./user";

export {
  request,
  setToken,
  getToken,
  removeToken,
  setUserInfo,
  getUserInfo,
  removeUserInfo,
};
