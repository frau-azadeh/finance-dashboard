import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store/store";
import { Provider } from "react-redux";
import StockDashboard from "./components/StockDashboard/StockDashboard";
import { CacheProvider } from "@emotion/react";
import { rtlCache } from "./theme"; // فایل cache از theme.ts
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const App: React.FC = () => {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", direction: "rtl" }}>
          {/* Header */}
          <Header />

          {/* Sidebar */}
          <Sidebar />

          {/* محتوای اصلی */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              padding: 3,
              marginTop: "64px",
              marginRight: { md: "240px", sm: 0 }, // تنظیم فضای کنار سایدبار
              textAlign: "right", // متن‌ها راست‌چین شوند
            }}
          >
            <Provider store={store}>
              <StockDashboard />
            </Provider>
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;