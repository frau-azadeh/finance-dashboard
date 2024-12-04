import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // مدیریت باز و بسته شدن Drawer
  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* دکمه برای باز کردن Drawer در موبایل */}
      {isMobile && (
        <Button
          onClick={toggleDrawer(true)}
          variant="contained"
          sx={{ margin: 2 }}
        >
          باز کردن منو
        </Button>
      )}

      {/* Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="right"
        open={isMobile ? isOpen : true}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240, // عرض Drawer
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton key="dashboard">
              <ListItemText primary="داشبورد" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton key="charts">
              <ListItemText primary="نمودارها" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton key="settings">
              <ListItemText primary="تنظیمات" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;