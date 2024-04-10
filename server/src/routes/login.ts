// Libraries import
import { Router, Response, Request } from "express";
const router = Router();

// Local interfaces declaration
export interface IBody {
  email?: string;
  password?: string;
}
export interface IResponse {
  token?: string;
  userId?: string;
  message?: string;
}

// Route login : chek user's password and return a jwt token if successfull
export default router.post(
  "/user/login",
  async (
    req: Request<unknown, unknown, IBody, unknown>,
    res: Response<IResponse>
  ) => {
    // Login to be done here
  }
);
