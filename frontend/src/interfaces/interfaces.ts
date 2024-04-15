// Redux states interface
export interface IAppStates {
  userAuthInfo: IUserAuthInfo;
  products: IProductsState; 
}

// User information interfaces
export interface IUserAuthInfo {
  userToken: string | null;
  userId: string | null;
  email: string | null;
}

// All products interfaces
export interface IProductsState {
  products: IProduct[];
}

// Single product interfaces
export interface IProduct {
  id: string;
  created_at: string;
  user_id: string;
  name: string;
  category: string;
  price: number;
  characteristics: {
    [key: string]: string;
  } | null;
  helps: {
    [key: string]: number;
  } | null;
}
