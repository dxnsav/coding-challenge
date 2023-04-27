import { ReactElement } from "react";
import RoutesProvider from "./RoutesProvider";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider
} from "@mui/material";
import ErrorBoundary from "../components/ErrorBoundary";

const theme = createTheme({
  palette: {
    info: {
      main: "#fff",
    },
  }
});

export default function BootstrapApp(): ReactElement {
  return (
    <StyledEngineProvider injectFirst>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RoutesProvider />
        </ThemeProvider>
      </ErrorBoundary>
    </StyledEngineProvider>
  );
};
