export const GENERAL_ERRORS: Record<string, string> = {
  ID_SHOULD_BE_UNIQUES: 'ID должен быть уникальным',
  REQUIRED_FIELD: 'Обязательное поле',
};

export const SERVER_ERRORS: Record<string, string> = {
  UNAUTHORIZED: 'Неавторизирован',
  CONFIRMATION_PASSWORD_NOT_MATCH: 'Пароль не совпадает',
  EMAIL_IS_EXIST: 'Email уже существует',
  USER_NOT_FOUND: 'Пользователь не найден',
  EMAIL_NOT_CONFIRMED: 'Email не подтверждён',
  INVALID_PASSWORD: 'Неверный пароль',
  TOKEN_NOT_FOUND: 'Токен не найдён',
  EMAIL_IS_ALREADY_CONFIRMED: 'Email уже был подтверждён',
  INVALID_ROLE: 'Неверная роль',
  IDS_SHOULD_BE_UNIQUES: 'IDS должны быть уникальными',
  EMAILS_SHOULD_BE_UNIQUES: 'Emails должны быть уникальными',
  CLIENT_NOT_EXIST: 'Клиент не найден',
  DISTRICT_NOT_EXIST: 'Район не найден',
  DISTRICT_NOT_EMPTY: 'Район не свободен',
  DISTRICT_ID_IS_REQUIRED: 'ID района обязателен',
  CLIENT_ID_IS_REQUIRED: 'ID клиента обязателен',
  STATION_ID_IS_REQUIRED: 'ID станции обязателен',
  MEMBER_IS_NOT_FULL: 'Роль сотрудника неполноценна',
  BID_TODO_DESC_SHOULD_BE_UNIQUE: 'Должно быть уникальным',
  BID_NOT_FOUND: 'Заявка не найдена',
  BID_HAS_THIS_STATUS: 'Завка уже имеет такой статус',
  BID_FORBIDDEN_TO_EDIT: 'Заявка запрещена для редактирования',
  BID_LOCATED_AT_STATION_IN_ANOTHER_DISTRICT:
    'Заявка расположена в другом районе',
  ENGINEER_HAVE_IS_ANOTHER_DISTRICT: 'Инжинер привязан к другому району',
  THIS_BID_BY_ANOTHER_ENGINEER: 'Заявка принадлежит другому инжинеру',
  ALL_BID_TODOS_SHOULD_BE_COMPLETED: 'Todo список заявки должен быть выполнен',
  BID_TODO_NOT_FOUND: 'Элемент todo списка заявки не найден',
  BID_TODO_INVALID_STATUS: 'Статус элемента todo списка не подходит',
  FOLLOWING_TODOS_CANNOT_BE_UPDATED: 'Нельзя изменить следующий элемент todo списка',
  MAX_COUNT_BIDS_IN_WORK: 'Достигнут лимит максимального числа заявок статуса "В работе"',
  INVALID_BID_STATUS_FOR_UPDATING: 'Статус заявки не позволяет её редактирование',
  INVALID_BID_STATUS_FOR_ASSIGN_ENGINEER:
    'Статус заявки не позволяет привязку инжинера',
  INVALID_BID_STATUS_FOR_START_WORK: 'Статус заявки не позволяет начать работу',
  INVALID_BID_STATUS_FOR_END_WORK: 'Статус заявки не позволяет закончить работу',
  INVALID_BID_STATUS_FOR_CHANGE_TODO_STATUS:
    'Статус заявки не позволяет изменить статус её todo списка',
  INVALID_BID_STATUS_FOR_CANCEL: 'Статус заявки не позволяет закрыть её',
  INVALID_BID_STATUS_FOR_SET_REVIEW: 'Статус заявки не позволяет отправить на проверку',
  CLIENT_NAME_IS_ALREADY_EXIST: 'Имя клиента уже существует',
  IMPOSSIBLE_REMOVE_LEADER_FROM_DISTRICT:
    'Невозможно удалить руководителя с района',
  INVALID_FILE_SIZE: 'Недопустимый размер файла',
  INVALID_FILE_EXT: 'Недопустимое расширение файла',
  FILE_NOT_FOUND: 'Файл не найден',
  REGION_NOT_EXIST: 'Район не найден',
  STATION_NOT_FOUND: 'Станция не найдена',
  STATION_NUMBER_IS_EXIST: 'Номер станции уже существует',
  STATIONS_NUMBERS_SHOULD_BY_UNIQUE: 'Номера станций должны быть уникальны',
  STATION_WORKERS_ID_SHOULD_BY_UNIQUE: 'Работники станций должны быть уникальны',
  STATION_WORKER_NOT_EXIST: 'Работник станции не найден',
  CLIENT_NOT_EXISTS_OR_DONT_HAVE_THIS_WORKER:
    'Клиент не найден или не имеет указанного работника станции',
  THIS_STATION_WORKER_HAVE_STATION: 'Работник станции уже имеет станцию',
  THIS_STATION_HAVE_STATION_WORKER: 'Станция уже имеет работника станции',
  STATION_CANNOT_BE_UPDATED: 'Станцию нельзя обновить',
  IMPOSSIBLE_REMOVE_WORKER_FROM_STATION:
    'Невозможно удалить работника со станции',
  DISTRICT_LEADERS_SHOULD_HAVE_UNIQUE_DISTRICT_ID:
    'Руководители района должны иметь уникальный район',
  STATIONS_WORKERS_SHOULD_HAVE_UNIQUE_STATION_ID:
    'Работники станций должны иметь уникальную станцию',
  CLIENT_NOT_EXISTS_OR_DONT_HAVE_THIS_STATION:
    'Клиент не найден или не имеет указанную станцию',
  USER_NOT_EXISTS: 'Пользователь не найден',
  USER_HAS_OTHER_ROLE: 'Пользователь имеет другую роль',
  CANNOT_EXIST_WITHOUT_CLIENT: 'Не существует без клиента',
  IMPOSSIBLE_REMOVE_STATION_FROM_WORKER:
    'Невозможно отвязать станцию от работника станции',
  IMPOSSIBLE_REMOVE_ENGINEER_FROM_DISTRICT:
    'Невозможно удалить инжинера с района',
  CLIENT_CANNOT_BE_UPDATED: 'Клиента нельзя обновить',
  SHOULD_BE_DISTRICT_LEADER: 'Доступно только руководителям района',
  SHOULD_BE_ENGINEER: 'Доступно только инжинерам',
  LEADER_SHOULD_BE_WITHOUT_DISTRICT: 'Руководитель района должен быть без района',
  ENGINEER_SHOULD_BE_WITHOUT_DISTRICT: 'Инжинер должен быть без района',
  ENGINEER_NOT_HAVE_THIS_DISTRICT: 'Инжинер находится на другом районе',
  IMPOSSIBLE_REMOVE_STATION_WORKER: 'Невозможно удалить работника станции',
  IMPOSSIBLE_REMOVE_DISTRICT_LEADER: 'Невозможно удалить руководителя района',
  IMPOSSIBLE_REMOVE_ENGINEER: 'Невозможно удалить инжинера',
};
