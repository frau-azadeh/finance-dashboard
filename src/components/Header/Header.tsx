import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          داشبورد مالی
        </Typography>
        <Box>
          {/* در آینده می‌توانید دکمه‌های کاربری یا تنظیمات اضافه کنید */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
