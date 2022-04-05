import React from 'react';

import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Posts from './pages/Posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </Router>
  )
}

export default App;
