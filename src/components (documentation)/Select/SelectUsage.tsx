import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import Select from "../../components (library)/Select/Select";
import selectDummyData from "../../components (library)/Select/selectDummyData";

import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const SelectUsage = () => {
  return (
    <>
      {/* BASIC */}
      <SingleSection>
        <SectionSubheader>Usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>select</Code> component:
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} />
        </div>

        <CodeSnippet
          language="html"
          code="&lt;Select selectOptions=&#123;selectDummyData&#125; /&gt;"
        />
      </SingleSection>

      {/* PLACEHOLDER */}
      <SingleSection>
        <SectionSubheader>select placeholder</SectionSubheader>
        <TextSpan>
          The <Code>Select</Code> component provides an option to customize the
          placeholder text displayed in the input field, allowing users to
          provide clear and concise guidance on what input is expected.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} placeholder="Hello!" />
        </div>
        <CodeSnippet
          code="&#x3C;Select
        placeholder=&#x22;Hello!&#x22;
      /&#x3E;"
        />
      </SingleSection>

      {/* BORDER */}
      <SingleSection>
        <SectionSubheader>container border</SectionSubheader>
        <TextSpan>
          The <Code>Select</Code> component allows for customization of
          container borders, including color and width, giving developers the
          ability to style the component to match the design of their
          application.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select
            selectOptions={selectDummyData}
            containerBorderColor="#FB8500"
            containerBorderWidth="3px"
          />
        </div>
        <CodeSnippet code="&#x3C;Select containerBorderColor=&#x22;#FB8500&#x22; containerBorderWidth=&#x22;3px&#x22; /&#x3E;" />
      </SingleSection>

      {/* SIZE */}
      <SingleSection>
        <SectionSubheader>size</SectionSubheader>
        <TextSpan>
          The <Code>Select</Code> component can be easily customized to
          accommodate different sizes, making it flexible and adaptable to a
          wide range of design needs.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select
            selectOptions={selectDummyData}
            componentSize="small"
            placeholder="small"
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Select
            selectOptions={selectDummyData}
            componentSize="medium"
            placeholder="medium (default)"
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Select
            selectOptions={selectDummyData}
            componentSize="large"
            placeholder="large"
          />
        </div>
        <CodeSnippet
          code="&#x3C;Select componentSize=&#x22;small&#x22; /&#x3E;
&#x3C;Select componentSize=&#x22;medium&#x22; /&#x3E;
&#x3C;Select componentSize=&#x22;large&#x22; /&#x3E;"
        />
      </SingleSection>

      {/* BACKGROUND COLOR */}
      <SingleSection>
        <SectionSubheader>background color</SectionSubheader>
        <TextSpan>
          Developers can customize the background color of the{" "}
          <Code>Select</Code> component to match their application's color
          scheme, ensuring a consistent and visually pleasing user experience.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} backgroundColor="#FCC0CB" />
        </div>
        <CodeSnippet code="&#x3C;Select backgroundColor=&#x22;#FCC0CB&#x22; /&#x3E;" />
      </SingleSection>

      {/* SHOULD CLOSE ON CLEAR */}
      <SingleSection>
        <SectionSubheader>should close on clear</SectionSubheader>
        <TextSpan>
          The shouldCloseOnClear prop of the <Code>Select</Code> component
          determines whether the dropdown should be closed when the user clears
          the selected option or not. If it's set to true, the dropdown will be
          closed, and if it's set to false, it will remain open.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} shouldCloseOnClear={true} />
        </div>
        <CodeSnippet code="&#x3C;Select shouldCloseOnClear=&#123;true&#125; /&#x3E;" />
      </SingleSection>

      {/* IS DISABLED */}
      <SingleSection>
        <SectionSubheader>disable Select</SectionSubheader>
        <TextSpan>
          The <Code>isDisabled</Code> prop of the <Code>Select</Code> component
          allows developers to disable user interaction with the component,
          preventing users from selecting options or typing into the input
          field, which is useful when input is not required or when the data is
          being loaded.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} isDisabled={true} />
        </div>
        <CodeSnippet code="&#x3C;Select isDisabled=&#123;true&#125; /&#x3E;" />
      </SingleSection>

      {/* ERROR BORDER COLOR */}
      <SingleSection>
        <SectionSubheader>border color on error</SectionSubheader>
        <TextSpan>
          The <Code>Select</Code> component can be customized to show an error
          state by changing the border color to a specified color, providing
          visual feedback to the user that there was an issue with their
          selection.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} errorBorderColor="violet" />
        </div>
        <CodeSnippet code="&#x3C;Select errorBorderColor=&#x22;violet&#x22; /&#x3E;" />
      </SingleSection>

      {/* ICON COLOR */}
      <SingleSection>
        <SectionSubheader>icon color</SectionSubheader>
        <TextSpan>
          The icon color of the <Code>Select</Code> component can be customized
          to match the overall style of the user interface.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} iconColor="#2338E9" />
        </div>
        <CodeSnippet code="&#x3C;Select iconColor=&#x22;#2338E9&#x22; /&#x3E;" />
      </SingleSection>

      {/* CUSTOM ICON */}
      <SingleSection>
        <SectionSubheader>custom icon</SectionSubheader>
        <TextSpan>
          The <Code>Select</Code> component allows for customization of its icon
          by specifying a custom icon name from the FontAwesome icon library.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <Select selectOptions={selectDummyData} customIcon="sun" />
        </div>
        <CodeSnippet code="&#x3C;Select customIcon=&#x22;sun&#x22; /&#x3E;" />
      </SingleSection>

      <BackToTopComponent />
    </>
  );
};

export default SelectUsage;
