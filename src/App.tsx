import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import './App.css';
import routes from './config/routes';
import { Navbar } from './components';

const App: React.FC = () => (
  <Routes>
      {routes.map((route, index) => {
        return (
          <Route 
            key={index}
            path={route.path}
            element={<route.component />}
          />
        )
      })}
    </Routes>
);

export default App;
