import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/HomePage/HOME/Home';
import Singup from './components/Login/Signup';
import Notfound from './components/Notfound/notfound';
import CopyTrade from './components/HomePage/Forex/Copytradepage';
import Forex from './components/HomePage/Forex/Forexpage';
import ForexBroker from './components/HomePage/Forex/Forexbrokerpage';
import Robot from './components/HomePage/Forex/Robotpage';
import Homecontent from './components/Dashboard/Content/Dashboardcontent/Container';
import Dashboard from './components/Dashboard/Dashboard';
import Office from './components/Dashboard/Content/Oficecontent/Office';
import Topup from './components/Dashboard/Content/Topupcontent/Topup';
import Broker from './components/Dashboard/Content/Brokercontent/Broker';
import Plan from './components/Dashboard/Content/Plancontent/Plan';
const Router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <Notfound />,
  children: [
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Singup /> },
    { path: "/forex", element: <Forex /> },
    { path: "/forexbroker", element: <ForexBroker /> },
    { path: "/copytrade", element: <CopyTrade /> },
    { path: "/robotassistant", element: <Robot /> },
  ]
}, {
  path: "/dashboard",
  element: <Dashboard />,
  errorElement: <Notfound />,
  children: [
    { path: "/dashboard", element: <Homecontent /> },
    { path: "/dashboard/office", element: <Office /> },
    { path: "/dashboard/topup", element: <Topup /> },
    { path: "/dashboard/broker", element: <Broker /> },
    { path: "/dashboard/plan", element: <Plan /> },
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

