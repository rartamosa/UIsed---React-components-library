import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import Background from "../Background/Background";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import DialogUsage from "./DialogUsage";

const Dialog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/uised/dialog/usage");
  }, []);

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
        <Route path="props" element={<div>propsssss</div>} />
      </Routes>
      <Background />
    </MainContainer>
  );
};

export default Dialog;
