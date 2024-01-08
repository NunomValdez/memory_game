import Card from "./Card";
import PropTypes from "prop-types";

const GameBoard = ({ duplicatedImagesArray, handleImageClick }) => {
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
};
GameBoard.propTypes = {
  duplicatedImagesArray: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default GameBoard;
