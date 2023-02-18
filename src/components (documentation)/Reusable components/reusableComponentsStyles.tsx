import styled from "styled-components";
import { MAIN_DARK_FONT_COLOR } from "../../utils/commons";

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
