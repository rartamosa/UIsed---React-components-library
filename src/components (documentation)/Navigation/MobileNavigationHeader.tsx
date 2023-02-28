import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { MobileNavigationHeaderProps } from "./NavigationProps";
import { MAIN_DARK_FONT_COLOR } from "../../utils/commons";

library.add(fas, faBars);

const MobileNavigationHeader = ({
  onMobileMenuToggle,
}: MobileNavigationHeaderProps) => {
  const navigate = useNavigate();

  const toMainScreen = () => {
    navigate("/uised");
  };

  return (
    // <div style={{ position: "sticky", height: "90px", top: "0" }}>
    <div>
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
    </div>
    // </div>
  );
};
export default MobileNavigationHeader;

export const MobileNavigationHeaderContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  padding: 12px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid ${MAIN_DARK_FONT_COLOR};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoThumbnail = styled.img`
  width: 65px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-right: 13px;
    cursor: default;
  }
`;

export const Hamburger = styled(FontAwesomeIcon)<{
  onClick: () => void;
}>`
  width: 30px;
  cursor: pointer;
`;
