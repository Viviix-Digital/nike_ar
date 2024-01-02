import { useState, useEffect } from "react";

const useScreenOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.outerWidth / window.outerHeight < 1
  );

  const updateOrientation = () => {
    setIsPortrait(window.outerWidth / window.outerHeight < 1);
  };

  useEffect(() => {
    window.addEventListener("resize", updateOrientation);
    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

  return isPortrait;
};

export default useScreenOrientation;
