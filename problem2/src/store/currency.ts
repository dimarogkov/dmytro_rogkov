import { create } from 'zustand';
import { ICurrencyStore } from '../types/CurrencyStore';

export const useCurrency = create<ICurrencyStore>((set) => ({
    currencies: [],
    currencyFrom: '',
    currencyTo: '',
    amountValue: '',
    resultCurrency: 0,
    setCurrencies: (currencies) => set({ currencies }),
    setCurrencyFrom: (currency) => set({ currencyFrom: currency }),
    setCurrencyTo: (currency) => set({ currencyTo: currency }),
    setAmountValue: (amount) => set({ amountValue: amount }),
    setResultCurrency: (currency) => set({ resultCurrency: currency }),
}));
