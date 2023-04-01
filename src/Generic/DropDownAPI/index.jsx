import { DropDownContentWrapper } from "../Styles";
import {
  SettingOutlined,
  LogoutOutlined,
  TranslationOutlined,
} from "@ant-design/icons";

const customIconStyle = {
  fontSize: "18px",
};

export const useDropDown = () => {
  const loginItems = ({
    settingHandler,
    switchLocaleHandler,
    logOutHandler,
  }) => [
    {
      label: (
        <DropDownContentWrapper onClick={settingHandler}>
          <SettingOutlined style={customIconStyle} />
          Settings
        </DropDownContentWrapper>
      ),
      key: "0",
    },
    {
      label: (
        <DropDownContentWrapper onClick={switchLocaleHandler}>
          <TranslationOutlined style={customIconStyle} />
          Change language
        </DropDownContentWrapper>
      ),
      key: "1",
    },
    {
      label: (
        <DropDownContentWrapper
          onClick={logOutHandler}
          style={{ color: "red" }}
        >
          <LogoutOutlined style={{ ...customIconStyle, color: "red" }} />
          Log out
        </DropDownContentWrapper>
      ),
      key: "3",
    },
  ];
  return { loginItems };
};
