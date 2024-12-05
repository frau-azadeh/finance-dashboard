import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface PriceChangeCardProps {
  title: string;
  companyName: string;
  industry: string;
  change: number;
  isPositive: boolean;
}

const PriceChangeCard: React.FC<PriceChangeCardProps> = ({
  title,
  companyName,
  industry,
  change,
  isPositive,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "right", // راست‌چین کردن متن‌ها
        direction: "rtl", // پشتیبانی از متن فارسی
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        <strong>نام شرکت:</strong> {companyName}
      </Typography>
      <Typography variant="body1">
        <strong>صنعت:</strong> {industry}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        mt={2} // فاصله از بالا
      >
        {isPositive ? (
          <ArrowDropUpIcon sx={{ color: "green" }} />
        ) : (
          <ArrowDropDownIcon sx={{ color: "red" }} />
        )}
        <Typography
          variant="body1"
          sx={{
            color: isPositive ? "green" : "red",
            fontWeight: "bold",
            marginLeft: "8px",
          }}
        >
          {change.toFixed(2)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default PriceChangeCard;