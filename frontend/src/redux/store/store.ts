// Import libraries
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "../appReducer";

export const store = configureStore({ reducer: appReducer });

// Type declaration for useSelector
export type RootState = ReturnType<typeof store.getState>;
// Type declaration for useDispatch
export type AppDispatch = typeof store.dispatch;
