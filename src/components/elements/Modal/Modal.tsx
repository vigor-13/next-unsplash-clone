'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

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
    <div
      className="fixed left-0 top-0 w-full h-full backdrop-blur-xs bg-stone-900/50 z-50"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};
