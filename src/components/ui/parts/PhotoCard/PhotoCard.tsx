'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import classNames from 'classnames';
import { type Photo } from '@/services/api';
import { Box, LikeButton, UserProfile } from '@/components';
import { useToggleLikes } from '@/hooks';

interface PhotoCardProps {
  data: Photo;
}

export const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const { data } = props;
  const router = useRouter();
  const [isHovered, setIsHovered] = React.useState(false);
  const { toggleLikes, isLiked } = useToggleLikes({ data });

  const hoveredClasses = classNames(
    isHovered ? 'opacity-100 visible' : 'opacity-0 invisible',
  );
  const backgroundClasses = classNames(
    'absolute left-0 top-0 w-full h-full transition',
    isHovered ? 'opacity-30 visible bg-gray-900' : 'opacity-0 invisible',
  );

  const goToDetailPage = () => {
    return router.push(`/photo/${data.id}`, { scroll: false });
  };

  const clickLikeButton = async (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLikes();
  };

  return (
    <figure
      className="relative rounded overflow-hidden w-full h-full cursor-zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={goToDetailPage}
    >
      {/* <Image
        src={data.urls.small}
        alt={data.alternative_slugs.ko ? data.alternative_slugs.ko : data.slug}
        width={data.width}
        height={data.height}
      /> */}
      <img src={data.urls.small} alt="" className="w-full" />
      <Box className={backgroundClasses} />
      <Box className={`absolute right-4 top-4 transition ${hoveredClasses}`}>
        <LikeButton onClick={clickLikeButton} active={isLiked} />
      </Box>
      <Box className={`absolute left-4 bottom-4 transition ${hoveredClasses}`}>
        <UserProfile
          data={data.user}
          userNameTextColor="text-gray-200 hover:text-gray-50"
          subTextColor="text-gray-300 hover:text-gray-100"
        />
      </Box>
    </figure>
  );
};
