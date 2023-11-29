import React, { forwardRef } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";

const StyledMiniLoader = styled.div`
  display: inline-block;
`;
const MiniLoader = forwardRef(({ color = "#fff", loading = true, ...rest }, ref) => {
  return (
    <StyledMiniLoader {...rest} ref={ref}>
      <BeatLoader size={5} color={color} loading={loading} />
    </StyledMiniLoader>
  );
});

export default MiniLoader;
