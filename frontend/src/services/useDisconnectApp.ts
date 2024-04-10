// Services imports
import { useAppDispatch } from "../redux/store/hook";
import { setInitalStateAction } from "../redux/appActions";

// Local interface declaration
interface IFunctionReturn {
  disconnectApp: () => void;
}

// useDisconnectApp : return function to disconnect from the App
export const useDisconnectApp = (): IFunctionReturn => {
  const dispatch = useAppDispatch();

  // disconnectApp : disconnect from the app and delete/reset all local storage and redux state
  const disconnectApp = (): void => {
    localStorage.removeItem("userAuthInfo");
    localStorage.removeItem("userProfileInfo");
    dispatch(setInitalStateAction());
  };
  return { disconnectApp };
};
