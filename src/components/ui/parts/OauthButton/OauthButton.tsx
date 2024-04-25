import React from 'react';
import { IconBrandGoogle } from '@tabler/icons-react';
import classNames from 'classnames';
import { SubButton, Flex, Text } from '@/components';

export interface OauthButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  provider: 'google';
}

export const OauthButton: React.FC<OauthButtonProps> = (props) => {
  const { className, provider, ...rest } = props;
  const classes = classNames('', className);

  const renderProvider = () => {
    switch (provider) {
      case 'google':
        return (
          <>
            <IconBrandGoogle className="mr-2" />
            <Text>Google로 로그인</Text>
          </>
        );
    }
  };

  return (
    <SubButton className={classes} {...rest}>
      <Flex className="justify-center items-center">{renderProvider()}</Flex>
    </SubButton>
  );
};
