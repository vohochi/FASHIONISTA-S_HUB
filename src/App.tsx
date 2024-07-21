import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRouter from './routes/AdminRouter';
import Dashboard from './pages/admin/Dashboard';
import Category from './pages/admin/Category';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ProductsAdmin from './pages/admin/Products';
import ShoppingCart from './pages/Cart';
import Profile from './pages/Profile';
import MainLayout from './routes/MainRouter';
import Products from './pages/Products';
import Users from './pages/admin/Users';
import { LoginProvider } from './context/LoginContext';
import OrderProvider from './context/OrderContext';
import Invoice from './pages/Invoice';

const App: React.FC = () => (
  <Router>
    <LoginProvider>
      <Routes>
        <Route path="/*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Detail />} />
          <Route path="Products" element={<Products />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkOut" element={<OrderProvider />} />
          <Route path="invoice" element={<Invoice />} />
        </Route>
        <Route path="/admin" element={<AdminRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="users" element={<Users />} />
          <Route path="categories" element={<Category />} />
        </Route>
      </Routes>
    </LoginProvider>
  </Router>
);

export default App;
