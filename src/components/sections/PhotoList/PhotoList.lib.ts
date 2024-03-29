import { Photo } from "@api";

export const chunkArray = (array: Photo[], colsNumb: number) => {
  const dividedArrays: Photo[][] = Array.from({ length: colsNumb }, () => []);
  // const dividedArrays: Photo[][] = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    const remainder = i % colsNumb;
    dividedArrays[remainder].push(array[i]);
  }

  return dividedArrays;
};

export const getColsNumb = (windowWidth: number) => {
  let colsNumb = 1;

  if (windowWidth >= 640) {
    colsNumb = 1;
  }
  if (windowWidth >= 768) {
    colsNumb = 2;
  }
  if (windowWidth >= 1024) {
    colsNumb = 3;
  }

  return colsNumb;
};
