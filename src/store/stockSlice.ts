import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { StockData } from '../types/stockTypes';

// حالت اولیه
interface StocksState {
  stocks: StockData[];
  loading: boolean;
  error: string | null;
}

const initialState: StocksState = {
  stocks: [],
  loading: false,
  error: null,
};

// اکشن برای دریافت داده‌ها
export const fetchStocks = createAsyncThunk<StockData[], void>(
  'stocks/fetchStocks',
  async () => {
    const response = await axios.get('http://localhost:5000/api/ickvopfg9pb5dno6kqmnpg7o7dvd4sx1/alldata');
    return response.data.data;
  }
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.loading = false;
        state.stocks = action.payload;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'خطایی رخ داد';
      });
  },
});

export default stocksSlice.reducer;