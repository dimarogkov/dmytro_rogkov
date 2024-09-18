import { useCurrency } from '../../store/currency';
import { Input, Label } from '../ui';
import { DollarSign } from 'lucide-react';

export const CurrencyAmount = () => {
    const { amountValue, setAmountValue } = useCurrency((state) => state);

    const validateAmount = (event: React.KeyboardEvent<HTMLInputElement>) => {
        !/[0-9]/.test(event.key) && event.preventDefault();
    };

    return (
        <Label className='relative flex items-center'>
            <DollarSign className='absolute z-10 left-2 w-5 h-5 stroke-1 text-black bg-transparent' />

            <Input
                name='amount'
                placeholder='Amount'
                className='pl-9'
                value={amountValue}
                onChange={({ target }) => setAmountValue(target.value)}
                onKeyPress={validateAmount}
            />
        </Label>
    );
};
