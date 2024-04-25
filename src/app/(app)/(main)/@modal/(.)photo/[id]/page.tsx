'use client';
import { Modal, PhotoScreen } from '@/components';
import { usePathname } from 'next/navigation';

export default function Page() {
  /**
   * TODO: catch all 조사해보기
   * @REF: https://github.com/vercel/next.js/discussions/50284#discussioncomment-5992116
   */
  const pathname = usePathname();
  if (!pathname.includes('/photo/')) return null;

  return (
    <Modal>
      <PhotoScreen />
    </Modal>
  );
}
