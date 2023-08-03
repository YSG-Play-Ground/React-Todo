import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDo from './ToDo';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './context/DarkModeContext'
import { ToastContainer, toast } from 'react-toastify';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
