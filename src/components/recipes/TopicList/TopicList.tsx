import React from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@components';
import { getTopics } from '@/services/api';

export const TopicList: React.FC = async () => {
  // TODO: 에러 처리
  const topicList = await getTopics({});

  return (
    <Box className="shadow p-3 py-5 pt-4">
      <Box className="overflow-x-auto scroll-smooth scrollbar-hide">
        <Flex className="gap-4 items-center">
          {topicList.map((topic) => {
            return (
              <Box key={topic.id} className="whitespace-nowrap">
                <Flex className="items-center">
                  <Link href={{ pathname: `/topics/${topic.slug}` }}>
                    <Text className="text-stone-500">{topic.title}</Text>
                  </Link>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};
