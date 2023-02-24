import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const DialogProps = () => {
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
        propName="onAction"
        description="Prop of type function which is called when the user clicks on the action button, and it's responsible for handling the action associated with the Dialog. The developer needs to provide the implementation of this prop to make the Dialog functional."
        type="onAction: () => void;"
        isRequired={true}
      />

      <SingleProp
        propName="onCancel"
        description={`A function that is called when the user cancels the Dialog, such as by pressing the "cancel" or "close" button. It can be used to perform any necessary cleanup or additional logic when the Dialog is closed.`}
        type="onCancel: () => void;"
        isRequired={true}
      />

      <SingleProp
        propName="isDialogOpen"
        description="A boolean value that determines whether the dialog is currently open or closed. It is used to control the visibility of the dialog and can be set by the parent component to open or close the dialog as needed."
        type="boolean"
        isRequired={true}
      />

      <SingleProp
        propName="dialogHeader"
        description="A string that allows developers to customize the content of the Dialog's header section. It is used as the title of the Dialog box."
        type="string"
        isRequired={true}
      />

      <SingleProp
        propName="dialogBody"
        description="Used to specify the content to be displayed in the body of the dialog."
        type="string"
        isRequired={true}
      />

      <SingleProp
        propName="actionButtonText"
        description="Is used to customize the text of the primary action button in the Dialog, which is often used to submit a form or perform some other primary action. Developers can set this prop to a string value to customize the text displayed on the button."
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="cancelButtonText"
        description="A string that represents the text to be displayed in the cancel button of the Dialog component."
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="buttonProps"
        description="An object that can be used to pass additional props to the action and cancel buttons. It allows developers to customize the appearance and behavior of the buttons, such as setting the color, size, or disabling them based on certain conditions."
        type="React.CSSProperties"
        isRequired={false}
      />

      <SingleProp
        propName="actionButtonColor"
        description={`Sets the background color of the action button, while "buttonProps" allows developers to pass additional props to both the action and cancel buttons, including their background color. Therefore, "actionButtonColor" can be used to set the specific background color of the action button, while "buttonProps" can be used to set additional props for both buttons, including background color.`}
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="cancelButtonColor"
        description={`Sets the color of the cancel button. while "buttonProps" allows developers to pass additional props to both the action and cancel buttons, including their background color. Therefore, "cancelButtonColor" can be used to set the specific background color of the cancel button, while "buttonProps" can be used to set additional props for both buttons, including background color.`}
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="overlayColor"
        description="Used to set the background color of the overlay component which is displayed behind the dialog component, and its type is a string that represents a color value."
        type="string"
        isRequired={false}
        defaultValue="rgba(0, 0, 0, 0.3)"
      />

      <SingleProp
        propName="dialogPosition"
        description="Specifies the horizontal and vertical position of the dialog window relative to the overlay."
        type={`"center-top" | "center-bottom" | "left-center" | "left-top" | "left-bottom" | "right-center" | "right-top" | "right-bottom"`}
        isRequired={false}
        defaultValue="center"
      />

      <SingleProp
        propName="blockScroll"
        description={`A boolean flag that controls whether scrolling on the page should be blocked while the dialog is open, and its value is used to set the "overflow" property of the "body" element in the "useEffect" hook.`}
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="closeOnEsc"
        description={`A boolean value that determines whether the dialog should be closed when the "Escape" key is pressed.`}
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="closeOnOverlayClick"
        description="A boolean that determines whether the dialog should be closed when the overlay is clicked."
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <BackToTopComponent />
    </>
  );
};

export default DialogProps;
