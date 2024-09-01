import { forwardRef, OptionHTMLAttributes, RefAttributes, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

export const Option: React.FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

export const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', ...props }, ref) => (
        <div className={`relative flex items-center w-full h-11 text-lg cursor-pointer ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none cursor-pointer appearance-none border border-gray transition-all duration-300 focus:border-black'
            />

            <ChevronDown className='absolute z-10 right-4 w-5 h-5 text-black' />
        </div>
    )
);
