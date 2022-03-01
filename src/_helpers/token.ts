import * as consts from "./consts";

export const saveAuthentication = (token: string, tokenTimeout: number, login?: string) => {
  let now = new Date();
  now.setTime(now.getTime() + tokenTimeout * 60000);
  console.log(now.getTime());
    localStorage.setItem(consts.BEARER_TOKEN_STORAGE_KEY, token);

   localStorage.setItem(consts.AUTH_EXPIRATION_TIME, now.getTime().toString() );
  if (login) localStorage.setItem(consts.USER_LOGIN_STORAGE_KEY, login);
};

export const getToken = (): string | null => {
  return localStorage.getItem(consts.BEARER_TOKEN_STORAGE_KEY);
};

export const getUserLogin = (): number => {
  return parseInt(localStorage.getItem(consts.USER_LOGIN_STORAGE_KEY)!);
};

export const getUserName = (): string => {
  return localStorage.getItem(consts.USER_LOGIN_STORAGE_KEY)!;
};

export const deleteAuthentication = () => {
  localStorage.removeItem(consts.BEARER_TOKEN_STORAGE_KEY);
  localStorage.removeItem(consts.USER_LOGIN_STORAGE_KEY);
};
