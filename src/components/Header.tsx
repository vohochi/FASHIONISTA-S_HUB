import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import {
  searchOutline,
  personOutline,
  heartOutline,
  bagHandleOutline,
} from 'ionicons/icons';
import LogIn from '../pages/LogIn';

const HeaderTop: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
    setSearchParams({ login: 'true' });
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  // router navigate
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            {[1, 2, 3, 4].map((item) => (
              <li key={item}>
                <a href="#" className="social-link"></a>
              </li>
            ))}
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Miễn phí vận chuyển</b> Đơn đặt hàng tuần này trên - $ 119k
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">VNĐ 💵</option>
              <option value="eur">USD 💵 </option>
            </select>
            <select name="language">
              <option value="vi-Vi">VIE</option>
              <option value="en-US">ENG</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img
              src="../../public/logo/logo.svg"
              alt="Anon's logo"
              width="120"
              height="36"
            />
          </a>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <IonIcon icon={searchOutline} />
            </button>
          </div>

          <div className="header-user-actions">
            <button onClick={handleShowLoginModal} className="action-btn">
              <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <LogIn />
              </Modal>
              <IonIcon icon={personOutline} />
            </button>
            <button className="action-btn">
              <IonIcon icon={heartOutline} />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <IonIcon icon={bagHandleOutline} />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>{' '}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category" onClick={() => handleNavigate('/')}>
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li
              className="menu-category"
              onClick={() => handleNavigate('/Products')}
            >
              <a href="#" className="menu-title">
                Products
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTop;
