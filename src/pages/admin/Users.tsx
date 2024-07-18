import React from 'react';
import Navigation from '../../components/admin/Navigation';
// import { useNavigate } from 'react-router-dom';
// import HeaderAdmin from '../../components/admin/HeaderAdmin';
import Main from '../../components/admin/Main';

interface Props {
  // define your props here
}

const Users: React.FC<Props> = () => {
  return (
    <>
      {/* Hello world */}
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        {/* Vertical Navbar */}
        <Navigation />
        {/* Main content */}
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          {/* Header */}
          {/* Main */}
          <main className="py-6 bg-surface-secondary">
            <div className="container-fluid">
              <h2>Quản lý người dùng</h2>
              {/* Card stats */}
              <Main />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Users;
