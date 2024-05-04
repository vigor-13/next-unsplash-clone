'use client';
import React from 'react';
import classNames from 'classnames';
import { IconX } from '@tabler/icons-react';
import { Box, Flex, Text } from '@/components';
import { useSystemUIStore } from '@/stores';
import { type FlashMessageType } from './FlashMessage.type';

export const FlashMessage: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const [type, setType] = React.useState<null | FlashMessageType>(null);

  const { flashMessage, clearFlashMessage } = useSystemUIStore(
    (state) => state,
  );

  const classes = classNames(
    'fixed left-0 top-0 w-full h-16 z-splash transform transition-transform duration-300 ease-in-out',
    flashMessage ? 'translate-y-0' : '-translate-y-full',
    type === 'error' && 'bg-red-500',
  );

  React.useEffect(() => {
    if (flashMessage) {
      setType(flashMessage.type);
      setMessage(flashMessage.message);
    }
  }, [flashMessage]);

  return (
    <Box className={classes}>
      <Flex className="h-full items-center justify-center">
        <Text className="text-white">{message}</Text>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={clearFlashMessage}
        >
          <IconX color="white" />
        </button>
      </Flex>
    </Box>
  );
};
