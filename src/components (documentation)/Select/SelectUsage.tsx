import styled from "styled-components";

import { ORANGE_COLOR } from "../../utils/commons";
import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import Select from "../../components (library)/Select/Select";
import selectDummyData from "../../components (library)/Select/selectDummyData";

import CodeSnippet from "../Reusable components/CodeSnippet";

const SelectUsage = () => {
  return (
    <SingleSection>
      <SectionSubheader>Usage</SectionSubheader>
      <TextSpan>
        Here's a basic usage example of the <Code>select</Code> component:
      </TextSpan>
      <div style={{ alignSelf: "center" }}>
        <Select selectOptions={selectDummyData} shouldCloseOnClear={false} />
      </div>

      <CodeSnippet
        language="html"
        code="&lt;Select selectOptions=&#123;selectDummyData&#125; shouldCloseOnClear=&#123;false&#125; /&gt;"
      />
    </SingleSection>
  );
};

export default SelectUsage;

export const Code = styled.span`
  font-family: Courier Prime;
  color: ${ORANGE_COLOR};
  text-transform: capitalize;
`;
