import { lazy } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Main from '../shared/layout/Main';

const Users = lazy(() => import('./users'));
const Todos = lazy(() => import('./todos'));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/todos" element={<Todos />} />
        </Routes>
    );
};
