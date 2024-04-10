// Initial state
import { IAppStates } from "../interfaces/interfaces";

export const initialState: IAppStates = {
  userAuthInfo: {
    userToken: null,
    userId: null,
    email: null,
  },
};
