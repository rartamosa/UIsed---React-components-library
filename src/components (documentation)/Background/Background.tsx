import styled from "styled-components";

const Background = () => {
  return <BackgroundImage></BackgroundImage>;
};

export default Background;

export const BackgroundImage = styled.div`
  background-image: URL(${process.env.PUBLIC_URL +
  "assets/component_page_background.png"});
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`;
