import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoginContainer from "../containers/LoginContainer";

const LoginPageStyled = styled.div`
  label {
    margin-bottom: 10px;
  }
  h2 {
    margin-bottom: 80px;
  }
  .forgot-password {
    color: #ef466f;
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    margin-bottom: 30px;
    margin-top: 30px;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = ({ ...rest }) => {
  const { phone } = useParams();

  return (
    <LoginPageStyled>
      <LoginContainer phone={atob(phone)} {...rest} />
    </LoginPageStyled>
  );
};

export default LoginPage;
