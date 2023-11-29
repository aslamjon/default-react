import { get, isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Consumer from "context/auth/AuthConsumer";

const HasAccess = ({ children }) => {
  const { breadcrumbs = [], breadcrumb = "" } = useSelector((state) => get(state, "settings"));

  useEffect(() => {
    if (!isEmpty(breadcrumbs)) {
      let item = breadcrumbs.find((item) => item.url === breadcrumb);
      document.title = `PDP Ecosystem | ${get(item, "name", "")}`;
    }
    // eslint-disable-next-line
  }, [breadcrumb]);

  return (
    <>
      <Consumer>{(props) => children(props)}</Consumer>
    </>
  );
};

export default HasAccess;
