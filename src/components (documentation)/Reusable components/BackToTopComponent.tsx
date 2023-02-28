import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { BackToTopContainer, BackToTop } from "./reusableComponentsStyles";

library.add(fas, faAnglesUp);

const BackToTopComponent = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BackToTopContainer onClick={handleScroll}>
      <BackToTop>back to top</BackToTop>
      <FontAwesomeIcon icon={["fas", "angles-up"]} />
    </BackToTopContainer>
  );
};

export default BackToTopComponent;
