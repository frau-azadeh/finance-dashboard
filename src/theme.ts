// src/theme.ts
import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    typography: {
      fontFamily: "Vazir, Arial, sans-serif",
    },
  },
  faIR
);

export default theme;