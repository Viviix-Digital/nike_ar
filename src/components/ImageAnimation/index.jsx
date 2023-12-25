import { useEffect, useState } from "react";
import "./styles.css";
import { ImageAnimationVariant } from "./config";

const FPS = 25;

const ImageAnimation = ({ images, className, variant, reverseAt = 0 }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    if (!images) return;
    if (isReverse) return;
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          return prevIndex + 1;
        }
        switch (variant) {
          case ImageAnimationVariant.Loop:
            return 0;
          case ImageAnimationVariant.Reverse:
          case ImageAnimationVariant.ReverseAt:
            clearInterval(intervalId);
            setIsReverse(true);
            return prevIndex;
          default:
            clearInterval(intervalId);
            return prevIndex;
        }
      });
    }, 1000 / FPS);
    return () => {
      clearInterval(intervalId);
    };
  }, [setImgIndex, images, isReverse, variant]);

  useEffect(() => {
    if (!images) return;
    if (!isReverse) return;
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => {
        switch (variant) {
          case ImageAnimationVariant.Reverse:
            if (prevIndex >= 0) {
              return prevIndex - 1;
            }
            break;
          case ImageAnimationVariant.ReverseAt:
            if (prevIndex >= reverseAt) {
              return prevIndex - 1;
            }
            break;
        }
        clearInterval(intervalId);
        setIsReverse(false);
        return prevIndex;
      });
    }, 1000 / FPS);
    return () => {
      clearInterval(intervalId);
    };
  }, [isReverse, images, reverseAt, variant]);
  return (
    <>
      {images.map((item) => (
        <img
          key={item}
          className={`info-img ${className ? className : ""} ${
            item === images[imgIndex] ? "show" : ""
          }`}
          src={item}
        />
      ))}
    </>
  );
};

export default ImageAnimation;
