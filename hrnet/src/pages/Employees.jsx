import Layout from '../components/Layout';
import React from 'react';
import EmployeeTable from '../components/Table';

/**
 * Display the employees page that contains the employeeTable component
 * @component
 * @returns {JSX.Element} - Employees component
 */
const Employees = () => {
    return (
        <>
            <Layout/>
            <main>
                <h1 style={{color:'#5b8c00'}}>Current Employees</h1>
                <EmployeeTable/>
            </main>
        </>
    );
};

export default Employees;