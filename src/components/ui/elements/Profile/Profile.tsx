'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  useFloating,
  offset,
  useInteractions,
  useClick,
  useDismiss,
} from '@floating-ui/react';
import { Box, PopBox, PopBoxItem } from '@/components';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/client';
import { useUserStore } from '@/stores';

export interface ProfileProps {
  data: User;
}

export const Profile: React.FC<ProfileProps> = (props) => {
  const { data } = props;
  const router = useRouter();
  const supabase = createClient();
  const [isOpen, setIsOpen] = React.useState(false);
  const { clearUser } = useUserStore((state) => state);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(5)],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const _logout = async () => {
    try {
      await supabase.auth.signOut();
      clearUser();
      window.location.href = '/';
    } catch (error) {
      // TODO:
      console.log(error);
    }
  };

  const _goToProfilePage = (username: string) => {
    router.push(`/@${username}`);
  };

  return (
    <>
      <Box
        className="cursor-pointer"
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <Image
          className="rounded-full"
          src="/images/placeholder-avatars.png"
          alt=""
          width={32}
          height={32}
        />
      </Box>
      {isOpen && (
        <PopBox
          ref={refs.setFloating}
          style={floatingStyles}
          className=""
          {...getFloatingProps()}
        >
          <PopBoxItem onClick={() => _goToProfilePage(data.user_metadata.name)}>
            프로필 보기
          </PopBoxItem>
          <PopBoxItem
            onClick={_logout}
          >{`로그아웃 @${data.user_metadata.name}`}</PopBoxItem>
        </PopBox>
      )}
    </>
  );
};
