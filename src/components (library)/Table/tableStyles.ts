import styled from "styled-components";
import { ColumnNames } from "./TableProps";

export const TOverflow = styled.div<{
  borderColor?: string;
  borderWidth?: string;
}>`
  width: auto;
  max-width: 70%;
  overflow: auto;
  border: ${(props) => props.borderWidth} solid ${(props) => props.borderColor};
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
`;

export const TContainer = styled.div`
  padding: 10px;
  cursor: default;
  width: auto;
`;

export const THead = styled.div<{
  headerBackGroundColor?: string;
  columnNames: ColumnNames[];
}>`
  display: grid;
  grid-template-columns: 100px repeat(
      ${(props) => props.columnNames.length - 1},
      1fr
    );
  gap: 5px;
  padding: 6px 0;
  background-color: ${(props) => props.headerBackGroundColor};
  font-weight: 700;
  white-space: nowrap;
  width: fit-content;
  @media (max-width: 768px) {
    grid-template-columns: 100px repeat(
        ${(props) => props.columnNames.length - 1},
        1fr
      );

    font-size: 14px;
    font-size: 11px;
  }
`;

export const TBody = styled.div`
  overflow-x: auto;
  height: 200px;
`;

export const TRow = styled.div<{
  columnNames: ColumnNames[];
  denseRows?: boolean;
  hoverColor?: string;
}>`
  display: grid;
  grid-template-columns: 100px repeat(
      ${(props) => props.columnNames.length - 1},
      1fr
    );
  gap: 5px;
  padding: ${(props) => (props.denseRows ? "0" : "6px 0")};
  border-bottom: 1px solid #333;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  @media (max-width: 768px) {
    grid-template-columns: 100px repeat(
        ${(props) => props.columnNames.length - 1},
        1fr
      );

    font-size: 13px;
  }
`;

export const ColumnName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  width: fit-content;
  &:first-of-type {
    justify-self: flex-start;
  }
`;

export const TCell = styled.div`
  text-align: right;
  &:first-of-type {
    text-align: left;
  }
`;
