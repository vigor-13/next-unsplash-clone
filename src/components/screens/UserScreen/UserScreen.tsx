import React from 'react';
import { NoResult } from '@/components';

export interface UserScreenProps {
  username: string;
}

export const UserScreen: React.FC<UserScreenProps> = async (props) => {
  return <NoResult />;
};
