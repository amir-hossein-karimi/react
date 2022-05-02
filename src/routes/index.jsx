import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';

const RouteIndex = () => {
    const { token } = useSelector(({ auth }) => auth)
    return (
        <Routes>
            {
                routes.map((single, index) => {
                    const { Element, Layout, reverse } = single
                    if (reverse) {
                        return <Route
                            key={index}
                            path={single.path}
                            element={token ? <Navigate to="/" replace /> : <Layout><Element /></Layout>}
                        />
                    } else {
                        return <Route
                            key={index}
                            path={single.path}
                            element={!token ? <Navigate to="/login" replace /> : <Layout><Element /></Layout>}
                        />
                    }

                })
            }
        </Routes>
    );
};

export default RouteIndex;