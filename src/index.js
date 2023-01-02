import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Customers from './pages/customers/Customers';
import Invoices from './pages/invoices/Invoices';
import Templates from './pages/templates/Templates';
import CreateInvoice from './pages/invoices/CreateInvoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/templates' element={<Templates />} />
          <Route path='/invoice/:id' element={<CreateInvoice />} />
        </Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
