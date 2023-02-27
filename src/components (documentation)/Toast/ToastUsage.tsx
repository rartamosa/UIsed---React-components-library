// @ts-ignore
import uniqid from "uniqid";
import styled from "styled-components";

import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

import useToast from "../../components (library)/Toast/useToast";
import SingleToastExample from "./SingleToastExample";

const ToastUsage = () => {
  const [toastList, onToastAdd, onToastRemove] = useToast(3000);
  const [toastList2, onToastAdd2, onToastRemove2] = useToast(3000);
  const [toastList3, onToastAdd3, onToastRemove3] = useToast(3000);
  const [toastList4, onToastAdd4, onToastRemove4] = useToast(3000);
  const [toastList5, onToastAdd5, onToastRemove5] = useToast(3000);
  const [toastList6, onToastAdd6, onToastRemove6] = useToast(3000);

  return (
    <>
      {/* <SingleToastExample /> */}
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>toast</Code> component:
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="generic (success) Toast"
          toastHeader="Example Toast header"
          id={uniqid()}
        />
        <CodeSnippet
          language="jsx"
          code={`import useToast from "../xyz";

const [toastList, onToastAdd, onToastRemove] = useToast(30000);

<Button
    onClick={() =>
    onToastAdd({
        toastHeader: "Example toast header",
        // typeOfToast="warning" || "info" || "error",
    })
}>
Generate basic toast
</Button>
<Toast
    toastList={toastList}
    onToastRemove={onToastRemove}
/>`}
        />
      </SingleSection>

      {/* useToast hook */}
      <SingleSection>
        <SectionSubheader>the useToast hook</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>useToast</SecondaryCode> hook is a custom React
          hook that provides a way for developers to manage a list of{" "}
          <Code>toast</Code> notifications in their React applications. The hook
          returns an array of three items:
        </TextSpan>

        <TextSpan>
          <ul>
            <li>
              <SecondaryCode>toastList</SecondaryCode>: an array of{" "}
              <SecondaryCode>SingleToastProps</SecondaryCode> objects
              representing the list of toast notifications.
            </li>
            <li>
              <SecondaryCode>onToastAdd</SecondaryCode>: a function that accepts
              a <SecondaryCode>ToastToAdd</SecondaryCode> object and adds it to
              the <SecondaryCode>toastList</SecondaryCode>.
            </li>
            <li>
              <SecondaryCode>onToastRemove</SecondaryCode>: a function that
              accepts the ID of a toast notification and removes it from the{" "}
              <SecondaryCode>toastList</SecondaryCode>.
            </li>
          </ul>
        </TextSpan>

        <TextSpan>
          The <SecondaryCode>useToast</SecondaryCode> hook makes use of the
          useState and useEffect hooks to manage the state of the toast
          notifications. The useState hook initializes the{" "}
          <SecondaryCode>toastList</SecondaryCode> state to an empty array. The
          useEffect hook is used to set up an interval that checks for the first
          toast notification in the list every timeout milliseconds. If there is
          a toast notification, the <SecondaryCode>onToastRemove</SecondaryCode>{" "}
          function is called to remove it from the list.
        </TextSpan>

        <TextSpan>
          The <SecondaryCode>onToastAdd</SecondaryCode> function adds a new
          toast notification to the <SecondaryCode>toastList</SecondaryCode>{" "}
          array. It does this by spreading the existing array and adding a new
          SingleToastProps object with a unique ID. onToastAdd function has to
          be called within a trigger (e.g. onClick in a button).
        </TextSpan>

        <TextSpan>
          The <SecondaryCode>onToastRemove</SecondaryCode> function sets the
          isUnmounting property of the toast notification with the given ID to
          true. This is used to trigger a CSS animation that fades out the toast
          notification. After provided timeout, the toast notification is
          removed from the <SecondaryCode>toastList</SecondaryCode> array using
          the filter method.
        </TextSpan>

        <TextSpan>
          Overall, the <SecondaryCode>useToast</SecondaryCode> hook provides a
          simple and reusable way to manage toast notifications in a React
          application, and can be easily customized to meet the needs of
          different applications.
        </TextSpan>

        <CodeSnippet
          language="jsx"
          code={`const [toastList, onToastAdd, onToastRemove] = useToast(3000);
// to call the useToast function, developer has to provide timeout (in milliseconds) as an argument
<Button
    onClick={() =>
    onToastAdd({
        toastHeader: "Example toast header",
    })
}>
        Example button text
</Button>
<Toast
    toastList={toastList}
    onToastRemove={onToastRemove}
/>`}
        />
      </SingleSection>

      {/* toastHeader */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - toastHeader
        </SectionSubheader>
        <TextSpan>
          The purpose of this prop is to specify the title or header text that
          appears at the top of the <Code>Toast</Code> component. Therefore,
          when using the <SecondaryCode>toastHeader</SecondaryCode> prop, you
          should provide a string value that represents the header text you want
          to display.
        </TextSpan>

        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with custom header"
          toastHeader="Custom toast header"
          id={uniqid()}
        />

        <CodeSnippet
          language="jsx"
          code={`<Button
    onClick={() => onToastAdd({
        toastHeader: "Custom toast header",
    })
}>
Generate toast
</Button>
<Toast
    toastList={toastList}
    onToastRemove={onToastRemove}
/>`}
        />
      </SingleSection>

      {/* typeOfToast */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - typeOfToast
        </SectionSubheader>
        <TextSpan>
          The <SecondaryCode>typeOfToast</SecondaryCode> prop is used to specify
          the type of <Code>toast</Code>, which determines the color and icon of
          the <Code>toast</Code>.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="warning Toast"
          toastHeader="Example warning Toast"
          id={uniqid()}
          typeOfToast="warning"
        />

        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="info Toast"
          toastHeader="Example info Toast"
          id={uniqid()}
          typeOfToast="info"
        />

        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="error Toast"
          toastHeader="Example error Toast"
          id={uniqid()}
          typeOfToast="error"
        />

        <CodeSnippet
          language="jsx"
          code={`<Button
    onClick={() => onToastAdd({
        toastHeader: "Custom toast header",
        typeOfToast="warning" // or "info" or "error"
    })
}>
Generate toast
</Button>
<Toast
    toastList={toastList}
    onToastRemove={onToastRemove}
/>`}
        />
      </SingleSection>

      {/* toastDescription */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - toastDescription
        </SectionSubheader>
        <TextSpan>
          Used to provide a description or additional information about the{" "}
          <Code>toast</Code> message being added. Developers can pass a string
          value to this prop when creating a new <Code>toast</Code> message to
          be displayed. If this prop is not provided, the <Code>toast</Code>{" "}
          message will be displayed without a description.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with description"
          toastHeader="Toast header"
          id={uniqid()}
          toastDescription="Example toast description"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          toastDescription="Example toast description"
     })
  }>
  Toast with description
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* size */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - size
        </SectionSubheader>
        <TextSpan>
          The "size" prop in the code refers to the size of the{" "}
          <Code>toast</Code> component. It is an optional prop of type "string"
          with a default value of "medium". Developers can pass in a string
          value of "small", "medium" or "large" to change the size of the{" "}
          <Code>toast</Code> component accordingly.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="small Toast"
          toastHeader="Toast header"
          id={uniqid()}
          size="small"
        />
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="medium Toast (default)"
          toastHeader="Toast header"
          id={uniqid()}
          size="medium"
        />
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="large Toast"
          toastHeader="Toast header"
          id={uniqid()}
          size="large"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          size="small" // or "large" or "medium" (default)
    })
  }>
  Toast with description
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* boxShadow */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - boxShadow
        </SectionSubheader>
        <TextSpan>
          If a developer wants to add a box shadow effect to the{" "}
          <SecondaryCode>SingleToast</SecondaryCode> component, they can pass
          the boolean prop <SecondaryCode>boxShadow</SecondaryCode> as true. On
          the other hand, if they don't want to include a box shadow, they can
          pass the prop as false or leave it out altogether, as the default
          value is false.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with box shadow"
          toastHeader="Toast header"
          id={uniqid()}
          boxShadow={true}
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          boxShadow: true,
    })
  }>
  Toast with box shadow
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* toastIcon */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - toastIcon
        </SectionSubheader>
        <TextSpan>
          The <SecondaryCode>toastIcon</SecondaryCode> prop in the code only
          accepts icon names from the Font Awesome library. The icon name should
          be passed as a string value to the{" "}
          <SecondaryCode>toastIcon</SecondaryCode> prop, for example, "check" or
          "sun".
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with custom icon"
          toastHeader="Toast header"
          id={uniqid()}
          toastIcon="sun"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          toastIcon: "sun",
    })
  }>
  Toast with custom icon
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* iconColor */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - iconColor
        </SectionSubheader>
        <TextSpan>
          Allows developers to change the color of the font-awesome icon that
          appears in the <Code>toast</Code>. Developers can pass a valid CSS
          color value to the <SecondaryCode>iconColor</SecondaryCode> prop,
          which will override the default color of the icon.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with custom icon color"
          toastHeader="Toast header"
          id={uniqid()}
          iconColor="#065207"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          iconColor: "#065207",
    })
  }>
  Toast with custom icon color
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* toastBacgroundColor */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - toastBacgroundColor
        </SectionSubheader>
        <TextSpan>
          Allows the developer to set the background color of the{" "}
          <Code>toast</Code> component. It accepts a string value representing
          the color in any valid CSS color format such as hex codes, RGB or RGBA
          values, or color names.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with custom background color"
          toastHeader="Toast header"
          id={uniqid()}
          toastBacgroundColor="#14A4A1"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          toastBacgroundColor: "#14A4A1",
    })
  }>
  Toast with custom background color
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* toastFontColor */}
      <SingleSection>
        <SectionSubheader>
          button or any other trigger props - toastFontColor
        </SectionSubheader>
        <TextSpan>
          The <SecondaryCode>toastFontColor</SecondaryCode> prop can be used to
          set the font color of the <Code>toast</Code> message. By default, the
          font color is set to white. To customize the font color, a developer
          can pass a string value to the{" "}
          <SecondaryCode>toastFontColor</SecondaryCode> prop. For example, if a
          developer wants to set the font color to black, they can pass the
          string value "black" to the{" "}
          <SecondaryCode>toastFontColor</SecondaryCode> prop.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with custom font color"
          toastHeader="Toast header"
          id={uniqid()}
          toastFontColor="#FEB627"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
          toastFontColor: "#FEB627",
    })
  }>
  Toast with custom font color
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
  />`}
        />
      </SingleSection>

      {/* animationType */}
      <SingleSection>
        <SectionSubheader>animation type</SectionSubheader>
        <TextSpan>
          Allows the developer to specify the type of animation used to display
          the <Code>toast</Code> message. The prop accepts one of three values:
          "fade", "grow", or "slide". The "fade" value will cause the{" "}
          <Code>toast</Code> to appear and disappear with a fade-in/fade-out
          effect, "grow" will cause the <Code>toast</Code> to expand and then
          contract, while "slide" will cause the <Code>toast</Code> to slide in
          and out of view.
        </TextSpan>
        <SingleToastExample
          toastList={toastList}
          onToastRemove={onToastRemove}
          onToastAdd={onToastAdd}
          mainButtonText="Toast with grow animation type"
          toastHeader="Toast header"
          id={uniqid()}
          animationType="slide"
        />
        <CodeSnippet
          language="jsx"
          code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
    })
  }>
  Toast with grow animation type
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
      animationType="fade" // or "grow" or "slide"
  />`}
        />
      </SingleSection>

      {/* toastsPosition */}
      <SingleSection>
        <SectionSubheader>toasts position</SectionSubheader>
        <TextSpan>
          The <SecondaryCode>toastsPosition</SecondaryCode> prop allows the
          developer to specify the position where the <Code>toasts</Code> should
          appear on the screen. This prop accepts one of the following values:
          "bottom-center", "bottom-left", "bottom-right", "top-center",
          "top-left", or "top-right". The default value is "bottom-center". The
          developer can choose the appropriate position depending on the layout
          of their application.
        </TextSpan>
      </SingleSection>
      <SingleToastExample
        toastList={toastList2}
        onToastRemove={onToastRemove2}
        onToastAdd={onToastAdd2}
        mainButtonText="Toast with bottom-left position"
        toastHeader="Toast header"
        id={uniqid()}
        toastsPosition="bottom-left"
      />
      <SingleToastExample
        toastList={toastList3}
        onToastRemove={onToastRemove3}
        onToastAdd={onToastAdd3}
        mainButtonText="Toast with bottom-right position"
        toastHeader="Toast header"
        id={uniqid()}
        toastsPosition="bottom-right"
      />
      <SingleToastExample
        toastList={toastList4}
        onToastRemove={onToastRemove4}
        onToastAdd={onToastAdd4}
        mainButtonText="Toast with top-center position"
        toastHeader="Toast header"
        id={uniqid()}
        toastsPosition="top-center"
      />
      <SingleToastExample
        toastList={toastList5}
        onToastRemove={onToastRemove5}
        onToastAdd={onToastAdd5}
        mainButtonText="Toast with top-left position"
        toastHeader="Toast header"
        id={uniqid()}
        toastsPosition="top-left"
      />
      <SingleToastExample
        toastList={toastList6}
        onToastRemove={onToastRemove6}
        onToastAdd={onToastAdd6}
        mainButtonText="Toast with top-right position"
        toastHeader="Toast header"
        id={uniqid()}
        toastsPosition="top-right"
      />
      <CodeSnippet
        language="jsx"
        code={`<Button
      onClick={() => onToastAdd({
          toastHeader: "Toast header",
    })
  }>
  Toast with custom position
  </Button>
  <Toast
      toastList={toastList}
      onToastRemove={onToastRemove}
      toastsPosition="bottom-center"
      // "bottom-center" is default, other options are: "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right"
  />`}
      />

      <BackToTopComponent />
    </>
  );
};

export default ToastUsage;

export const SecondaryCode = styled(Code)`
  text-transform: unset;
  color: inherit;
`;
