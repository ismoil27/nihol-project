import ReactDOM from "react-dom/client";
import Wrapper from "./hooks/Wrapper";
import "./index.css";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <Root />
  </Wrapper>
);
