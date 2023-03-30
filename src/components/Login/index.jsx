import React, { useRef, useState } from "react";
import { Wrapper } from "./style";
import { notification } from "antd";
import axios from "axios";

const Login = () => {
  const [warningAnim, setWarningAnim] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();

  const playAnim = () => {
    setWarningAnim(true);
    setTimeout(() => {
      setWarningAnim(false);
    }, 1000);
  };

  const onAuth = () => {
    const password = passwordRef.current.input.value;
    const number = numberRef.current.input.value;
    if (!password || !number) {
      playAnim();
      notification.error({
        message: "Please fill all fields",
      });
    } else {
      axios({
        url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
        method: "POST",
        data: {
          password,
          phoneNumber: number,
        },
      }).then((res) => console.log(res));
    }

    console.log(process.env.REACT_APP_MAIN_URL);
    console.log({
      password: passwordRef.current.input.value,
      number: numberRef.current.input.value,
    });
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom</Wrapper.Title>
        <Wrapper.Description>
          Biz har kuni kechagidan yaxshiroq xizmat ko'rsatishga intilamiz
        </Wrapper.Description>
        <Wrapper.Input
          ref={numberRef}
          addonBefore="+998"
          bordered={false}
          placeholder="99 999 99 99 "
          type="number"
        />
        <Wrapper.InputPassword
          ref={passwordRef}
          bordered={false}
          placeholder="Password... "
        />
        <Wrapper.Button warningAnimation={warningAnim} onClick={onAuth}>
          Login
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
