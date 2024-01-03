import Card from "./Card";

/* eslint-disable react/prop-types */
export default function GameBoard({
  data,
  duplicatedImagesArray,
  handleImageClick,
}) {
  return (
    <>
      <h1 className="text-3xl font-bold underline justify-center">
        Memory Game!
      </h1>
      <div className="max-w-7xl ">
        {data ? (
          <Card
            duplicatedImagesArray={duplicatedImagesArray}
            handleImageClick={handleImageClick}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
