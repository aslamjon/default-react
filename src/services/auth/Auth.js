import React, { useEffect } from "react";
import { get, isNil } from "lodash-mini";
import Provider from "context/auth/AuthProvider";
import { hasAccess } from "utils";
import { useSelector } from "react-redux";
import { getMe } from "modules/auth/authApi";

const Auth = ({ children, logoutRequest, trigger }) => {
  const { isAuthenticated, isFetched, user } = useSelector((state) => get(state, "auth"));
  const persist = useSelector((state) => get(state, "_persist.rehydrated"));
  const lang = useSelector((state) => get(state, "settings.lang"));

  useEffect(() => {
    if (!isNil(lang) && persist) {
      // !window.location.pathname.includes("auth") && checkAuth(lang);
      getMe({ lang });
    }
    // eslint-disable-next-line
  }, [lang, persist]);

  // const handleOnIdle = (event) => {
  // if (isAuthenticated && getRemainingTime() === 0) {
  //   // logout
  // }
  // };

  // const handleOnActive = (event) => {};

  // const handleOnAction = (event) => {};

  // const { getRemainingTime, getLastActiveTime } = useIdleTimer({
  //   timeout: 1000 * 60 * 60,
  //   onIdle: handleOnIdle,
  //   onActive: handleOnActive,
  //   onAction: handleOnAction,
  //   debounce: 500,
  // });

  return (
    <Provider
      value={{
        isAuthenticated,
        isFetched,
        user,
        userCan: (items = [], can = "") => {
          return hasAccess(items, can);
        },
      }}
    >
      {children}
    </Provider>
  );
};

export default Auth;
