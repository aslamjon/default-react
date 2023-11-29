import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkTab } from "utils";
import styled from "styled-components";
import ListContainer from "../../containers/language/ListContainer";
import { withTranslation } from "react-i18next";

const PositionPageStyle = styled.div`
  .modal__body {
    .title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #777e91;
      margin-bottom: 20px;
    }
    .form-label,
    .form-select-label {
      font-weight: 600;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      color: #a7adbf;
      margin-bottom: 6px;
    }
    .form-input-container,
    .Select__controller {
      height: 38px;
      background: #fafafb;
      border-radius: 6px;
      padding: 12px 10px;
      input {
        font-size: 14px;
      }
    }
  }
  .checkboxBtn,
  .cancelBtn,
  .addBtn {
    button {
      border-radius: 6px;
      font-style: normal;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .checkbox-with-button {
    button {
      color: #353945;
      display: flex;
      align-items: center;
      font-size: 12px;
      .questionIcon {
        margin-left: 9px;
        height: 18px;
        width: 18px;
        .icon-question {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
  .rc-checkbox {
    margin-right: 9px;
  }

  .cancelBtn {
    margin: 0 10px;
  }
  .addBtn {
  }
`;

const ListPage = ({ location: { pathname }, t, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    checkTab(dispatch, pathname, t("languages") ?? "languages");
  }, []);

  return (
    <PositionPageStyle>
      <ListContainer {...rest} />
    </PositionPageStyle>
  );
};

export default withTranslation(withRouter(ListPage));
