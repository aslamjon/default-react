import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./configure";

const ProviderComponent = ({ children }) => <Provider store={store}>{children}</Provider>;

export { store, persistor };
export default ProviderComponent;
