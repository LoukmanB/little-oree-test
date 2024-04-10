import { Reducer, AnyAction } from "redux";

// Other imports
import * as types from "./constants";
import { initialState } from "./initialState";

// Services import
import { setUserAuthInfo, setInitalState } from "./reducerFunctions";

// Interfaces import
import { IAppStates } from "../interfaces/interfaces";

// REDUCER FUNCTIONS : UPDATE STATE IN REDUX STORE

// Redux reducer
export const appReducer: Reducer<IAppStates, AnyAction> = (
  state = initialState,
  action
): IAppStates => {
  switch (action.type) {
    case types.SET_USER_AUTH_INFO:
      return setUserAuthInfo(state, action);
    case types.SET_INITAL_STATE:
      return setInitalState();
    default:
      return state;
  }
};
