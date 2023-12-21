import { useNavigate } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer";
import BottomBackgroundContainer from "../../components/BottomBackgroundContainner";
import Button from "../../components/Button";
import "./styles.css";
import RouteConfig from "../../configs/route";

const Scene2 = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(RouteConfig.AR.path);
  };
  return (
    <BottomBackgroundContainer>
      <BackgroundContainer variant="scene-2">
        <Button className="s2-button" onClick={handleOnClick}>
          Tiếp tục
        </Button>
      </BackgroundContainer>
    </BottomBackgroundContainer>
  );
};

export default Scene2;
