import React from 'react';
import ContentLoader from 'react-content-loader';

export const PhotoDetailBodySkeleton: React.FC = (props) => (
  <ContentLoader viewBox="0 0 100% 0" style={{ width: '100%', height: '1000' }}>
    <rect x="0" y="20" rx="0" ry="0" width="100%" height="500" />

    <rect x="0" y="550" rx="0" ry="0" width="130" height="60" />
    <rect x="140px" y="550" rx="0" ry="0" width="130" height="60" />
    <rect x="280px" y="550" rx="0" ry="0" width="130" height="60" />

    <rect x="calc(100% - 74px)" y="550" rx="0" ry="0" width="74" height="32" />
    <rect x="calc(100% - 158px)" y="550" rx="0" ry="0" width="74" height="32" />

    <rect x="0" y="650" rx="0" ry="0" width="70%" height="30" />
    <rect x="0" y="690" rx="0" ry="0" width="70%" height="30" />
    <rect x="0" y="730" rx="0" ry="0" width="70%" height="30" />

    <rect x="0" y="800" rx="0" ry="0" width="50px" height="24" />
    <rect x="60" y="800" rx="0" ry="0" width="50px" height="24" />
    <rect x="120" y="800" rx="0" ry="0" width="50px" height="24" />
    <rect x="180" y="800" rx="0" ry="0" width="50px" height="24" />
    <rect x="240" y="800" rx="0" ry="0" width="50px" height="24" />
  </ContentLoader>
);
