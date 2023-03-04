import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import AccordionUsage from "./AccordionUsage";
import AccordionProps from "./AccordionProps";

const Accordion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/accordion") {
      navigate("/uised/accordion/usage");
    }
  }, [location.pathname, navigate]);

  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Accordion"
        componentDescription="A reusable accordion UI element that can display and hide content in a collapsible manner. It allows developers to control the accordion's behavior through various props, such as whether to allow multiple accordions to be open at the same time or only one, how to style the accordion, and what icons to use. It also allows developers to set default states and toggle the accordion's state programmatically."
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/Accordion"
      />
      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/accordion/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/accordion/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<AccordionUsage />} />
        <Route path="props" element={<AccordionProps />} />
      </Routes>
    </MainContainer>
  );
};

export default Accordion;
