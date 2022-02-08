export const KEYS = {
  UNKNOWN: 'UNKNOWN',
  ID_SHOULD_BE_UNIQUES: 'ID_SHOULD_BE_UNIQUES',
  REQUIRED_FIELD: 'REQUIRED_FIELD',
  EMAIL_INCORRECT: 'EMAIL_INCORRECT',
  PASSWORD_MIN: 'PASSWORD_MIN',
  PASSWORD_MAX: 'PASSWORD_MAX',
  PASSWORD_INCORRECT: 'PASSWORD_INCORRECT',
  PASSWORDS_MUST_MATCH: 'PASSWORDS_MUST_MATCH',
};

export const VALUES = {
  [KEYS.UNKNOWN]: 'Неизвестная ошибка',
  [KEYS.ID_SHOULD_BE_UNIQUES]: 'ID должен быть уникальным',
  [KEYS.REQUIRED_FIELD]: 'Обязательное поле',
  [KEYS.EMAIL_INCORRECT]: 'Неверный формат почты',
  [KEYS.PASSWORD_MIN]: 'Минимальная длина пароля :min',
  [KEYS.PASSWORD_MAX]: 'Максимальная длина пароля :max',
  [KEYS.PASSWORD_INCORRECT]: 'Неверный формат пароля',
  [KEYS.PASSWORDS_MUST_MATCH]: 'Пароли на совпадают',
};

export const UNKNOWN = VALUES[KEYS.UNKNOWN];
export const ID_SHOULD_BE_UNIQUES = VALUES[KEYS.ID_SHOULD_BE_UNIQUES];
export const EMAIL_INCORRECT = VALUES[KEYS.EMAIL_INCORRECT];
export const PASSWORD_INCORRECT = VALUES[KEYS.PASSWORD_INCORRECT];
export const PASSWORDS_MUST_MATCH = VALUES[KEYS.PASSWORDS_MUST_MATCH];
export const REQUIRED_FIELD_ERROR = VALUES[KEYS.REQUIRED_FIELD];
export const PASSWORD_MIN = (v: string | number) => VALUES[KEYS.PASSWORD_MIN].replace(':min', v.toString());
export const PASSWORD_MAX = (v: string | number) => VALUES[KEYS.PASSWORD_MAX].replace(':max', v.toString());
