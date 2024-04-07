import React from 'react';
import ContentLoader from 'react-content-loader';

export const PhotoDetailHeaderSkeleton: React.FC = (props) => (
  <ContentLoader viewBox="0 0 100% 0" style={{ width: '100%', height: '40' }}>
    <circle cx="20" cy="20" r="20" />
    <rect x="50" y="6" rx="0" ry="0" width="56" height="10" />
    <rect x="50" y="24" rx="0" ry="0" width="40" height="10" />
    <rect x="calc(100% - 74px)" y="10" rx="0" ry="0" width="74" height="32" />
    <rect x="calc(100% - 158px)" y="10" rx="0" ry="0" width="74" height="32" />
  </ContentLoader>
);
