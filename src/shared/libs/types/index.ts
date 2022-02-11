export interface GeneralError {
  readonly field: string | number;
  readonly messages: string[];
  readonly children?: GeneralError[];
}
