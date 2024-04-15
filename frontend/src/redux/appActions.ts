// Libraries imports
import { createAction } from "@reduxjs/toolkit";

// Other imports
import * as types from "./constants";

// Interfaces import
import { IUserAuthInfo, IProductsState } from "../interfaces/interfaces";

// REDUX ACTIONS TO CALL WHEN REDUX STORE MODIFICATION IS NEEDED

// Reset redux state
export const setInitalStateAction = createAction(types.SET_INITAL_STATE);

// Save user authentication information in redux
export const setUserAuthInfoAction = createAction<{
  userAuthInfo: IUserAuthInfo;
}>(types.SET_USER_AUTH_INFO);

// setting the products data in Redux
export const setProductsAction = createAction<{products: IProductsState}>(types.SET_PRODUCTS);
