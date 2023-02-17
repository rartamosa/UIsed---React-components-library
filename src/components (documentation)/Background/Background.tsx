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
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  width: calc(100% + 30px);
  height: calc(100% + 80px);
  left: -15px;
  bottom: -30px;

  @media (min-width: 768px) {
    left: 0;
    width: 100%;
    height: calc(100% + 100px);
    bottom: -50px;
  }
`;
