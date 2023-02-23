import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import Background from "../Background/Background";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import TagsInputUsage from "./TagsInputUsage";
import TagsInputProps from "./TagsInputProps";

const TagsInput = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/tags-input") {
      navigate("/uised/tags-input/usage");
    }
  }, [location.pathname, navigate]);

  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Tags Input"
        componentDescription="It allows users to enter tags as they type. Users can add new tags or remove existing ones. The component also suggests tags that match the user's input, and includes options to customize the appearance of the container and tags."
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/TagsInput"
      />
      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/tags-input/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/tags-input/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<TagsInputUsage />} />
        <Route path="props" element={<TagsInputProps />} />
      </Routes>
      <Background />
    </MainContainer>
  );
};

export default TagsInput;
