import React from 'react';
import { TopicDetail } from '@api';
import { Box, Flex, Text } from '@components';

export interface TopicBannerProps {
  imgUrl: string;
  title: string;
  description: string;
}

export const TopicBanner: React.FC<TopicBannerProps> = (props) => {
  const { imgUrl, title, description } = props;

  return (
    <Box
      className="w-full h-topic-banner-mobile sm:h-topic-banner-tablet md:h-topic-banner-pc  bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <Box className="absolute left-0 top-0 w-full h-full bg-black opacity-40"></Box>
      <Box className="absolute left-0 top-0 w-full h-full">
        <Flex className="h-full items-center flex-1 px-4 sm:px-12">
          <Flex className="flex-col">
            <Text bold className="mb-3 text-white text-xl sm:text-4xl">
              {title}
            </Text>
            <Text size="md" className="text-white max-w-600 hidden sm:block">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
