import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useCurrency } from '../../store/currency';
import { getCurrencies, getLatestCurrency } from '../../services/currency';
import { getCode, getModifiedCurrencies } from '../../helpers';

import { CurrencyAmount } from './CurrencyAmount';
import { CurrencySelect } from './CurrencySelect';
import { SwitchCurrencyBtn } from './SwitchCurrencyBtn';

type Props = {
    className?: string;
};

export const CurrencySwap: React.FC<Props> = ({ className = '' }) => {
    const { currencies, amountValue, currencyFrom, currencyTo, setCurrencies, setResultCurrency } = useCurrency(
        (state) => state
    );

    const codeFromCurrency = getCode(currencyFrom);
    const codeToCurrency = getCode(currencyTo);

    const { data: currenciesData, isLoading } = useQuery({
        queryFn: () => getCurrencies(),
        select: (data) => data.data,
        queryKey: ['currencies'],
    });

    const { data: currencyLatest } = useQuery({
        queryFn: () => getLatestCurrency(codeFromCurrency, codeToCurrency),
        select: (data) => data.data.data[codeToCurrency],
        queryKey: ['currency_latest', codeFromCurrency, codeToCurrency],
    });

    useEffect(() => {
        if (currenciesData) {
            const modifiedCurrenciesData = getModifiedCurrencies(currenciesData);
            setCurrencies(modifiedCurrenciesData);
        }
    }, [currenciesData, setCurrencies]);

    useEffect(() => {
        if (currencyLatest) {
            setResultCurrency(+(currencyLatest * +amountValue).toFixed(2));
        }
    }, [amountValue, currencyLatest, setResultCurrency]);

    return (
        <div className={`flex flex-col md:flex-row gap-3 md:gap-2 w-full ${className}`}>
            <CurrencyAmount />

            <CurrencySelect label='From' isLoading={isLoading} currencies={currencies} />

            <SwitchCurrencyBtn />

            <CurrencySelect label='To' isLoading={isLoading} currencies={currencies} />
        </div>
    );
};
