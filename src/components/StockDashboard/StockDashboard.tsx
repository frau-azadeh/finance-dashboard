import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchStocks } from "../../store/stockSlice";
import { Box, Grid, CircularProgress, Typography } from "@mui/material";
import PriceChangeCard from "../PriceChangeCard/PriceChangeCard";

const StockDashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stocks, loading, error } = useSelector(
    (state: RootState) => state.stocks
  );

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6">خطایی در دریافت داده‌ها رخ داد.</Typography>
        <Typography variant="body1">{error}</Typography>
      </Box>
    );
  }

  if (stocks.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6">هیچ داده‌ای برای نمایش وجود ندارد.</Typography>
      </Box>
    );
  }

  const maxChange = stocks.reduce((prev, curr) =>
    curr.LastTradedPrice_change > prev.LastTradedPrice_change ? curr : prev
  );
  const minChange = stocks.reduce((prev, curr) =>
    curr.LastTradedPrice_change < prev.LastTradedPrice_change ? curr : prev
  );

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <PriceChangeCard
            title="بیشترین تغییر قیمت"
            companyName={maxChange.Full_Name}
            industry={maxChange.Industry}
            change={maxChange.LastTradedPrice_change}
            isPositive={maxChange.LastTradedPrice_change > 0}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PriceChangeCard
            title="کمترین تغییر قیمت"
            companyName={minChange.Full_Name}
            industry={minChange.Industry}
            change={minChange.LastTradedPrice_change}
            isPositive={minChange.LastTradedPrice_change > 0}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StockDashboard;