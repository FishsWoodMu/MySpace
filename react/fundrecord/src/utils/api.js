// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getFundNetValue(fundCode) {
    return apiClient.get(`/fund_net_value/${fundCode}`);
  }
};