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

// export type SingleTagsInputExample = {
//   TagsInputComponent: React.FC;
// };

// const withAddProduct = (InnerComponent) => {
//   const WrapperComponent = (props) => {
//     const addProduct = (id) => {
//       // fetch(`buy-url/${id}`)
//       //   .then((res) => res.json())
//       //   .then((data) => console.log(data));

//       console.log(id);
//     };

//     return <InnerComponent id={props.id} addProduct={addProduct} />;
//   };

//   return WrapperComponent;
// };

// export default withAddProduct;
