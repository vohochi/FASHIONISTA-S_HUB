import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/style-prefix.css';
import Detail from './pages/Detail';
import Products from './pages/Products';
// import LogIn from './pages/LogIn';
// import Register from './pages/Register';

// Khai báo component App
const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/Products" element={<Products />} />
      {/* <Route path="/LogIn" element={<LogIn />} /> */}
      {/* <Route path="/Register" element={<Register />} /> */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
