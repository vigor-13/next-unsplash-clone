'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box } from '@/components';

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
