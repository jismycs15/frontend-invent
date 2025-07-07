import axios from "@/services/Interceptor";
//import secureLocalStorage from "react-secure-storage"; // or "secure-web-storage" if preferred

class UserManagementAPI {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async submitusercreate(data: any): Promise<any> {
    try {
      const response = await axios.post(
        "https://localhost:7020/api/UserManagement/CreateUser",
        data
      );
      return response;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

export default new UserManagementAPI();
