import axios from "axios";
import config from "../../config";
import storage from "../local-storage";
import history from "router/history";
import { get } from "lodash";
import { isProduction } from "utils";

const request = axios.create({
  baseURL: config.API_ROOT,
  params: {},
});
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

request.interceptors.request.use(
  (config) => {
    // MUHAMMAD AKA UCHUN
    // if (includes(config.url, "auth")) config.baseURL = "http://10.20.1.252:8198/api/";
    // else config.baseURL = "http://10.20.1.252:7997/api/";

    // config.headers.ServiceUsername = "usernameEducationService";
    // config.headers.ServicePassword = "educationServicePassword8434323212";

    if (!config.headers.Authorization) {
      const token = get(JSON.parse(get(JSON.parse(storage.get("persist:storage")), "auth", null)), "token", null) || null;
      if (token) {
        config.headers.Authorization = `${get(token, "tokenType")} ${get(token, "accessToken")}`;
      }
    }

    config.headers.TimeZone = timezone;
    return config;
  },
  (error) => {}
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const statusCode = get(error, "response.status");
    if ((statusCode === 401 || statusCode === 403) && isProduction()) {
      history.push("/auth");
    }

    return Promise.reject(error);
  }
);

export default request;
