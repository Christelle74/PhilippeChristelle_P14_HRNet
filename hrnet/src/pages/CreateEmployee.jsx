import React from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';

/**
 * Display the create employee page that contains the form component
 * @component
 * @returns {JSX.Element} - Home component
 */
const CreateEmployee = () => {
    return (
        <>
            <Layout/>
            <main>
                <h1 style={{color:'#5b8c00'}}>Create a new employee</h1>
                <Form/>
            </main>
        </>
    );
};

export default CreateEmployee;