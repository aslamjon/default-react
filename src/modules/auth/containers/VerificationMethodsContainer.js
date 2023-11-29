import React, { memo } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const StyledVerificationMethodsContainer = styled.div``;

const VerificationMethodsContainer = ({ match, history, t }) => {
  return <StyledVerificationMethodsContainer></StyledVerificationMethodsContainer>;
};

export default withTranslation("pdp")(memo(VerificationMethodsContainer));
