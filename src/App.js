import React from 'react';

import Navbar from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostIDPage from './pages/PostIDPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostIDPage />} />
        <Route
          exect
          path="*"
          element={<Error />}
        />
      </Routes>
    </Router>
  )
}

export default App;
