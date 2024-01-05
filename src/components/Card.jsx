/* eslint-disable react/prop-types */

export default function Card({ photo, handleImageClick, photoIndex }) {
  const { id, alt, src } = photo;

  const cardAnimationClass = photo.isFlipped ? "flip-card" : "";
  const imageAnimationClass = !photo.isFlipped ? "hide-image" : "";

  return (
    <button
      className={` flex justify-center transition-all duration-500 relative  rounded-lg m-1 w-full h-full`}
      onClick={() => handleImageClick(photoIndex)}
    >
      <div
        className={`${cardAnimationClass} absolute top-0 left-0 w-full h-full bg-indigo-500 rounded-lg`}
      ></div>
      <img
        src={src.small}
        alt={alt}
        id={id}
        className={`object-center rounded-lg ${imageAnimationClass}`}
      />
    </button>
  );
}
