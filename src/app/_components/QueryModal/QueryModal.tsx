'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Modal } from '@/components/ui';
import { LoginScreen } from '@/components/screens';

export const QueryModal: React.FC = () => {
  const [modalType, setModalType] = React.useState<null | string>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const _renderModal = (modalType: string) => {
    switch (modalType) {
      case 'login':
        return (
          <Modal>
            <LoginScreen />
          </Modal>
        );
      default:
        return null;
    }
  };

  React.useEffect(() => {
    const type = searchParams.get('modal');
    type ? setModalType(type) : setModalType(null);
  }, [pathname, searchParams]);

  return modalType && _renderModal(modalType);
};
