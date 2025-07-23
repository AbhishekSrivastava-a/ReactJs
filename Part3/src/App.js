
import React, { useRef } from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import BeforeMainContent from './components/BeforeMainContent';
import RestaurantList from './components/ResturantList';


const App = () => {
  return (
    <div className="app">
      <Header />
      <BeforeMainContent />
      <RestaurantList />
    </div>
  );
};


export default App;
