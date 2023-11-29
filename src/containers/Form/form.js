import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { isArray, isEmpty } from "lodash";
import FormProvider from "../../context/form/FormProvider";

const StyledForm = styled.form`
  .form-group {
    margin-bottom: 30px;
  }

  .form-error-message {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #ef466f;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
const Form = ({
  children,
  formRequest = () => "",
  isFetched,
  footer = "",
  getValueFromField = () => {},
  onError = () => {},
  mainClassName = "",
  isClear = false,
  resetData,
  setValueData,
  formCb,
  dataForCb = {},
  ...rest
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
    setValue,
    watch,
    control,
    reset,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    formRequest({ data, setError, reset });
    isClear && reset();
  };
  const handleError = (errors) => {
    onError({ errors, clearErrors });
  };

  const attrs = {
    Controller,
    register,
    errors,
    control,
    getValues,
    watch,
    setError,
    setValue,
    clearErrors,
    ...rest,
  };

  useEffect(() => {
    !isEmpty(resetData) && reset(resetData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetData]);

  useEffect(() => {
    if (!isEmpty(formCb)) formCb.call({ getValues, setValue, reset, ...dataForCb });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCb]);

  useEffect(() => {
    if (!isEmpty(setValueData) && isArray(setValueData)) {
      setValueData.forEach((item) => {
        setValue(item?.name, item?.value);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValueData]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit, handleError)} {...rest} className={mainClassName}>
      <FormProvider value={{ attrs, getValueFromField }}>{children}</FormProvider>
      {footer}
    </StyledForm>
  );
};

export default Form;
