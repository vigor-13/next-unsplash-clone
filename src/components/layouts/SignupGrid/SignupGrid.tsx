import React from 'react';
import { Grid } from '@/components';

export interface SignupGridProps {
  children: React.ReactNode;
}

export const SignupGrid: React.FC<SignupGridProps> = (props) => {
  const { children } = props;

  return <Grid className="h-full sm:grid-cols-.65">{children}</Grid>;
};
