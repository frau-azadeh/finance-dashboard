import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box>
      {/* دکمه همبرگری برای موبایل */}
      {isMobile && (
        <IconButton
          onClick={toggleDrawer(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16, // موقعیت سمت چپ
            zIndex: 1201, // بالاتر از AppBar
          
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="right"
        open={isMobile ? isOpen : true}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            height: isMobile ? "100vh" : "calc(100vh - 64px)", // طول مناسب در موبایل و دسکتاپ
            marginTop: isMobile ? 0 : "64px", // فاصله از بالا در دسکتاپ
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton key="dashboard">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="داشبورد" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton key="charts">
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="نمودارها" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton key="settings">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="تنظیمات" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
