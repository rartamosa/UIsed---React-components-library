import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MAIN_DARK_FONT_COLOR, ORANGE_COLOR } from "../../utils/commons";

export const CodeExampleHeader = styled.span`
  font-weight: 800;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
  align-self: center;
`;

export const CodeSnippetContainer = styled.div`
  background-color: ${MAIN_DARK_FONT_COLOR};
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 70%;
    align-self: center;
  }
`;

export const InnerNavigationContainer = styled.div`
  height: 47px;
  display: flex;
  gap: 8px;
  border-bottom: 2px solid ${MAIN_DARK_FONT_COLOR};
  align-items: center;
`;

export const InnerNavigationOption = styled(NavLink)`
  text-transform: capitalize;
  text-decoration: none;
  padding: 14px 20px 16px 20px;
  color: inherit;
  box-sizing: content-box;
  &:hover,
  &:focus,
  &:active,
  &.active {
    background-color: rgba(251, 133, 0, 0.3);
    color: ${ORANGE_COLOR};
  }
`;
