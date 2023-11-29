import React, { memo } from "react";
import styled, { css } from "styled-components";

const Style = styled.div`
  --lite: #fff;
  --brand: #ff3d00;
  width: 175px;
  height: 80px;
  background-image: radial-gradient(circle 25px at 25px 25px, var(--lite) 100%, transparent 0),
    radial-gradient(circle 50px at 50px 50px, var(--lite) 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, var(--lite) 100%, transparent 0), linear-gradient(var(--lite) 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: "";
    left: 0;
    right: 0;
    margin: auto;
    bottom: 20px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-color: var(--brand) transparent;
    animation: rotation 1s linear infinite;
  }

  ${({ size }) => css`
    transform: scale(${size});
  `}

  ${({ bg }) => css`
    --lite: ${bg};
  `}

  ${({ color }) => css`
    --brand: ${color};
  `}


  /* keyFrames */

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const UploadLoader = ({ size = 1, bg = "#fff", color = "var(--green)", ...props }) => (
  <Style className="loader" {...{ size, bg, color, ...props }} />
);

export default memo(UploadLoader);
