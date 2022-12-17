import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import AdminActions from './pages/admin_actions/AdminActions';
import AddCustomer from './pages/admin_actions/add_customer/AddCustomer';
import AddEmployee from './pages/admin_actions/add_employee/AddEmployee';
import AddMixDesign from './pages/admin_actions/add_mix_design/AddMixDesign';
import AddSuppliers from './pages/admin_actions/add_suppliers/AddSuppliers';
import MarketingEnquiry from './pages/marketing_enquiry/MarketingEnquiry';
import CreateEnquiry from './pages/marketing_enquiry/create_enq/CreateEnquiry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AdminActions />} />
          <Route path='/marketenq' element={<MarketingEnquiry />} />
        </Route>
        <Route element={<AddCustomer />} path="/addcustomer" />
        <Route element={<AddEmployee />} path="/addemployee" />
        <Route element={<AddMixDesign />} path="/addmixdesign" />
        <Route element={<AddSuppliers />} path="/addsuppliers" />
        <Route element={<CreateEnquiry />} path="/addenq" />
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
