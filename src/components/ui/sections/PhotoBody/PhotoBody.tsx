import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Breadcrumb, PhotoDetail, Tag } from '@/services/api';
import {
  TitleDescCol,
  EllipsisButton,
  Grid,
  Box,
  Breadcrumbs,
  IconText,
  Flex,
  TagList,
} from '@/components';
import { numberFormatting, dateFromNow } from '@/libs';

export interface PhotoBodyProps {
  data: PhotoDetail;
}

export const PhotoBody: React.FC<PhotoBodyProps> = (props) => {
  const { data } = props;

  const imageBoxClasses = classNames(
    'relative w-full m-auto',
    data.width > data.height ? 'max-w-[100vh]' : 'max-w-[50vh]',
  );

  const _getBreadcrumbsText = (data: Breadcrumb[]) => {
    return data.map((v) => v.title);
  };

  const _getTagText = (data: Tag[]) => {
    return data.map((v) => {
      if (v.source) return v.source.title;
      return v.title;
    });
  };

  return (
    <>
      <Box className={imageBoxClasses}>
        <Image
          className="rounded"
          src={data.urls.regular}
          alt={data.description}
          layout="responsive"
          width={data.width}
          height={data.height}
        />
      </Box>
      <Flex className="flex-col gap-8 pt-4">
        <Box>
          <Grid className="grid-cols-3">
            <Grid className="grid-cols-2">
              <TitleDescCol
                title="조회수"
                desc={numberFormatting(data.views)}
              />
              <TitleDescCol
                title="다운로드"
                desc={numberFormatting(data.downloads)}
              />
            </Grid>
            <div></div>
            <Grid className="justify-end">
              <EllipsisButton />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Flex className="flex-col gap-1">
            {data.breadcrumbs.length > 0 && (
              <Breadcrumbs data={_getBreadcrumbsText(data.breadcrumbs)} />
            )}
            {data.location.name && (
              <IconText icon="map-pin" text={data.location.name} />
            )}
            <IconText
              icon="calendar-time"
              text={`${dateFromNow(data.created_at)}에 게시됨`}
            />
            {data.exif.name && <IconText icon="camera" text={data.exif.name} />}
          </Flex>
        </Box>
        <Box>
          <TagList data={_getTagText(data.tags)} />
        </Box>
      </Flex>
    </>
  );
};
