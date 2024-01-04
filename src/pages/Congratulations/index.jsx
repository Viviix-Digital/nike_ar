import FullContainer from "../../components/FullContainer";
import ImageAnimation from "../../components/ImageAnimation";
import { ImageAnimationVariant } from "../../components/ImageAnimation/config";
import { ImageConfig } from "../../configs/images";
import ImagesButton from "../../components/ImagesButton";
import useWaitFinish from "../../utils/hooks/useWaitFinish";
import "./styles.css";
import useRemoveMindAR from "../../utils/hooks/useRemoveMindAR";
import useCollectedTargets from "../../utils/hooks/useCollectedTargets";
import useSaveDeviceGoogleForm from "../../utils/hooks/useSaveDeviceGoogleForm";
import { useState } from "react";
import Spinner from "../../components/Spinner";

const Congratulations = () => {
  useRemoveMindAR();
  const { clearCollectedTargets } = useCollectedTargets();
  const { isFinish, onFinish } = useWaitFinish();
  const { saveDevice } = useSaveDeviceGoogleForm();
  const [isSending, setIsSending] = useState(false);

  const handleOnClick = () => {
    if (isSending) return;
    setIsSending(true);
    saveDevice().finally(() => {
      setIsSending(false);
      clearCollectedTargets();
      window.location.href = "https://landingpage.acfc.com.vn/survey/nike";
    });
  };

  return (
    <FullContainer>
      <div className="hd-container">
        <ImageAnimation
          images={ImageConfig.Congratulations}
          variant={ImageAnimationVariant.Once}
          // reverseAt={117}
          fps={35}
          onFinish={onFinish}
        />
        <ImagesButton
          className="receive-button"
          images={ImageConfig.Button3}
          onClick={handleOnClick}
          isStart={isFinish}
        />
      </div>
      {isSending && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
    </FullContainer>
  );
};
export default Congratulations;
