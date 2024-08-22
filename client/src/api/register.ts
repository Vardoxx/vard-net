import axios from "axios";
import { baseUrl } from "./baseUrl";

const registerApi = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/user`, {
      email,
      password,
    });

    console.log(response);
  } catch {
    console.error("Ошибка запроса");
  }
};

export default registerApi;
