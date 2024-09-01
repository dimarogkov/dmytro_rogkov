import { Currency } from '../blocks';
import { CurrencyResult, CurrencySwap, CurrencyTitle } from '../elements';

export const HomePage = () => {
    return (
        <Currency>
            <CurrencyTitle title='Stay Ahead with Accurate Conversion' className='mb-5 lg:mb-8 last:mb-0' />
            <CurrencySwap className='mb-5 lg:mb-8 last:mb-0' />
            <CurrencyResult />
        </Currency>
    );
};
