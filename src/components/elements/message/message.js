import React, { memo } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import sadImg from "assets/icons/sad.svg";
import surpise from "assets/icons/surprise.svg";

const MessageStyled = styled.div`
  width: 720px;
  height: 104px;
  background: var(--bg--white);
  border: 1px solid var(--border);
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  border-radius: var(--br-message);
  padding: 12px;
  display: flex;
  position: fixed;
  top: -50%;
  left: 50%;
  translate: -50% 0;
  transition: 0.3s ease;
  .img-container {
    width: 80px;
    min-width: 80px;
    height: 80px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    &.green {
      background: var(--bg--greener);
    }
    &.red {
      background: var(--light--bg--red);
    }
  }
  .message {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: var(--text-black);
    margin-top: 12px;
    width: 100%;
    .score {
      font-weight: 600;
      &.red {
        color: var(--danger);
      }
      &.green {
        color: var(--green);
      }
    }
  }
  .total-score {
    width: 75px;
    display: flex;
    justify-content: flex-end;
    margin: 12px 12px 0 0;
    font-weight: 500;
    font-size: 16px;
    color: var(--text-gray);
  }

  ${({ active }) =>
    active &&
    css`
      top: 84px;
    `}
`;

function Message({ message, score = 0, status = "success", active, totalScore = 0, ...rest }) {
  return (
    <MessageStyled {...{ active }}>
      <div
        className={classNames("img-container", {
          red: status === "fail",
          green: status === "success",
        })}
      >
        <img src={status === "success" ? surpise : sadImg} alt="surpise" />
      </div>
      <div className="message">
        {message}
        <div
          className={classNames("score", {
            red: status === "fail",
            green: status === "success",
          })}
        >
          Your score {score}
        </div>
      </div>
      <div className="total-score">{totalScore}</div>
    </MessageStyled>
  );
}

export default memo(Message);
