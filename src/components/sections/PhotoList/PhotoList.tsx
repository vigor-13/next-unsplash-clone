"use client";
import React, { useState } from "react";
import { Photo } from "@api";
import { PhotoCard } from "@components";
import { chunkArray, getColsNumb } from "./PhotoList.lib";

export interface PhotoListProps {
  data: Photo[];
}

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export const PhotoList: React.FC<PhotoListProps> = (props) => {
  const { data } = props;
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const [colsNumb, setColsNumb] = useState(0);
  const [chunkedArray, setChunkedArray] = useState<Photo[][] | null>(null);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (window) {
      setWindowWidth(getWindowDimensions());
    }
  }, []);

  React.useEffect(() => {
    if (windowWidth) {
      setColsNumb(getColsNumb(windowWidth));
    }
  }, [windowWidth]);

  React.useEffect(() => {
    if (data.length === 0) return;
    if (colsNumb > 0) setChunkedArray(chunkArray(data, colsNumb));
  }, [colsNumb, data]);

  return (
    windowWidth &&
    chunkedArray && (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  items-start">
          {chunkedArray.map((innerArray, i) => (
            <div key={i} className="grid grid-cols-1 gap-y-4">
              {innerArray.map((photo) => (
                <PhotoCard key={photo.id} data={photo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  );
};
