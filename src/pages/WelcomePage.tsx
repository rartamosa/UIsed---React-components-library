import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { LogoThumbnail } from "../components (documentation)/Navigation/MobileNavigationHeader";
import Background from "../components (documentation)/Background/Background";
import {
  WelcomeContainer,
  Container,
  ItemsContainer,
  Logo,
  Slogan,
  ButtonsContainer,
  SingleButtonContainer,
  Button,
  GithubButtonContainer,
} from "./pagesStyles";

library.add(fas, fab, faArrowRight, faGithub);

const WelcomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const onStart = () => {
    navigate("/uised");
  };

  return (
    <WelcomeContainer>
      <LogoThumbnail
        src={process.env.PUBLIC_URL + "/assets/UIsed _logo_thumbnail.png"}
      />
      <Container>
        <ItemsContainer>
          <Logo src={process.env.PUBLIC_URL + "/assets/UIsed_logo.png"} />
          <Slogan>Streamline your development process with UIsed</Slogan>
          <ButtonsContainer>
            <SingleButtonContainer onClick={onStart}>
              <Button>get started</Button>
              <FontAwesomeIcon icon={["fas", "arrow-right"]} color="#fff" />
            </SingleButtonContainer>
            <GithubButtonContainer
              href="https://github.com/rartamosa/React-UI-components/tree/master/src/components"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} color="#fff" />
              <Button>gitHub</Button>
            </GithubButtonContainer>
          </ButtonsContainer>
        </ItemsContainer>
      </Container>
      <Background />
    </WelcomeContainer>
  );
};

export default WelcomePage;
