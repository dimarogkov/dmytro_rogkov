// Всі інтерфейси мають бути винесені в окрему допоміжну папку, наприклад types
interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string; // Додано поле blockchain для коректної роботи
}

// currency та amount можна діставати з наслідування WalletBalance
interface FormattedWalletBalance extends WalletBalance {
    formatted: string;
}

interface Props extends BoxProps {}

// Можна одразу деструктуризувати пропси
const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
    const balances = useWalletBalances();
    const prices = usePrices();

    // Можна винести функцію у допоміжну папку, наприклад у helper
    // Змінено тип на string blockchain
    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100;
            case 'Ethereum':
                return 50;
            case 'Arbitrum':
                return 30;
            case 'Zilliqa':
                return 20;
            case 'Neo':
                return 20;
            default:
                return -99;
        }
    };

    const sortedBalances = useMemo(() => {
        return balances
            .filter((balance: WalletBalance) => {
                const balancePriority = getPriority(balance.blockchain);

                // Перевірялась неіснуюча змінна
                // Вложені перевірки краще не писати, важко для підтримки проєкту і розуміння коду
                // if (lhsPriority > -99) {
                //     if (balance.amount <= 0) {
                //         return true;
                //     }
                // }

                return balancePriority > -99 && balance.amount <= 0;
            })
            .sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain);
                const rightPriority = getPriority(rhs.blockchain);

                // Можна використати тернарний оператор
                // if (leftPriority > rightPriority) {
                //     return -1;
                // } else if (rightPriority > leftPriority) {
                //     return 1;
                // }

                return leftPriority > rightPriority ? -1 : 1;
            });
    }, [balances, prices]);

    // Не використовується, тому можна або видалити, або перенести у допомогу папку, наприклад у helper
    // const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
    //     return {
    //         ...balance,
    //         formatted: balance.amount.toFixed(),
    //     };
    // });

    // rows можна винести в окремий компонент якщо це реально потрібно і прокидати туди sortedBalances як пропс, або ж одразу промапити sortedBalances в return
    // Забираємо index з аргументів, тому, що він нам більше не потрібний
    const rows = sortedBalances.map((balance: FormattedWalletBalance) => {
        const usdValue = prices[balance.currency] * balance.amount;

        // Потрібно використовувати унікальний ключ, а не index, щоб Реакт міг легко розуміти, які елементи були змінені, а які ні.
        return (
            <WalletRow
                className={classes.row}
                key={`${balance.currency}-${balance.amount}`}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        );
    });

    return <div {...rest}>{rows}</div>;
};
