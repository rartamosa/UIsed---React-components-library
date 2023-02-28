import { useNavigate } from "react-router-dom";

import { fas, faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { MobileNavigationHeaderProps } from "./NavigationProps";

import {
  MobileNavigationHeaderContainer,
  LogoThumbnail,
  Hamburger,
} from "./NavigationStyles";

library.add(fas, faBars);

const MobileNavigationHeader = ({
  onMobileMenuToggle,
}: MobileNavigationHeaderProps) => {
  const navigate = useNavigate();

  const toMainScreen = () => {
    navigate("/uised");
  };

  return (
    <>
      <MobileNavigationHeaderContainer>
        <LogoThumbnail
          src={process.env.PUBLIC_URL + "/assets/UIsed _logo_thumbnail.png"}
          alt="logo thumbnail"
          onClick={toMainScreen}
        />
        <Hamburger
          icon={["fas", "bars"]}
          size="4x"
          onClick={onMobileMenuToggle}
        />
      </MobileNavigationHeaderContainer>
    </>
  );
};
export default MobileNavigationHeader;
