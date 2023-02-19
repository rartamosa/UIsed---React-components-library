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
          code="dummyColumnNames = [
            &#x22;Desserts&#x22;,
            &#x22;Calories&#x22;,
            &#x22;Fat (g)&#x22;,
            &#x22;Carbs (g)&#x22;,
            &#x22;Protein (g)&#x22;,
          ];"
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
          code="dummyTableRows = [
            {
              rowName: &#x22;Frozen yoghurt&#x22;,
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
            };"
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
        <CodeSnippet code="&#x3C;Table headerBackGroundColor=&#x22;#F8CFA2&#x22; /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table denseRows={true} /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table iconColor=&#x22;#FB8500&#x22; /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table borderColor=&#x22;#B0A2F8&#x22; /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table borderWidth=&#x22;4px&#x22; /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table hoverColor=&#x22;#A2F8F3&#x22; /&#x3E;" />
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
        <CodeSnippet code="&#x3C;Table allowSorting={false} /&#x3E;" />
      </SingleSection>
      <BackToTopComponent />
    </>
  );
};

export default TableUsage;
