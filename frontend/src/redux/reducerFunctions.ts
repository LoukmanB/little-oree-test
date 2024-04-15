import { AnyAction } from "redux";

// Interfaces import
import { IAppStates } from "../interfaces/interfaces";

// Other imports
import * as actions from "./appActions";
import { initialState } from "./initialState";

// SHARED REDUCER FUNCTIONS USED ACCROSS THE WHOLE APP
export const setUserAuthInfo = (state: IAppStates, action: AnyAction) => {
  if (actions.setUserAuthInfoAction.match(action)) {
    return {
      ...state,
      userAuthInfo: action.payload.userAuthInfo,
    };
  }
  return state;
};

export const setProducts = (state: IAppStates, action: AnyAction): IAppStates => {
  if (actions.setProductsAction.match(action)) {
      return {
          ...state,
          products: action.payload.products,
      };
  }
  return state;
};

export const setInitalState = () => {
  return initialState;
};
