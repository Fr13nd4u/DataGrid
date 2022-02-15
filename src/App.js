// Core
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

// Components
import Table from './components/Table';
import UserPage from './components/UserPage';
import Header from './components/Header';
import Home from './components/Home';

// Other
import { store } from './init/store';

// Styles
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';

const App = () =>  {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Table />}/>
          <Route path="/user/:id" element={<UserPage />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
