export interface StockData {
    name: string;
    Full_Name: string;
    eps: number;
    Industry: string;
    MarketType: string;
    LastTradedPrice: number;
    ClosingPrice: number;
    LastTradedPrice_change: number;
    ClosingPrice_change: number;
    Yesterday_Price: number;
    Max_Price: number;
    Min_Price: number;
    High_Price: number;
    Low_Price: number;
    Open_Price: number;
    Trade_Volume: number;
    NumberOfTrades: number;
    Trade_Value: number;
    Base_volume: number;
  }
  
  export interface ApiResponse {
    ok: boolean;
    data: StockData[];
  }