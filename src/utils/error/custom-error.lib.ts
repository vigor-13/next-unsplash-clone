import { CustomError } from './custom-error';

export const createErrorMessage = (error: CustomError) => {
  switch (error.status) {
    case 403:
      return 'API 사용한도를 초과하였습니다. 잠시후 다시 시도해주세요.';
    default:
      return error.message;
  }
};
