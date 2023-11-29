import React from "react";
import { InitialLoader } from "../../components/loader";
import { persistor } from "../../store/Provider";
import { PersistGate } from "redux-persist/integration/react";
// eslint-disable-next-line
export default ({ children }) => (
  <PersistGate loading={<InitialLoader />} persistor={persistor}>
    {children}
  </PersistGate>
);
