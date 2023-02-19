import { useState } from "react";

import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import { Button } from "../../components (library)/Basic Components/Buttons";
import Dialog from "../../components (library)/Dialog/Dialog";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const DialogUsage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onActionLogic = (): void => {
    console.log("Action taken");
    setIsDialogOpen(false);
  };

  const onCancelLogic = (): void => {
    console.log("Action cancelled");
    setIsDialogOpen(false);
  };

  return (
    <>
      {/* usage */}
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>dialog</Code> component:
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see a general <Code>dialog</Code> window
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action button"
            cancelButtonText="Cancel button"
          />
        </div>
        <CodeSnippet
          language="jsx"
          code="const [isDialogOpen, setIsDialogOpen] = useState(false);

          const onActionLogic = (): void =&#x3E; {
            console.log(&#x22;Action taken&#x22;);
            setIsDialogOpen(false);
          };
          
          const onCancelLogic = (): void =&#x3E; {
            console.log(&#x22;Action cancelled&#x22;);
            setIsDialogOpen(false);
          };
          
          &#x3C;Button onClick={() =&#x3E; setIsDialogOpen(true)}&#x3E;
  Click to see a general dialog window
&#x3C;/Button&#x3E;
&#x3C;Dialog
  onAction={onActionLogic}
  onCancel={onCancelLogic}
  isDialogOpen={isDialogOpen}
  dialogHeader=&#x22;Dialog header&#x22;
  dialogBody=&#x22;Dialog body text&#x22;
  actionButtonText=&#x22;Action button&#x22;
  cancelButtonText=&#x22;Cancel button&#x22;
/&#x3E;"
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
          code="const onActionLogic = (): void =&#x3E; {
            console.log(&#x22;Action taken&#x22;);
            setIsDialogOpen(false);
          };"
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
          code="const onCancelLogic = (): void =&#x3E; {
            console.log(&#x22;Action cancelled&#x22;);
            setIsDialogOpen(false);
          };"
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
          code="import { useState } from &#x22;react&#x22;;
          const [isDialogOpen, setIsDialogOpen] = useState(false);"
        />
      </SingleSection>

      {/* dialogHeader */}
      <SingleSection>
        <SectionSubheader>dialog header</SectionSubheader>
        <TextSpan>
          The `dialogHeader` prop is used to specify the text to be displayed in
          the header of the <Code>dialog</Code> window.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a custom header
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Custom Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action button"
            cancelButtonText="Cancel text"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog dialogHeader=&#x22;Custom Dialog header&#x22; /&#x3E;" />
      </SingleSection>

      {/* dialogBody */}
      <SingleSection>
        <SectionSubheader>dialog body</SectionSubheader>
        <TextSpan>
          The `dialogBody` prop is of type string and represents the main text
          content of the <Code>dialog</Code> component.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a custom body text
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Custom dialog body text"
            actionButtonText="Action button"
            cancelButtonText="Cancel text"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog dialogBody=&#x22;Custom dialog body text&#x22; /&#x3E;" />
      </SingleSection>

      {/* actionButtonText */}
      <SingleSection>
        <SectionSubheader>text of the action button</SectionSubheader>
        <TextSpan>
          The `actionButtonText` prop is a string that sets the text of the
          button used for the main action in the <Code>dialog</Code>.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a custom action button text
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Custom action text"
            cancelButtonText="Cancel text"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog actionButtonText=&#x22;Custom action text&#x22; /&#x3E;" />
      </SingleSection>

      {/* cancelButtonText */}
      <SingleSection>
        <SectionSubheader>text of the cancel button</SectionSubheader>
        <TextSpan>
          The `cancelButtonText` prop is a string that specifies the text
          content of the Cancel button in the component.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a custom cancel button text
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action text"
            cancelButtonText="Custom cancel button"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog cancelButtonText=&#x22;Custom cancel button&#x22; /&#x3E;" />
      </SingleSection>

      {/* buttonProps */}
      <SingleSection>
        <SectionSubheader>button props</SectionSubheader>
        <TextSpan>
          The `buttonProps` prop is of type <Code>React.CSSProperties</Code> and
          it can be used to pass additional CSS properties to the{" "}
          <Code>ActionButton</Code> and <Code>CancelButton</Code> components.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with customized buttons
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action text"
            cancelButtonText="Cancel text"
            buttonProps={{ backgroundColor: "#A2F8F3", fontSize: "20px" }}
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog buttonProps={{ backgroundColor: &#x22;#A2F8F3&#x22;, fontSize: &#x22;20px&#x22; }} /&#x3E;" />
      </SingleSection>

      {/* actionButtonColor */}
      <SingleSection>
        <SectionSubheader>color of action button</SectionSubheader>
        <TextSpan>
          The `actionButtonColor` prop is used to set the background color of
          the action button in the <Code>dialog</Code> window, and it accepts a
          string value representing a valid CSS color.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a customized action button
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action text"
            cancelButtonText="Cancel text"
            actionButtonColor="#8CEE6D"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog actionButtonColor=&#x22;#8CEE6D&#x22; /&#x3E;" />
      </SingleSection>

      {/* cancelButtonColor */}
      <SingleSection>
        <SectionSubheader>color of cancel button</SectionSubheader>
        <TextSpan>
          The `cancelButtonColor` prop is used to set the background color of
          the cancel button in the <Code>dialog</Code> window, and it accepts a
          string value representing a valid CSS color.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => setIsDialogOpen(true)}>
            Click to see <Code>dialog</Code> with a customized cancel button
          </Button>
          <Dialog
            onAction={onActionLogic}
            onCancel={onCancelLogic}
            isDialogOpen={isDialogOpen}
            dialogHeader="Dialog header"
            dialogBody="Dialog body text"
            actionButtonText="Action text"
            cancelButtonText="Cancel text"
            cancelButtonColor="#EC4747"
          />
        </div>
        <CodeSnippet code="&#x3C;Dialog cancelButtonColor=&#x22;#EC4747&#x22; /&#x3E;" />
      </SingleSection>

      {/* overlayColor */}
      <SingleSection>
        <SectionSubheader>overlay color</SectionSubheader>
      </SingleSection>

      {/* dialogPosition */}
      <SingleSection>
        <SectionSubheader>dialog position</SectionSubheader>
      </SingleSection>

      {/* blockScroll */}
      <SingleSection>
        <SectionSubheader>blocking scroll</SectionSubheader>
      </SingleSection>

      {/* closeOnEsc */}
      <SingleSection>
        <SectionSubheader>closing Dialog on "Esc" key press</SectionSubheader>
      </SingleSection>

      {/* closeOnOverlayClick */}
      <SingleSection>
        <SectionSubheader>closing Dialog on overlay click</SectionSubheader>
      </SingleSection>

      <BackToTopComponent />
    </>
  );
};

export default DialogUsage;
