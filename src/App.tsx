import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useColorMode } from "./contexts";

function App() {
  const colorModeCtx = useColorMode();

  const mode =
    colorModeCtx.mode === "dark" || !colorModeCtx.mode ? "dark" : "light";

  useEffect(() => {}, [colorModeCtx.mode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [colorModeCtx.mode]
  );

  return (
    <div className="App" style={{ backgroundColor: "transparent" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
