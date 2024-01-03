import Card from "./Card";

/* eslint-disable react/prop-types */
export default function GameBoard({
  duplicatedImagesArray,
  handleImageClick,
  // isPair,
}) {
  //shuffle images
  // duplicatedImagesArray.sort(() => Math.random() - 0.5);

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4 justify-center justify-items-center p-4">
      {duplicatedImagesArray.map((photo, photoIndex) => (
        <Card
          key={`${photo.id}-${photoIndex}`}
          // isPair={isPair}
          photo={photo}
          handleImageClick={handleImageClick}
          photoIndex={photoIndex}
        />
      ))}
    </div>
  );
}
