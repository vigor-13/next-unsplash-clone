import React from 'react';
import { SignupGrid, SignupBanner, SignupForm, Box } from '@/components';

export const SignupScreen = () => {
  return (
    <SignupGrid>
      <SignupBanner />
      <SignupForm />
    </SignupGrid>
  );
};
