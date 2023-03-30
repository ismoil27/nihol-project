import axios from "axios";
const { REACT_APP_MAIN_URL } = process.env;

export const useAxios = () => {
  return async ({ url, method = "GET", body, headers }) => {
    return await axios({
      url: `${REACT_APP_MAIN_URL}${url}`,
      method,
      data: {
        ...body,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Allow-Control-Origin": true,
        ...headers,
      },
    })
      .then((response) => response)
      .catch((error) => error);
  };
};
