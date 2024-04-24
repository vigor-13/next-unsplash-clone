import React from 'react';
import ContentLoader from 'react-content-loader';

export const TopicGridSkeleton: React.FC = (props) => (
  <ContentLoader viewBox="0 0 100% 0" style={{ width: '100%', height: '1800' }}>
    <rect x="0" y="0" width="100%" height="500px" />

    <rect
      x="0"
      y="calc(500px + 1.5rem)"
      width="calc(33.33% - 1rem)"
      height="500px"
    />
    <rect
      x="calc(33.33% + 0.5rem)"
      y="calc(500px + 1.5rem)"
      width="calc(33.33% - 1rem)"
      height="300px"
    />
    <rect
      x="calc(66.66% + 1rem)"
      y="calc(500px + 1.5rem)"
      width="calc(33.33% - 1rem)"
      height="500px"
    />

    <rect
      x="0"
      y="calc(1000px + 3rem)"
      width="calc(33.33% - 1rem)"
      height="300px"
    />
    <rect
      x="calc(33.33% + 0.5rem)"
      y="calc(800px + 3rem)"
      width="calc(33.33% - 1rem)"
      height="500px"
    />
    <rect
      x="calc(66.66% + 1rem)"
      y="calc(1000px + 3rem)"
      width="calc(33.33% - 1rem)"
      height="300px"
    />

    <rect
      x="0"
      y="calc(1300px + 4.5rem)"
      width="calc(33.33% - 1rem)"
      height="400px"
    />
    <rect
      x="calc(33.33% + 0.5rem)"
      y="calc(1300px + 4.5rem)"
      width="calc(33.33% - 1rem)"
      height="400px"
    />
    <rect
      x="calc(66.66% + 1rem)"
      y="calc(1300px + 4.5rem)"
      width="calc(33.33% - 1rem)"
      height="400px"
    />
  </ContentLoader>
);
