import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative w-full max-w-screen-2xl m-auto'>
            <Outlet />
        </main>
    );
};
