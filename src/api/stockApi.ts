import axiosInstance from '../axiosInstance';
import { StockData } from '../types/stockTypes';

export const getStocks = async (): Promise<StockData[]> => {
  const response = await axiosInstance.get('/ickvopfg9pb5dno6kqmnpg7o7dvd4sx1/alldata');
  return response.data.data;
};