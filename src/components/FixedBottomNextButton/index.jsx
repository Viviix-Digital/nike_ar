import ImagesButton from "../ImagesButton";
import "./styles.css";

const FixedBottomNextButton = ({ isStart, images, onClick }) => {
  return (
    <div className="fixed-button-container">
      <ImagesButton
        className="next-button"
        images={images}
        onClick={onClick}
        isStart={isStart}
      />
    </div>
  );
};

export default FixedBottomNextButton;
