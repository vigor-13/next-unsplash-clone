'use client';
import React from 'react';
import classNames from 'classnames';
import { IconSearch } from '@tabler/icons-react';
import { SystemComponentProps } from '@/components';

export interface SearchInputProps
  extends SystemComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  scale?: 'md' | 'lg';
  variant?: 'round' | 'square';
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { className, scale = 'md', variant = 'round', ...rest } = props;
  const [isFocused, setIsFocused] = React.useState(false);

  const formClasses = classNames(
    'flex items-center, w-full bg-stone-200 border transition overflow-hidden text-stone-500',
    scale === 'md' && 'h-12',
    scale === 'lg' && 'h-14',
    variant === 'round' && 'rounded-full',
    variant === 'square' && 'rounded-md',
    className,
  );

  const focusedClasses = classNames({
    'shadow-sm': !isFocused,
    'hover:bg-stone-300': !isFocused,
    'border-transparent': !isFocused,
    'bg-white': isFocused,
  });

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <form
      className={`${formClasses} ${focusedClasses}`}
      method="get"
      role="search"
      aria-label="사이트 전체에서 이미지 찾기"
    >
      <button type="submit" className="pl-4">
        <IconSearch size={scale === 'md' ? 18 : 20} />
      </button>
      <div className="w-full">
        <input
          type="text"
          className="focus:outline-none bg-transparent w-full h-full px-3 placeholder-stone-500 placeholder:text-sm"
          placeholder="고해상도 이미지 검색"
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </div>
    </form>
  );
};
