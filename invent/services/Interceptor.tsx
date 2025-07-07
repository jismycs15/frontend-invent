/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const instance = axios.create();

instance.interceptors.request.use((config: any) => {
  const token = secureLocalStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
