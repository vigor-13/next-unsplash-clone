"use client";
import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { type Photo } from "@api";
import { LikeButton, UserProfile } from '@components';

interface PhotoCardProps {
  data: Photo;
}

export const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const { data } = props;
  const [isHovered, setIsHovered] = React.useState(false);

  const hoveredClasses = classNames(
    isHovered ? "opacity-100" : "opacity-0",
    isHovered ? "visible" : "invisible",
  );

  return (
    <figure 
      className="relative rounded overflow-hidden w-full h-full cursor-zoom-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={data.urls.small}
        alt={data.alternative_slugs.ko ? data.alternative_slugs.ko : data.slug}
        width={data.width}
        height={data.height}
      />
      <div className={`absolute right-4 top-4 transition ${hoveredClasses}`}>
        <LikeButton />
      </div>
      <div className={`absolute left-4 bottom-4 transition ${hoveredClasses}`}>
        <UserProfile data={data.user} />
      </div>
    </figure>
  );
};
