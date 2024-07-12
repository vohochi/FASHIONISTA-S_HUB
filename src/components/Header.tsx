import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Switch from '@mui/material/Switch';
import {
  searchOutline,
  personOutline,
  heartOutline,
  bagHandleOutline,
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from 'ionicons/icons';
import UserProvider from '../context/UserContext';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const HeaderTop: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
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
            {[logoFacebook, logoTwitter, logoInstagram, logoLinkedin].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="social-link">
                    <IonIcon icon={item} />
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Miễn phí vận chuyển</b> Đơn đặt hàng tuần này trên - $ 119k
            </p>
          </div>
          <div className="header-top-actions">
            <div>
              <Switch {...label} defaultChecked color="warning" />
            </div>
            <select name="currency">
              <option value="usd">VNĐ 💵</option>
              <option value="eur">USD 💵 </option>
            </select>
            <select name="language">
              <option value="vi-Vi">VIE</option>
              <option value="en-US">ENG</option>
            </select>
            <select name="Page" onClick={() => handleNavigate('/admin')}>
              <option value="1">Admin</option>
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
              {/* <BadgeAvatars /> */}
              <Modal
                show={showLoginModal}
                onHide={handleCloseLoginModal}
                backdrop="static"
                aria-labelledby="login-modal"
              >
                <div onClick={(e) => e.stopPropagation()}>
                  <UserProvider />
                </div>
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

            <li
              className="menu-category"
              onClick={() => handleNavigate('/cart')}
            >
              <a className="menu-title">Cart</a>
            </li>

            <li
              className="menu-category"
              onClick={() => handleNavigate('/checkOut')}
            >
              <a href="#" className="menu-title">
                Checkout
              </a>
            </li>
            <li
              className="menu-category"
              onClick={() => handleNavigate('/profile')}
            >
              <a href="#" className="menu-title">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTop;
