'use client';
import React from 'react';
import Cookies from 'js-cookie';
import { IconInfoCircle } from '@tabler/icons-react';
import { Flex, Text } from '@/components';
import { usePathname } from 'next/navigation';
import { User } from '@supabase/supabase-js';

export const FixedMessage: React.FC = () => {
  const pathname = usePathname();
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const data = Cookies.get('user');
    const user: User = data ? JSON.parse(data) : null;

    if (user && !user.email_confirmed_at) {
      setMessage(`귀하의 이메일(${user.email})이 확인되지 않았습니다.`);
    }

    if (user && user.email_confirmed_at) {
      setMessage('');
    }
  }, [pathname]);

  return (
    message && (
      <Flex className="items-center gap-1 bg-gray-900 p-2">
        <IconInfoCircle size={16} color="white" />
        <Text className="text-white text-sm">{message}</Text>
      </Flex>
    )
  );
};
