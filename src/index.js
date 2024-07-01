import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
	fontFamily: "Open Sans, sans-serif",
	primaryColor: "blue",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<MantineProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MantineProvider>
);
