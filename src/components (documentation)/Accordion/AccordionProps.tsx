import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";
import CodeSnippet from "../Reusable components/CodeSnippet";

const AccordionProps = () => {
  return (
    <>
      <SingleSection>
        <SectionSubheader>Props</SectionSubheader>
        <TextSpan>
          The component provides several props for customizing its appearance
          and behavior.
        </TextSpan>
      </SingleSection>

      <SingleProp
        propName="accordionBody"
        description="An array of AccordionData objects."
        type="AccordionData[]"
        isRequired={true}
      />
      <CodeSnippet
        language="ts"
        code={`export type AccordionData = {
    id: string;
    children: () => JSX.Element | JSX.Element[];
    title: string;
    subtitle?: string;
    disabled?: boolean;
};`}
      />

      <SingleProp
        propName="show"
        description="Allows the developer to specify whether to display only one Accordion item at a time or multiple items at once."
        type={`"single" | "many"`}
        isRequired={false}
        defaultValue={`"single"`}
      />

      <SingleProp
        propName="accordionBodyHeight"
        description="Allows the developer to set a custom height for the Accordion body."
        type="string"
        isRequired={false}
        defaultValue="100px"
      />

      <SingleProp
        propName="scroll"
        description="A boolean flag that controls whether the component's body should be scrollable or not."
        type="boolean"
        isRequired={false}
        defaultValue="true"
      />

      <SingleProp
        propName="defaultIndex"
        description={`Used to specify the default index of the Accordion item that should be expanded on load. It corresponds with the show="single" prop."`}
        type={`0 | number`}
        isRequired={false}
      />

      <SingleProp
        propName="defaultIndexes"
        description={`Allows to set an array of default indexes of the expanded Accordion items when the component is initially rendered. It corresponds with the show="many" prop.`}
        type="number[]"
        isRequired={false}
      />

      <SingleProp
        propName="disabled"
        description="Used to disable specific Accordion items."
        type="boolean"
        isRequired={false}
      />

      <SingleProp
        propName="iconColor"
        description="Used to set the color of the icons displayed in the accordion component."
        type="string"
        isRequired={false}
        defaultValue="rgb(10, 25, 41)"
      />

      <SingleProp
        propName="customIconClosed"
        description="Used to specify a custom icon to be displayed when an accordion panel is closed."
        type="IconName"
        isRequired={false}
        defaultValue="chevron-down"
      />

      <SingleProp
        propName="customIconExpanded"
        description="Used to specify a custom icon to be displayed when an accordion panel is open."
        type="IconName"
        isRequired={false}
        defaultValue="chevron-up"
      />

      <SingleProp
        propName="containerBackgroundColor"
        description="Sets the background color of the accordion container."
        type="string"
        isRequired={false}
        defaultValue="#e2e2e2"
      />

      <SingleProp
        propName="accordionBackgroundColor"
        description="Used to set the background color of the accordion."
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <BackToTopComponent />
    </>
  );
};

export default AccordionProps;
