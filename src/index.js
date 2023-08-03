import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './ToDo';
import { DarkModeProvider } from './context/DarkModeContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ToastContainer autoClose={1000} className="w-[300px]" position={'bottom-center'} />
      <ToDo />
    </DarkModeProvider>
  </React.StrictMode>
);

