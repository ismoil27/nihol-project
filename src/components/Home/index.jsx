import Card from "../../Generic/Card";
import { Wrapper } from "./style";
import {
  Title,
  SectionCardContainer,
  CenteredWrapper,
} from "../../Generic/Styles";
import report from "../../assets/icons/report.svg";
import end_time from "../../assets/icons/end_time.svg";
import half_time from "../../assets/icons/half_time.svg";
import empty_place from "../../assets/icons/empty_place.svg";
import all_users from "../../assets/icons/all_users.svg";

const Home = () => {
  return (
    <Wrapper>
      <CenteredWrapper>
        <Title>Bo'limlar</Title>
        <SectionCardContainer>
          <Card title={"Barcha mijozlar"} image={all_users} />
          <Card title={"Oraliq muddat"} image={half_time} />
        </SectionCardContainer>
        <SectionCardContainer>
          <Card title={"Muddat tugash"} image={end_time} />
          <Card title={"Mavjud joylar"} image={empty_place} />
        </SectionCardContainer>
        <Title>Hisobotlar:</Title>
        <SectionCardContainer>
          <Card title={"Hisobot"} image={report} />
        </SectionCardContainer>
      </CenteredWrapper>
    </Wrapper>
  );
};

export default Home;
