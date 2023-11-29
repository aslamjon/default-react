import React, { forwardRef, memo } from "react";
import classNames from "classnames";
import styled, { css } from "styled-components";

const Style = styled.button`
  outline: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #777e91;
  text-align: center;
  background: #f4f5f6;
  border-radius: 6px;
  box-sizing: border-box;
  cursor: pointer;
  min-width: ${({ minWidth }) => minWidth + "px" || "auto"};
  transition: 0.3s ease;
  position: relative;
  display: inline-block;
  padding: ${({ padding }) => padding || "4px 17px"};
  border: 1px solid transparent;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    transition: 20ms;
    border-radius: 6px;
    transform: scale(0);
  }

  ${({ outline }) =>
    outline &&
    css`
      background-color: var(--bg--white);
      color: var(--light-md);
      border: 1px solid var(--textarea-bg);
    `}

  ${({ success }) =>
    success &&
    css`
      background-color: var(--text-green);
      color: var(--white);
    `}

  ${({ outlineSuccess }) =>
    outlineSuccess &&
    css`
      background: rgba(69, 179, 107, 0.1);
      border: 1px solid var(--green-back);
      color: #01ac56;

      &:hover {
        background: rgba(69, 179, 107, 0.3);
        color: #01ac56;
      }
    `}

    ${({ outlineDanger }) =>
    outlineDanger &&
    css`
      background: rgba(239, 70, 111, 0.1);
      color: #ef466f;
      border: 1px solid #ef466f;
      .icon {
        background: #ef466f !important;
      }
      &:hover {
        background: rgba(239, 70, 111, 0.2);
        color: #ef466f;
        .icon {
          background: #ef466f;
        }
      }
    `}

  ${({ danger }) =>
    danger &&
    css`
      background: #ef466f;
      color: #fcfcfd;

      &:hover {
        background: rgba(239, 70, 111, 0.9);
      }
    `}

    ${({ bg }) =>
    bg &&
    css`
      background: ${bg};
    `}

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        background: ${hover};
      }
    `}

  ${({ hoverColor }) =>
    hoverColor &&
    css`
      :hover {
        color: ${hoverColor};
      }
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

    ${({ hideclickanimation }) =>
    hideclickanimation
      ? ""
      : css`
          &:active:after {
            width: 100%;
            left: 0;
            transform: scale(1);
            transition: 90ms;
          }
        `}


    ${({ disabled }) =>
    disabled &&
    css`
      color: #b1b5c4;
      font-size: 16px;
      background: #fcfcfd;
      border: 1px solid #f4f5f6;
      cursor: default;

      &:hover {
        background: #fcfcfd;
        color: #b1b5c4;
      }
    `}
`;

const Button = forwardRef(
  (
    {
      children,
      type,
      className = "",
      onClick = () => {},
      disabled = false,
      hideClickAnimation = false,
      attr = {},
      success,
      ...props
    },
    ref
  ) => {
    return (
      <Style
        className={classNames(className, {
          disabled,
          success,
        })}
        {...{
          disabled,
          hideclickanimation: hideClickAnimation ? "1" : "",
          success: success ? "1" : "",
          ...props,
        }}
        onClick={(e) => !disabled && onClick(e)}
        type={type ? type : "button"}
        disabled={disabled}
        ref={ref}
        {...attr}
      >
        {children}
      </Style>
    );
  }
);
export default memo(Button);
