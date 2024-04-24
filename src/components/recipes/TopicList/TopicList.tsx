import React from 'react';
import { Box, Flex, TopicListItem } from '@components';
import { getTopics } from '@/services/api';

export interface TopicListProps {}

export const TopicList: React.FC<TopicListProps> = async (props) => {
  const topicList = await getTopics({});

  return (
    topicList && (
      <Box className="shadow px-3">
        <Box className="overflow-x-auto scroll-smooth scrollbar-hide">
          <Flex className="gap-4 items-center">
            {topicList.map((topic: any) => {
              return (
                <Box key={topic.id} className="whitespace-nowrap">
                  <Flex className="items-center">
                    <TopicListItem slug={topic.slug} title={topic.title} />
                  </Flex>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
    )
  );
};
