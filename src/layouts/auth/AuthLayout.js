import React from "react";
import styled from "styled-components";
import Toastify from "../../components/toastify";

const StyledAuthLayout = styled.div`
  display: flex;
  height: 100vh;

  .auth {
    &__right {
      width: 100%;
      padding: 60px;
      position: relative;

      .logo {
        position: absolute;
        cursor: pointer;
        top: 60px;
        left: 60px;
        width: 150px;
      }

      .text-center {
        margin-top: 10px;
      }

      &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -48%);
        width: 400px;

        .from-label {
          margin-bottom: 14px;
        }

        .backButton,
        .nextButton {
          padding-top: 16px;
          padding-bottom: 16px;
          width: 190px;
          height: 50px;
        }

        .backButton {
          display: flex;
          align-items: center;
          justify-content: center;
          .left-arrow {
            position: absolute;
            left: 25px;
          }
          &:hover {
            color: #353945;

            .icon {
              background-color: #353945 !important;
            }
          }
        }

        .SendAgainButton {
          a,
          button {
            width: 215px;
            height: 50px;
          }
        }
      }
    }
  }

  .forgot-password {
    margin-top: 20px;

    button {
      width: 400px;
      height: 50px;
    }
  }

  @media (max-width: 550px) {
    display: block;
    .auth {
      &__right {
        width: 100%;
        height: 100vh;
        padding: 90px 5% 5%;

        .logo {
          top: 20px;
          left: 20px;
        }

        &__content {
          width: auto;
          position: unset;
          transform: none;
          margin-top: 50px;

          .backButton,
          .nextButton {
            width: 180px;
            height: 47px;
          }
          .SendAgainButton {
            button {
              width: 180px;
              height: 46px;
              font-size: 16px;
            }
          }
        }
      }
    }

    .form-error-message {
      position: absolute;
      top: 28px;
      left: -27%;
    }

    .forgot-password {
      margin-bottom: 32px;
      margin-top: 32px;
    }
  }
  @media (max-width: 400px) {
    .auth {
      &__right {
        &__content {
          .backAndNextBtnContainer {
            justify-content: space-around;
          }

          .backButton,
          .nextButton {
            width: 150px;
            font-size: 15px;
          }
        }
      }
    }
  }
`;
const AuthLayout = ({ children, ...props }) => {
  return (
    <StyledAuthLayout {...props}>
      <Toastify />
      <div className="auth__right" style={{ backgroundColor: "#fff" }}>
        <div className="auth__right__content">{children}</div>
      </div>
    </StyledAuthLayout>
  );
};

export default AuthLayout;
