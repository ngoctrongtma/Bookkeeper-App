import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Invoices from './pages/Invoices';
import Expenses from './pages/Expenses';
import NotFound from './pages/NotFound';
import Invoice from './pages/Invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p style={{ fontSize: "20px" }}>Select an invoice to show detail</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} /></Route>
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
