import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import Table from "../../components (library)/Table/Table";
import {
  dummyColumnNames,
  dummyTableRows,
} from "../../components (library)/Table/tableDummyData";
import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const TableUsage = () => {
  return (
    <>
      {/* usage */}
      <SingleSection>
        <SectionSubheader>usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>table</Code> component:
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table columnNames={dummyColumnNames} tableRows={dummyTableRows} />
        </div>
      </SingleSection>

      {/* columnNames */}
      <SingleSection>
        <SectionSubheader>column names</SectionSubheader>
        <TextSpan>
          An array of strings that represents the headers of the{" "}
          <Code>table</Code> columns.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`dummyColumnNames = [ 
  "Desserts",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
];`}
        />
      </SingleSection>

      {/* tableRows */}
      <SingleSection>
        <SectionSubheader>table rows</SectionSubheader>
        <TextSpan>
          An array of objects containing the data to be rendered in the{" "}
          <Code>table</Code>, with each object representing a row and its
          properties the corresponding cell values.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`dummyTableRows = [{
  rowName: "Frozen yoghurt",
  calories: 159,
  fat: 6.0,
  carbs: 24,
  protein: 4.0,
}];`}
        />
      </SingleSection>

      {/* headerBackGroundColor */}
      <SingleSection>
        <SectionSubheader>header background color</SectionSubheader>
        <TextSpan>
          Sets the background color of the <Code>table</Code> header.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            headerBackGroundColor="#F8CFA2"
          />
        </div>
        <CodeSnippet
          code={`<Table
  headerBackGroundColor="#F8CFA2"
/>`}
        />
      </SingleSection>

      {/* denseRows */}
      <SingleSection>
        <SectionSubheader>dense rows</SectionSubheader>
        <TextSpan>
          Used to specify whether to use compact (dense) row style or not.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            denseRows={true}
          />
        </div>
        <CodeSnippet code={`<Table denseRows={true} />`} />
      </SingleSection>

      {/* iconColor */}
      <SingleSection>
        <SectionSubheader>icon color</SectionSubheader>
        <TextSpan>
          Used to set the color of the sort icons in the <Code>table</Code>'s
          column headers.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            iconColor="#FB8500"
          />
        </div>
        <CodeSnippet code={`<Table iconColor="#FB8500" />`} />
      </SingleSection>

      {/* borderColor */}
      <SingleSection>
        <SectionSubheader>border color</SectionSubheader>
        <TextSpan>
          Used to specify the color of the border of the <Code>table</Code>.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            borderColor="#B0A2F8"
          />
        </div>
        <CodeSnippet code={`<Table borderColor="#B0A2F8" />`} />
      </SingleSection>

      {/* borderWidth */}
      <SingleSection>
        <SectionSubheader>border width</SectionSubheader>
        <TextSpan>
          Specifies the width of the border around the <Code>table</Code>.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            borderWidth="4px"
          />
        </div>
        <CodeSnippet code={`<Table borderWidth="4px" />`} />
      </SingleSection>

      {/* hoverColor */}
      <SingleSection>
        <SectionSubheader>hover color</SectionSubheader>
        <TextSpan>Specifies color of hover on rows.</TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            hoverColor="#A2F8F3"
          />
        </div>
        <CodeSnippet code={`<Table hoverColor="#A2F8F3" />`} />
      </SingleSection>

      {/* allowSorting */}
      <SingleSection>
        <SectionSubheader>sorting</SectionSubheader>
        <TextSpan>
          The sorting prop is used to enable or disable column sorting in the
          <Code>table</Code>. When it's set to true, the <Code>table</Code>{" "}
          headers will have sorting icons that allow the user to sort the{" "}
          <Code>table</Code> by that column. When it's set to false, the sorting
          icons will not be displayed and the <Code>table</Code> will not be
          sortable.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            allowSorting={false}
          />
        </div>
        <CodeSnippet code={`<Table allowSorting={false} />`} />
      </SingleSection>

      {/* columnWidth */}
      <SingleSection>
        <SectionSubheader>column width</SectionSubheader>
        <TextSpan>
          The "columnWidth" prop is used to specify the width of the columns in
          the <Code>table</Code>. Its default value is 100px. The
          "firstColumnWidth" prop specifies the width of the first column in the{" "}
          <Code>Table</Code>. Its default value is 200px.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            firstColumnWidth="300px"
            columnWidth="200px"
          />
        </div>
        <CodeSnippet
          code={`<Table
  firstColumnWidth="300px"
  columnWidth="200px"
/>`}
        />
      </SingleSection>

      {/* stickyHeader */}
      <SingleSection>
        <SectionSubheader>sticky header</SectionSubheader>
        <TextSpan>
          Used to make the <Code>table</Code> header sticky so that it remains
          visible at the top of the table even when the user scrolls down.
        </TextSpan>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Table
            columnNames={dummyColumnNames}
            tableRows={dummyTableRows}
            stickyHeader={false}
          />
        </div>
        <CodeSnippet code={`<Table stickyHeader={false} />`} />
      </SingleSection>
      <BackToTopComponent />
    </>
  );
};

export default TableUsage;
