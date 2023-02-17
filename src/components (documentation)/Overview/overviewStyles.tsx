import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  @media (min-width: 768px) {
    width: calc(100% - 250px);
    margin: 50px 0;
    padding: 0 80px;
    box-sizing: border-box;
  }
`;

export const SingleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    &:nth-of-type(2) {
      flex-direction: row;
    }
    gap: 15px;
  }
`;

export const SectionHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.1px;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 36px;
    font-weight: 800;
    line-height: 45px;
    letter-spacing: 0.2px;
  }
`;

export const SectionSubheader = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.1px;
  margin: 0;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextSpan = styled.span`
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.1px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  width: 200px;
  align-self: center;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const SingleAdvantage = styled.span`
  font-size: 16px;
  line-height: 25px;
`;

export const AdvantageBold = styled.span`
  font-weight: 700;
`;

export const BackToTopContainer = styled.div<{
  onClick: () => void;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

export const BackToTop = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
`;
