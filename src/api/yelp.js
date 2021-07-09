import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer N29uR0k-U53tbBD9hKpmR8XHiwG_YIOyThf4CMsiOQ_WaRWRRPQNfeC_s58rIq3vZ5SXEh80ZGlB-GRt7HxQRTA0PtB15gWIKzuj88XQ2CJTCHMrfmOIDp1xqkDoYHYx`,
  },
});
