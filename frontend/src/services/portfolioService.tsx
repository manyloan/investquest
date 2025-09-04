// src/services/portfolioService.ts
import apiClient from './api';
import type { Portfolio } from '../types';

export const getMyPortfolio = () => {
    return apiClient.get<Portfolio>('/portfolios/my-portfolio');
};