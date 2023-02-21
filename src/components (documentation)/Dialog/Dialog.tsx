import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import Background from "../Background/Background";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import DialogUsage from "./DialogUsage";
import DialogProps from "./DialogProps";

const Dialog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/dialog") {
      navigate("/uised/dialog/usage");
    }
  }, [location.pathname, navigate]);

  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Dialog"
        componentDescription="The Dialog component is a reusable UI element that creates a modal dialog box with customizable buttons and text. It can be used to display important information, confirm actions or prompt users to make a decision. It can be customized to fit the styling of any app, and it also includes several built-in features such as the ability to block scrolling when the dialog is open and to close the dialog by clicking outside or pressing the escape key."
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/Dialog"
      />
      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/dialog/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/dialog/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<DialogUsage />} />
        <Route path="props" element={<DialogProps />} />
      </Routes>
      <Background />
    </MainContainer>
  );
};

export default Dialog;
