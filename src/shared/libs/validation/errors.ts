export const VALIDATION_ERRORS = {
  EMAIL_INCORRECT: 'Неверный формат почты',
  PASSWORD_MIN: (min: number): string => `Минимальная длина пароля ${min}`,
  PASSWORD_MAX: (max: number): string => `Максимальная длина пароля ${max}`,
  PASSWORD_INCORRECT: 'Неверный формат пароля',
  PASSWORDS_MUST_MATCH: 'Пароли на совпадают',
};
