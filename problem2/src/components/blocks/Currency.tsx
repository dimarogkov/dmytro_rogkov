type Props = {
    children?: React.ReactNode;
};

export const Currency: React.FC<Props> = ({ children }) => {
    return (
        <section className='relative w-full max-w-[1000px] p-5 md:p-6 lg:p-8 xl:p-10 rounded-md border border-black'>
            {children}
        </section>
    );
};
