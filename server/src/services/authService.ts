//Libraries import
import jwt from 'jsonwebtoken';

// Services import
import { pool } from "../services/poolClient.js";

// Interfaces import
import { IIdentification, IUser } from "../interfaces/interfaces.js";

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  export const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isNotCommonPassword = !['password', '123456', '12345678', 'qwerty', 'abc123'].includes(password);
    const noSimpleSequences = !/(.)\1\1/.test(password);
  
    return password.length >= minLength &&
           hasUpperCase &&
           hasLowerCase &&
           hasNumbers &&
           hasSpecialChar &&
           isNotCommonPassword &&
           noSimpleSequences;
  };
  
  export const getUserByEmail = async (email) => {
    const query = `SELECT users.id, identifications.hash FROM users JOIN identifications ON users.id = identifications.user_id WHERE users.email = $1;`;
    return pool.query<IUser & IIdentification>(query, [email]);
  };
  
  export const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };