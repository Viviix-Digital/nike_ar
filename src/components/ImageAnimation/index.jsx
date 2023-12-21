import { useEffect, useState } from "react";
import "./styles.css";

const FPS = 25;

const ImageAnimation = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    console.log(images);
  }, [images]);

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
        clearInterval(intervalId);
        setIsReverse(true);
        return prevIndex;
      });
    }, 1000 / FPS);
    return () => {
      clearInterval(intervalId);
    };
  }, [setImgIndex, images, isReverse]);

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
    images.length > 0 && <img className="info-img" src={images[imgIndex]} />
  );
};

export default ImageAnimation;
