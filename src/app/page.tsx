import { HomeScreen } from "@components";
import { getPhotos } from "@api";

export default async function HomePage() {
  const { data } = await getPhotos();
  console.log(data);
  return <HomeScreen />;
}
