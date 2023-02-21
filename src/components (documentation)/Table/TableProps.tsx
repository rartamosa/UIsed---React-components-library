import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const TableProps = () => {
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
        propName="columnNames"
        description="An array of strings that represent the names of the columns to be displayed in the table, with each string corresponding to a single column and the order of the strings determining the order of the columns from left to right."
        type="string[]"
        isRequired={true}
      />

      <SingleProp
        propName="tableRows"
        description="an array of objects that represents the rows of data to be displayed in the table, where each object's properties correspond to the columns defined in the `columnNames` prop."
        type="{}[]"
        isRequired={true}
      />

      <SingleProp
        propName="headerBackGroundColor"
        description="Used to set the background color of the table header, and it accepts a CSS color value."
        type="string | HEX color code"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="denseRows"
        description="Determines whether the rows in the table should have a smaller height."
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="iconColor"
        description="Sets the color of the sorting icons in the table header."
        type="string | HEX color code"
        isRequired={false}
        defaultValue="#b1b1b1"
      />

      <SingleProp
        propName="borderColor"
        description="Used to set the color of the border of the Table component, which is a string value that can be any valid CSS color."
        type="string | HEX color code"
        isRequired={false}
        defaultValue="#0A1929"
      />

      <SingleProp
        propName="borderWidth"
        description="Used to set the width of the border around the table cells and header. Its value is a number representing the width in pixels, and it can be set to zero to remove the border entirely."
        type="string"
        isRequired={false}
        defaultValue="1px"
      />

      <SingleProp
        propName="hoverColor"
        description="Used to set the background color of the table row when the user hovers over it, and it can be customized by the developer using CSS color values."
        type="string | HEX color code"
        isRequired={false}
        defaultValue="#e2e2e2"
      />

      <SingleProp
        propName="allowSorting"
        description="Enables or disables the ability to sort table data by clicking on column headers. When enabled, the sorting order can be ascending or descending."
        type="boolean"
        isRequired={false}
        defaultValue="true"
      />

      <SingleProp
        propName="columnWidth"
        description="A string type prop that determines the width of the columns in the table. Developers working with this reusable component should set this prop to a number that represents the desired width in pixels."
        type="string"
        isRequired={false}
        defaultValue="100px"
      />

      <SingleProp
        propName="firstColumnWidth"
        description="Used to set the width of the first column in the table and is a string indicating the pixel width of the column."
        type="string"
        isRequired={false}
        defaultValue="200px"
      />

      <SingleProp
        propName="stickyHeader"
        description={`The "stickyHeader" prop is a boolean that controls whether the table header should be sticky or not, allowing it to remain visible as the user scrolls down the table. When set to true, the header will stick to the top of the table.`}
        type="string"
        isRequired={false}
        defaultValue="true"
      />

      <BackToTopComponent />
    </>
  );
};

export default TableProps;
