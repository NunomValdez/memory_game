/* eslint-disable react/prop-types */

export default function Card({ photo, handleImageClick, photoIndex }) {
  const { id, alt, src } = photo;

  const theOpacity = photo.isFlipped ? "0" : "100";
  const isDisabled = photo.isDisabled ? "hidden" : "";

  const dynamicClasses = `opacity-${theOpacity} absolute top-0 left-0 w-full h-full bg-red-500`;

  return (
    <button
      className={`transition-all duration-500 relative rounded-lg m-1 w-full h-full ${isDisabled}`}
      onClick={() => handleImageClick(photo, photoIndex)}
    >
      <div className={`${dynamicClasses}`}></div>
      <img src={`${src.small}`} alt={alt} id={id} className={``} />
    </button>
  );
}
