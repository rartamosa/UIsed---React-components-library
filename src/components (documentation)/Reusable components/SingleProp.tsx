import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { SingleSection } from "../Overview/overviewStyles";
import { ORANGE_COLOR } from "../../utils/commons";
import { SinglePropProps } from "./reusableComponentsTypes";

library.add(fas, faCheck, faMinus);

const SingleProp = ({
  propName,
  description,
  type,
  isRequired,
  defaultValue,
}: SinglePropProps) => {
  return (
    <SingleSection>
      <PropName>{propName}</PropName>
      <PropDescriptionContainer>
        <PropDescriptionLine>
          <Key>description</Key>
          <span>{description}</span>
        </PropDescriptionLine>
        <PropDescriptionLine>
          <Key>type</Key>
          <CodeFont>{type}</CodeFont>
        </PropDescriptionLine>
        <PropDescriptionLine>
          <Key>is required?</Key>
          {isRequired ? (
            <FontAwesomeIcon icon={["fas", "check"]} />
          ) : (
            <FontAwesomeIcon icon={["fas", "minus"]} />
          )}
        </PropDescriptionLine>
        {defaultValue && (
          <PropDescriptionLine>
            <Key>default value</Key>
            <CodeFont>{defaultValue}</CodeFont>
          </PropDescriptionLine>
        )}
      </PropDescriptionContainer>
    </SingleSection>
  );
};

export default SingleProp;

const PropName = styled.span`
  font-family: Courier Prime;
  color: ${ORANGE_COLOR};
  border-bottom: 1px solid;
  padding-bottom: 5px;
`;

export const PropDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PropDescriptionLine = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 220px 1fr;
  }
`;

export const Key = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const CodeFont = styled.span`
  font-family: Courier Prime;
`;
