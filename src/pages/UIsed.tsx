import { Outlet, Route, Routes } from "react-router-dom";

import Navigation from "../components (documentation)/Navigation";
import Select from "../components (documentation)/Select";
import TagsInput from "../components (documentation)/TagsInput";
import Table from "../components (documentation)/Table";
import Dialog from "../components (documentation)/Dialog";
import Toast from "../components (documentation)/Toast";
import Accordion from "../components (documentation)/Accordion";

const UIsed = () => {
  return (
    <>
      <Routes>
        <Route path="/uised/*" element={<UIsed />}>
          <Route index element={<UIsed />} />
          <Route path="select" element={<Select />} />
          <Route path="tags-input" element={<TagsInput />} />
          <Route path="table" element={<Table />} />
          <Route path="dialog" element={<Dialog />} />
          <Route path="toast" element={<Toast />} />
          <Route path="accordion" element={<Accordion />} />
        </Route>
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default UIsed;
