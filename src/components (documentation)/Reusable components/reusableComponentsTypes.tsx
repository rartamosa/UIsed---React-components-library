export type ComponentPageProps = {
  componentName: string;
  componentDescription: string;
  githubLink: string;
};

export type SinglePropProps = {
  propName: string;
  description: string;
  type: string;
  isRequired: boolean;
  defaultValue?: string;
};
