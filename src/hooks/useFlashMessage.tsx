'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { FlashMessageData } from '@/components';
import { useSystemUIStore } from '@/stores';
import {
  type ValidErrorCode,
  getErrorMessage,
  isValidErrorCode,
} from '@/utils/error';

const createFlashMessage = (
  statusCode: string,
): FlashMessageData | undefined => {
  if (isValidErrorCode(statusCode)) {
    return {
      type: 'error',
      message: getErrorMessage(statusCode),
    };
  }
};

export const useFlashMessage = () => {
  const searchParams = useSearchParams();
  const flash = searchParams.get('flash') as ValidErrorCode;
  const timestamp = searchParams.get('t');

  const { setFlashMessage, clearFlashMessage } = useSystemUIStore(
    (state) => state,
  );

  React.useEffect(() => {
    if (!flash) clearFlashMessage();

    const params = createFlashMessage(flash);
    if (params) setFlashMessage(params);
  }, [flash, timestamp, setFlashMessage, clearFlashMessage]);
};
