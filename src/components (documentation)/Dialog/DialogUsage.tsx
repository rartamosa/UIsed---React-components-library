import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleDialogExample from "./SingleDialogExample";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const DialogUsage = () => {
  return (
    <>
      {/* usage */}
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>dialog</Code> component:
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="a general Dialog window"
        />
        <CodeSnippet
          language="jsx"
          code={`const [isDialogOpen, setIsDialogOpen] = useState(false);

const onActionLogic = (): void => {
    console.log("Action taken");
    setIsDialogOpen(false);
};
          
const onCancelLogic = (): void => {
    console.log("Action cancelled");
    setIsDialogOpen(false);
  };
          
<Button onClick={() => setIsDialogOpen(true)}>
    Click to see a general dialog window
</Button>

<Dialog
    onAction={onActionLogic}
    onCancel={onCancelLogic}
    isDialogOpen={isDialogOpen}
    dialogHeader="Dialog header"
    dialogBody="Dialog body text"
    actionButtonText="Action button"
    cancelButtonText="Cancel button"
/>`}
        />
      </SingleSection>

      {/* onAction */}
      <SingleSection>
        <SectionSubheader>on action function</SectionSubheader>
        <TextSpan>
          The `onAction` prop is a function that is executed when the user
          clicks the actionButton inside the <Code>Dialog</Code> component.
          clicks the actionButton inside the <Code>Dialog</Code> component.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`const onActionLogic = (): void => {
  console.log("Action taken");
  setIsDialogOpen(false);
};`}
        />
      </SingleSection>

      {/* onCancel */}
      <SingleSection>
        <SectionSubheader>on cancel function</SectionSubheader>
        <TextSpan>
          A function that is called when the cancel button is clicked or the{" "}
          <Code>Dialog</Code> is closed.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`const onCancelLogic = (): void => {
  console.log("Action cancelled");
  setIsDialogOpen(false);
};`}
        />
      </SingleSection>

      {/* isDialogOpen */}
      <SingleSection>
        <SectionSubheader>is Dialog open</SectionSubheader>
        <TextSpan>
          The `isDialogOpen` prop determines whether the <Code>Dialog</Code>{" "}
          component should be rendered or not, and it is typically controlled by
          a state variable in the parent component. onAction and onCancel
          functions should update the state so <Code>Dialog</Code> would render
          or not.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`import { useState } from "react";
const [isDialogOpen, setIsDialogOpen] = useState(false);`}
        />
      </SingleSection>

      {/* dialogHeader */}
      <SingleSection>
        <SectionSubheader>dialog header</SectionSubheader>
        <TextSpan>
          The `dialogHeader` prop is used to specify the text to be displayed in
          the header of the <Code>dialog</Code> window.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Custom dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with custom header"
        />
        <CodeSnippet code={`<Dialog dialogHeader="Custom Dialog header" />`} />
      </SingleSection>

      {/* dialogBody */}
      <SingleSection>
        <SectionSubheader>dialog body</SectionSubheader>
        <TextSpan>
          The `dialogBody` prop is of type string and represents the main text
          content of the <Code>dialog</Code> component.
        </TextSpan>

        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Custom Dialog body text"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with a custom body text"
        />
        <CodeSnippet code={`<Dialog dialogBody="Custom dialog body text" />`} />
      </SingleSection>

      {/* actionButtonText */}
      <SingleSection>
        <SectionSubheader>text of the action button</SectionSubheader>
        <TextSpan>
          The `actionButtonText` prop is a string that sets the text of the
          button used for the main action in the <Code>dialog</Code>.
        </TextSpan>

        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Custom action text"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with a custom action button text"
        />
        <CodeSnippet
          code={`<Dialog actionButtonText="Custom action text" />`}
        />
      </SingleSection>

      {/* cancelButtonText */}
      <SingleSection>
        <SectionSubheader>text of the cancel button</SectionSubheader>
        <TextSpan>
          The `cancelButtonText` prop is a string that specifies the text
          content of the Cancel button in the component.
        </TextSpan>

        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Custom cancel text"
          mainButtonText="Dialog with a custom cancel button text"
        />
        <CodeSnippet
          code={`<Dialog cancelButtonText="Custom cancel text" />`}
        />
      </SingleSection>

      {/* buttonProps */}
      <SingleSection>
        <SectionSubheader>button props</SectionSubheader>
        <TextSpan>
          The `buttonProps` prop is of type <Code>React.CSSProperties</Code> and
          it can be used to pass additional CSS properties to the{" "}
          <Code>ActionButton</Code> and <Code>CancelButton</Code> components.
        </TextSpan>

        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with customized buttons"
          buttonProps={{ backgroundColor: "#A2F8F3", fontSize: "20px" }}
        />
        <CodeSnippet
          code={`<Dialog buttonProps={{ backgroundColor: "#A2F8F3", fontSize: "20px" }} />`}
        />
      </SingleSection>

      {/* actionButtonColor */}
      <SingleSection>
        <SectionSubheader>color of action button</SectionSubheader>
        <TextSpan>
          The `actionButtonColor` prop is used to set the background color of
          the action button in the <Code>dialog</Code> window, and it accepts a
          string value representing a valid CSS color.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with a customized action button"
          actionButtonColor="#8CEE6D"
        />
        <CodeSnippet code={`<Dialog actionButtonColor="#8CEE6D" />`} />
      </SingleSection>

      {/* cancelButtonColor */}
      <SingleSection>
        <SectionSubheader>color of cancel button</SectionSubheader>
        <TextSpan>
          The `cancelButtonColor` prop is used to set the background color of
          the cancel button in the <Code>dialog</Code> window, and it accepts a
          string value representing a valid CSS color.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with a customized cancel button"
          cancelButtonColor="#EC4747"
        />
        <CodeSnippet code={`<Dialog cancelButtonColor="#EC4747" />`} />
      </SingleSection>

      {/* overlayColor */}
      <SingleSection>
        <SectionSubheader>overlay color</SectionSubheader>
        <TextSpan>
          Used to set the background color of the overlay component which is
          shown when the dialog is open.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog with a customized overlay"
          overlayColor="rgba(177, 248, 244, 0.6)"
        />
        <CodeSnippet
          code={`<Dialog overlayColor="rgba(177, 248, 244, 0.6)" />`}
        />
      </SingleSection>

      {/* dialogPosition */}
      <SingleSection>
        <SectionSubheader>dialog position</SectionSubheader>
        <TextSpan>
          specifies the position of the <Code>dialog</Code> window on the screen
          and can be set to one of the nine possible combinations of horizontal
          and vertical position values. The "center" position is not allowed as
          it is the default value.
        </TextSpan>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the top left corner"
            dialogPosition="left-top"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the center top position"
            dialogPosition="center-top"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the top right corner"
            dialogPosition="right-top"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the center left position"
            dialogPosition="left-center"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the center right position"
            dialogPosition="right-center"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the bottom left position"
            dialogPosition="left-bottom"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the bottom center position"
            dialogPosition="center-bottom"
          />
          <SingleDialogExample
            onAction={() => console.log("action taken")}
            onCancel={() => console.log("action cancelled")}
            isDialogOpen={false}
            dialogHeader="Dialog header"
            dialogBody="Dialog body"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
            mainButtonText="Dialog in the bottom right position"
            dialogPosition="right-bottom"
          />
        </div>
        <CodeSnippet
          code={`<Dialog dialogPosition="left-top" />
<Dialog dialogPosition="center-top" />
<Dialog dialogPosition="right-top" />
<Dialog dialogPosition="left-center" />
<Dialog dialogPosition="right-center" />
<Dialog dialogPosition="left-bottom" />
<Dialog dialogPosition="center-bottom" />
<Dialog dialogPosition="right-bottom" />`}
        />
      </SingleSection>

      {/* blockScroll */}
      <SingleSection>
        <SectionSubheader>blocking scroll</SectionSubheader>
        <TextSpan>
          A boolean value that, when set to "true", prevents scrolling of the
          body content while the <Code>dialog</Code> is open.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText="Dialog blocking scrolling"
          blockScroll={true}
        />
        <CodeSnippet code={`<Dialog blockScroll={true} />`} />
      </SingleSection>

      {/* closeOnEsc */}
      <SingleSection>
        <SectionSubheader>closing Dialog on "Esc" key press</SectionSubheader>
        <TextSpan>
          A boolean that determines whether the <Code>dialog</Code> should be
          closed when the "Escape" key is pressed.
        </TextSpan>
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText={`Dialog closing on "Esc" keypress`}
          closeOnEsc={true}
        />
        <CodeSnippet code={`<Dialog closeOnEsc={true} />`} />
      </SingleSection>

      {/* closeOnOverlayClick */}
      <SingleSection>
        <SectionSubheader>closing Dialog on overlay click</SectionSubheader>
        <TextSpan>
          Used to specify whether clicking on the overlay should close the{" "}
          <Code>dialog</Code> or not. Its default value is false, which means
          that clicking on the overlay will close the <Code>dialog</Code>.
        </TextSpan>{" "}
        <SingleDialogExample
          onAction={() => console.log("action taken")}
          onCancel={() => console.log("action cancelled")}
          isDialogOpen={false}
          dialogHeader="Dialog header"
          dialogBody="Dialog body"
          actionButtonText="Action button"
          cancelButtonText="Cancel button"
          mainButtonText={`Dialog closing on clicking overlay`}
          closeOnOverlayClick={true}
        />
        <CodeSnippet code={`<Dialog closeOnOverlayClick={true} />`} />
      </SingleSection>

      <BackToTopComponent />
    </>
  );
};

export default DialogUsage;
