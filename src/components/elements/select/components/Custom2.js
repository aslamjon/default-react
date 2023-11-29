import React, { useState } from "react";
import Icon from "../../icon";
import styled, { css } from "styled-components";
import { get } from "lodash";
import ColorPicker from "../../colorPicker/colorPicker";
import OutsideClickHandler from "react-outside-click-handler";

const DropDownStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
  .dropdown__option {
    display: flex;
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    gap: 3px;
  }
  /* .drop-down-dots {
    ${({ color = "rgba(69, 178, 107, 0.1)" }) =>
    color &&
    css`
      background: ${color};
      height: 100%;
      display: flex;
      align-items: center;
      border-radius: 5px 0 0 5px;
      opacity: 0.8;

      .ui__icon__wrapper {
        .icon {
          background-color: #fcfcfd;
        }
      }

      &:hover {
        opacity: 0.9 !important;
      }
    `}
  } */

  .dropDown__body {
    right: -20px;
    left: auto;
    top: auto;
    overflow: unset;
    width: 150px;
  }
`;

const CustomActionDropDownn = ({}) => {
  // const [clientXY, setClientXY] = useState({})

  const openGlobalBody = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div onClick={openGlobalBody} className="drop-down-dots">
      <Icon icon="icon-more-dots" mainClassName="notClose" color="#353945" />
    </div>
  );
};

export default CustomActionDropDownn;
