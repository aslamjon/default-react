import React, { memo } from "react";
import { isArray } from "lodash";

const TabHeader = ({ header, index, clickHandling }) => {
  return (
    <div className="tabs__header">
      {isArray(header) &&
        header.map((val, ind) => (
          <div
            key={ind}
            data-index={ind}
            className={`tabs__header__tab ${index === ind && "active"}`}
            onClick={(e) => clickHandling(e, ind)}
          >
            {val}
          </div>
        ))}
    </div>
  );
};

export default memo(TabHeader);
