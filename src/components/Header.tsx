import React, { useContext } from 'react';
import { IonIcon } from '@ionic/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  logOutOutline,
} from 'ionicons/icons';
import UserProvider from '../context/UserContext';
import { selectCartItems } from '../store/slice/cart';
import { LoginModalContext } from '../context/LoginContext';
import BadgeAvatars from './Avatar';
import { logOut } from '../store/slice/Auth';
import { Bounce, toast } from 'react-toastify';
const label = { inputProps: { 'aria-label': 'Color switch demo' } };

const HeaderTop: React.FC = () => {
  const { showLoginModal, setShowLoginModal } = useContext(LoginModalContext);

  const navigate = useNavigate();
  const count = useSelector(selectCartItems).length;
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const image = user?.image;
  const dispatch = useDispatch();

  const handleShowLoginModal = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };

  // const { data: products, error: productsError } = useFetch(
  //   `products/search/${searchTerm}`
  // );

  // console.log(products);
  // const errors = [productsError];

  // if (errors.some((error) => error)) {
  //   console.error('Có lỗi xảy ra khi lấy dữ liệu');
  // }

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
              placeholder="Nhập tên sản phẩm của bạn..."
              // value={searchTerm}
              // onChange={handleSearch}
            />
            {/* <ul className="suggestions">
              {products.map((suggestion) => (
                <li
                  key={suggestion}
                  style={{
                    backgroundColor: 'lightgray',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                  // onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul> */}
            <button className="search-btn">
              <IonIcon icon={searchOutline} />
            </button>
          </div>

          <div className="header-user-actions">
            <button onClick={handleShowLoginModal} className="action-btn">
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
              {isLoggedIn == true ? (
                <div className="d-flex align-items-center">
                  <BadgeAvatars avatar={image} />
                  <IonIcon
                    icon={logOutOutline}
                    onClick={() => {
                      dispatch(logOut());
                      toast.error('Bạn đã đăng xuất!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      });
                    }}
                    className="ml-2"
                  />
                </div>
              ) : (
                <IonIcon icon={personOutline} />
              )}
            </button>
            <button className="action-btn">
              <IonIcon icon={heartOutline} />
              <span className="count">0</span>
            </button>
            <button
              className="action-btn"
              onClick={() => {
                isLoggedIn === true
                  ? handleNavigate('/cart')
                  : toast.warn('Vui lòng đăng nhập để xem được giỏ hàng', {
                      position: 'top-center',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                      transition: Bounce,
                    });
              }}
            >
              <IonIcon icon={bagHandleOutline} />
              <span className="count">{count}</span>
            </button>
          </div>
        </div>
      </div>{' '}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category" onClick={() => handleNavigate('/')}>
              <a href="#" className="menu-title">
                Trang chủ
              </a>
            </li>
            <li
              className="menu-category"
              onClick={() => handleNavigate('/Products')}
            >
              <a href="#" className="menu-title">
                Sản phẩm
              </a>
            </li>{' '}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>{' '}
            <li className="menu-category">
              <a href="#" className="menu-title">
                Liên hệ
              </a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Hệ thống cửa hàng
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTop;
