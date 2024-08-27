import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
  email: "",
  userName: "",
  role: "",
};
export const authSlice = createSlice({
  name: "getApiValues",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("token", state.token, { expires: 7, secure: true });
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      Cookies.set("email", state.email, { expires: 7, secure: true });
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      Cookies.set("userName", state.userName, { expires: 7, secure: true });
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      Cookies.set("role", state.role, { expires: 7, secure: true });
    },
  },
});

export const { setToken, setEmail, setUserName, setRole } = authSlice.actions;

export default authSlice.reducer;
