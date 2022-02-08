const DEFAULT_API_VERSION = '/v1';

const API_URL = process.env.REACT_APP_BACKEND_API_URL as string;

const GET_FULL_URL = (endpoint: ENDPOINTS, version = DEFAULT_API_VERSION): string => (
  `${API_URL}${version}${endpoint}`
);

enum ENDPOINTS {
  ME = '/auth/me',
  SIGN_IN = '/auth/sign-in',
}

export const FULL_URLS = {
  ME: GET_FULL_URL(ENDPOINTS.ME),
  SIGN_IN: GET_FULL_URL(ENDPOINTS.SIGN_IN),
};
