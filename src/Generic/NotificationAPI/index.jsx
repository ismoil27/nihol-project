import { notification } from "antd";

const notFound = {
  message: "Password or phone number is wrong!",
};

const notFillingError = {
  message: "Please fill all field",
};
const errorNotifier = ({ errorStatus }) => {
  switch (errorStatus) {
    case 409:
      return notification.error({ ...notFound });
    case "notFillingError":
      return notification.error({ ...notFillingError });

    default:
      break;
  }
};

export default errorNotifier;
