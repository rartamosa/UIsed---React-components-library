import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navigation from "../components (documentation)/Navigation/Navigation";
import Overview from "../components (documentation)/Overview/Overview";
import Select from "../components (documentation)/Select/Select";
import TagsInput from "../components (documentation)/TagsInput/TagsInput";
import Table from "../components (documentation)/Table/Table";
import Dialog from "../components (documentation)/Dialog/Dialog";
import Toast from "../components (documentation)/Toast";
import Accordion from "../components (documentation)/Accordion";

const UIsed = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navigation //TODO animacja na otwarcie i zamknięcie mobilnego menu
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      <Routes>
        {/* TODO active na właściwą "kartę"; Usage na start */}
        <Route index element={<Overview />} />

        {/* TODO background */}
        <Route path="select/*" element={<Select />} />

        {/* TODO background */}
        <Route path="tags-input/*" element={<TagsInput />} />

        {/* TODO szerokość kolumn w gridzie - nazwy kolumn nie spinają się szerokością z zawartością komórek */}
        <Route path="table/*" element={<Table />} />

        {/* TODO stylowanie nakłada się na wszystkie dialogi, a nie tylko na pojedyncze przykłady */}
        <Route path="dialog/*" element={<Dialog />} />

        <Route path="toast/*" element={<Toast />} />
        <Route path="accordion/*" element={<Accordion />} />
      </Routes>
    </>
  );
};

export default UIsed;
