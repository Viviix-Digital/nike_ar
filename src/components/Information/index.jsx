import ImageAnimation from "../ImageAnimation";
import "./styles.css";
import Button from "../Button";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import useWaitFinish from "../../utils/hooks/useWaitFinish";

const Information = ({ images, onNext }) => {
  const { isFinish, onFinish } = useWaitFinish();

  return (
    <div className="info-container">
      <ImageAnimation
        images={images}
        variant={ImageAnimationVariant.Reverse}
        onFinish={onFinish}
      />
      {isFinish && (
        <Button className={"right-top-button"} onClick={onNext}>
          Tiếp tục
        </Button>
      )}
    </div>
  );
};

export default Information;
