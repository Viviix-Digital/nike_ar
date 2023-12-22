import "mind-ar/dist/mindar-image.prod";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod";
import { useEffect, useState } from "react";
import Scene1 from "../Scene1";
import Information from "../../components/Information";
import "./styles.css";
import { ImageConfig } from "../../configs/images";
import Collection from "../../components/Collection";
import { useNavigate } from "react-router-dom";
import RouteConfig from "../../configs/route";

const ARState = {
  Scanning: "Scanning",
  Information: "Information",
  Collection: "Collection",
  ViewMap: "ViewMap",
};

const Targets = [
  {
    Id: "target1",
    InfoImages: ImageConfig.Infomation1,
    NikeImages: ImageConfig.Nike1,
  },
  {
    Id: "target2",
    InfoImages: ImageConfig.Infomation2,
    NikeImages: ImageConfig.Nike2,
  },
  {
    Id: "target3",
    InfoImages: ImageConfig.Infomation3,
    NikeImages: ImageConfig.Nike3,
  },
  {
    Id: "target4",
    InfoImages: ImageConfig.Infomation4,
    NikeImages: ImageConfig.Nike4,
  },
  {
    Id: "target5",
    InfoImages: ImageConfig.Infomation5,
    NikeImages: ImageConfig.Nike5,
  },
  {
    Id: "target6",
    InfoImages: ImageConfig.Infomation6,
    NikeImages: ImageConfig.Nike6,
  },
  {
    Id: "target7",
    InfoImages: ImageConfig.Infomation7,
    NikeImages: ImageConfig.Nike7,
  },
];

const AR = () => {
  const navigate = useNavigate();
  const [arState, setARState] = useState(ARState.Scanning);
  const [foundTargetId, setFoundTargetId] = useState();
  const [isCollectedFoundTarget, setIsCollectedFoundTarget] = useState(false);
  const [collectedTargets, setCollectedTargets] = useState([]);

  useEffect(() => {
    console.log(arState);
  }, [arState]);

  useEffect(() => {
    console.log(collectedTargets);
  }, [collectedTargets]);

  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    const arSystem = sceneEl.systems["mindar-image-system"];
    const target = document.querySelector("#target1");

    const handleArReady = (event) => {
      console.log("MindAR is ready");
    };

    const handleArError = (event) => {
      console.log("MindAR failed to start");
    };

    const handleTargetFound = (event) => {
      console.log("target found");
      const targetId = event.target.id;
      setFoundTargetId(targetId);
      setARState((prevState) => {
        if (prevState === ARState.Scanning) {
          return ARState.Information;
        }
        return prevState;
      });
    };

    const handleTargetLost = (event) => {
      console.log("target lost");
    };

    // arReady event triggered when ready
    sceneEl.addEventListener("arReady", handleArReady);
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", handleArError);
    // detect target found
    target.addEventListener("targetFound", handleTargetFound);
    // detect target lost
    target.addEventListener("targetLost", handleTargetLost);

    return () => {
      sceneEl.removeEventListener("arRready", handleArReady);
      sceneEl.removeEventListener("arError", handleArError);
      target.removeEventListener("targetFound", handleTargetFound);
      target.removeEventListener("targetLost", handleTargetLost);
    };
  }, []);

  // After collecting. Check state to re-scanning or show completed effect
  useEffect(() => {
    if (arState !== ARState.Collection) return;
    if (!isCollectedFoundTarget) return;

    // TODO: testing with 1 target
    if (collectedTargets.length < 1) {
      setARState(ARState.Scanning);
    } else {
      navigate(RouteConfig.Completed.path);
    }
    setIsCollectedFoundTarget(false);
    setFoundTargetId(undefined);
  }, [isCollectedFoundTarget, arState, collectedTargets.length, navigate]);

  const handleOnInformationNext = () => {
    setARState(ARState.Collection);
  };

  const handleOnCollect = (targetId) => {
    setCollectedTargets((prevTargets) => {
      if (!prevTargets) return [targetId];

      const foundIndex = prevTargets.findIndex((item) => item === targetId);
      if (foundIndex > -1) {
        return prevTargets;
      }

      return [...prevTargets, targetId];
    });
  };

  return (
    <>
      <a-scene
        mindar-image="imageTargetSrc: ./files/target_1.mind;  uiLoading: no; uiError: no; uiScanning: no;"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <img id="logo" src="./images/nike_logo.jpg" />
        </a-assets>
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity
          id={Targets[0].Id}
          mindar-image-target="targetIndex: 0"
        ></a-entity>
      </a-scene>
      <div className="ar-content-container">
        {arState === ARState.Information && (
          <Information
            images={
              Targets.find((item) => item.Id === foundTargetId).InfoImages
            }
            onNext={handleOnInformationNext}
          />
        )}
        {arState === ARState.Collection && (
          <Collection
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
      </div>
    </>
  );
};

export default AR;
