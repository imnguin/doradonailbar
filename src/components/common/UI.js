import React from "react";
import Layout from './Layout';
import config from '../../routers/Config'
import { Routes, Route, Navigate } from 'react-router-dom';

const UI = (props) => {
    return (
        <React.Suspense fallback={<div>Đang tải dữ liệu... </div>}>
            <Routes>
                {
                    config.map(({ component: Component, path, layout, breadcrumb }) => (
                        <Route path={path} key={path} element={Component ? <Layout layout={!!layout ? layout : 'Home'}><Component /></Layout> : <Navigate to={'/'} replace={true} />} />
                    ))
                }
            </Routes> 
        </React.Suspense>
    );
}

export default UI;