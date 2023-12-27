import { useEffect, useState } from "react";

const STORAGE_KEY = "collected-targets";

const useCollectedTargets = () => {
  const [collectedTargets, setCollectedTargets] = useState(() => {
    const stickyValue = window.localStorage.getItem(STORAGE_KEY);
    return stickyValue !== null ? stickyValue.split(",") : [];
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, collectedTargets.join(","));
  }, [collectedTargets]);

  const addTarget = (targetId) => {
    setCollectedTargets((prevTargets) => {
      if (!prevTargets) return [targetId];

      const foundIndex = prevTargets.findIndex((item) => item === targetId);
      if (foundIndex > -1) {
        return prevTargets;
      }

      return [...prevTargets, targetId];
    });
  };

  const clear = () => {
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return { collectedTargets, addTarget, clear };
};

export default useCollectedTargets;
