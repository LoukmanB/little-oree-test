// Services imports
import { isJwtTokenExpired } from "./isJwtTokenExpired";
import { useDisconnectApp } from "./useDisconnectApp";
// Interface imports
import { IUserAuthInfo } from "../interfaces/interfaces";
// Other imports
import { useAppDispatch } from "../redux/store/hook";
import { setUserAuthInfoAction } from "../redux/appActions";

export const useGetUserAuthInfo = () => {
  // Hooks calls
  const dispatch = useAppDispatch();
  const { disconnectApp } = useDisconnectApp();

  // Get user authentication information from local storage and save it in redux store
  const getUserAuthInfo = () => {
    const stored = localStorage.getItem("userAuthInfo");
    const userAuthInfo: IUserAuthInfo = stored ? JSON.parse(stored) : null;
    if (userAuthInfo?.userToken && !isJwtTokenExpired(userAuthInfo.userToken)) {
      dispatch(setUserAuthInfoAction({ userAuthInfo: userAuthInfo }));
    } else {
      disconnectApp(); // If user is not authenticate we make sure he is fully disconnected from the app (no user information stored in local storage)
    }
  };
  return { getUserAuthInfo };
};
