import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale"; // زبان فارسی از Material-UI
import "../src/assets/fonts/fonts.css"; // مسیر فایل فونت‌ها (پوشه assets/fonts)
import rtlPlugin from "stylis-plugin-rtl";
import {prefixer} from "stylis";
import createCache from "@emotion/cache";

export const rtlCache = createCache({
  key:"mui-rtl",
  stylisPlugins:[prefixer, rtlPlugin],
});

const theme = createTheme(
  {
    direction: "rtl", // جهت راست‌چین
    typography: {
      fontFamily: "Vazir, Arial, sans-serif", // فونت فارسی
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction: "rtl", // اطمینان از راست‌چین بودن کل صفحه
            textAlign: "right", // متن‌ها راست‌چین شوند
            fontFamily: "Vazir, Arial, sans-serif", // اعمال فونت فارسی
            backgroundColor: "#f5f5f5", // رنگ پس‌زمینه پیش‌فرض (اختیاری)
            margin: 0, // حذف حاشیه پیش‌فرض
            padding: 0, // حذف پدینگ پیش‌فرض
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#1976d2", // رنگ اصلی
      },
      secondary: {
        main: "#9c27b0", // رنگ فرعی
      },
      background: {
        default: "#f5f5f5", // پس‌زمینه پیش‌فرض
      },
    },
  },
  faIR // زبان فارسی
);

export default theme;
