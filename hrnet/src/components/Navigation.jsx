import React from 'react';
import { NavLink } from 'react-router-dom';


/**
 * Creation of the navigation
 * @component
 * @returns {JSX.Element} - Navigation component
 */
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/createEmployee" className={({isActive}) => isActive ? 'navActive' : ''}end>
                        Create New Employee
                    </NavLink>
                </li>  
                <li>                  
                    <NavLink to="/employees" className={({isActive})=> isActive ? 'navActive' : ''}end>
                        View Current Employees
                    </NavLink>
                </li>
                <li>                  
                    <NavLink to="/" className={({isActive})=> isActive ? 'navActive' : ''}end>
                        Deconnect
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;