import React from "react";

import styled from "styled-components";
import { FadeLoader } from "react-spinners";

const StyledMiniLoader = styled.div`
  display: inline-block;
`;

const FadeLoading = ({
                         color = "var(--green)",
                         size = 5,
                         width = 3,
                         height = 15,
                         radius = 10,
                         margin = 0,
                         ...rest }) => {
    return (
        <StyledMiniLoader {...rest}>
            <FadeLoader {...{ width, height, size, color, radius, margin }}/>
        </StyledMiniLoader>
    );
};

export default FadeLoading;
