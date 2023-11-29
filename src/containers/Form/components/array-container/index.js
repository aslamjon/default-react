import { get, isArray, isEmpty, isNull } from "lodash";
import React, { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

const ArrayFieldsContainer = ({
  register,
  name = "",
  errors,
  getValues,
  defaultValue,
  watch,
  setValue,
  getValueFromField = () => {},
  hideError = false,
  clearErrors,
  control,
  FieldsBody = () => {},
  ...rest
}) => {
  const { fields, append, remove, swap, replace, update } = useFieldArray({
    control,
    name,
  });
  if (get(errors, name) && isArray(get(errors, name)) && isEmpty(get(errors, name).filter((e) => e))) {
    clearErrors(name);
  }

  useEffect(() => {
    if (!isEmpty(defaultValue)) {
      replace(defaultValue);
    }
    if (isNull(defaultValue)) {
      replace([]);
    }
  }, [defaultValue]);

  return <FieldsBody {...{ getValues, fields, append, remove, swap, update, name, replace, ...rest }} />;
};

export default ArrayFieldsContainer;
