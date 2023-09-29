import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ResponsiveColumns from "./functions/ResponsiveColumns";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
const x = ResponsiveColumns();
const breakpoints = {
  base: "0px",
  small: x.sm.widthAndMarginAsString,
  //small: "380px", //Min width for 4 cols
  md: x.md.widthAndMarginAsString,
  //md: "816px", //Max width for 8 cols
  lg: "960px",
  //xl: "1212px", //Max width for 12 cols
  xl: x.xl.widthAndMarginAsString,
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
