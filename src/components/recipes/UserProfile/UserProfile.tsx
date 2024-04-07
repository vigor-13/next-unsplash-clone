import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { type User } from '@api';
import { Text, Flex, Box } from '@components';

interface UserProfileProps {
  data: User; // TODO:
  userNameTextColor?: string;
  subTextColor?: string;
}

export const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { data, userNameTextColor, subTextColor } = props;

  const userNameTextClasses = classNames(
    userNameTextColor ? userNameTextColor : '',
  );
  const subTextClasses = classNames(
    !subTextColor && data.for_hire && 'text-blue-500 hover:text-blue-600',
    !subTextColor && !data.for_hire
      ? 'text-stone-500 hover:text-stone-600'
      : subTextColor,
  );

  return (
    <Flex className="items-center gap-2 ">
      <Link href="/">
        <Image
          className="rounded-full"
          src={data.profile_image.small}
          alt={data.name}
          width={34}
          height={34}
        />
      </Link>
      <Box>
        <Link href="/">
          <Text size="md" className={userNameTextClasses}>
            {data.name}
          </Text>
        </Link>
        <Flex className={`items-center gap-1  ${subTextClasses}`}>
          <Link href="/">
            <Text size="xs">{data.for_hire ? '고용 가능' : data.username}</Text>
          </Link>
          {data.for_hire && (
            <Link href="/">
              <IconRosetteDiscountCheckFilled size={12} />
            </Link>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
