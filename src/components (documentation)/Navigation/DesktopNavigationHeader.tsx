import { useNavigate } from "react-router-dom";
import {
  LogoThumbnail,
  DesktopNavigationHeaderContainer,
  MainName,
} from "./NavigationStyles";

const DesktopNavigationHeader = () => {
  const navigate = useNavigate();

  const toMainScreen = () => {
    navigate("/uised");
  };

  return (
    <DesktopNavigationHeaderContainer onClick={toMainScreen}>
      <LogoThumbnail
        src={process.env.PUBLIC_URL + "/assets/UIsed _logo_thumbnail.png"}
      />
      <MainName>UIsed</MainName>
    </DesktopNavigationHeaderContainer>
  );
};

export default DesktopNavigationHeader;
