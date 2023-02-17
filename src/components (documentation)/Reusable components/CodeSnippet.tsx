import { useEffect } from "react";
import styled from "styled-components";
import Prism from "../../prism";
import "prismjs/themes/prism-funky.css";
import { MAIN_DARK_FONT_COLOR, ORANGE_COLOR } from "../../utils/commons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faCopy } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas, faCopy);

export const CodeSnippet = ({ code, language }: CodeProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <CodeSnippetContainer>
      <CodeExampleHeader>code example</CodeExampleHeader>

      <CopyIcon icon={["fas", "copy"]} />

      <div className="Code">
        <pre>
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
  language: string;
};

export const CodeExampleHeader = styled.span`
  font-weight: 800;
  font-size: 12px;
  line-height: 17px;
  text-transform: uppercase;
  align-self: center;
`;

export const CodeSnippetContainer = styled.div`
  background-color: ${MAIN_DARK_FONT_COLOR};
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  font-size: 13px;
  display: flex;
  flex-direction: column;
`;

export const CopyIcon = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${ORANGE_COLOR};
  right: 10px;
`;
