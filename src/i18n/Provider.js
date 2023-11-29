import React from "react";
import { I18nextProvider } from "react-i18next";
import configure from "./configure";
import config from "config";

const I18n = ({ children }) => {
  return config.LANGUAGE ? <I18nextProvider i18n={configure()}>{children}</I18nextProvider> : children;
};

export default I18n;
