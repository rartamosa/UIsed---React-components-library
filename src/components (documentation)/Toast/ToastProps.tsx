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
        description=""
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
        description=""
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
        description="TODO"
        type="string"
        isRequired={false}
      />

      <SingleProp
        propName="size"
        description="TODO"
        type={`"small" | "medium" | "large"`}
        isRequired={false}
        defaultValue={`"medium"`}
      />

      <SingleProp
        propName="boxShadow"
        description="TODO"
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="toastIcon"
        description="TODO"
        type="IconName"
        isRequired={false}
        defaultValue={`"circle-check" for "success" / "circle-exclamation" for "erorr" / "triangle-exclamation" for "warning" / "circle-info" for "info"`}
      />

      <SingleProp
        propName="iconColor"
        description="TODO"
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="toastBacgroundColor"
        description="TODO"
        type="string"
        isRequired={false}
        defaultValue={`"#6cbb5a" for "success / "#f62e36" for "error" / "#ff9500" for "warning" / "#00a7db" for "info"`}
      />

      <SingleProp
        propName="toastFontColor"
        description="TODO"
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="animationType"
        description="TODO"
        type={`"fade" | "grow" | "slide"`}
        isRequired={false}
        defaultValue={`"fade"`}
      />

      <SingleProp
        propName="toastsPosition"
        description="TODO"
        type={`"bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right"`}
        isRequired={false}
        defaultValue={`"bottom-center"`}
      />

      <BackToTopComponent />
    </>
  );
};

export default ToastProps;
