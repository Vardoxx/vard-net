import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import tokenReducer from "./slices/token.slice"; // Убедитесь, что путь к файлу правильный
import { newsApi } from "./services/news.service";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  token: tokenReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
