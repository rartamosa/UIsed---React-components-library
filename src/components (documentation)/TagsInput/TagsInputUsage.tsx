import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import SingleTagsInputExample from "./SingleTagsInputExample";

import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const TagsInputUsage = () => {
  return (
    <>
      {/* USAGE */}
      <SingleSection>
        <SectionSubheader>Usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>tags Input</Code> component:
        </TextSpan>
        <SingleTagsInputExample />
        <CodeSnippet
          language="jsx"
          code={`<TagsInput
  tags={tags}
  tagsSuggestions={tagsDummyData}
  onTagAdd={(tag: string) => setTags([...tags, tag])}
  onTagRemove={(tagToRemove: string) =>
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }
/>`}
        />
      </SingleSection>

      {/* tags */}
      <SingleSection>
        <SectionSubheader>tags</SectionSubheader>
        <TextSpan>
          The "tags" prop is an array of objects that represent the currently
          selected tags. It has to correspond to the state in parent component:
          <br />
          <Code
            style={{ textTransform: "unset" }}
          >{`const [tags, setTags] = useState<string[]>([]);`}</Code>
        </TextSpan>
      </SingleSection>

      {/* tagsSuggestions */}
      <SingleSection>
        <SectionSubheader>tags suggestions</SectionSubheader>
        <TextSpan>
          An array of objects that contains the suggestions for tags to be added
          to the TagInput component.
        </TextSpan>
        <CodeSnippet
          language="js"
          code={`tagsDummyData = [{ 
  _id: "6382710cc74631f3ec3bce6a",
  name: "Development",
  color: "#D1FADF",
}];`}
        />
      </SingleSection>

      {/* onTagAdd */}
      <SingleSection>
        <SectionSubheader>functionality of adding new tag</SectionSubheader>
        <TextSpan>
          A function that is called when a new tag is added. It has to
          correspond to the state in parent component:
          <br />
          <Code
            style={{ textTransform: "unset" }}
          >{`const [tags, setTags] = useState<string[]>([]);`}</Code>
        </TextSpan>
        <CodeSnippet
          language="jsx"
          code={`onTagAdd={(tag) => setTags([...tags, tag])}`}
        />
      </SingleSection>

      {/* onTagRemove */}
      <SingleSection>
        <SectionSubheader>functionality of removing a tag</SectionSubheader>
        <TextSpan>
          A function that gets called when a tag is removed from the input
          field. It takes the removed tag as an argument and can be used to
          update the state of the component or trigger any necessary actions. It
          has to correspond to the state in parent component:
          <br />
          <Code
            style={{ textTransform: "unset" }}
          >{`const [tags, setTags] = useState<string[]>([]);`}</Code>
        </TextSpan>
        <CodeSnippet
          language="jsx"
          code={`onTagRemove = {(tagToRemove) =>
  setTags(tags.filter((tag) => 
  tag !== tagToRemove)
)}`}
        />
      </SingleSection>

      {/* containerBorderColor */}
      <SingleSection>
        <SectionSubheader>border color</SectionSubheader>
        <TextSpan>Sets the color of the border of the tag container.</TextSpan>
        <SingleTagsInputExample containerBorderColor="blue" />

        <CodeSnippet code={`<TagsInput containerBorderColor="blue" />`} />
      </SingleSection>

      {/* containerBorderWidth */}
      <SingleSection>
        <SectionSubheader>border width</SectionSubheader>
        <TextSpan>
          Determines the width of the border of the container surrounding the
          tags input component.
        </TextSpan>
        <SingleTagsInputExample containerBorderWidth="3px" />
        <CodeSnippet code={`<TagsInput containerBorderWidth="3px" />`} />
      </SingleSection>

      {/* componentSize */}
      <SingleSection>
        <SectionSubheader>size</SectionSubheader>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <SingleTagsInputExample componentSize="small" placeholder="small" />
          <SingleTagsInputExample componentSize="medium" placeholder="medium" />
          <SingleTagsInputExample componentSize="large" placeholder="large" />
        </div>
        <CodeSnippet
          code={`<TagsInput componentSize="small" placeholder="small" />
<TagsInput componentSize="medium" placeholder="medium" />
<TagsInput componentSize="large" placeholder="large" />`}
        />
      </SingleSection>

      {/* tagsSuggestionsBorderColor */}
      <SingleSection>
        <SectionSubheader>suggestions border color</SectionSubheader>
        <TextSpan>
          Sets the border color of the tags suggestions container.
        </TextSpan>
        <SingleTagsInputExample tagsSuggestionsBorderColor="green" />
        <CodeSnippet
          code={`<TagsInput tagsSuggestionsBorderColor="green" />`}
        />
      </SingleSection>

      {/* tagsSuggestionsBorderWidth */}
      <SingleSection>
        <SectionSubheader>suggestions border width</SectionSubheader>
        <TextSpan>
          Specifies the width of the border around the tags suggestions
          container.
        </TextSpan>
        <SingleTagsInputExample tagsSuggestionsBorderWidth="4px" />
        <CodeSnippet code={`<TagsInput tagsSuggestionsBorderWidth="4px" />`} />
      </SingleSection>

      {/* backgroundColor */}
      <SingleSection>
        <SectionSubheader>background color</SectionSubheader>
        <TextSpan>
          Sets the background color of the tag input container and tags
          suggestions container.
        </TextSpan>
        <SingleTagsInputExample backgroundColor="#FB8500" />
        <CodeSnippet code={`<TagsInput backgroundColor="#FB8500" />`} />
      </SingleSection>

      {/* placeholder */}
      <SingleSection>
        <SectionSubheader>placeholder</SectionSubheader>
        <TextSpan>
          Used to set the text that appears in the input box before the user
          starts typing.
        </TextSpan>
        <SingleTagsInputExample placeholder="Hello" />
        <CodeSnippet code={`<TagsInput placeholder="Hello" />`} />
      </SingleSection>

      {/* tagsFontColor */}
      <SingleSection>
        <SectionSubheader>tags font color</SectionSubheader>
        <TextSpan>
          Specifies the font color of the tags in the tag input field.
        </TextSpan>
        <SingleTagsInputExample tagsFontColor="#23E9D1" />
        <CodeSnippet code={`<TagsInput tagsFontColor="#23E9D1" />`} />
      </SingleSection>

      {/* errorBorderColor */}
      <SingleSection>
        <SectionSubheader>error border color</SectionSubheader>
        <TextSpan>
          Sets the border color of the container when there is an error.
        </TextSpan>
        <SingleTagsInputExample errorBorderColor="#E9232C" />
        <CodeSnippet code={`<TagsInput errorBorderColor="#E9232C" />`} />
      </SingleSection>

      {/* isDisabled */}
      <SingleSection>
        <SectionSubheader>Disabled component</SectionSubheader>
        <TextSpan>
          determines whether the component is disabled or not, and if it is set
          to `true`, the user will not be able to interact with the component.
        </TextSpan>
        <SingleTagsInputExample isDisabled={true} />
        <CodeSnippet code={`<TagsInput isDisabled={true} />`} />
      </SingleSection>

      {/* tagsSuggestionsContainerPosition */}
      <SingleSection>
        <SectionSubheader>suggestions position</SectionSubheader>
        <TextSpan>
          Used to define the position of the tag suggestions container in
          relation to the input field.
        </TextSpan>
        <div
          style={{
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <SingleTagsInputExample tagsSuggestionsContainerPosition="top" />
          <SingleTagsInputExample tagsSuggestionsContainerPosition="bottom" />
        </div>
        <CodeSnippet
          code={`<TagsInput tagsSuggestionsContainerPosition="top" />
<TagsInput tagsSuggestionsContainerPosition="right" />
<TagsInput tagsSuggestionsContainerPosition="bottom" />
<TagsInput tagsSuggestionsContainerPosition="left" />
//"left" and "right" are designed for desktop versions only`}
        />
      </SingleSection>
      <BackToTopComponent />
    </>
  );
};

export default TagsInputUsage;
