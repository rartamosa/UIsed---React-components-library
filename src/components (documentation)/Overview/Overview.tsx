import Background from "../Background/Background";
import {
  MainContainer,
  SingleSection,
  SectionHeader,
  TextSpan,
  Introduction,
  SectionSubheader,
  Image,
  SingleAdvantage,
  AdvantageBold,
} from "./overviewStyles";
import BackToTopComponent from "../Reusable components/BackToTopComponent";

const Overview = () => {
  return (
    <>
      <MainContainer>
        <SingleSection>
          <SectionHeader>UIsed - Overview</SectionHeader>
          <TextSpan>Streamline your development process with UIsed.</TextSpan>
        </SingleSection>

        <SingleSection>
          <Introduction>
            <SectionSubheader>Introduction</SectionSubheader>
            <TextSpan>
              UIsed is a comprehensive library of reusable React components that
              makes building user interfaces faster and more efficient. With a
              wide range of customizable options, it allows developers to
              quickly implement designs that match their specific needs, and
              with ease of use in mind, it can be used by developers of all
              skill levels. UIsed helps to reduce the time it takes to develop
              and maintain a project while providing a consistent and polished
              look and feel to the final product.
            </TextSpan>
          </Introduction>
          <Image
            src={process.env.PUBLIC_URL + "/assets/developer_illustration.png"}
            alt="illustration"
            style={{ width: "200px" }}
          />
        </SingleSection>

        <SingleSection>
          <SectionSubheader>Advantages of UIsed</SectionSubheader>
          <SingleAdvantage>
            <AdvantageBold>Increased productivity: </AdvantageBold>
            UIsed provides a wide range of pre-built components that can be
            easily integrated into your project, saving time and effort in the
            development process.
          </SingleAdvantage>
          <SingleAdvantage>
            <AdvantageBold>Consistency and standardization: </AdvantageBold>
            By using a common set of components across your project, you can
            ensure a consistent look and feel throughout your application,
            making it more polished and professional.
          </SingleAdvantage>
          <SingleAdvantage>
            <AdvantageBold>Customizability: </AdvantageBold>
            UIsed provides a wide range of options for customizing each
            component, allowing you to tailor them to your specific needs and
            design requirements.
          </SingleAdvantage>
          <SingleAdvantage>
            <AdvantageBold> Improved maintainability: </AdvantageBold>
            By using a library of reusable components, you can reduce the amount
            of duplicated code in your project, making it easier to maintain and
            update in the future.
          </SingleAdvantage>
          <SingleAdvantage>
            <AdvantageBold>Community support: </AdvantageBold>
            As a popular open-source library, UIsed has a large and active
            community of developers who contribute to its development, providing
            support, bug reports and fixing issues. This also means you will
            have access to a wealth of knowledge, troubleshooting and solutions
            to common problems when using the library.
          </SingleAdvantage>
          <Image
            src={process.env.PUBLIC_URL + "/assets/developer_illustration2.png"}
            alt="illustration"
          />
        </SingleSection>
        <BackToTopComponent />
        <Background />
      </MainContainer>
    </>
  );
};

export default Overview;
