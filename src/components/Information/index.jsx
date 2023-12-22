import ImageAnimation from "../ImageAnimation";
import "./styles.css";
import Button from "../Button";
import { ImageAnimationVariant } from "../ImageAnimation/config";

const Information = ({ images, onNext }) => {
  return (
    <div className="info-container">
      <ImageAnimation images={images} variant={ImageAnimationVariant.Reverse} />
      <Button className={"right-top-button"} onClick={onNext}>
        Tiếp tục
      </Button>
    </div>
  );
};

export default Information;
