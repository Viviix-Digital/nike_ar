import { useEffect } from "react";

const useRemoveMindAR = () => {
  useEffect(() => {
    const mindarElements = document.querySelectorAll(".mindar-ui-overlay");
    mindarElements.forEach((item) => {
      item.remove();
    });
  }, []);
};

export default useRemoveMindAR;
