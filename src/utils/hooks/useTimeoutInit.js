import { useEffect, useState } from "react";

const useTimeoutInit = (timeout) => {
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInit(true);
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  return {
    isInit,
  };
};

export default useTimeoutInit;
