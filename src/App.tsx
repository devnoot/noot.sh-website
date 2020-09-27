import React, { FunctionComponent } from "react";
import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";
import { theme } from "./theme";
import { Navbar } from "./Navbar";
import { PostTitle } from "./PostTitle";

export const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <PostTitle title="Hello World" />
      </Container>
    </ThemeProvider>
  );
};
