'use client';
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Photo } from '@api';
import { PhotoCard } from '@components';
import { chunkArray, getColsNumb } from './PhotoList.lib';

export interface PhotoListProps {
  data: Photo[];
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
  const isDataReady = windowWidth && chunkedArray;

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

  return isDataReady ? (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  items-start">
        {chunkedArray.map((innerArray, i) => (
          <div key={i} className="grid grid-cols-1 gap-y-4">
            {innerArray.map((photo) => (
              <PhotoCard key={photo.id} data={photo} />
            ))}
          </div>
        ))}
      </div>
      {isFetching && <div>Loading...</div>}
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
  ) : (
    <div></div>
  );
};
