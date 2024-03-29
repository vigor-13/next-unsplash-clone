import React from "react";
import { Photo } from "@api";
import { PhotoCard } from "@components";
import { chunkArray } from "./PhotoList.lib";

export interface PhotoListProps {
  data: Photo[];
}

export const PhotoList: React.FC<PhotoListProps> = (props) => {
  const { data } = props;
  const chunkedArray = chunkArray(data);

  return data.length > 0 ? (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-x-4  items-start">
        {chunkedArray.map((innerArray, i) => (
          <div key={i} className="grid grid-cols-1 gap-y-4">
            {innerArray.map((photo) => (
              <PhotoCard key={photo.id} data={photo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>No List</div>
  );
};
