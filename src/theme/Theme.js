import React from "react";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { get } from "lodash-mini";
import GlobalStyles from "./GlobalStyles";
import Wrapper from "../components/wrapper";

const Theme = ({ children }) => {
  const mode = useSelector((state) => get(state, "settings.mode"));
  return (
    <ThemeProvider theme={{ mode }}>
      <Wrapper>
        <GlobalStyles />
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Theme;
