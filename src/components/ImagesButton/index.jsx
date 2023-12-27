import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";
import useTimeoutClick from "../../utils/hooks/useTimeoutClick";
import useTimeoutInit from "../../utils/hooks/useTimeoutInit";

const ImagesButton = ({ images, className, onClick, loopAt }) => {
  const { isInit } = useTimeoutInit(200);
  const { isStartWait, onTimeoutClick } = useTimeoutClick({
    timeout: 400,
    onExecute: onClick,
  });

  return (
    <div
      className={`imgs-button-container ${
        isInit ? "show-button" : "invisible-button"
      } ${className}`}
    >
      <div
        className={`imgs-button-content ${
          isStartWait ? "click-anim" : undefined
        }`}
      >
        <ImageAnimation
          images={images}
          variant={ImageAnimationVariant.LoopAt}
          loopAt={loopAt}
        />
        <div className="touch-area" onClick={onTimeoutClick} />
      </div>
    </div>
  );
};

export default ImagesButton;
