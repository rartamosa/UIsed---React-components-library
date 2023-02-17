import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import { MainContainer } from "../Overview/overviewStyles";
import { MAIN_DARK_FONT_COLOR, ORANGE_COLOR } from "../../utils/commons";
import ComponentPage from "../Reusable components/ComponentPage";
import SelectUsage from "./SelectUsage";
import SelectProps from "./SelectProps";

const Select = () => {
  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Select"
        componentDescription="The custom React Select component is a highly flexible UI element designed for gathering user input via a dropdown list of options. This select component is highly customizable and can be used for a wide range of use cases with various styling options, such as changing the background color or border width."
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/Select"
      />

      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/select/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/select/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<SelectUsage />} />
        <Route path="props" element={<SelectProps />} />
      </Routes>
    </MainContainer>
  );
};

export default Select;

export const InnerNavigationContainer = styled.div`
  height: 47px;
  display: flex;
  gap: 8px;
  border-bottom: 2px solid ${MAIN_DARK_FONT_COLOR};
  align-items: center;
`;

export const InnerNavigationOption = styled(Link)`
  text-transform: capitalize;
  text-decoration: none;
  padding: 14px 20px 16px 20px;
  color: inherit;
  box-sizing: content-box;
  &:hover,
  &:focus,
  &:active {
    background-color: rgba(251, 133, 0, 0.3);
    color: ${ORANGE_COLOR};
  }
`;
