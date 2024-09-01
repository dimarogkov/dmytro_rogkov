import { useCurrency } from '../../store/currency';
import { ICurrency } from '../../types/Currency';
import { Option, Select } from '../ui';

type Props = {
    label: string;
    isLoading: boolean;
    currencies: ICurrency[];
};

export const CurrencySelect: React.FC<Props> = ({ label, isLoading, currencies }) => {
    const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } = useCurrency((state) => state);
    const isSelectFrom = label === 'From';

    return (
        <Select
            value={isSelectFrom ? currencyFrom : currencyTo}
            onChange={({ target }) => (isSelectFrom ? setCurrencyFrom(target.value) : setCurrencyTo(target.value))}
            disabled={isLoading}
        >
            <Option value='default_from' hidden>
                {label}
            </Option>

            {currencies.map(({ code, name }) => (
                <Option value={code} key={code}>
                    {code} - {name}
                </Option>
            ))}
        </Select>
    );
};
