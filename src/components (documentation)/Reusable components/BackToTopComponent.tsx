import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, faAnglesUp);

const BackToTopComponent = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BackToTopContainer onClick={handleScroll}>
      <BackToTop>back to top</BackToTop>
      <FontAwesomeIcon icon={["fas", "angles-up"]} />
    </BackToTopContainer>
  );
};

export default BackToTopComponent;

export const BackToTopContainer = styled.div<{
  onClick: () => void;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

export const BackToTop = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
`;
