import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/App.css';
import '../styles/style-prefix.css';

const MainLayout: React.FC = () => (
  <>
    <Header />

    <Outlet />

    <Footer />
  </>
);

export default MainLayout;
