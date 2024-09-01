import { ICurrency } from './Currency';

export interface ICurrencyStore {
    currencies: ICurrency[];
    currencyFrom: string;
    currencyTo: string;
    amountValue: string;
    resultCurrency: number;
    setCurrencies: (currencies: ICurrency[]) => void;
    setCurrencyFrom: (currency: string) => void;
    setCurrencyTo: (currency: string) => void;
    setAmountValue: (amount: string) => void;
    setResultCurrency: (currency: number) => void;
}
