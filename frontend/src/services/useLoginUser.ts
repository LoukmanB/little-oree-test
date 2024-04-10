// Libraries import
import { useAxiosPost } from "./useAxiosPost";

// Import services
import { useSetUserAuthInfo } from "./useSetUserAuthInfo";

// local interfaces declaration
interface IResponse {
  token?: string;
  userId?: string;
  companyId?: string;
  crm_user_id?: string | null;
  error?: string | null;
  company_name?: string | null;
}

export const useLoginUser = () => {
  // Hooks declaration
  const { axiosPostRequest, isLoading, errorMessage } = useAxiosPost();
  const { setUserAuthInfo } = useSetUserAuthInfo();

  // Send login Post request and save user authentication info in redux store and in local storage if successfull
  const requestLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    const response = await axiosPostRequest<IResponse>(
      `${process.env.REACT_APP_SERVER_URL}/user/login`,
      {
        email,
        password,
      }
    );

    response &&
      response.status === 200 &&
      response?.data &&
      setUserAuthInfo({
        userToken: response.data.token || null,
        userId: response.data.userId || null,
        email,
      });
  };

  return {
    requestLogin,
    isLoading,
    errorMessage,
  };
};
