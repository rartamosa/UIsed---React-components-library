import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import SelectUsage from "./SelectUsage";
import SelectProps from "./SelectProps";
import Background from "../Background/Background";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";

const Select = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/select") {
      navigate("/uised/select/usage");
    }
  }, [location.pathname, navigate]);

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
      <Background />
    </MainContainer>
  );
};

export default Select;
