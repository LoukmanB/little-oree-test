import { getTokenExpirationDate } from "./getTokenExpirationDate";

export const isJwtTokenExpired = (jwtToken?: string): boolean => {
  const expirationDateInMs = getTokenExpirationDate(jwtToken);
  if (!expirationDateInMs) {
    return false;
  }

  return Date.now() > expirationDateInMs;
};
