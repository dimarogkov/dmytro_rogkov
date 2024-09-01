import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../../App';
import { HomePage } from '../pages';

export const Root = () => {
    return (
        <Router basename='/dmytro_rogkov'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};
