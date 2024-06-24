import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {getCopyright, getIP} from './components/Tool';

import EmployeeLogin from './components/EmployeeLogin'; // Employee
import EmployeeLogout from './components/EmployeeLogout';
import { GlobalProvider } from './components/GlobalContext';
import Home from './components/Home'; // Home.js
import Menu from './components/Menu'; // Menu 컴포넌트 import
// App.js
import React from 'react';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <Menu /> {/* Menu 컴포넌트 사용 */}
          <hr />
          <Routes>
            <Route path="/" element={<Home />} /> {/* <Link to="/"> */}
            <Route path="/employee/login" element={<EmployeeLogin />} /> {/* <Link to="/"> */}
            <Route path="/employee/logout" element={<EmployeeLogout />} /> {/* <Link to="/"> */}
          </Routes>
          <hr />
          <div style={{textAlign: 'center', margin: '20px 0px'}}>{getCopyright()}</div>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;