import { HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h1 ref={ref} {...props} className={`w-full text-2xl lg:text-3xl xl:text-4xl font-semibold ${className}`}>
            {children}
        </h1>
    )
);
