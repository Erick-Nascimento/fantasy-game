import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header'
import LeaguesCards from './components/leagues-cards/leagues-cards';
import LeaguesTabs from './components/leagues-tabs/leagues-tabs';
import BottomNav from './components/bottom-nav/bottom-nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='body_content'>
      <LeaguesCards />
      <LeaguesTabs/>
    </div>
    <BottomNav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
