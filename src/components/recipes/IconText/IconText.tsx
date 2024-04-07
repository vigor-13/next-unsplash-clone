import React from 'react';
import { IconCamera, IconMapPin, IconCalendarTime } from '@tabler/icons-react';
import { Text } from '@components';

export interface IconTextProps {
  icon: 'map-pin' | 'calendar-time' | 'camera';
  iconSize?: number;
  text: string;
}

export const IconText: React.FC<IconTextProps> = (props) => {
  const { icon, text, iconSize = 16 } = props;

  const _renderIcon = () => {
    switch (icon) {
      case 'camera':
        return <IconCamera size={iconSize} />;
      case 'map-pin':
        return <IconMapPin size={iconSize} />;
      case 'calendar-time':
        return <IconCalendarTime size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center text-stone-400">
      <div className="mr-2">{_renderIcon()}</div>
      <Text>{text}</Text>
    </div>
  );
};
