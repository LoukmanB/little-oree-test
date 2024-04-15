
// Libraries imports
import { useQuery } from 'react-query';
import { useAxiosGet } from './useAxiosGet';

// Interfaces import
import { IProductsState } from "../interfaces/interfaces";

// Services imports
import { useSetProducts } from "../services/useSetProducts";

export const useGetProducts = () => {
  const { axiosGetRequest } = useAxiosGet();
  const { setProducts } = useSetProducts();

  return useQuery('products', async () => {
    const response = await axiosGetRequest(`${process.env.REACT_APP_SERVER_URL}/products`);
    if (!response) throw new Error("No response from the server");
    return response;
  }, {
    onSuccess: (products: IProductsState) => {
      setProducts(products);
    },
    onError: (error) => {
      console.error('Error fetching products:', error);
    }
  });
};