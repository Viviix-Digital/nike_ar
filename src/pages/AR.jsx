import "mind-ar/dist/mindar-image.prod";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod";

const AR = () => {
  return (
    <a-scene
      mindar-image="imageTargetSrc: ./files/target_1.mind;"
      color-space="sRGB"
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <img id="logo" src="./images/nike_logo.jpg" />
      </a-assets>
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane
          src="#logo"
          position="0 0 0"
          height="0.552"
          width="1"
          rotation="0 0 0"
        ></a-plane>
      </a-entity>
    </a-scene>
  );
};

export default AR;
