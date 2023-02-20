import { Routes, Route, Navigate } from "react-router";

import NotFound from "./pages/NotFound";
import WelcomePage from "./pages/WelcomePage";
import UIsed from "./pages/UIsed";
import Background from "./components (documentation)/Background/Background";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/uised/*" element={<UIsed />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Background />
    </>
  );
};

export default App;
