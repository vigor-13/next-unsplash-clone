import { Photo } from "@api";

export const chunkArray = (array: Photo[]) => {
  const dividedArrays: Photo[][] = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    const remainder = i % 3;
    dividedArrays[remainder].push(array[i]);
  }

  return dividedArrays;
};
