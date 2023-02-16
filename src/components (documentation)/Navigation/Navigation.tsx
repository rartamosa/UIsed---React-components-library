import styled, { keyframes, css } from "styled-components";

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
    <>
      <MobileNavigationHeader onMobileMenuToggle={onMobileMenuToggle} />

      <NavigationContainer isMobileMenuOpen={isMobileMenuOpen}>
        <DesktopNavigationHeader />
        <nav>
          <NavigationItems onMobileMenuToggle={onMobileMenuToggle} />
        </nav>
      </NavigationContainer>

      {/* {isMobileMenuOpen ? (
        <NavigationOverlay
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={onMobileMenuToggle}
        ></NavigationOverlay>
      ) : (
        <NavigationOverlayClosed></NavigationOverlayClosed>
      )} */}

      {isMobileMenuOpen && (
        <NavigationOverlay
          isMobileMenuOpen={isMobileMenuOpen}
          onClick={onMobileMenuToggle}
        ></NavigationOverlay>
      )}
    </>
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
    left: 0;
    position: unset;
  }
`;

export const mobileNavigationFade = keyframes`
from {
  left: 0;
}
to {
  left: -100%;
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
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1;
  transition: background-color 0.3s ease;
  ${(props) =>
    !props.isMobileMenuOpen &&
    css`
      background-color: #fff;
      transition: background-color 0.3s ease;
      animation-name: ${mobileNavigationFade};
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    `}
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
