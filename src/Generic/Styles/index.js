import styled from "styled-components";

export const DropDownContentWrapper = styled.div`
  padding: 5px 12px;
  display: flex;
  grid-gap: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 77px;
  color: #000000;
  margin: 40px;
  @media (max-width: 600px) {
    margin: 40px;
    font-size: 24px;
  }
  @media (max-width: 400px) {
    margin: 40px;
    font-size: 18px;
  }
`;

export const SectionCardContainer = styled.div`
  margin: 30px auto;
  width: fit-content;
  display: flex;
  grid-gap: 150px;
  @media (max-width: 800px) {
    grid-gap: 75px;
  }
  @media (max-width: 500px) {
    grid-gap: 37.5px;
  }
  @media (max-width: 270px) {
    flex-direction: column;
    grid-gap: 10px;
    margin: 10px auto;
  }
`;

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
