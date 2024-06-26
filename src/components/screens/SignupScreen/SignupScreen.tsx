import React from 'react';
import { SignupGrid, SignupBanner, SignupForm } from '@/components';

export const SignupScreen = () => {
  return (
    <SignupGrid>
      <SignupBanner />
      <SignupForm />
    </SignupGrid>
  );
};
