import React from "react";

const ImgFile = ({
  register,
  onChange,
  defaultValue,
  isError,
  disabled,
  name,
  property,
  placeholder,
  value,
  params,
  ...rest
}) => {
  const [{ error, focused }, setState] = useState({});

  useEffect(() => {
    if (isError !== error) {
      setState((s) => ({ ...s, error: isError }));
    }
  }, [isError]);

  const onChangeHandling = (e) => {
    const val = e.target.value;
    if (get(property, "type") === "number") {
      if (checkNum(val) || val === "") onChange(val);
    } else if (get(property, "type") === "tel") {
      let pattern = /^\d+$/;
      if (pattern.test(val)) onChange(val);
    } else if (get(property, "type") === "email") {
      onChange(val);
      if (/.+@.+\.[A-Za-z]+$/.test(val)) setState((s) => ({ ...s, isError: false }));
      else setState((s) => ({ ...s, isError: true }));
    } else onChange(val);
  };

  function checkNum(num) {
    let two = new RegExp(/^.{0,15}$/);
    let one = new RegExp(/^[0-9]+([.][0-9]+)?$/);
    return one.test(num) && two.test(num);
  }

  const onChangeCurrencyInput = (e) => {
    let value = e.target.value;
    let val = "";
    value.split("").forEach((v) => {
      if (!isNaN(Number(v))) val += v;
      val = val.trim();
    });
    if (isNaN(Number(val))) onChange(null);
    onChange(val);
  };

  const getInputType = useCallback((type) => {
    if (type === "number") return "text";
    return type;
  }, []);

  function replaceStar(value) {
    return "*".repeat(String(value).length);
  }

  return (
    <StyledInput
      {...{
        disabled,
        magic: replaceStar(value || ""),
        error,
        focused,
        type: getInputType(get(property, "type", "text")),
      }}
      className={classNames("form-input", { disabled, error, focused: true })}
    >
      {get(property, "type") !== "money" ? (
        <input
          name={name}
          {...property}
          {...register}
          className="input"
          readOnly={get(property, "disabled")}
          placeholder={get(property, "placeholder", placeholder)}
          type={getInputType(get(property, "type", "text"))}
          onChange={onChangeHandling}
          autoComplete="off"
          value={value}
          onFocus={(e) => {
            setState((state) => ({
              ...state,
              focused: true,
            }));
            get(property, "onFocus", () => {})(e);
          }}
          onBlur={(e) => {
            setState((state) => ({
              ...state,
              focused: false,
            }));
            get(property, "onBlur", () => {})(e);
          }}
        />
      ) : (
        <CurrencyInput
          decimalsLimit={0}
          className="input"
          name={name}
          {...register}
          readOnly={get(property, "disabled")}
          placeholder={get(property, "placeholder", placeholder)}
          type={get(property, "type", "text")}
          defaultValue={defaultValue}
          autoComplete="off"
          onChange={onChangeCurrencyInput}
          value={value}
          onFocus={(e) => {
            setState((state) => ({
              ...state,
              focused: true,
            }));
            get(property, "onFocus", () => {})(e);
          }}
          onBlur={(e) => {
            setState((state) => ({
              ...state,
              focused: false,
            }));
            get(property, "onBlur", () => {})(e);
          }}
        />
      )}
    </StyledInput>
  );
};

export default ImgFile;
