import React, {Suspense} from 'react';
const Form = React.lazy(()=> import('../components/Form'))
const Layout = React.lazy(()=> import('../components/Layout'))

/**
 * Display the create employee page that contains the form component
 * @component
 * @returns {JSX.Element} - CreateEmployee component
 */
const CreateEmployee = () => {
    return (
        
        <Suspense fallback={<p>loading...</p>}>
            <Layout/>
            <main>
                <h1 style={{color:'#5a6f06', fontSize:'20px', fontWeight: '700'}}>Create a new employee</h1>
                <Form/>
            </main>
        </Suspense>
        
    );
};

export default CreateEmployee;