export interface ICurrencyLatest {
    data: {
        [key: string]: number;
    };
}

export interface ICurrencyAll {
    data: {
        [key: string]: ICurrency;
    };
}

export interface ICurrency {
    code: string;
    name: string;
}
