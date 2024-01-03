/* eslint-disable react/prop-types */
export default function Card({ duplicatedImagesArray, handleImageClick }) {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 gap-4 justify-center justify-items-center p-4">
        {duplicatedImagesArray.map((photo, photoIndex) => (
          <div
            key={`${photo.id}-${photoIndex}`}
            className={`w-ful h-full`}
            onClick={(e) => handleImageClick(e, photo)}
          >
            <img
              src={photo.src.small}
              alt={photo.alt}
              id={photo.id}
              className={``}
            />
          </div>
        ))}
      </div>
    </>
  );
}
