export interface IUser {
  id: string;
  email: string;
  created_at: string;
  firstname: string | null;
  lastname: string | null;
}

export interface IIdentification {
  id: string;
  created_at: string;
  user_id: string;
  modified_at: string;
  hash: string | null;
  salt: string | null;
}

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
