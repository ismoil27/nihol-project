import { Dropdown } from "antd";
import React from "react";
import { useDropDown } from "../../Generic/DropDownAPI";
import { Wrapper } from "./style";

const Navbar = () => {
  const { loginItems } = useDropDown();

  return (
    <Wrapper>
      <Wrapper.Title>NIHOL</Wrapper.Title>
      <Dropdown
        menu={{
          items: loginItems,
        }}
        trigger={["click"]}
      >
        <Wrapper.Avatar>A</Wrapper.Avatar>
      </Dropdown>
    </Wrapper>
  );
};

export default Navbar;
