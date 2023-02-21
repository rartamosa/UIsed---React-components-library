import { useState } from "react";

import TagsInput from "../../components (library)/TagsInput/TagsInput";
import { tagsDummyData } from "../../components (library)/TagsInput/tagsDummyData";
import { TagInputExampleProps } from "../../components (library)/TagsInput/tagsInputTypes";

const SingleTagsInputExample = (tagInputProps: TagInputExampleProps) => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div style={{ alignSelf: "center" }}>
      <TagsInput
        {...tagInputProps}
        tags={tags}
        tagsSuggestions={tagsDummyData}
        onTagAdd={(tag: string) => setTags([...tags, tag])}
        onTagRemove={(tagToRemove: string) =>
          setTags(tags.filter((tag) => tag !== tagToRemove))
        }
      />
    </div>
  );
};

export default SingleTagsInputExample;
