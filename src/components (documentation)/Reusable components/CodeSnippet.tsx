import { useEffect } from "react";
import styled from "styled-components";
import Prism from "../../prism";
import "prismjs/themes/prism-funky.css";
import {
  CodeSnippetContainer,
  CodeExampleHeader,
} from "./reusableComponentsStyles";
import { ORANGE_COLOR } from "../../utils/commons";

export const CodeSnippet = ({ code, language = "html" }: CodeProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <CodeSnippetContainer>
      <CodeExampleHeader>code example</CodeExampleHeader>

      <div className="Code">
        <pre
          data-src="plugins/toolbar/prism-toolbar.js"
          data-prismjs-copy="copy"
          data-copy-state="copy"
        >
          <code
            className={`language-${language}`}
            style={{ whiteSpace: "break-spaces" }}
          >
            {code}
          </code>
        </pre>
      </div>
    </CodeSnippetContainer>
  );
};

export default CodeSnippet;

export type CodeProps = {
  code: string;
  language?: string;
};

export const Code = styled.span`
  font-family: Courier Prime;
  color: ${ORANGE_COLOR};
  text-transform: capitalize;
`;
