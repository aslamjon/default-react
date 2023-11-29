import axios from "axios";
import RequestApi from "./index";
import { get, isEqual } from "lodash";
import { showError } from "utils";
import configApp from "../../config";
let tokens = {};

const checkToken = (name) => {
  tokens[name] && tokens[name].cancel("Operation canceled by the user.");
  tokens[name] = axios.CancelToken.source();
};

const getConfigWithToken = (name, config = {}) => ({
  ...config,
  cancelToken: tokens[name].token,
});

class Api {
  static getAll = (url, config, method = "get") => {
    if (isEqual(method, "post")) {
      return RequestApi.post(url, config);
    }
    checkToken(url);
    return RequestApi.get(url, getConfigWithToken(url, config));
  };
  static getOne = (url, config) => {
    checkToken(url);
    return RequestApi.get(url, getConfigWithToken(url, config));
  };
  static getData = (url, config, method = "post") => {
    if (isEqual(method, "get")) {
      checkToken(url);
      return RequestApi.get(url, getConfigWithToken(url, config));
    }
    return RequestApi.post(url, config);
  };
  static operationAdd = (url, attributes) => {
    return RequestApi.post(url, attributes);
  };
  static operationDelete = (url, config) => {
    return RequestApi.delete(url, config);
  };
  static operationUpdate = (url, attributes, method = "put") => {
    if (isEqual(method, "patch")) {
      return RequestApi.patch(url, attributes);
    }
    return RequestApi.put(url, attributes);
  };

  static request = (url, attributes, method = "get", config) => {
    if (isEqual(method, "patch")) {
      return RequestApi.patch(url, attributes);
    }
    if (isEqual(method, "put")) {
      return RequestApi.put(url, attributes);
    }
    if (isEqual(method, "delete")) {
      return RequestApi.delete(url, attributes);
    }
    if (isEqual(method, "post")) {
      return RequestApi.post(url, attributes);
    }
    checkToken(url);
    return RequestApi.get(url, attributes, getConfigWithToken(url, config));
  };

  static FileUpload = (attributes, url) => {
    return RequestApi.post(url, attributes, {
      "Content-Type": "multipart/form-data",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  static DownloadFile = (url) => RequestApi.get(url, { responseType: "blob" });
}

export const request = async ({ url, data, method = "get", config, success = () => {}, fail = () => {}, finish = () => {} }) => {
  try {
    const res = await Api.request(url, data, method, config);
    success(res.data);
    finish(true);
  } catch (e) {
    showError({ e, isField: false });
    !configApp.isProduction && console.log("ERROR", e);
    fail(get(e, "response.data"));
    finish(false);
  }
};

export const fileUpload = async (
  file,
  url = `attachment/v1/attachment/upload-lms-files`,
  success = () => {},
  fail = () => {}
) => {
  try {
    const res = await Api.FileUpload(file, url);
    success(res.data);
  } catch (e) {
    showError({ e, isField: false });
    !configApp.isProduction && console.log("ERROR", e);
    fail(e?.response?.data);
  }
};

export const downloadFile = async ({
  url,
  success = () => {},
  fail = () => {},
  autoDownload = false,
  fileName = "file",
  mimeType,
}) => {
  try {
    const res = await Api.DownloadFile(url);
    const newUrl = window.URL.createObjectURL(new Blob([res.data]));
    if (autoDownload && mimeType) {
      const link = document.createElement("a");
      link.href = newUrl;
      link.setAttribute("download", `${fileName}.${mimeType}`);
      // document.body.appendChild(link);
      link.click();
    }

    success(newUrl, res.data);
  } catch (e) {
    showError({ e, isField: false });
    !configApp.isProduction && console.log("ERROR", e);
    fail(e?.response?.data);
  }
};

export default Api;
