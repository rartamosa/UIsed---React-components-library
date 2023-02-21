import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleProp from "../Reusable components/SingleProp";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const TagsInputProps = () => {
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
        propName="tags"
        description="Used to specify an array of tags that should be displayed in the input field initially. The value of each tag is a string that will be displayed in the UI. The tags array can be updated dynamically by adding or removing tags using the `onTagAdd` and `onTagRemove` props."
        type="string[]"
        isRequired={true}
      />

      <SingleProp
        propName="onTagAdd"
        description="A callback function that gets called when a tag is added to the component. It
        has to correspond to the state in parent component."
        type="(tag: string) => void"
        isRequired={true}
        defaultValue="{(tag) => setTags([...tags, tag])}"
      />

      <SingleProp
        propName="onTagRemove"
        description="Specifies a function to be called when a tag is removed from the input. It
        has to correspond to the state in parent component."
        type="(tag: string) => void"
        isRequired={true}
        defaultValue="{(tagToRemove) => setTags(tags.filter((tag) => tag !== tagToRemove))}"
      />

      <SingleProp
        propName="tagsSuggestions"
        description="Used to provide an array of tag suggestions to the component, which will be displayed as options for the user to select from."
        type="[]{}"
        isRequired={true}
        defaultValue="TagSuggestion = {
            _id: string;
            name: string;
            color: string;
        }"
      />

      <SingleProp
        propName="containerBorderColor"
        description="Specifies the border color of the input container."
        type="string"
        isRequired={false}
        defaultValue="#333"
      />

      <SingleProp
        propName="containerBorderWidth"
        description="Specifies the width of the border of the input container."
        type="string"
        isRequired={false}
        defaultValue="1px"
      />

      <SingleProp
        propName="componentSize"
        description="Allows the developer to adjust the overall size of the component."
        type="small | medium | large"
        isRequired={false}
        defaultValue="medium"
      />

      <SingleProp
        propName="tagsSuggestionsBorderColor"
        description="Specifies the border color of the tag suggestions container."
        type="string"
        isRequired={false}
        defaultValue="#333"
      />

      <SingleProp
        propName="tagsSuggestionsBorderWidth"
        description="Specifies width of the border of the tag suggestions container."
        type="string"
        isRequired={false}
        defaultValue="1px"
      />

      <SingleProp
        propName="backgroundColor"
        description="Sets the background color of the component."
        type="string"
        isRequired={false}
        defaultValue="#fff"
      />

      <SingleProp
        propName="placeholder"
        description="Sets the text that is displayed in the input field."
        type="string"
        isRequired={false}
        defaultValue="Type..."
      />

      <SingleProp
        propName="tagsFontColor"
        description="Sets the font color for the existing tags."
        type="string"
        isRequired={false}
        defaultValue="#0A1929"
      />

      <SingleProp
        propName="errorBorderColor"
        description="Specifies the border color of the input component when it is in an error state."
        type="string"
        isRequired={false}
        defaultValue="red"
      />

      <SingleProp
        propName="isDisabled"
        description="Used to disable the input and prevent the user from interacting with it."
        type="boolean"
        isRequired={false}
        defaultValue="false"
      />

      <SingleProp
        propName="tagsSuggestionsContainerPosition"
        description="Determines the position of the suggestions container based on the viewport width, with a vertical position for mobile devices and extra horizontal positions for desktops."
        type="string (left | top | right | bottom"
        isRequired={false}
        defaultValue="bottom"
      />

      <BackToTopComponent />
    </>
  );
};

export default TagsInputProps;
