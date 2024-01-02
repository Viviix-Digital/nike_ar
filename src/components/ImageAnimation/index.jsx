import { useEffect, useState } from "react";
import "./styles.css";
import { ImageAnimationVariant } from "./config";
import Spinner from "../Spinner";

const DefaultFPS = 25;

const ImageAnimation = ({
  fps = DefaultFPS,
  images = [],
  className,
  variant,
  reverseAt = 0,
  loopAt = 0,
  onFinish,
  onLoaded,
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) return;
    if (loadedCount < images.length) return;
    setIsLoaded(true);
    if (!onLoaded) return;
    onLoaded();
  }, [loadedCount, images.length, isLoaded, onLoaded]);

  useEffect(() => {
    if (!isFinish) return;
    if (!onFinish) return;
    onFinish();
  }, [isFinish, onFinish]);

  useEffect(() => {
    if (isFinish) return;
    switch (variant) {
      case ImageAnimationVariant.ReverseAt:
        if (imgIndex < reverseAt) return;
        break;
      default:
        if (imgIndex < images.length - 1) return;
        break;
    }
    setIsFinish(true);
  }, [images.length, imgIndex, isFinish, reverseAt, setIsFinish, variant]);

  useEffect(() => {
    if (!images) return;
    if (!isLoaded) return;
    if (isReverse) return;
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => {
        if (prevIndex < images.length - 1) {
          return prevIndex + 1;
        }
        switch (variant) {
          case ImageAnimationVariant.Loop:
            return 0;
          case ImageAnimationVariant.LoopAt:
            return loopAt;
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
    }, 1000 / fps);
    return () => {
      clearInterval(intervalId);
    };
  }, [setImgIndex, images, isReverse, variant, loopAt, isLoaded, fps]);

  useEffect(() => {
    if (!images) return;
    if (!isReverse) return;
    const intervalId = setInterval(() => {
      setImgIndex((prevIndex) => {
        switch (variant) {
          case ImageAnimationVariant.Reverse:
            if (prevIndex > 0) {
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
    }, 1000 / fps);
    return () => {
      clearInterval(intervalId);
    };
  }, [isReverse, images, reverseAt, variant, fps]);

  const handleOnLoad = () => {
    setLoadedCount((prevCount) => ++prevCount);
  };
  return (
    <>
      {images &&
        images.map((item) => (
          <img
            key={item}
            className={`info-img ${className ? className : undefined} ${
              isLoaded && item === images[imgIndex] ? "show" : ""
            }`}
            src={item}
            onLoad={handleOnLoad}
          />
        ))}
      {!isLoaded && <Spinner />}
    </>
  );
};

export default ImageAnimation;
