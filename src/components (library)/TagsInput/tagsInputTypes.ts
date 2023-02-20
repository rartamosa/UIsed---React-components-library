type TagSuggestion = {
  _id: string;
  name: string;
  color: string;
};

export type TagInputProps = TagInputExampleProps & {
  tags: string[];
  onTagAdd: (tag: string) => void;
  tagsSuggestions: TagSuggestion[];
  onTagRemove: (tag: string) => void;
};

export type TagInputExampleProps = {
  containerBorderColor?: string;
  containerBorderWidth?: string;
  componentSize?: "small" | "medium" | "large";
  tagsSuggestionsBorderColor?: string;
  tagsSuggestionsBorderWidth?: string;
  backgroundColor?: string;
  placeholder?: string;
  tagsFontColor?: string;
  errorBorderColor?: string;
  isDisabled?: boolean;
  tagsSuggestionsContainerPosition?: "left" | "top" | "right" | "bottom";
};
