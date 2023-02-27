import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";
import CodeSnippet from "../Reusable components/CodeSnippet";

const ToastProps = () => {
  return (
    <>
      <SingleSection>
        <SectionSubheader>Props</SectionSubheader>
        <TextSpan>
          The component provides several props for customizing its appearance
          and behavior.
        </TextSpan>
      </SingleSection>

      {/* toastList */}
      <SingleProp
        propName="toastList"
        description="An array of SingleToastProps objects representing the list of toast notifications."
        type="SingleToastProps[]"
        isRequired={true}
      />
      <CodeSnippet
        language="jsx"
        code={`SingleToastProps = {
    toastHeader: string;
    id: string;
    toastDescription?: string;
    toastBacgroundColor?: string;
    toastFontColor?: string;
    toastIcon?: IconName;
    iconColor?: string;
    typeOfToast?: "success" | "error" | "warning" | "info";
    size?: "small" | "medium" | "large";
    boxShadow?: boolean;
    isUnmounting?: boolean;
    toastsPosition?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
}`}
      />

      <SingleProp
        propName="onToastRemove"
        description={`A callback function that is called when a toast is dismissed. Developers can use it to perform additional actions when a toast is removed, such as updating state or sending an API request. To use this prop, pass a function that accepts the toast id as an argument to the "onToastRemove" prop.`}
        type="(id: string) => void"
        isRequired={true}
      />

      <SingleProp
        propName="toastHeader"
        description="Title or header text that appears at the top of the Toast component."
        type="string"
        isRequired={true}
      />

      <SingleProp
        propName="typeOfToast"
        description="Used to specify the type of toast, which determines the color and icon of the toast."
        type={`"success" | "error" | "warning" | "info"`}
        isRequired={false}
        defaultValue={`"success"`}
      />

      <SingleProp
        propName="toastDescription"
        description="Used to add description to a single Toast."
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="size"
        description="Refers to the size of the Toast component."
        type={`"small" | "medium" | "large"`}
        isRequired={false}
        defaultValue={`"medium"`}
      />

      <SingleProp
        propName="boxShadow"
        description="Used to add a box shadow effect to the SingleToast component."
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="toastIcon"
        description={`Accepts icon names from the Font Awesome library. The icon name should be passed as a string value to the toastIcon prop, for example, "check" or "sun".`}
        type="IconName"
        isRequired={false}
        defaultValue={`"circle-check" for "success" / "circle-exclamation" for "erorr" / "triangle-exclamation" for "warning" / "circle-info" for "info"`}
      />

      <SingleProp
        propName="iconColor"
        description={`Allows developers to change the color of the font-awesome icon that appears in the toast. Developers can pass a valid CSS color value to the iconColor prop, which will override the default color of the icon.`}
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="toastBacgroundColor"
        description="Allows the developer to set the background color of the toast component. It accepts a string value representing the color in any valid CSS color format such as hex codes, RGB or RGBA values, or color names."
        type="string"
        isRequired={false}
        defaultValue={`"#6cbb5a" for "success / "#f62e36" for "error" / "#ff9500" for "warning" / "#00a7db" for "info"`}
      />

      <SingleProp
        propName="toastFontColor"
        description="Used to set the font color of the toast message."
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="animationType"
        description="Allows to specify the type of animation used to display the toast message."
        type={`"fade" | "grow" | "slide"`}
        isRequired={false}
        defaultValue={`"fade"`}
      />

      <SingleProp
        propName="toastsPosition"
        description="Allows to specify the position where the toasts should appear on the screen."
        type={`"bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right"`}
        isRequired={false}
        defaultValue={`"bottom-center"`}
      />

      <BackToTopComponent />
    </>
  );
};

export default ToastProps;
