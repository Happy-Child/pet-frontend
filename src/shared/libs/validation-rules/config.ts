export const PASSWORD_RULES = {
  LENGTH: {
    MIN: 8,
    MAX: 20,
  },
  REGEXP: /(?=.*\d)(?=.*[a-zA-Z])/gm,
};

export const EMAIL_RULES = {
  REGEXP: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
