export type ValidErrorCode =
  | 'unknown_error'
  | 'over_email_send_rate_limit'
  | 'invalid_login_credentials';

export const UNKNOWN_ERROR_CODE = 'unknown_error';
export const VALID_ERROR_CODES: ValidErrorCode[] = [
  /**
   * Supabase Auth Error Code
   */
  'over_email_send_rate_limit',
  'invalid_login_credentials',

  /**
   * Unsplash Error Code
   */
];

export const isValidErrorCode = (
  errorCode: string,
): errorCode is ValidErrorCode => {
  return VALID_ERROR_CODES.includes(errorCode as ValidErrorCode);
};

export const validateErrorCode = (
  errorCode: string | undefined,
): ValidErrorCode | typeof UNKNOWN_ERROR_CODE => {
  if (!errorCode) return UNKNOWN_ERROR_CODE;
  if (isValidErrorCode(errorCode)) {
    return errorCode;
  } else {
    return UNKNOWN_ERROR_CODE;
  }
};

export const getErrorMessage = (errorCode: ValidErrorCode) => {
  switch (errorCode) {
    case 'invalid_login_credentials':
      return '잘못된 이메일 또는 암호입니다.';
    case 'over_email_send_rate_limit':
      return 'API 사용량을 초과하였습니다. 잠시후 다시 시도해주세요.';
    case 'unknown_error':
      return '죄송합니다. 알 수 없는 오류가 발생했습니다. 잠시후 다시 시도해 주세요.';
  }
};
