'use client';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Photo } from '@/services/api';
import {
  PhotoCard,
  PhotoListSkeleton,
  Spinner,
  Grid,
  Flex,
  NoResult,
} from '@/components';
import { chunkArray, getColsNumb } from './PhotoList.lib';

export interface PhotoListProps {
  data: Photo[]; // TODO: Photo 타입 그대로 쓰지말고 필요한 데이터 정의하기
  isFetching?: boolean;
  onEndReached?: () => void;
}

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export const PhotoList: React.FC<PhotoListProps> = (props) => {
  const { data, isFetching, onEndReached } = props;
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const [colsNumb, setColsNumb] = useState(0);
  const [chunkedArray, setChunkedArray] = useState<Photo[][] | null>(null);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (window) {
      setWindowWidth(getWindowDimensions());
    }
  }, []);

  React.useEffect(() => {
    if (windowWidth) {
      setColsNumb(getColsNumb(windowWidth));
    }
  }, [windowWidth]);

  React.useEffect(() => {
    if (data.length === 0) return;
    if (colsNumb > 0) setChunkedArray(chunkArray(data, colsNumb));
  }, [colsNumb, data]);

  if (data.length === 0) return <NoResult />;
  if (data.length > 0 && !chunkedArray) return <PhotoListSkeleton />;

  return (
    chunkedArray && (
      <>
        <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  items-start">
          {chunkedArray.map((innerArray, i) => (
            <Grid key={i} className="grid grid-cols-1 gap-y-4">
              {innerArray.map((photo) => (
                <PhotoCard key={photo.id} data={photo} />
              ))}
            </Grid>
          ))}
        </Grid>
        {isFetching && (
          <Flex className="justify-center py-10">
            <Spinner />
          </Flex>
        )}
        <InView
          as="div"
          rootMargin="0px 0px 40px 0px"
          threshold={1}
          onChange={(isBottom) => {
            if (isBottom && onEndReached && data.length > 0 && !isFetching) {
              onEndReached();
            }
          }}
        />
      </>
    )
  );
};
