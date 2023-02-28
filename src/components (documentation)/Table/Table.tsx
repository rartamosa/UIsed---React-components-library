import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { MainContainer } from "../Overview/overviewStyles";
import ComponentPage from "../Reusable components/ComponentPage";
import {
  InnerNavigationContainer,
  InnerNavigationOption,
} from "../Reusable components/reusableComponentsStyles";
import TableUsage from "./TableUsage";
import TableProps from "./TableProps";

const Table = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/uised/table") {
      navigate("/uised/table/usage");
    }
  }, [location.pathname, navigate]);

  return (
    <MainContainer style={{ gap: "30px" }}>
      <ComponentPage
        componentName="Table"
        componentDescription="The Table component is a reusable table component that can be used to display data in a table format, with features such as sorting, customizable table header styles, and denser row styles. It accepts a set of column names and rows of data, and allows for sorting by clicking on column headers if `allowSorting` is set to true, and the sorted data can be displayed in ascending or descending order with the arrow icons."
        githubLink="https://github.com/rartamosa/React-UI-components/tree/master/src/components/Table"
      />
      <InnerNavigationContainer>
        <InnerNavigationOption to="/uised/table/usage">
          usage
        </InnerNavigationOption>
        <InnerNavigationOption to="/uised/table/props">
          props
        </InnerNavigationOption>
      </InnerNavigationContainer>
      <Routes>
        <Route path="usage" element={<TableUsage />} />
        <Route path="props" element={<TableProps />} />
      </Routes>
    </MainContainer>
  );
};

export default Table;
