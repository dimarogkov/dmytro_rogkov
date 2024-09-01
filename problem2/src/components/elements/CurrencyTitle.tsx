import { Title } from '../ui';

type Props = {
    title: string;
    className?: string;
};

export const CurrencyTitle: React.FC<Props> = ({ title, className = '' }) => {
    return <Title className={className}>{title}</Title>;
};
