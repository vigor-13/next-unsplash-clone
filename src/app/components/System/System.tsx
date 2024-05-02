'use client';
import React from 'react';
import { FlashMessage } from '@/components';
import { Authentication } from '../Authentication';

export const System: React.FC = () => {
  return (
    <>
      <FlashMessage />
      <Authentication />
    </>
  );
};
