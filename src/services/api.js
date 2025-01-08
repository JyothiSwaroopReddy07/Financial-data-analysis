import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`;

export const fetchIncomeStatements = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};
