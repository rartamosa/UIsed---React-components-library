import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fas,
  faCirclePlay,
  faRectangleList,
  faChevronDown,
  faHandPointer,
  faKeyboard,
  faTable,
  faWindowMaximize,
  faWindowMinimize,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { NavigationItemsProps } from "./NavigationProps";

library.add(
  fas,
  faCirclePlay,
  faRectangleList,
  faChevronDown,
  faHandPointer,
  faKeyboard,
  faTable,
  faWindowMaximize,
  faWindowMinimize,
  faSquareCaretDown,
  fab,
  faGithub,
  far
);

const NavigationItems = ({ onMobileMenuToggle }: NavigationItemsProps) => {
  const [isComponentsSectionOpen, setIsComponentsSectionOpen] = useState(false);

  const handleComponentsSectionOpen = () => {
    setIsComponentsSectionOpen((prevState) => !prevState);
  };

  return (
    <div>
      <NavLink to="/uised" onClick={onMobileMenuToggle}>
        <div>
          <FontAwesomeIcon icon={["fas", "circle-play"]} />
          <span>Getting started</span>
        </div>
      </NavLink>

      <div>
        <div onClick={handleComponentsSectionOpen}>
          <FontAwesomeIcon icon={["fas", "rectangle-list"]} />
          <span>Components</span>
          <FontAwesomeIcon icon={["fas", "chevron-down"]} />
        </div>

        {isComponentsSectionOpen && (
          <div>
            <NavLink to="/uised/select" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["fas", "hand-pointer"]} />
              <span>select</span>
            </NavLink>

            <NavLink to="/uised/tags-input" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["fas", "keyboard"]} />
              <span>tags input</span>
            </NavLink>

            <NavLink to="/uised/table" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["fas", "table"]} />
              <span>table</span>
            </NavLink>

            <NavLink to="/uised/dialog" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["fas", "window-maximize"]} />
              <span>dialog</span>
            </NavLink>

            <NavLink to="/uised/toast" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["fas", "window-minimize"]} />
              <span>toast</span>
            </NavLink>

            <NavLink to="/uised/accordion" onClick={onMobileMenuToggle}>
              <FontAwesomeIcon icon={["far", "square-caret-down"]} />
              <span>accordion</span>
            </NavLink>
          </div>
        )}
      </div>

      <div>
        <FontAwesomeIcon icon={["fab", "github"]} />
        <span>github</span>
      </div>
    </div>
  );
};

export default NavigationItems;
