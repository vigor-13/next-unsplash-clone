import { UserScreen } from '@/components';

interface UserPageProps {
  params: {
    username: string;
  };
}

export default function Page(props: UserPageProps) {
  const { params } = props;

  return <UserScreen username={params.username} />;
}
