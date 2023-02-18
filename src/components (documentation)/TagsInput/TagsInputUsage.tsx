import { useState } from "react";

import {
  SingleSection,
  SectionSubheader,
  TextSpan,
} from "../Overview/overviewStyles";
import TagsInput from "../../components (library)/TagsInput/TagsInput";
import { tagsDummyData } from "../../components (library)/TagsInput/tagsDummyData";

import CodeSnippet from "../Reusable components/CodeSnippet";
import { Code } from "../Reusable components/CodeSnippet";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const TagsInputUsage = () => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <>
      {/* USAGE */}
      <SingleSection>
        <SectionSubheader>Usage</SectionSubheader>
        <TextSpan>
          Here's a basic usage example of the <Code>tags Input</Code> component:
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
          />
        </div>
        <CodeSnippet
          language="jsx"
          code="&#x3C;TagsInput
          tags=&#123;tags&#125;
          tagsSuggestions=&#123;tagsDummyData&#125;
          onTagAdd=&#123;(tag) =&#x3E; setTags(&#91;...tags, tag&#93;)&#125;
        /&#x3E;"
        />
      </SingleSection>

      {/* tags */}
      <SingleSection>
        <SectionSubheader>tags</SectionSubheader>
        <TextSpan>
          The "tags" prop is an array of objects that represent the currently
          selected tags.
        </TextSpan>
      </SingleSection>

      {/* tagsSuggestions */}
      <SingleSection>
        <SectionSubheader>tagsSuggestions</SectionSubheader>
        <TextSpan>
          An array of objects that contains the suggestions for tags to be added
          to the TagInput component.
        </TextSpan>
        <CodeSnippet
          language="js"
          code="tagsDummyData = [
            &#123;
              _id: &#x22;6382710cc74631f3ec3bce6a&#x22;,
              name: &#x22;Development&#x22;,
              color: &#x22;#D1FADF&#x22;,
            &#125;,
          ];"
        />
      </SingleSection>

      {/* onTagAdd */}
      <SingleSection>
        <SectionSubheader>onTagAdd</SectionSubheader>
        <TextSpan>A function that is called when a new tag is added.</TextSpan>
        <CodeSnippet
          language="jsx"
          code="onTagAdd=&#123;(tag) =&#x3E; setTags([...tags, tag])&#125;"
        />
      </SingleSection>

      {/* onTagRemove */}
      <SingleSection>
        <SectionSubheader>onTagRemove</SectionSubheader>
        <TextSpan>
          A function that gets called when a tag is removed from the input
          field. It takes the removed tag as an argument and can be used to
          update the state of the component or trigger any necessary actions.
        </TextSpan>
        <CodeSnippet
          language="jsx"
          code="onTagRemove=&#123;(tagToRemove) =&#x3E; setTags(tags.filter((tag) =&#x3E; tag !== tagToRemove))&#125;"
        />
      </SingleSection>

      {/* containerBorderColor */}
      <SingleSection>
        <SectionSubheader>border color</SectionSubheader>
        <TextSpan>Sets the color of the border of the tag container.</TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            containerBorderColor="blue"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput containerBorderColor=&#x22;blue&#x22; /&#x3E;" />
      </SingleSection>

      {/* containerBorderWidth */}
      <SingleSection>
        <SectionSubheader>border witdh</SectionSubheader>
        <TextSpan>
          Determines the width of the border of the container surrounding the
          tags input component.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            containerBorderWidth="3px"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput containerBorderWidth=&#x22;3px&#x22; /&#x3E;" />
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
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            componentSize="small"
            placeholder="small"
          />
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            placeholder="medium"
          />
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            componentSize="large"
            placeholder="large"
          />
        </div>
        <CodeSnippet
          code="&#x3C;TagsInput componentSize=&#x22;small&#x22; /&#x3E;
        &#x3C;TagsInput componentSize=&#x22;medium&#x22; /&#x3E;
        &#x3C;TagsInput componentSize=&#x22;large&#x22; /&#x3E;"
        />
      </SingleSection>

      {/* tagsSuggestionsBorderColor */}
      <SingleSection>
        <SectionSubheader>suggestions border color</SectionSubheader>
        <TextSpan>
          Sets the border color of the tags suggestions container.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            tagsSuggestionsBorderColor="green"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput tagsSuggestionsBorderColor=&#x22;green&#x22; /&#x3E;" />
      </SingleSection>

      {/* tagsSuggestionsBorderWidth */}
      <SingleSection>
        <SectionSubheader>suggestions border width</SectionSubheader>
        <TextSpan>
          Specifies the width of the border around the tags suggestions
          container.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            tagsSuggestionsBorderWidth="4px"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput tagsSuggestionsBorderWidth=&#x22;4px&#x22; /&#x3E;" />
      </SingleSection>

      {/* backgroundColor */}
      <SingleSection>
        <SectionSubheader>background color</SectionSubheader>
        <TextSpan>
          Sets the background color of the tag input container and tags
          suggestions container.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            backgroundColor="#FB8500"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput backgroundColor=&#x22;#FB8500&#x22; /&#x3E;" />
      </SingleSection>

      {/* placeholder */}
      <SingleSection>
        <SectionSubheader>placeholder</SectionSubheader>
        <TextSpan>
          Used to set the text that appears in the input box before the user
          starts typing.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            placeholder="Hello"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput placeholder=&#x22;Hello&#x22; /&#x3E;" />
      </SingleSection>

      {/* tagsFontColor */}
      <SingleSection>
        <SectionSubheader>tags font color</SectionSubheader>
        <TextSpan>
          Specifies the font color of the tags in the tag input field.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            tagsFontColor="#23E9D1"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput tagsFontColor=&#x22;#23E9D1&#x22; /&#x3E;" />
      </SingleSection>

      {/* errorBorderColor */}
      <SingleSection>
        <SectionSubheader>error border color</SectionSubheader>
        <TextSpan>
          Sets the border color of the container when there is an error.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            errorBorderColor="#E9232C"
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput errorBorderColor=&#x22;#E9232C&#x22; /&#x3E;" />
      </SingleSection>

      {/* isDisabled */}
      <SingleSection>
        <SectionSubheader>Disabled component</SectionSubheader>
        <TextSpan>
          determines whether the component is disabled or not, and if it is set
          to `true`, the user will not be able to interact with the component.
        </TextSpan>
        <div style={{ alignSelf: "center" }}>
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            isDisabled={true}
          />
        </div>
        <CodeSnippet code="&#x3C;TagsInput isDisabled={true} /&#x3E;" />
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
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            tagsSuggestionsContainerPosition="top"
          />
          <TagsInput
            tags={tags}
            tagsSuggestions={tagsDummyData}
            onTagAdd={(tag) => setTags([...tags, tag])}
            onTagRemove={(tagToRemove) =>
              setTags(tags.filter((tag) => tag !== tagToRemove))
            }
            tagsSuggestionsContainerPosition="bottom"
          />
        </div>
        <CodeSnippet
          code="&#x3C;TagsInput tagsSuggestionsContainerPosition=&#x22;top&#x22; /&#x3E;
          &#x3C;TagsInput tagsSuggestionsContainerPosition=&#x22;right&#x22; /&#x3E;
          &#x3C;TagsInput tagsSuggestionsContainerPosition=&#x22;bottom&#x22; /&#x3E;
          &#x3C;TagsInput tagsSuggestionsContainerPosition=&#x22;left&#x22; /&#x3E;
          
          //&#x60;left&#x60; and &#x60;right&#x60; are designed for desktop versions only"
        />
      </SingleSection>

      <BackToTopComponent />
    </>
  );
};

export default TagsInputUsage;
