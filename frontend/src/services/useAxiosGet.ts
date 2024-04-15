// Libraries imports
import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const useAxiosGet = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const axiosGetRequest = async (
    URL: string,
    config?: AxiosRequestConfig
  ): Promise<T | void> => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get<T>(URL, config);
      setData(response.data);
      setIsLoading(false);
      return response.data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError;

      setErrorMessage(
        axiosError.response ?
        (typeof axiosError.response.data?.message === "string" ?
          axiosError.response.data.message :
          "Une erreur est survenue lors de la récupération des données.") :
        "Une erreur est survenue, merci de réessayer."
      );
      
      setIsLoading(false);
    }
  };

  return { data, isLoading, errorMessage, axiosGetRequest };
};