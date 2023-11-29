import { isEmpty, isNumber, isString } from "lodash";
import { formatDate, numberPrettier } from "utils";

function numberPrettierFunction(type = "comma") {
  if (type === "comma") return isNumber(this) ? Number(this).toLocaleString() : "";
  return isEmpty(this) && isString(this) ? "" : numberPrettier(this);
}
function formatDateFunction(format = "dd/MM/yyyy") {
  return formatDate(new Date(this), format);
}

export const prototype = () => {
  Number.prototype.formatDate = formatDateFunction;
  Number.prototype.numberPrettier = numberPrettierFunction;
  String.prototype.numberPrettier = numberPrettierFunction;
  Array.prototype.numberPrettier = function () {
    return this;
  };
  window.numberPrettier = numberPrettier;
  // window.formatDate = function (date, format = "dd/MM/yyyy") {
  //   return formatDate(new Date(date), format);
  // };
};
