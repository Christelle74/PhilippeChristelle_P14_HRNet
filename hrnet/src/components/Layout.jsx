import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';



/**
 * Creation of the layout with logo and navigation
 * @component
 * @returns {JSX.Element} - layout component
 */
const Layout = () => {
    return (
        <header className='header' >
            <Logo/>
            <Navigation/>
        </header>
    );
};

export default Layout;