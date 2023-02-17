import styled from "styled-components";
import { MAIN_DARK_FONT_COLOR } from "../utils/commons";

export const WelcomeContainer = styled.div`
  padding: 8px 20px 0 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 10px 100px 0 100px;
  }
`;

export const Logo = styled.img`
  width: 265px;
  @media (min-width: 768px) {
    width: 584px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  align-items: flex-start;
  @media (min-width: 768px) {
    width: min-content;
  }
`;

export const Slogan = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.15em;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SingleButtonContainer = styled.div`
  padding: 10px;
  background-color: ${MAIN_DARK_FONT_COLOR};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 160px;
  &:hover {
    box-shadow: 3px 4px 4px rgba(255, 183, 3, 0.4);
  }
`;

export const GithubButtonContainer = styled.a`
  padding: 10px;
  background-color: ${MAIN_DARK_FONT_COLOR};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  width: 160px;
  &:hover {
    box-shadow: 3px 4px 4px rgba(255, 183, 3, 0.4);
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.15em;
  text-transform: capitalize;
  border: none;
  background-color: transparent;
  color: #fff;
  font-family: "Red Hat Display";
  padding: 0;
  cursor: pointer;
`;
