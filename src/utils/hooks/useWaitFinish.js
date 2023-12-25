import { useState } from "react";

const useWaitFinish = () => {
  const [isFinish, setIsFinish] = useState(false);

  const handleOnFinish = () => {
    setIsFinish(true);
  };

  return {
    isFinish,
    onFinish: handleOnFinish,
  };
};

export default useWaitFinish;
