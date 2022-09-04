import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchWeather from './SearchWeather';
import reportWebVitals from './reportWebVitals';
import PageHeader from './pageHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageHeader/>
    <SearchWeather />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
