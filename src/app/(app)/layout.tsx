import { MainStructure } from '@components';

export default function AppLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return <MainStructure>{children}</MainStructure>;
}
