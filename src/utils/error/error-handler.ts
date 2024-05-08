import { CustomError } from './custom-error';
import { createErrorMessage } from './custom-error.lib';
import toast from 'react-hot-toast';

export const handleError = (error: CustomError) => {
  toast.error(createErrorMessage(error), {
    duration: 5000,
    position: 'bottom-center',
  });
};
