import styled from "styled-components";
import { MAIN_DARK_FONT_COLOR } from "../../utils/commons";

import { LogoThumbnail } from "./MobileNavigationHeader";

const DesktopNavigationHeader = () => {
  return (
    <DesktopNavigationHeaderContainer>
      <LogoThumbnail
        src={process.env.PUBLIC_URL + "/assets/UIsed _logo_thumbnail.png"}
      />
      <MainName>UIsed</MainName>
    </DesktopNavigationHeaderContainer>
  );
};

export default DesktopNavigationHeader;

export const DesktopNavigationHeaderContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${MAIN_DARK_FONT_COLOR};
    padding: 12px 16px;
  }
`;

export const MainName = styled.span`
font-weight: 700;
line-height: 40px;
font-size: 30px;
letter-spacing 0.15em: 
`;
