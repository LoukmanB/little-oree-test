// Other imports
import { useAppDispatch } from "../redux/store/hook";
import { setUserAuthInfoAction } from "../redux/appActions";

// Interface import
import { IUserAuthInfo } from "../interfaces/interfaces";

export const useSetUserAuthInfo = () => {
  const dispatch = useAppDispatch();

  // Create/delete user's authentication information (jwt token and user id) in redux store and in local storage
  const setUserAuthInfo = (userAuthInfo: IUserAuthInfo | null) => {
    if (userAuthInfo) {
      localStorage.setItem("userAuthInfo", JSON.stringify(userAuthInfo));
      dispatch(setUserAuthInfoAction({ userAuthInfo: userAuthInfo }));
    } else {
      localStorage.removeItem("userAuthInfo");
      dispatch(
        setUserAuthInfoAction({
          userAuthInfo: {
            userToken: null,
            userId: null,
            email: null,
          },
        })
      );
    }
  };
  return { setUserAuthInfo };
};
