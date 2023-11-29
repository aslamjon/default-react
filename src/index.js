import React from "react";
import { createRoot } from "react-dom/client";
import Theme from "./theme";
import Router from "./router";
import Auth from "./services/auth/Auth";
import Store from "./store";
import I18n from "./i18n/Provider";
import Persist from "./services/persist";
import config from "./config";

config.isProduction &&
  setTimeout(() => {
    console.clear();
    console.log(`
    ###########################################

            DEVELOPED BY ECMA TEAM

            DEVELOPERS:

            https://github.com/aslamjon

    ###########################################
            `);
  }, 15000);

const root = createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Store>
    <Auth>
      <Persist>
        <I18n>
          <Theme>
            <Router />
          </Theme>
        </I18n>
      </Persist>
    </Auth>
  </Store>
  // </React.StrictMode>
);
