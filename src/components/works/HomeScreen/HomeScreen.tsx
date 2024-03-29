import React from "react";
import { MainBanner, PhotoList } from "@components";
import { getPhotos } from "@api";

export const HomeScreen: React.FC = async () => {
  const { data } = await getPhotos();

  return (
    <>
      <MainBanner />
      <div className="px-4">
        <PhotoList data={data} />
      </div>
    </>
  );
};
