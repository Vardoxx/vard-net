import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./services/auth.service";
import tokenReducer from "./slices/token.slice";
import { newsApi } from "./services/news.service";
import sortReducer from "./slices/sort.slice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  token: tokenReducer,
  sortNews: sortReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
