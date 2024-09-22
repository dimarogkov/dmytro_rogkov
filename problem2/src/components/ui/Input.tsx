import { InputHTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    className?: string;
}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className={`w-full h-11 px-4 rounded border border-gray bg-transparent outline-none transition-all duration-300 focus:border-black ${className}`}
    />
));
