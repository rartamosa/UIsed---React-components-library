import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import Background from "../Background/Background";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import ToastUsage from "./ToastUsage";
import ToastProps from "./ToastProps";
const Toast = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/toast") {
      navigate("/uised/toast/usage");
    }
  }, [location.pathname, navigate]);

  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Toast"
        componentDescription={`A Toast component renders a list of toast messages with different types: success, error, warning and info or a custom message. It uses FontAwesomeIcon to display the different icons for each type of toast message. The component receives a toastList array containing the toast messages, the animationType, the toastsPosition, and the onToastRemove callback function to handle when a toast message is dismissed.`}
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/Toast"
      />
      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/toast/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/toast/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<ToastUsage />} />
        <Route path="props" element={<ToastProps />} />
      </Routes>
      <Background />
    </MainContainer>
  );
};

export default Toast;
