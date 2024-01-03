import { useRef } from "react";
/* eslint-disable react/prop-types */
export default function Card({ photo, handleImageClick }) {
  const { id, alt, src } = photo;
  //   console.log(photo);
  // ${isPair && "disabled:bg-black"}

  const divRef = useRef(null);

  return (
    <button
      className={`transition-all duration-500 relative rounded-lg card-item m-1 w-full h-full`}
      onClick={(e) => handleImageClick(e, photo, divRef)}
    >
      <div
        ref={divRef}
        className="absolute top-0 left-0 w-full h-full bg-red-500"
      ></div>
      <img src={`${src.small}`} alt={alt} id={id} className={``} />
    </button>
  );
}
