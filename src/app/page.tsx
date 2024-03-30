import { getPhotos } from '@api';
import { HomeScreen } from '@components';

export const getInitialData = async () => {
  const { data } = await getPhotos();
  return data;
};

export default async function HomePage() {
  const initialData = await getInitialData();

  return <HomeScreen initialData={initialData} />;
}
