import React, { memo } from "react";
import { get } from "lodash";
import { withTranslation } from "react-i18next";

const ResetPasswordContainer = ({ t, match, history, ...rest }) => {
  if (get(match, "url", "") !== window.location.pathname) history.push(get(match, "url", ""));

  return <></>;
};

export default withTranslation("pdp")(memo(ResetPasswordContainer));
