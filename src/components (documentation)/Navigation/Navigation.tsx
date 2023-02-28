import styled, { keyframes } from "styled-components";

import NavigationItems from "./NavigationItems";
import { NavigationProps } from "./NavigationProps";
import MobileNavigationHeader from "./MobileNavigationHeader";
import DesktopNavigationHeader from "./DesktopNavigationHeader";
import { MAIN_DARK_FONT_COLOR } from "../../utils/commons";

const Navigation = ({
  isMobileMenuOpen,
  onMobileMenuToggle,
}: NavigationProps) => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        backgroundColor: "#fff",
      }}
    >
      <MobileNavigationHeader onMobileMenuToggle={onMobileMenuToggle} />

      <NavigationContainer isMobileMenuOpen={isMobileMenuOpen}>
        <DesktopNavigationHeader />
        <nav style={{ height: "344.5px" }}>
          <NavigationItems
            onMobileMenuToggle={onMobileMenuToggle}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </nav>
      </NavigationContainer>

      <NavigationOverlay
        isMobileMenuOpen={isMobileMenuOpen}
        onClick={onMobileMenuToggle}
      ></NavigationOverlay>
    </div>
  );
};

export default Navigation;

export const NavigationContainer = styled.div<{
  isMobileMenuOpen: boolean;
}>`
  width: 250px;
  height: 100vh;
  padding: 25px 10px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  top: 0;
  border-right: 1px solid ${MAIN_DARK_FONT_COLOR};
  left: ${(props) => (props.isMobileMenuOpen ? "0" : "-75%")};
  @media (min-width: 768px) {
    position: unset;
    position: sticky;
  }
`;

export const mobileNavigationFadeOut = keyframes`
from {
  left: 0;
}
to {
  left: -100%;
}
`;

export const mobileNavigationFadeIn = keyframes`
from {
  left: -100%;
}
to {
  left: 0;
}
`;

export const NavigationOverlay = styled.div<{
  isMobileMenuOpen: boolean;
  onClick: () => void;
}>`
  top: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  background-color: ${(props) =>
    props.isMobileMenuOpen ? "rgba(0, 0, 0, 0.35)" : "#fff"};
  z-index: 1;
  transition: all 0.3s ease;

  animation-name: ${(props) =>
    props.isMobileMenuOpen ? mobileNavigationFadeIn : mobileNavigationFadeOut};
  animation-duration: 0.3s;
  animation-delay: ${(props) => (props.isMobileMenuOpen ? "0" : "0.3s")};
  animation-timing-function: linear;
  animation-fill-mode: forwards;

  @media (min-width: 768px) {
    display: none;
  }
`;

// export const NavigationOverlayClosed = styled.div`
//   background-color: #fff;
//   transition: background-color 0.3s ease;
//   animation-name: ${mobileNavigationFade};
//   animation-duration: 0.3s;
//   animation-timing-function: linear;
//   animation-fill-mode: forwards;
// `;
