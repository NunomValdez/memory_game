import CardsGrid from "./CardsGrid";

/* eslint-disable react/prop-types */
export default function GameBoard({
  data,
  duplicatedImagesArray,
  handleImageClick,
  isPair,
}) {
  return (
    <>
      <div className="max-w-7xl ">
        {data ? (
          <CardsGrid
            isPair={isPair}
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
