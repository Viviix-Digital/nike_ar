import ImagesButton from "../ImagesButton";
import "./styles.css";

const FixedBottomNextButton = ({ images, onClick }) => {
  return (
    <div className="fixed-button-container">
      <ImagesButton className="next-button" images={images} onClick={onClick} />
    </div>
  );
};

export default FixedBottomNextButton;
