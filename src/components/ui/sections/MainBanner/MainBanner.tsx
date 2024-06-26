import React from 'react';
import { SearchInput, Text } from '@/components';

export const MainBanner: React.FC = () => {
  return (
    <section className="py-8">
      <div className="flex flex-row">
        <div className="flex flex-col justify-end">
          <Text className="mb-3 font-bold text-4xl" as="h1">
            Unsplash
          </Text>
          <Text className="text-lg">인터넷의 시각 자료 출처입니다.</Text>
          <Text className="text-lg">
            모든 지역에 있는 크리에이터들의 지원을 받습니다.
          </Text>
          <SearchInput
            className="mt-3"
            scale="lg"
            variant="square"
            placeholder="고해상도 이미지 검색"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};
