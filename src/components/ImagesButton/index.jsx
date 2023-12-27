import { useEffect, useState } from "react";
import ImageAnimation from "../ImageAnimation";
import { ImageAnimationVariant } from "../ImageAnimation/config";
import "./styles.css";

const ImagesButton = ({ images, className, onClick }) => {
  const [isInit, setIsInit] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInit(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOnMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleOnMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className={`imgs-button-container ${
        isInit ? "show-button" : undefined
      } ${className}`}
    >
      <div
        className={`imgs-button-content ${
          isMouseOver ? "mouse-over" : undefined
        }`}
      >
        <ImageAnimation
          images={images}
          variant={ImageAnimationVariant.Reverse}
        />
        <div
          className="touch-area"
          onClick={onClick}
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        />
      </div>
    </div>
  );
};

export default ImagesButton;
