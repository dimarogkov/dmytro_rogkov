import { ICurrency, ICurrencyAll } from '../types/Currency';

export const getModifiedCurrencies = (currencies: ICurrencyAll) => {
    const currenciesArr: ICurrency[] = [];

    Object.keys(currencies.data).forEach((key) => currenciesArr.push(currencies.data[key]));

    return currenciesArr;
};
