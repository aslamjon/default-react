import React, { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { get, includes, isEmpty, isUndefined, isString, isNumber } from "lodash";
import Label from "components/elements/label";
import errorImg from "assets/icons/error2.svg";
import Input from "components/elements/form-fields/input/Input";

const InputField = ({
  register,
  getValues,
  watch,
  errors,
  clearErrors,
  setValue,
  getValueFromField = () => {},
  disabled = false,
  name,
  params,
  property,
  defaultValue = "",
  hideLabel,
  label,
  hideError = false,
  labelRequired,
  maxLength = 524288,
  minLength = 1,
  placeholder,
  onChange = () => "",
  labelClassName,
  className,
  children,
  t,
  ...rest
}) => {
  const setValueInState = (value) => {
    if (get(property, "type") == "number" && value === "") value = null;
    if (!disabled) {
      setValue(name, value);
      onChange(value);
      getValueFromField(value, name);
    }
  };

  useEffect(() => {
    if (!isEmpty(defaultValue) && isUndefined(getValues(name))) {
      console.log(getValues(name));
      setValue(name, defaultValue || "");
    }
  }, [watch(name)]);

  useEffect(() => {
    if (getValues(name) !== defaultValue && isString(defaultValue)) {
      setValue(name, defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if ((!isEmpty(getValues(name)) || isNumber(getValues(name))) && get(errors, name)) clearErrors(name);
  }, [errors, getValues(name)]);

  const isError = () => get(errors, name, false) && get(params, "required", false);

  return (
    <div className={"form-input " + className}>
      {!hideLabel && (
        <Label htmlFor={name} className="form-label">
          {label} {labelRequired && <span style={{ color: "red" }}>*</span>}
        </Label>
      )}
      <Input
        {...{
          value: getValues(name) || "",
          onChange: setValueInState,
          name,
          disabled,
          property,
          placeholder,
          params,
          isError: isError(),
          register: register(name, params),
          ...rest,
        }}
      />
      {!hideError && isError() && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ messages = `${label} is required` }) => {
            let isThereDot = includes(name, ".");
            const isRequired = t("is_required") ?? "is_required";
            const isNotValid = t("is_not_valid") ?? "is_not_valid";

            if (isThereDot) {
              if (get(errors, `${name}.type`) == "required") {
                messages = `${label} ${isRequired}`;
              }
              if (get(errors, `${name}.type`) == "pattern") {
                messages = `${label} ${isNotValid}`;
              }
              if (get(errors, `${name}.type`) == "manual") {
                messages = `${label} ${errors[name].message}`;
              }
            } else {
              if (errors[name].type == "required") {
                messages = `${label} ${isRequired}`;
              } else if (errors[name].type == "pattern") {
                messages = `${label} ${isNotValid}`;
              } else if (errors[name].type == "manual") {
                messages = `${label} ${errors[name].message}`;
              } else {
                messages = `${errors[name].message}`;
              }
            }
            return (
              <small className="form-error-message">
                <img src={errorImg} alt="" /> {messages}
              </small>
            );
          }}
        />
      )}
    </div>
  );
};

export default InputField;
