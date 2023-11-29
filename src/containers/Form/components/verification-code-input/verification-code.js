import React, { useEffect } from "react";
// import OtpInput from "react-otp-input";
import styled from "styled-components";
// import OTPInput from "otp-input-react";
import Label from "../../../../components/elements/label";
// import { ErrorMessage } from "@hookform/error-message";
// import errorImg from "../../../../assets/icons/error2.svg";
import Flex from "components/elements/flex";

const StyledVerificationInput = styled.div``;

const VerificationCodeInput = ({
  Controller,
  control,
  register,
  name,
  watch,
  getValues,
  setValue,
  errors,
  params,
  property,
  defaultValue,
  label,
  setError,
  hideLabel,
  clearErrors,
  ...rest
}) => {
  useEffect(() => {
    if (getValues(name)) {
      if (getValues(name).length < 6) setError(name, { type: "required", message: "Error" });
      else clearErrors(name);
    }
  }, [watch(name)]);
  return (
    <StyledVerificationInput {...rest}>
      {!hideLabel && <Label htmlFor={name}>{label}</Label>}
      <Flex justify={"center"}></Flex>
    </StyledVerificationInput>
  );
};

export default VerificationCodeInput;
