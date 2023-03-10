import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navigation from "../components (documentation)/Navigation/Navigation";
import Overview from "../components (documentation)/Overview/Overview";
import Select from "../components (documentation)/Select/Select";
import TagsInput from "../components (documentation)/TagsInput/TagsInput";
import Table from "../components (documentation)/Table/Table";
import Dialog from "../components (documentation)/Dialog/Dialog";
import Toast from "../components (documentation)/Toast/Toast";
import Accordion from "../components (documentation)/Accordion/Accordion";

const UIsed = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      <Routes>
        <Route index element={<Overview />} />

        <Route path="select/*" element={<Select />} />

        <Route path="tags-input/*" element={<TagsInput />} />

        <Route path="table/*" element={<Table />} />

        <Route path="dialog/*" element={<Dialog />} />

        <Route path="toast/*" element={<Toast />} />

        <Route path="accordion/*" element={<Accordion />} />
      </Routes>
    </>
  );
};

export default UIsed;
