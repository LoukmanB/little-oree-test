// Libraries import
import { Router, Response, Request } from "express";
const router = Router();

// Services import
import { validateEmail, validatePassword, getUserByEmail, generateToken } from '../services/authService.js';

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
    const { email, password } = req.body;
     
    if (!email || !validateEmail(email) || !password || !validatePassword(password)) {
      return res.status(400).json({ message: 'Invalid email or password format.' });
    }
  
    try {
      const products = await getUserByEmail(email);
      if (products.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password.' });
      }
      const { id } = products.rows[0];
      const token = generateToken(id);
  
      return res.json({ token, userId: id });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "A server error occured" });
    }
  }
);
