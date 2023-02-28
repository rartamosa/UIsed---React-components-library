import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { SingleSection } from "../Overview/overviewStyles";
import { SinglePropProps } from "./reusableComponentsTypes";
import {
  PropName,
  PropDescriptionContainer,
  PropDescriptionLine,
  Key,
  CodeFont,
} from "./reusableComponentsStyles";

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
