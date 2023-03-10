import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/home';
import CreateLeague from './routes/create-league';
import BuyPlayers from './routes/buy-players';
import Store from './routes/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "create-league",
    element: <CreateLeague />
  },
  {
    path: "create-league/buy-players",
    element: <BuyPlayers />
  },
  {
    path: "store",
    element: <Store />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
