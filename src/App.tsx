import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import Header from "./components/Header/Header"; // مسیر صحیح فایل Header
import Sidebar from "./components/Sidbar/Sidebar"; // مسیر صحیح فایل Sidebar

const App: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline /> {/* ریست پیش‌فرض برای استایل‌دهی Material-UI */}

      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* محتوای اصلی */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // محتوای اصلی فضای باقی‌مانده را پر می‌کند
          padding: 3, // فاصله داخلی
          marginTop: "64px", // تنظیم فاصله برای هماهنگی با Header (ارتفاع پیش‌فرض Header = 64px)
        }}
      >
        <Typography variant="h4" gutterBottom>
          داشبورد مالی
        </Typography>
        <Typography variant="body1">
          اینجا محتوای اصلی داشبورد قرار می‌گیرد.
        </Typography>
      </Box>
    </Box>
  );
};

export default App;