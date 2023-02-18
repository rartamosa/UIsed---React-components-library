import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  SingleSection,
  SectionHeader,
  TextSpan,
} from "../Overview/overviewStyles";
import { GithubButtonContainer, Button } from "../../pages/pagesStyles";
import { ComponentPageProps } from "./reusableComponentsTypes";

library.add(fab, faGithub);

const ComponentPage = ({
  componentName,
  componentDescription,
  githubLink,
}: ComponentPageProps) => {
  return (
    <>
      <SingleSection>
        <SectionHeader>{componentName}</SectionHeader>
        <TextSpan>{componentDescription}</TextSpan>
      </SingleSection>

      <GithubButtonContainer href={githubLink} target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} color="#fff" />
        <Button>gitHub</Button>
      </GithubButtonContainer>
    </>
  );
};

export default ComponentPage;
