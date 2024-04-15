//Other imports
import { useAppDispatch } from "../redux/store/hook";
import { setProductsAction } from "../redux/appActions";

// Interface import
import { IProductsState } from "../interfaces/interfaces";

export const useSetProducts = () => {
  const dispatch = useAppDispatch();

  const setProducts = (productsState: IProductsState) => {
    dispatch(setProductsAction({ products: productsState }));
  };

  return { setProducts };
};