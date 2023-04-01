import React from "react";
import Card from "../../Generic/Card";
import { Wrapper } from "./style";
import { Title } from "../../Generic/Styles";

import start_time from "../../assets/icons/start_time.svg";
import end_time from "../../assets/icons/end_time.svg";
import half_time from "../../assets/icons/half_time.svg";
import empty_place from "../../assets/icons/empty_place.svg";
import all_users from "../../assets/icons/all_users.svg";

const Home = () => {
  return (
    <Wrapper>
      <Title>Bo'limlar</Title>
      <Card title={"Barcha mijozlar"} image={all_users} />
      <Card title={"Oraliq muddat"} image={half_time} />
      <Card title={"Muddat tugash"} image={end_time} />
      <Card title={"Mavjud joylar"} image={empty_place} />
    </Wrapper>
  );
};

export default Home;
