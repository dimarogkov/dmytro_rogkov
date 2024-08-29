const sum_to_n_a = (n = 2) => {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        res += i;
    }

    return res;
};

const sum_to_n_b = (n = 2) => {
    const numbersArr = Array.from({ length: n }, (_, index) => index + 1);
    return numbersArr.reduce((a, b) => a + b);
};

const sum_to_n_c = (n = 2) => {
    return (n * (n + 1)) / 2;
};

sum_to_n_a(5);
sum_to_n_b(5);
sum_to_n_c(5);
