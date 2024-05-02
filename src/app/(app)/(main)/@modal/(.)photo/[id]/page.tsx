'use client';
import { Modal, PhotoScreen } from '@/components';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  if (!pathname.includes('/photo/')) return null;

  return (
    <Modal>
      <PhotoScreen />
    </Modal>
  );
}
