import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import theme from "./theme";


// تنظیم Cache برای RTL
const cacheRtl = createCache({
  key: "muirtl", // کلید یکتا برای RTL
  stylisPlugins: [ rtlPlugin], // اعمال RTL روی استایل‌ها
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
