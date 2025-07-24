import Header from './components/Header';
import BeforeMainContent from './components/BeforeMainContent';
import RestaurantList from './components/ResturantList';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
