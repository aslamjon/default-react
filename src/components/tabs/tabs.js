import React, { memo, useCallback, useEffect, useState } from "react";
import { get, isEmpty, isNull } from "lodash";
import { TabsStyle } from "./tabs-style";
import TabHeader from "./components/tabHeader";
import TabBody from "./components/tabBody";
import { withTranslation } from "react-i18next";

const Tabs = ({
  className,
  header,
  body,
  onChange = () => "",
  index = 0,
  canChange = true,
  CustomHader = TabHeader,
  CustomBody = TabBody,
  t,
}) => {
  const [state, setState] = useState({
    index,
  });

  useEffect(() => {
    if (isEmpty(state)) setState({ index });
    else canChange && onChange(get(state, "index", 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index]);

  useEffect(() => {
    setState({
      index,
    });
  }, [index]);

  const clickHandling = useCallback(
    (e, ind) => {
      !isNull(index) && canChange && setState((s) => ({ ...s, index: ind }));
    },
    [index, canChange]
  );

  return (
    <TabsStyle className={`tabs ${className}`}>
      <CustomHader {...{ header, index: state.index, clickHandling, t }} />
      <CustomBody {...{ body, index: state.index, t }} />
    </TabsStyle>
  );
};
export default withTranslation("pdp")(memo(Tabs));
