'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box } from '@/components';
import { IconX } from '@tabler/icons-react';

export interface ModalProps {
  children: React.ReactNode;
}

let modalCount = 0;
export const Modal: React.FC<ModalProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  const closeModal = React.useCallback(() => {
    router.back();
  }, [router]);

  React.useEffect(() => {
    modalCount++;
    if (modalCount === 1) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      modalCount--;
      if (modalCount === 0) {
        document.body.style.overflow = 'auto';
      }
    };
  }, []);

  return (
    <Box
      className="cursor-zoom-out fixed left-0 top-0 w-full h-full backdrop-blur-xs bg-stone-900/50 z-modal overflow-y-auto"
      onClick={closeModal}
    >
      <IconX
        className="relative left-2 top-2 sm:absolute sm:top-4 cursor-pointer"
        color="white"
      />
      <Box className="flex min-h-full pt-4 sm:px-10 sm:py-4 lg:px-4">
        <Container
          className="mx-auto cursor-default bg-white rounded"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};
