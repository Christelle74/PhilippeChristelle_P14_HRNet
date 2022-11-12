import React from 'react';


/**
 * Creation of the logo 
 * @component
 * @returns {JSX.Element} - logo component
 */
const Logo = () => {
    return (
        <>
            <div className='logo' to="/">
                <img src="/wealthHealth.png" alt="Wealth Health"/>
            </div>
            <h1 style={{fontSize:'28px', color: '#5a6f08', fontWeight:700, marginTop:5}}>Welcome on HRNet</h1>
        </>
    );
};

export default Logo;