import { useState, useEffect } from "react";
import styled from "styled-components";

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
import { NavigationOption } from "./NavigationStyles";

import { NavigationItemsProps } from "./NavigationProps";
import {
  MenuPrimaryIcon,
  NavigationOptionDiv,
  ComponentsOptions,
  MenuSecondaryIcon,
  NavigationGithubOption,
} from "./NavigationStyles";

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

const NavigationItems = ({
  onMobileMenuToggle,
  isMobileMenuOpen,
}: NavigationItemsProps) => {
  const [isComponentsSectionOpen, setIsComponentsSectionOpen] = useState(true);

  useEffect(() => {
    if (isMobileMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const handleComponentsSectionOpen = () => {
    setIsComponentsSectionOpen((prevState) => !prevState);
  };

  return (
    <NavigationContainer>
      <NavigationOption to="/uised" onClick={onMobileMenuToggle} end>
        <MenuPrimaryIcon icon={["fas", "circle-play"]} size="lg" />
        <span>Getting started</span>
      </NavigationOption>

      <div>
        <NavigationOptionDiv onClick={handleComponentsSectionOpen}>
          <MenuPrimaryIcon icon={["fas", "rectangle-list"]} size="lg" />
          <span>Components</span>
          <MenuPrimaryIcon icon={["fas", "chevron-down"]} />
        </NavigationOptionDiv>

        {isComponentsSectionOpen && (
          <ComponentsOptions>
            <NavigationOption to="/uised/select" onClick={onMobileMenuToggle}>
              <MenuSecondaryIcon icon={["fas", "hand-pointer"]} />
              <span>select</span>
            </NavigationOption>

            <NavigationOption
              to="/uised/tags-input"
              onClick={onMobileMenuToggle}
            >
              <MenuSecondaryIcon icon={["fas", "keyboard"]} />
              <span>tags input</span>
            </NavigationOption>

            <NavigationOption to="/uised/table" onClick={onMobileMenuToggle}>
              <MenuSecondaryIcon icon={["fas", "table"]} />
              <span>table</span>
            </NavigationOption>

            <NavigationOption to="/uised/dialog" onClick={onMobileMenuToggle}>
              <MenuSecondaryIcon icon={["fas", "window-maximize"]} />
              <span>dialog</span>
            </NavigationOption>

            <NavigationOption to="/uised/toast" onClick={onMobileMenuToggle}>
              <MenuSecondaryIcon icon={["fas", "window-minimize"]} />
              <span>toast</span>
            </NavigationOption>

            <NavigationOption
              to="/uised/accordion"
              onClick={onMobileMenuToggle}
            >
              <MenuSecondaryIcon icon={["far", "square-caret-down"]} />
              <span>accordion</span>
            </NavigationOption>
          </ComponentsOptions>
        )}
      </div>

      <NavigationGithubOption
        href="https://github.com/rartamosa/React-UI-components/tree/master/src/components"
        target="_blank"
      >
        <NavigationOptionDiv>
          <MenuPrimaryIcon icon={["fab", "github"]} size="lg" />
          <span>gitHub</span>
        </NavigationOptionDiv>
      </NavigationGithubOption>
    </NavigationContainer>
  );
};

export default NavigationItems;

export const NavigationContainer = styled.div`
  padding: 8px 10px 4px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;
