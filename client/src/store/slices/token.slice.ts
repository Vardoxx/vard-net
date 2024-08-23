import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: "",
};
export const tokenSlice = createSlice({
  name: "getToken",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      Cookies.set("token", state.token, { expires: 7, secure: true });
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
