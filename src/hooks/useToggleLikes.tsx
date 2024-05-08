import React from 'react';
import { PhotoDetail, type Photo } from '@/services';
import { useSupabaseStore, useUserStore } from '@/stores';
import { useRouter } from 'next/navigation';

export interface useToggleLikesProps {
  data: Photo | PhotoDetail;
}

export const useToggleLikes = (props: useToggleLikesProps) => {
  const { data } = props;
  const router = useRouter();
  const { supabase } = useSupabaseStore((state) => state);
  const {
    user,
    likes,
    toggleLikes: _toggleLikes,
  } = useUserStore((state) => state);
  const isLiked = user && likes[data.id] ? true : false;

  const toggleLikes = async () => {
    const { data: userData, error } = await supabase!.auth.getUser();
    if (error || !userData.user) return router.push(`/?modal=login`);
    _toggleLikes(data);
  };

  return {
    isLiked,
    toggleLikes,
  };
};
