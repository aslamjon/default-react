import { get } from "lodash";
import { useTranslation } from "react-i18next";

export const useT = (docs) => {
  const { t, ready } = useTranslation();

  return {
    t: (name, defaultValue) =>
      t(name, { defaultValue: get(docs, name, defaultValue) }) ?? get(docs, name, defaultValue),
    ready,
  };
};
