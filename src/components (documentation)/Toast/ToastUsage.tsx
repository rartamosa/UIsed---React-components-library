// @ts-ignore
import uniqid from "uniqid";

import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

import Toast from "../../components (library)/Toast/Toast";
import { Button } from "../../components (library)/Basic Components/Buttons";
import useToast from "../../components (library)/Toast/useToast";
import SingleToastExample from "./SingleToastExample";

const ToastUsage = () => {
  const [toastList, onToastAdd, onToastRemove] = useToast(30000);
  return (
    <>
      {/* <SingleToastExample /> */}
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>toast</Code> component:
        </TextSpan>
        <SingleToastExample
          id={uniqid()}
          buttonText="Basic Toast"
          toastHeader="toast header"
          onToastRemove={onToastRemove}
          toastList={toastList}
          onToastAdd={onToastAdd}
        />

        {/* <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            buttonProps={{ fontFamily: "Red Hat Display" }}
            onClick={() =>
              onToastAdd({
                toastHeader: "Example toast header",
              })
            }
          >
            Generate basic toast
          </Button>
          <Toast toastList={toastList} onToastRemove={onToastRemove} />
        </div> */}
        <CodeSnippet
          language="jsx"
          code={`import useToast from "../xyz";

const [toastList, onToastAdd, onToastRemove] = useToast(30000);

<Button
    onClick={() =>
    onToastAdd({
        toastHeader: "Example toast header",
    })
    }
>
Generate basic toast
</Button>
<Toast
    toastList={toastList}
    onToastRemove={onToastRemove}
/>


        `}
        />
      </SingleSection>

      {/* useToast hook */}
      <SingleSection>
        <SectionSubheader>the useToast hook</SectionSubheader>
        <TextSpan>{`It returns an object with functions for showing different types of toasts (success, error, warning, and info) with customizable messages and durations.`}</TextSpan>
      </SingleSection>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          buttonProps={{ fontFamily: "Red Hat Display" }}
          onClick={() =>
            onToastAdd({
              toastHeader: "test",
              typeOfToast: "warning",
            })
          }
        >
          Generate toast
        </Button>
        <Toast toastList={toastList} onToastRemove={onToastRemove} />
      </div> */}
      <BackToTopComponent />
    </>
  );
};

export default ToastUsage;
