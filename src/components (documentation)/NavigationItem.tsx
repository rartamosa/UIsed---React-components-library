import { NavLink } from "react-router-dom";

const NavigationItem = () => {
  return (
    <div>
      <NavLink to="/uised/*">
        <div>getting started</div>
      </NavLink>
      <NavLink to="select">
        <div>select</div>
      </NavLink>
      <NavLink to="tags-input">
        <div>tags input</div>
      </NavLink>
      <NavLink to="table">
        <div>table</div>
      </NavLink>
      <NavLink to="dialog">
        <div>dialog</div>
      </NavLink>
      <NavLink to="toast">
        <div>toast</div>
      </NavLink>
      <NavLink to="accordion">
        <div>accordion</div>
      </NavLink>
      <div>git hub</div>
    </div>
  );
};

export default NavigationItem;
