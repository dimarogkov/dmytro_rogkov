import axios from 'axios';
import { CURRENCY_API, CURRENCY_KEY } from '../variables';
import { ICurrencyAll, ICurrencyLatest } from '../types/Currency';

export const getCurrencies = () => {
    return axios.get<ICurrencyAll>(`${CURRENCY_API}/currencies?apikey=${CURRENCY_KEY}`);
};

export const getLatestCurrency = (base_currency: string, currencies: string) => {
    return axios.get<ICurrencyLatest>(`${CURRENCY_API}/latest`, {
        params: {
            apikey: CURRENCY_KEY,
            base_currency,
            currencies,
        },
    });
};
