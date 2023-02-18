import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const SelectProps = () => {
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
        propName="selectOptions"
        description="An array of objects, and each object must have a value and label property, which are required for the component to function properly."
        type="[]{id: string, name: string}"
        isRequired={true}
      />

      <SingleProp
        propName="placeholder"
        description="Used to set the placeholder text for the input field"
        type="string"
        isRequired={false}
        defaultValue="Type..."
      />

      <SingleProp
        propName="containerBorderColor"
        description="Used to set the border color of the select container"
        type="string"
        isRequired={false}
        defaultValue="#333"
      />

      <SingleProp
        propName="containerBorderWidth"
        description="Used to set the width of the border of the select container"
        type="string"
        isRequired={false}
        defaultValue="1px"
      />

      <SingleProp
        propName="componentSize"
        description="Specifies the size of the component, and it affects the font size, height, and width of the select box. It can be `small`, `medium`, `large`."
        type="string"
        isRequired={false}
        defaultValue="medium"
      />

      <SingleProp
        propName="backgroundColor"
        description="used to set the background color of the component."
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="isDisabled"
        description="Used to disable user interaction with the component if set to `true`."
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="errorBorderColor"
        description="Used to customize the color of the border when an error is present in the component."
        type="string"
        isRequired={false}
        defaultValue="red"
      />

      <SingleProp
        propName="iconColor"
        description="Specifies the color of the dropdown arrow icon (or a custom icon) in the select component."
        type="string"
        isRequired={false}
        defaultValue="#0A1929"
      />

      <SingleProp
        propName="customIcon"
        description="Used to specify a custom FontAwesomeIcon to use in place of the default icon."
        type="IconName"
        isRequired={false}
        defaultValue="#chevron-down"
      />

      <BackToTopComponent />
    </>
  );
};

export default SelectProps;
