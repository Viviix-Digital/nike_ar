import { useEffect, useState } from "react";
import { TargetId } from "../../configs/targets";

const STORAGE_KEY = "collected-targets";

const useCollectedTargets = () => {
  const [collectedTargets, setCollectedTargets] = useState(() => {
    const stickyValue = window.localStorage.getItem(STORAGE_KEY);

    if (!stickyValue) {
      return [];
    }
    return stickyValue.split(",");
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, collectedTargets.join(","));
  }, [collectedTargets]);

  const addTarget = (targetId) => {
    if (!targetId) return;
    if (!Object.values(TargetId).includes(targetId)) return;
    setCollectedTargets((prevTargets) => {
      if (!prevTargets) return [targetId];

      const foundIndex = prevTargets.findIndex((item) => item === targetId);
      if (foundIndex > -1) {
        return prevTargets;
      }

      return [...prevTargets, targetId];
    });
  };

  const clearCollectedTargets = () => {
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return { collectedTargets, addTarget, clearCollectedTargets };
};

export default useCollectedTargets;
