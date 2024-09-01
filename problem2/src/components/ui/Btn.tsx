import { ButtonHTMLAttributes, forwardRef, RefAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    className?: string;
}

export const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-full md:w-11 sm:min-w-11 h-11 font-media rounded outline-none transition-opacity duration-300 hover:opacity-80 ${className}`,
            {
                'pointer-events-none bg-black/40': props.disabled,
                'bg-black': !props.disabled,
            }
        )}
    />
));
