import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const donations = {
  create: async (data: {
    amount: number;
    currency: string;
    cause: string;
    frequency: 'one-time' | 'monthly';
  }) => {
    const response = await api.post('/donations', data);
    return response.data;
  }
};

export const zakat = {
  calculate: async (data: {
    totalAssets: number;
    totalLiabilities: number;
    zakatAmount: number;
  }) => {
    const response = await api.post('/zakat/calculate', data);
    return response.data;
  }
};