import React from 'react';
import Navbar from './layout/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import ErrorPage from './layout/error';
import Weather from './pages/weather/weather';
import WeatherPage from './pages/weather/weather';
const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
<Route path='/weather' element={<WeatherPage/>}/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
