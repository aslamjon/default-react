import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "modules/auth/authSlice";
import settingsSlice from "modules/settings/settingsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authSlice,
  settings: settingsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
