import React from "react";
import Image from "next/image";
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { type User } from "@api";
import { Text } from '@components';

interface UserProfileProps {
  data: User;
}

export const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { data } = props;

  return (
    <div className="flex items-center gap-2">
      <div>
        <a href="/">
          <Image
            className="rounded-full"
            src={data.profile_image.small}
            alt={data.name}
            width={34}
            height={34}
          />
        </a>
      </div>
      <div>
        <a href="/"><Text size="md" className="text-stone-300 hover:text-white">{data.username}</Text></a>
        {data.for_hire && (
          <div className="text-stone-400 hover:text-white flex items-center gap-1">
              <a href="/"><Text size="xs" className="text-stone-400 hover:text-white">고용 가능</Text></a>
              <a href="/"><IconRosetteDiscountCheckFilled size={12}/></a>
          </div>
        )}
      </div>
    </div>
  );
};
