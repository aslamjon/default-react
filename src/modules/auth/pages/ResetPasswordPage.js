import React, { memo } from "react";
import styled from "styled-components";
import ResetPasswordContainer from "../containers/ResetPasswordContainer";

const ResetPasswordStyled = styled.div`
  label {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  h2 {
    margin-bottom: 80px;
  }
  .input-container {
    margin-bottom: 30px;
    &.last {
      margin-bottom: 20px;
    }
  }
  .rc-checkbox {
    margin-right: 15px;
  }
  .form-input {
    margin-bottom: 20px;
  }
`;

const ResetPasswordPage = ({ ...rest }) => {
  return (
    <ResetPasswordStyled>
      <ResetPasswordContainer {...rest} />
    </ResetPasswordStyled>
  );
};

export default memo(ResetPasswordPage);
