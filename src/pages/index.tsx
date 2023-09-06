import {lazy} from 'react';
import {Routes, Route} from 'react-router';

const ToDoPage = lazy(() => import('./to-do/ui'));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<ToDoPage />} />
        </Routes>
    );
};
