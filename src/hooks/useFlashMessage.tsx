'use client';
import { FlashMessageData } from '@/components';
import { useSystemUIStore } from '@/stores';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const createMessage = (statusCode: string): FlashMessageData | undefined => {
  switch (statusCode) {
    case 'invalid-login-credentials':
      return {
        type: 'error',
        message: '잘못된 이메일 또는 암호입니다.',
      };
  }
};

export const useFlashMessage = () => {
  const searchParams = useSearchParams();
  const flash = searchParams.get('flash');
  const timestamp = searchParams.get('t');

  const { setFlashMessage, clearFlashMessage } = useSystemUIStore(
    (state) => state,
  );

  React.useEffect(() => {
    if (flash) {
      const params = createMessage(flash);
      if (params) setFlashMessage(params);
    } else {
      clearFlashMessage();
    }
  }, [flash, timestamp, setFlashMessage, clearFlashMessage]);
};
