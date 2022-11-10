import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Employees from './pages/Employees';
import CreateEmployee from './pages/CreateEmployee';
import Home from './pages/Home';

/**
 * Creation of pages routes
 * @returns App component
 */
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/createEmployee" element={<CreateEmployee/>}/>
          <Route path="/employees" element={<Employees/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
