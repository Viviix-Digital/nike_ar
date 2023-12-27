import { useEffect, useState } from "react";

const useTimeoutClick = ({ timeout, onExecute }) => {
  const [isClick, setIsClick] = useState(false);

  const handleOnClick = () => {
    setIsClick(true);
  };

  useEffect(() => {
    if (!isClick) return;
    const timer = setTimeout(() => {
      onExecute();
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, isClick, onExecute]);

  return {
    onTimeoutClick: handleOnClick,
    isStartWait: isClick,
  };
};

export default useTimeoutClick;
