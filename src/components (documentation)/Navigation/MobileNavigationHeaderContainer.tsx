import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { MobileNavigationHeaderContainerProps } from "./NavigationProps";

library.add(fas, faBars);

const MobileNavigationHeader = ({
  onMobileMenuToggle,
}: MobileNavigationHeaderContainerProps) => {
  return (
    <>
      <MobileNavigationHeaderContainer onMobileMenuToggle={onMobileMenuToggle}>
        <LogoThumbnail
          src={process.env.PUBLIC_URL + "/assets/UIsed _logo_thumbnail.png"}
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

export const MobileNavigationHeaderContainer = styled.div<{
  onMobileMenuToggle: () => void;
}>`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  padding: 12px 15px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoThumbnail = styled.img`
  width: 65px;
`;

export const Hamburger = styled(FontAwesomeIcon)<{
  onClick: () => void;
}>`
  width: 30px;
`;
