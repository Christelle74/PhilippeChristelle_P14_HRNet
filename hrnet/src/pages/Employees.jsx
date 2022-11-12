import React, {Suspense} from 'react';
const EmployeeTable = React.lazy(()=> import('../components/Table'))
const Layout = React.lazy(()=> import('../components/Layout'))

/**
 * Display the employees page that contains the Table component
 * @component
 * @returns {JSX.Element} - Employees component
 */
const Employees = () => {
    return (
        
        <Suspense fallback={<p>loading...</p>}>
            <Layout/>
            <main>
                <h1 style={{color:'#5a6f06', fontSize:'20px', fontWeight: '700'}}>Current Employees</h1>
                <EmployeeTable/>
            </main>
        </Suspense>
        
    );
};

export default Employees;