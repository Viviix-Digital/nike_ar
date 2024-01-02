import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod";
import { Suspense, useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Targets } from "../../configs/targets";
import useCollectedTargets from "../../utils/hooks/useCollectedTargets";
import { Components } from "../../configs/route";
import Spinner from "../../components/Spinner";

const ARState = {
  Initialize: "Initialize",
  Scanning: "Scanning",
  Information: "Information",
  Collection: "Collection",
  ViewMap: "ViewMap",
  Completed: "Completed",
};

const AR = () => {
  const navigate = useNavigate();
  const [arState, setARState] = useState(ARState.Initialize);
  const [foundTargetId, setFoundTargetId] = useState();
  const [isCollectedFoundTarget, setIsCollectedFoundTarget] = useState(false);
  const { collectedTargets, addTarget } = useCollectedTargets();

  // useEffect(() => {
  //   console.log(collectedTargets);
  // }, [collectedTargets]);

  useEffect(() => {
    const uiScanning = document.querySelector(
      ".mindar-ui-overlay.mindar-ui-scanning"
    );
    if (!uiScanning) return;
    if (arState === ARState.Scanning) {
      uiScanning.style.display = "flex";
      return;
    }
    uiScanning.style.display = "none";
  }, [arState]);

  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    // const arSystem = sceneEl.systems["mindar-image-system"];
    const target1 = document.querySelector("#target1");
    const target2 = document.querySelector("#target2");
    const target3 = document.querySelector("#target3");
    const target4 = document.querySelector("#target4");
    const target5 = document.querySelector("#target5");
    const target6 = document.querySelector("#target6");
    const target7 = document.querySelector("#target7");

    // const uiScanningList = document.querySelectorAll(
    //   ".mindar-ui-overlay.mindar-ui-scanning"
    // );
    // for (let i = 0; i < uiScanningList.length; i++) {
    //   uiScanningList[i].style.display = "none";
    // }

    const handleArReady = () => {
      setARState(ARState.Scanning);
    };

    const handleArError = () => {};

    const handleTargetFound = (event) => {
      const targetId = event.target.id;
      setARState((prevState) => {
        if (prevState !== ARState.Scanning) return prevState;
        setFoundTargetId(targetId);
        return ARState.Information;
      });
    };

    const handleTargetLost = () => {};

    // arReady event triggered when ready
    sceneEl.addEventListener("arReady", handleArReady);
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", handleArError);
    // detect target found
    target1.addEventListener("targetFound", handleTargetFound);
    target2.addEventListener("targetFound", handleTargetFound);
    target3.addEventListener("targetFound", handleTargetFound);
    target4.addEventListener("targetFound", handleTargetFound);
    target5.addEventListener("targetFound", handleTargetFound);
    target6.addEventListener("targetFound", handleTargetFound);
    target7.addEventListener("targetFound", handleTargetFound);
    // detect target lost
    target1.addEventListener("targetLost", handleTargetLost);
    target2.addEventListener("targetLost", handleTargetLost);
    target3.addEventListener("targetLost", handleTargetLost);
    target4.addEventListener("targetLost", handleTargetLost);
    target5.addEventListener("targetLost", handleTargetLost);
    target6.addEventListener("targetLost", handleTargetLost);
    target7.addEventListener("targetLost", handleTargetLost);

    return () => {
      sceneEl.removeEventListener("arRready", handleArReady);
      sceneEl.removeEventListener("arError", handleArError);

      target1.removeEventListener("targetFound", handleTargetFound);
      target2.removeEventListener("targetFound", handleTargetFound);
      target3.removeEventListener("targetFound", handleTargetFound);
      target4.removeEventListener("targetFound", handleTargetFound);
      target5.removeEventListener("targetFound", handleTargetFound);
      target6.removeEventListener("targetFound", handleTargetFound);
      target7.removeEventListener("targetFound", handleTargetFound);

      target1.removeEventListener("targetLost", handleTargetLost);
      target2.removeEventListener("targetLost", handleTargetLost);
      target3.removeEventListener("targetLost", handleTargetLost);
      target4.removeEventListener("targetLost", handleTargetLost);
      target5.removeEventListener("targetLost", handleTargetLost);
      target6.removeEventListener("targetLost", handleTargetLost);
      target7.removeEventListener("targetLost", handleTargetLost);
    };
  }, []);

  // After collecting. Check state to re-scanning or show completed effect
  useEffect(() => {
    if (arState !== ARState.Collection) return;
    if (!isCollectedFoundTarget) return;
    let timer;

    if (collectedTargets.length < 7) {
      timer = setTimeout(() => {
        setARState(ARState.Scanning);
        setIsCollectedFoundTarget(false);
        setFoundTargetId(undefined);
      }, 1000);
    } else {
      // navigate(RouteConfig.Completed.path);
      timer = setTimeout(() => {
        setARState(ARState.Completed);
        setIsCollectedFoundTarget(false);
        setFoundTargetId(undefined);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isCollectedFoundTarget, arState, collectedTargets.length, navigate]);

  const handleOnInformationNext = () => {
    setARState(ARState.Collection);
  };

  const handleOnCollect = (targetId) => {
    addTarget(targetId);
  };

  const handleOnScoreClick = () => {
    setARState((prevState) => {
      if (prevState === ARState.Scanning) return ARState.ViewMap;
      return prevState;
    });
  };

  const handleOnMapClick = () => {
    setARState(ARState.Scanning);
  };

  return (
    <>
      <a-scene
        mindar-image="imageTargetSrc: ./files/targets.mind?v=1;  uiLoading: yes; uiError: yes; uiScanning: yes;"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets></a-assets>
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        {Targets.map((item, i) => (
          <a-entity
            key={item.Id}
            id={item.Id}
            mindar-image-target={`targetIndex: ${i}`}
          ></a-entity>
        ))}
      </a-scene>
      <div className="ar-content-container">
        {arState === ARState.Information && (
          <Components.Information
            images={
              Targets.find((item) => item.Id === foundTargetId).InfoImages
            }
            onNext={handleOnInformationNext}
          />
        )}
        {arState === ARState.Collection && (
          <Components.Collection
            targetId={foundTargetId}
            images={
              Targets.find((item) => item.Id === foundTargetId).NikeImages
            }
            onCollect={handleOnCollect}
            isCollected={isCollectedFoundTarget}
            setIsCollected={setIsCollectedFoundTarget}
            score={`${collectedTargets ? collectedTargets.length : 0}/7`}
          />
        )}
        {arState === ARState.Completed && <Components.Completed />}
        {arState === ARState.Scanning && (
          <Components.ScoreBox
            score={`${collectedTargets ? collectedTargets.length : 0}/7`}
            onClick={handleOnScoreClick}
          />
        )}
        {arState === ARState.ViewMap && (
          <Components.ViewMap
            collectedTargets={collectedTargets}
            onClick={handleOnMapClick}
          />
        )}
      </div>
    </>
  );
};

export default AR;
