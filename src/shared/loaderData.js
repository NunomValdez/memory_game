import { createClient } from "pexels";
const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
const client = createClient(API_KEY);

export const gameboardDataLoader = async () => {
  try {
    const collections = await client.photos.search({
      query: "Nature",
      orientation: "square",
      per_page: 6,
    });
    const processedData = collections.photos.map((photo) => ({
      ...photo,
      isFlipped: false,
      isDisabled: false,
    }));

    const shuffledGameBoard = JSON.parse(
      JSON.stringify([...processedData, ...processedData])
    ).sort(() => Math.random() - 0.5);

    console.log(shuffledGameBoard);
    return shuffledGameBoard;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};
