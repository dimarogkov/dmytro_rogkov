import { useCurrency } from '../../store/currency';
import { Subtitle, Text } from '../ui';

type Props = {
    className?: string;
};

export const CurrencyResult: React.FC<Props> = ({ className }) => {
    const { amountValue, currencyFrom, currencyTo, resultCurrency } = useCurrency((state) => state);

    const isResultShow = amountValue && currencyFrom && currencyTo;

    return (
        <>
            {isResultShow && (
                <div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 w-full'>
                    <Subtitle className='sm:w-auto font-bold'>Currency Result:</Subtitle>

                    <Text className={`sm:w-auto font-medium ${className}`}>
                        <span className='text-black/40'>{`${amountValue} ${currencyFrom} = `}</span>
                        <span className='text-green'>{`${resultCurrency} ${currencyTo}`}</span>
                    </Text>
                </div>
            )}
        </>
    );
};
