import React from 'react';
import { Text } from '@/components';

interface BreadcrumbsProps {
  data: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { data } = props;

  const _isLastItem = (i: number) => {
    return i === data.length - 1;
  };

  return (
    <ul className="flex">
      {data.map((v, i) => {
        return (
          <li key={i} className="flex">
            <Text
              className={_isLastItem(i) ? 'text-stone-600' : 'text-stone-400'}
            >
              {v}
            </Text>
            {!_isLastItem(i) && (
              <Text className="text-stone-400 px-2">{' › '}</Text>
            )}
          </li>
        );
      })}
    </ul>
  );
};
