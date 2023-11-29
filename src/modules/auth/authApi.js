import { store } from "store/configure";
import { loading } from "./authSlice";

const { request } = require("services/api/api");

export const getMe = () => {
  store.dispatch(loading(false));
  request({
    url: "auth/v1/me",
    success: ({ data }) => {
      console.log(data);
      store.dispatch(loading(true));
    },
    fail: () => store.dispatch(loading(true)),
  });
};
