import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <nav>
          <NavigationItem />
        </nav>
        <div>mobile menu icon</div>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

export const NavigationContainer = styled.div`
  width: 250px;
  height: 100vh;
  padding: 25px 10px;
  box-sizing: border-box;
  background-color: pink;
`;
