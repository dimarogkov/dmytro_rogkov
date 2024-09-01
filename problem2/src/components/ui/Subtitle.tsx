import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h3 ref={ref} {...props} className={`w-full text-xl lg:text-2xl font-semibold ${className}`}>
            {children}
        </h3>
    )
);
