import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import CreateLeague from './routes/create-league';
import BuyPlayers from './routes/buy-players';
import Store from './routes/store';
import FormationsProvider from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormationsProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create-league" element={<CreateLeague />} />
            <Route path="create-league/buy-players/:position" element={<BuyPlayers />} />
            <Route path="store" element={<Store />} />
        </Routes>
      </FormationsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
