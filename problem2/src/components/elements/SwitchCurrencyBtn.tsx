import { useCurrency } from '../../store/currency';
import { Btn } from '../ui';
import { ArrowLeftRight } from 'lucide-react';

export const SwitchCurrencyBtn = () => {
    const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } = useCurrency((state) => state);

    const switchCurrency = () => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    };

    return (
        <Btn onClick={switchCurrency} disabled={!currencyFrom || !currencyTo}>
            <ArrowLeftRight className='w-6 h-6 stroke-1 text-white' />
        </Btn>
    );
};
