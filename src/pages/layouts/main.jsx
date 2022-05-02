import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            {children}
        </div>
    );
};

export default MainLayout;