import authReducer from "@/state/slices/authSlice";
import alertReducer from "@/state/slices/alertSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { medicalHistoryApi } from "./services/medicalHistory";
import { userApi } from "./services/user";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    [medicalHistoryApi.reducerPath]: medicalHistoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      medicalHistoryApi.middleware,
      userApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
