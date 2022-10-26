import React from 'react';

const Logo = () => {
    return (
        <>
            <div className='logo' to="/">
                <img src="/wealthHealth.png" alt="Wealth Health"/>
            </div>
            <h1 style={{fontSize:'24px', color: '#5a6f08', fontWeight:700, marginTop:5}}>Welcome on HRNet</h1>
        </>
    );
};

export default Logo;