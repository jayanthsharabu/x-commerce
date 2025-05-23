export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'X-Commerce';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'nxt app for commerce';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT || 4);
  export const SIGNIN_DEFAULT_VALUES = {
    email: '',
    password: '',
  }
  export const SIGNUP_DEFAULT_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }