const DEFAULT_API_VERSION = '/v1';
const API_URL = process.env.REACT_APP_BACKEND_API_URL as string;

enum API_ENDPOINTS {
  ME = '/auth/me',
  SIGN_IN = '/auth/sign-in',
}

const getFullApiUrl = (endpoint: API_ENDPOINTS, version = DEFAULT_API_VERSION): string => (
  `${API_URL}${version}${endpoint}`
);

const API_FULL_URL = {
  ME: getFullApiUrl(API_ENDPOINTS.ME),
  SIGN_IN: getFullApiUrl(API_ENDPOINTS.SIGN_IN),
};

export { API_FULL_URL };
