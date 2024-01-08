import Card from "./Card";

/* eslint-disable react/prop-types */
export default function GameBoard({ duplicatedImagesArray, handleImageClick }) {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-4 gap-6 justify-center">
        {duplicatedImagesArray.map((photo, photoIndex) => (
          <Card
            key={`${photo.id}-${photoIndex}`}
            photo={photo}
            handleImageClick={handleImageClick}
            photoIndex={photoIndex}
          />
        ))}
      </div>
    </>
  );
}
