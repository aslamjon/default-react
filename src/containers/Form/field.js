import React from "react";
import { Input } from "./components/input";
import FormConsumer from "../../context/form/FormConsumer";
import { Checkbox, Switcher } from "./components/checkbox";
import Radio from "./components/radioInput";
import CustomSelect from "./components/select/customSelect";
import VerificationCodeInput from "./components/verification-code-input/verification-code";
import ArrayContainer from "./components/array-container";

const Field = ({ type, ...rest }) => {
  return (
    <>
      {((type) => {
        switch (type) {
          case "input":
            return (
              <FormConsumer>
                {({ attrs, getValueFromField }) => <Input {...rest} {...attrs} getValueFromField={getValueFromField} />}
              </FormConsumer>
            );
          case "select":
            return (
              <FormConsumer>
                {({ attrs, getValueFromField }) => <CustomSelect {...rest} {...attrs} getValueFromField={getValueFromField} />}
              </FormConsumer>
            );

          case "switch":
            return (
              <FormConsumer>
                {({ attrs, getValueFromField }) => <Switcher {...rest} {...attrs} getValueFromField={getValueFromField} />}
              </FormConsumer>
            );
          case "checkbox":
            return (
              <FormConsumer>
                {({ attrs, getValueFromField }) => <Checkbox {...rest} {...attrs} getValueFromField={getValueFromField} />}
              </FormConsumer>
            );
          case "radio":
            return (
              <FormConsumer>
                {({ attrs, getValueFromField }) => <Radio {...rest} {...attrs} getValueFromField={getValueFromField} />}
              </FormConsumer>
            );
          case "verification":
            return <FormConsumer>{({ attrs }) => <VerificationCodeInput {...rest} {...attrs} />}</FormConsumer>;

          case "array-fields":
            return <FormConsumer>{({ attrs }) => <ArrayContainer {...rest} {...attrs} />}</FormConsumer>;

          default:
            return <FormConsumer>{({ attrs }) => <Input {...rest} {...attrs} />}</FormConsumer>;
        }
      })(type)}
    </>
  );
};

export default Field;
