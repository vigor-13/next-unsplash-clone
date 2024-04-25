'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import { IconSearch } from '@tabler/icons-react';
import { SystemComponentProps, Box } from '@/components';

export interface SearchInputProps
  extends SystemComponentProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  scale?: 'md' | 'lg';
  variant?: 'round' | 'square';
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { className, scale = 'md', variant = 'round', ...rest } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const router = useRouter();

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

  const _handleFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const _handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, []);

  const _handleSearch = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const query = (form.elements.namedItem('query') as HTMLInputElement)
        .value;
      router.push(`/photos/${encodeURIComponent(query)}`);
    },
    [router],
  );

  return (
    <form
      className={`${formClasses} ${focusedClasses}`}
      role="search"
      aria-label="사이트 전체에서 이미지 찾기"
      onSubmit={_handleSearch}
    >
      <button type="submit" className="pl-4">
        <IconSearch size={scale === 'md' ? 18 : 20} />
      </button>
      <Box className="w-full">
        <input
          name="query"
          type="text"
          className="focus:outline-none bg-transparent w-full h-full px-3 placeholder-stone-500 placeholder:text-sm"
          placeholder="고해상도 이미지 검색"
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          autoComplete="off"
          {...rest}
        />
      </Box>
    </form>
  );
};
