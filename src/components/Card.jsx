import { useContext } from "react";
import { GameContext } from "../context-provider/ContextProvider";
import PropTypes from "prop-types";

const Card = ({ photo, handleImageClick, photoIndex }) => {
  const { id, alt, src } = photo;
  const { runTimer } = useContext(GameContext);

  const cardAnimationClass = photo.isFlipped && runTimer ? "flip-card" : "";
  const imageAnimationClass = !photo.isFlipped && runTimer ? "hide-image" : "";

  return (
    <button
      className={`flex justify-center transition-all duration-500 relative rounded-lg m-[1px] w-full h-full`}
      onClick={() => handleImageClick(photoIndex)}
      disabled={!runTimer}
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
};

Card.propTypes = {
  // photo is an object that should contain specific fields
  photo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.shape({
      small: PropTypes.string.isRequired
    }).isRequired,
    isFlipped: PropTypes.bool.isRequired
  }).isRequired,
  // handleImageClick is a function
  handleImageClick: PropTypes.func.isRequired,
  // photoIndex is a number
  photoIndex: PropTypes.number.isRequired
};

export default Card;
