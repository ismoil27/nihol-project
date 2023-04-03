import { Provider } from "react-redux";
import store from "../../redux";
import { ConfigProvider } from "antd";
import ru_RU from "antd/locale/ru_RU";
import { BrowserRouter } from "react-router-dom";

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Wrapper;
