import "mind-ar/dist/mindar-image.prod";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod";
import { useEffect } from "react";
import Scene1 from "../Scene1";
import Information1 from "../../components/Information1";

const AR = () => {
  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    const arSystem = sceneEl.systems["mindar-image-system"];
    const target = document.querySelector("#target1");

    let found = false;
    const handleArReady = (event) => {
      console.log("MindAR is ready");
    };

    const handleArError = (event) => {
      console.log("MindAR failed to start");
    };

    const handleTargetFound = (event) => {
      console.log("target found");
      found = true;
    };

    const handleTargetLost = (event) => {
      console.log("target lost");

      found = false;
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
        <a-entity id="target1" mindar-image-target="targetIndex: 0"></a-entity>
      </a-scene>
      <div className="ar-content-container">
        <Information1 />
      </div>
    </>
  );
};

export default AR;
