import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import { MAIN_DARK_FONT_COLOR, ORANGE_COLOR } from "../../utils/commons";
import { NavLink } from "react-router-dom";

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
  }
`;

export const Hamburger = styled(FontAwesomeIcon)<{
  onClick: () => void;
}>`
  width: 30px;
  cursor: pointer;
`;

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
  animation-name: ${(props) =>
    props.isMobileMenuOpen ? mobileNavigationFadeIn : mobileNavigationFadeOut};
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
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
  position: fixed;
  background-color: ${(props) =>
    props.isMobileMenuOpen ? "rgba(0, 0, 0, 0.35)" : "#rgba(0, 0, 0, 0)"};
  z-index: 1;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopNavigationHeaderContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    cursor: pointer;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${MAIN_DARK_FONT_COLOR};
    padding: 12px 16px;
    height: 90px;
    box-sizing: border-box;
  }
`;

export const MainName = styled.span`
font-weight: 700;
line-height: 40px;
font-size: 30px;
letter-spacing 0.15em: 
`;

export const ComponentsOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding-left: 41px;
  margin-top: 10px;
`;

export const NavigationOption = styled(NavLink)<{
  end?: boolean;
}>`
  display: flex;
  gap: 9px;
  color: ${MAIN_DARK_FONT_COLOR};
  text-decoration: none;
  padding: 3px 9px;
  text-transform: capitalize;
  &:hover,
  &:focus,
  &.active {
    background-color: rgba(251, 133, 0, 0.3);
    border-radius: 5px;
    color: ${ORANGE_COLOR};
  }
`;

export const NavigationOptionDiv = styled.div`
  display: flex;
  gap: 9px;
  padding: 3px 9px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(251, 133, 0, 0.3);
    border-radius: 5px;
    color: ${ORANGE_COLOR};
  }
`;

export const NavigationGithubOption = styled.a`
  color: ${MAIN_DARK_FONT_COLOR};
  text-decoration: none;
`;

export const MenuPrimaryIcon = styled(FontAwesomeIcon)`
  align-self: center;
`;

export const MenuSecondaryIcon = styled(FontAwesomeIcon)`
  align-self: flex-end;
`;
