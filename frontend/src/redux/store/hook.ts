// Import libraries
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {Dispatch, AnyAction} from "redux";

// Import types
import type { RootState, AppDispatch } from "./store";

// Use throughout the app instead of plain `useDispatch` and `useSelector` to have already type defined Dispatch and Selector
export const useAppDispatch = () : Dispatch<AnyAction> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;