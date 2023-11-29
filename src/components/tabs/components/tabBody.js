import { memo } from "react";
import { get } from "lodash";

const TabBody = ({ body, index }) => {
  return get(body, `[${index}]`, "");
};

export default memo(TabBody);
