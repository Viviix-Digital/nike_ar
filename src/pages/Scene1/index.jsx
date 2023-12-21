import { useNavigate } from "react-router-dom";
import BackgroundContainer from "../../components/BackgroundContainer";
import BottomBackgroundContainer from "../../components/BottomBackgroundContainner";
import Button from "../../components/Button";
import "./styles.css";
import RouteConfig from "../../configs/route";

const Scene1 = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RouteConfig.Guide.path);
  };
  return (
    <BottomBackgroundContainer>
      <BackgroundContainer>
        <Button onClick={handleOnClick}>Bắt đầu</Button>
      </BackgroundContainer>
    </BottomBackgroundContainer>
  );
};

export default Scene1;
