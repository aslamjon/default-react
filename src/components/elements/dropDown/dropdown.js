import React, { memo, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { isArray, get, isNumber } from "lodash";
import OutsideClickHandler from "react-outside-click-handler";
import classNames from "classnames";

const DropdownStyle = styled.div`
  position: relative;
  display: inline-block;

  ${({ sizeAuto }) =>
    sizeAuto &&
    css`
      height: auto;
      width: auto;
    `}
  .dropDown {
    &__button {
      cursor: pointer;
    }
    &__body {
      background: #fcfcfc;
      border: 1px solid #f4f5f6;
      box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05), 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(16px);
      border-radius: 16px;
      position: absolute;
      top: 30px;
      right: 0;
      transition: 0.2s;
      overflow: hidden;
      z-index: 10;
      display: inline-block;
      /* opacity: 0; */
      /* transform: translateX(0px) scale(0) translateZ(0px); */
      animation: hideAnim 0.1s forwards;
      &__option {
        /* padding: 6px 15px; */
      }
    }
  }
  &.dropDown {
    &.active {
      .rs-anim-bounce-in,
      .rs-anim-bounce-out {
        z-index: 2;
      }
      .dropDown__body {
        /* opacity: 1;
        transition: 0.3s;
        transform: scale(1); */
        animation: showAnim 0.15s forwards;
      }
    }
  }

  ${({ isFixed, x, y }) =>
    isFixed &&
    x &&
    y &&
    css`
      .dropDown {
        &__body {
          position: fixed;
          top: ${y}px;
          left: ${x}px;
          min-width: 100px;
          transition: none;
          z-index: 99999999999 !important;
        }
      }
    `}

  .dropdown__top {
    max-height: 70vh;
    overflow: auto;
  }
`;

const Dropdown = ({
  button,
  options,
  children,
  className = "",
  sizeAuto = false,
  isClose,
  active,
  onClose = () => "",
  onChange = () => "",
  clickButton = () => "",
  isFixed = false,
  getXandY = () => "",
  fixedConfig = {
    xAdditional: 0,
    bodyHeight: 80,
  },
  buttonRef,
  isDiabledOutsideClick = false,
  bodyClassName = "",
}) => {
  const [show, setShow] = useState(false);
  const [lastPosition, setLastPosition] = useState({});

  let yLocalAdditional = 0;

  if (isNumber(get(fixedConfig, "bodyHeight")) && window.innerHeight - lastPosition.y < get(fixedConfig, "bodyHeight")) {
    yLocalAdditional = get(fixedConfig, "bodyHeight") - (window.innerHeight - lastPosition.y) + 10;
  }

  const handleToggle = (e) => {
    // const elem = e.target;
    // const rect = elem?.getBoundingClientRect() || {};

    // setTop(rect.top + window.scrollY || 0);
    // setLeft(rect.left + window.scrollX || 0);

    e.stopPropagation();
    show && onClose();
    onChange(!show, setShow);
    setShow((s) => !s);
    isFixed &&
      setLastPosition((s) => ({
        x: get(e, "clientX", 0),
        y: get(e, "clientY", 0),
      }));
    isFixed &&
      getXandY({
        x: get(e, "clientX", 0),
        y: get(e, "clientY", 0),
        other: e,
      });
    clickButton();
  };

  useEffect(() => {
    if (isClose) setShow(false);
  }, [isClose]);

  useEffect(() => {
    if (active) setShow(true);
    else if (active === false) setShow(false);
  }, [active]);

  const outsideClick = () => {
    if (!isDiabledOutsideClick) {
      show && onClose();
      show && onChange(!show);
      setShow(false);
    }
  };

  return (
    <DropdownStyle
      className={classNames("dropDown", {
        active: show,
        [className]: className,
        isFixed: isFixed,
      })}
      {...{
        sizeAuto,
        x: isFixed ? get(lastPosition, "x", 0) + get(fixedConfig, "xAdditional", 0) : null,
        y: isFixed ? get(lastPosition, "y", 0) - yLocalAdditional : null,
        isFixed,
      }}
    >
      <OutsideClickHandler onOutsideClick={outsideClick}>
        <div className="dropDown__button" ref={buttonRef} onClick={handleToggle}>
          {button}
        </div>
        <div
          animate={{
            x: 0,
            scale: show ? 1 : 0,
            opacity: show ? 1 : 0,
            transitionEnd: {
              // display: "none",
            },
          }}
          transition={{ type: "spring", duration: 0.2 }}
          style={{ display: "inline-block" }}
          className={classNames(`dropDown__body beauty__scrollbar__div`, {
            [bodyClassName]: bodyClassName,
            active: show,
          })}
        >
          {show && (
            <>
              {isArray(options) &&
                options.map((val, ind) => (
                  <div
                    key={ind + Math.floor(Math.random() * 99999999999)}
                    className="dropDown__body__option"
                    onClick={() => handleToggle}
                  >
                    {" "}
                    {val}{" "}
                  </div>
                ))}
              {children}
            </>
          )}
        </div>
      </OutsideClickHandler>
    </DropdownStyle>
  );
};

export default memo(Dropdown);
