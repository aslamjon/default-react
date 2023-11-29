import React, { memo } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";

const StyledContent = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  width: 100%;
  min-width: 94vw;
  height: 100%;
  .Content__body {
    overflow: auto;
    height: 100vh;
    .simplebar-content {
      height: 100%;
    }
    transition: 0.2s;

    &::-webkit-scrollbar {
      width: 20px;
      height: 10px;
      background: transparent;
      &-track,
      &-thumb {
        border: none;
        background: transparent;
      }
      &-button,
      &-track-piece,
      &-corner {
        display: none;
      }
      &-track {
        background: #eff1f3;
      }
      &-thumb {
        background: #777e91;
        border-radius: 3px;
        background-clip: padding-box;
        &:vertical {
          border-left: 5px solid #eff1f3;
          border-right: 5px solid #eff1f3;
          box-sizing: border-box;
          border-radius: 8px;
        }
        &:hover {
          background: rgba(129, 136, 154, 1);
        }
      }
    }
  }
`;
const Content = ({ children, ...rest }) => {
  return (
    <StyledContent {...rest}>
      <SimpleBar className="Content__body">{children}</SimpleBar>
    </StyledContent>
  );
};

export default memo(Content);
