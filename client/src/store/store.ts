import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authService";

export const store = configureStore({
  reducer: {}, // Здесь должны быть ваши редьюсеры
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
