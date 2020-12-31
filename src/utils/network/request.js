import axios from "axios";

const setInitialHeaders = () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
  };
};

const initAxiosDefaults = () => {
  setInitialHeaders();
};

export default () => {
  initAxiosDefaults();
  return axios;
};
