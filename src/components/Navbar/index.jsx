import { Dropdown } from "antd";
import React from "react";
import { useDropDown } from "../../Generic/DropDownAPI";
import { Wrapper } from "./style";

const Navbar = () => {
  const { loginItems } = useDropDown();

  const settingHandler = () => {
    console.log("Clicked setting icon");
  };
  const switchLocaleHandler = () => {
    console.log("Clicked Locale icon");
  };
  const logOutHandler = () => {
    console.log("Clicked logout icon");
  };

  return (
    <Wrapper>
      <Wrapper.Title>NIHOL</Wrapper.Title>
      <Dropdown
        menu={{
          items: loginItems({
            settingHandler,
            switchLocaleHandler,
            logOutHandler,
          }),
        }}
        trigger={["click"]}
      >
        <Wrapper.Avatar>A</Wrapper.Avatar>
      </Dropdown>
    </Wrapper>
  );
};

export default Navbar;
