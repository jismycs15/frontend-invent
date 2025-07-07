import axios from "@/services/Interceptor";
import secureLocalStorage from "react-secure-storage"; 

class login {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async postlogincredentials(data:any): Promise<any> {
        try{
            const response = await axios.post("https://localhost:7020/api/Login/Login",
        data
      );
      console.log("Login successful:", response.data);

      // Store token securely
      if (response.data?.token) {
        secureLocalStorage.setItem("accessToken", response.data.token);
      }

      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }
}
export default new login ();
