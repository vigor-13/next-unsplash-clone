'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box } from '@components';

export interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children } = props;
  const router = useRouter();

  const closeModal = React.useCallback(() => {
    router.back();
  }, [router]);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      className="cursor-zoom-out fixed left-0 top-0 w-full h-full backdrop-blur-xs bg-stone-900/50 z-50 overflow-y-auto"
      onClick={closeModal}
    >
      <Box className="flex min-h-full py-4">
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
