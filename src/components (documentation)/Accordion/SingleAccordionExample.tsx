import Accordion from "../../components (library)/Accordion/Accordion";
import { AccordionProps } from "../../components (library)/Accordion/AccordionProps";

const SingleAccordionExample = (accordionProps: AccordionProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Accordion {...accordionProps} />
    </div>
  );
};

export default SingleAccordionExample;
