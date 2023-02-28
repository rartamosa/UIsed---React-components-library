import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";
import SingleAccordionExample from "./SingleAccordionExample";
import accordionDummyData from "../../components (library)/Accordion/AccordionDummyData";
import { SecondaryCode } from "../Toast/ToastUsage";

const AccordionUsage = () => {
  return (
    <>
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>accordion</Code> component:
        </TextSpan>
        <SingleAccordionExample accordionBody={accordionDummyData} />
        <CodeSnippet
          code={`<Accordion accordionBody={accordionDummyData} />`}
        />
      </SingleSection>

      {/* accordionBody */}
      <SingleSection>
        <SectionSubheader>accordion body</SectionSubheader>
        <TextSpan>
          To use the <Code>Accordion</Code> component, developers should pass an
          array of <SecondaryCode>AccordionData</SecondaryCode> objects to the
          accordionBody prop. Each <SecondaryCode>AccordionData</SecondaryCode>{" "}
          object should have an id, a title, and a children property. The id
          property is a unique string that identifies the <Code>accordion</Code>{" "}
          item. The title property is a string that represents the title of the{" "}
          <Code>accordion</Code> item. The children property is a function that
          returns a JSX element or an array of JSX elements that represent the
          content of the <Code>accordion</Code> item.
        </TextSpan>
        <TextSpan>
          Additionally, the <SecondaryCode>AccordionData</SecondaryCode> object
          may also have an optional subtitle property, which is a string that
          represents a subtitle for the <Code>accordion</Code> item, and an
          optional disabled property, which is a boolean that indicates whether
          the <Code>accordion</Code> item should be disabled.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`const accordionDummyData: AccordionData[] = [
    {
        id: uniqid(),
        children: DummyComponent,
        title: "Example title1",
        subtitle: "Example subtitle",
        disabled: false,
    },
    {
        id: uniqid(),
        children: DummyComponent,
        title: "Example title2",
    },
    {
        id: uniqid(),
        children: DummyComponent,
        title: "Example title3",
        disabled: true,
    },
];`}
        />
      </SingleSection>

      {/* show */}
      <SingleSection>
        <SectionSubheader>show single or many Accordions</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>show</SecondaryCode> prop allows the developer to
          specify whether to display only one <Code>accordion</Code> item at a
          time or multiple items at once. By default, only one item is displayed
          at a time. To display multiple items at once, set the{" "}
          <SecondaryCode>show</SecondaryCode> prop to "many". To display only
          one item at a time, set the <SecondaryCode>show</SecondaryCode> prop
          to "single".
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          show="many"
        />
        <CodeSnippet
          code={`<Accordion
    show="many"
/>`}
        />
      </SingleSection>

      {/* accordionBodyHeight */}
      <SingleSection>
        <SectionSubheader>accordion body height</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>accordionBodyHeight</SecondaryCode> prop allows the
          developer to set a custom height for the <Code>accordion</Code> body.
          It accepts a string value with any valid CSS unit, such as "px" or
          "rem". If this prop is not set, the height will be set to 100px.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          accordionBodyHeight="500px"
        />
        <CodeSnippet
          code={`<Accordion
    accordionBodyHeight="500px"
/>`}
        />
      </SingleSection>

      {/* scroll */}
      <SingleSection>
        <SectionSubheader>allow/disable scrolling</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>scroll</SecondaryCode> prop in the{" "}
          <Code>Accordion</Code> component is a boolean flag that controls
          whether the component's body should be scrollable or not. By default,
          the value is <SecondaryCode>true</SecondaryCode>.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          scroll={false}
        />
        <CodeSnippet
          code={`<Accordion
    scroll={false}
/>`}
        />
      </SingleSection>

      {/* defaultIndex */}
      <SingleSection>
        <SectionSubheader>default index</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>defaultIndex</SecondaryCode> prop is used to
          specify the default index of the <Code>accordion</Code> item that
          should be expanded on load. It can be set to either 0 or a specific
          index number. The type of this prop is a union of 0 and number,
          meaning it can only accept values of either 0 or a number. It
          corresponds with the <SecondaryCode>show="single"</SecondaryCode>{" "}
          prop.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          defaultIndex={0}
        />
        <CodeSnippet
          code={`<Accordion
    defaultIndex={0}
/>`}
        />
      </SingleSection>

      {/* defaultIndexes */}
      <SingleSection>
        <SectionSubheader>default indexes</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>defaultIndexes</SecondaryCode> prop is an optional
          prop that allows you to set an array of default indexes of the
          expanded <Code>accordion</Code> items when the component is initially
          rendered. The prop is of type <SecondaryCode>number[]</SecondaryCode>{" "}
          which means it should be an array of numbers representing the indexes
          of the <Code>accordion</Code> items to be expanded. It corresponds
          with the <SecondaryCode>show="many"</SecondaryCode> prop.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          show="many"
          defaultIndexes={[0, 1]}
        />
        <CodeSnippet
          language="jsx"
          code={`<Accordion
    show="many"
    defaultIndexes={[0, 1]}
/>`}
        />
      </SingleSection>

      {/* disabled */}
      <SingleSection>
        <SectionSubheader>disable Accordion</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>disabled</SecondaryCode> prop is used to disable
          specific <Code>accordion</Code> items. It accepts a boolean value and
          is defined within each object of the{" "}
          <SecondaryCode>accordionBody</SecondaryCode> prop. If set to true, the
          corresponding <Code>accordion</Code> item will be disabled and cannot
          be opened or closed by the user.
        </TextSpan>
        <SingleAccordionExample accordionBody={accordionDummyData} />
        <CodeSnippet
          language="js"
          code={`const accordionDummyData: AccordionData[] = [
    {
        id: uniqid(),
        children: DummyComponent,
        title: "Example title3",
        disabled: true,
    },
];`}
        />
      </SingleSection>

      {/* iconColor */}
      <SingleSection>
        <SectionSubheader>icon color</SectionSubheader>
        <TextSpan>
          Used to set the color of the icons displayed in the{" "}
          <Code>accordion</Code> component. To use it, simply pass a string
          value representing the desired color to the prop when rendering the
          component. The default value is black.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          iconColor="#F727FE"
        />
        <CodeSnippet
          code={`<Accordion
    iconColor="#F727FE"
/>`}
        />
      </SingleSection>

      {/* customIconClosed */}
      <SingleSection>
        <SectionSubheader>custom icon of a closed Accordion</SectionSubheader>
        <TextSpan>
          Used to specify a custom icon to be displayed when an{" "}
          <Code>accordion</Code> panel is closed. The value of the prop should
          be an icon name from the Font Awesome icon library. If not specified,
          the default arrow-down icon will be used.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          customIconClosed="sun"
        />
        <CodeSnippet
          code={`<Accordion
    customIconClosed="sun"
/>`}
        />
      </SingleSection>

      {/* customIconExpanded */}
      <SingleSection>
        <SectionSubheader>custom icon of an open Accordion</SectionSubheader>
        <TextSpan>
          Used to specify a custom icon to be displayed when an{" "}
          <Code>accordion</Code> panel is open. The value of the prop should be
          an icon name from the Font Awesome icon library. If not specified, the
          default arrow-up icon will be used.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          customIconExpanded="sun"
        />
        <CodeSnippet
          code={`<Accordion
    customIconExpanded="sun"
/>`}
        />
      </SingleSection>

      {/* containerBackgroundColor */}
      <SingleSection>
        <SectionSubheader>container background color</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>containerBackgroundColor</SecondaryCode> prop sets
          the background color of the <Code>accordion</Code> container. It
          accepts a string value representing a CSS color, such as "red",
          "#FF0000", or "rgb(255, 0, 0)".
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          containerBackgroundColor="#82F4F7"
        />
        <CodeSnippet
          code={`<Accordion
    containerBackgroundColor="#82F4F7"
/>`}
        />
      </SingleSection>

      {/* accordionBackgroundColor */}
      <SingleSection>
        <SectionSubheader>accordion background color</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>accordionBackgroundColor</SecondaryCode> prop is
          used to set the background color of the <Code>accordion</Code>. The
          prop takes a string value that represents the color. If the prop is
          not provided, the default value of "#FFF" (white) is used. Developers
          can set the value to any valid CSS color value, such as hexadecimal,
          RGB, or color name.
        </TextSpan>
        <SingleAccordionExample
          accordionBody={accordionDummyData}
          accordionBackgroundColor="#82F4F7"
        />
        <CodeSnippet
          code={`<Accordion
    accordionBackgroundColor="#82F4F7"
/>`}
        />
      </SingleSection>

      <BackToTopComponent />
    </>
  );
};

export default AccordionUsage;
