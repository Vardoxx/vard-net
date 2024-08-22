import axios from "axios";
import { baseUrl } from "./baseUrl";

const loginApi = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    });
    console.log(response.status);
  } catch {
    console.error("Ошибка запроса");
  }
};

export default loginApi;
