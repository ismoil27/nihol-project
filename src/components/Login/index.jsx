import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { useAxios } from "../../hooks/useAxios/useAxios";
import errorNotifier from "../../Generic/NotificationAPI";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const axios = useAxios();
  const [warningAnim, setWarningAnim] = useState(false);
  const numberRef = useRef();
  const passwordRef = useRef();

  const playAnim = () => {
    setWarningAnim(true);
    setTimeout(() => {
      setWarningAnim(false);
    }, 1000);
  };

  const onKeyDetect = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      return onAuth();
    }
  };

  const onAuth = async () => {
    if (loading) return;
    const password = passwordRef.current.input.value;
    const number = numberRef.current.input.value;
    if (!password || !number) {
      playAnim();
      errorNotifier({ errorStatus: "notFillingError" });
      return;
    }
    setLoading(true);
    const response = await axios({
      url: `/user/sign-in`,
      method: "POST",
      body: {
        password: password,
        phoneNumber: `+998${number}`,
      },
    });

    setLoading(false);

    if (response?.response?.status >= 400)
      return errorNotifier({ errorStatus: response?.response?.status });

    const { token } = response.data.data;

    localStorage.setItem("token", token);
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
          onKeyDown={onKeyDetect}
        />
        <Wrapper.Button warningAnimation={warningAnim} onClick={onKeyDetect}>
          {loading ? <LoadingOutlined /> : " Login "}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
