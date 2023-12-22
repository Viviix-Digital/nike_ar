import { useEffect, useState } from "react";
import "./styles.css";
import { ImageAnimationVariant } from "./config";

const FPS = 25;

const ImageAnimation = ({ images, className, variant }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    console.log(imgIndex);
    if (images && images.length > 0) console.log(images[imgIndex]);
  }, [imgIndex, images]);

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
        if (prevIndex >= 0) {
          return prevIndex - 1;
        }
        clearInterval(intervalId);
        setIsReverse(false);
        return prevIndex;
      });
    }, 1000 / FPS);
    return () => {
      clearInterval(intervalId);
    };
  }, [isReverse, images]);
  return (
    images &&
    images.length > 0 && (
      <img className={`info-img ${className}`} src={images[imgIndex]} />
    )
  );
};

export default ImageAnimation;
