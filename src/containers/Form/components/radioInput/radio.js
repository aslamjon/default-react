import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ErrorMessage } from "@hookform/error-message";
import errorImg from "../../../../assets/icons/error2.svg";
import { isNull, isUndefined } from "lodash";

const StyledRadio = styled.div`
  input:where([type="checkbox"], [type="radio"]) {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    margin: calc(0.75em - 4px) 0.25rem 0 2px;
    vertical-align: top;
    border-radius: 4px;
    background: #fff no-repeat center center;
    outline: 2px solid #b1b5c4;
    outline-offset: 2px;
  }
  input:checked:where([type="checkbox"], [type="radio"]) {
    background: rgba(69, 178, 107, 1) no-repeat center center;
    outline: 2px solid rgba(69, 178, 107, 1);
    outline-offset: 2px;
  }

  ${({ hideLabel }) =>
    !hideLabel &&
    css`
      input:where([type="checkbox"], [type="radio"]) {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border: 1.25px solid var(--border);
        border-radius: 4px;
        background: none;
        outline: none;
      }
      input:checked:where([type="checkbox"], [type="radio"]) {
        outline: none;
        width: 18px;
        height: 18px;
        border: none;
        background-size: contain;
      }
    `}

  .form-input-radio {
    margin: 0 !important;
    padding: 0 !important;
  }
  input[type="radio"] {
    cursor: pointer;
    border-radius: 50%;
  }
  .radio-with-button {
    width: 100%;
    min-width: 150px;
    height: 44px;
    padding: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    background: var(--input-light);
    cursor: pointer;
    border: 1px solid var(--border);
    border-radius: 8px;
  }
`;

const Radio = ({
  register,
  name,
  personalName,
  errors,
  params,
  setValue,
  property,
  defaultValue,
  isEditable = true,
  radioDisable = false,
  label = "",
  hideLabel,
  getValues,
  getValueFromField = () => {},
  watch,
  valueForChecked = null,
  onChange = () => "",
  ...rest
}) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (getValues(name)) {
      getValueFromField(getValues(name), name);
      if (personalName) setValue(personalName, getValues(name) === valueForChecked);
    }

    if (isUndefined(getValues(name)) && defaultValue) {
      setValue(name, defaultValue);
    }
  }, [watch(name)]);

  useEffect(() => {
    if (!isUndefined(defaultValue) && !isNull(defaultValue) && getValues(name) !== defaultValue) {
      if (!isUndefined(valueForChecked)) {
        setValue(name, defaultValue);
      } else {
        setValue(name, valueForChecked);
      }
      onChange(defaultValue);
      setRender(!render);
    }
  }, [defaultValue]);

  const getChecked = () => {
    return getValues(name) === valueForChecked;
  };

  return (
    <StyledRadio hideLabel={hideLabel} className={`radio ${getChecked() && "checked"}`} {...rest}>
      {hideLabel ? (
        <input
          type="radio"
          name={name}
          className="form-input-radio"
          onChange={(e) => {
            if (!isUndefined(valueForChecked)) setValue(name, valueForChecked);
            else setValue(name, true);
          }}
          disabled={!isEditable || radioDisable}
          value={getValues(name)}
          checked={getChecked()}
        />
      ) : (
        <label className="radio-with-button">
          <span>{label}</span>
          <input
            type="radio"
            name={name}
            disabled={!isEditable || radioDisable}
            className="form-input-radio"
            onChange={(e) => {
              if (!isUndefined(valueForChecked)) setValue(name, valueForChecked);
              else setValue(name, true);
            }}
            value={getValues(name)}
            checked={getChecked()}
          />
        </label>
      )}

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages = `${label} is required` }) => {
          return (
            <small className="form-error-message">
              <img src={errorImg} alt="" /> {messages}
            </small>
          );
        }}
      />
    </StyledRadio>
  );
};

export default Radio;
