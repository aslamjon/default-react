import { isFunction } from "lodash";
import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";

const portal = document.getElementById("portal");

const Portal = ({ children, outsideClick = null }) => {
  return ReactDOM.createPortal(
    isFunction(outsideClick) ? <OutsideClickHandler onOutsideClick={outsideClick}>{children}</OutsideClickHandler> : children,
    portal
  );
};
export default Portal;
