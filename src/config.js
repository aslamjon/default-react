const isProduction = () => {
  const env = process.env.NODE_ENV || "development";
  return env === "production";
};

const getVarable = (name) => {
  if (isProduction()) return process.env[`${name}_PRODUCTION`] ? process.env[`${name}_PRODUCTION`] : "production_env_not_found";
  else return process.env[`${name}_DEVELOPMENT`] !== undefined ? process.env[`${name}_DEVELOPMENT`] : "development_env_not_found";
};

const config = {
  APP_NAME: "PDP ERP SYSTEM",
  API_ROOT: getVarable("REACT_APP_BASE_URL"),
  isProduction: isProduction(),
  DOMAIN: getVarable("REACT_APP_DOMAIN"),
  LANGUAGE: getVarable("REACT_APP_LANGUAGE"),
  DEFAULT_LANG_CODE: "uz",
  PROJECT_ID: 1,
};

export default config;
