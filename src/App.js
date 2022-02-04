// Core
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import Table from './components/Table';
import Header from './components/Header';
import Home from './components/Home';

// Styles
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

const App = () =>  {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/users" element={<Table />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
