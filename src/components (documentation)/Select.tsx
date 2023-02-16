import { Route, Routes, Link } from "react-router-dom";

const Select = () => {
  return (
    <div>
      <h2>SELECT</h2>
      <Link to="/uised/select/usage">usage</Link>
      <Link to="/uised/select/props">props</Link>
      <Routes>
        <Route path="usage" element={<div>usage</div>} />
        <Route path="props" element={<div>props</div>} />
      </Routes>
    </div>
  );
};

export default Select;

// font-family: 'Courier Prime';
