import { useEffect, useState } from "react";
import ImageAnimation from "../ImageAnimation";
import { convertNumberToStrWithLen } from "../../utils/string";
import "./styles.css";

const Information1 = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    const images = [];
    for (let i = 0; i <= 210; i++) {
      images.push(
        `/images/typo-1/typo_1_${convertNumberToStrWithLen(i, 5)}.webp`
      );
    }
    setImages(images);
  }, []);
  return (
    <div className="info-container">
      <ImageAnimation images={images} />;
    </div>
  );
};

export default Information1;
