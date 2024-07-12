import React, { useRef, useState } from 'react';
import Banner from '../components/Banner';
import { IonIcon } from '@ionic/react';
import {
  star,
  heartOutline,
  starOutline,
  eyeOutline,
  repeatOutline,
  bagAddOutline,
  boatOutline,
  rocketOutline,
  callOutline,
  arrowUndoOutline,
  ticketOutline,
} from 'ionicons/icons';
import Loading from '../components/Loading';
import { useFetch } from '../hooks/UseReducer';
import ProductItem from '../types/Products';
import { Currency } from '../utils/Currency';
import { useNavigate } from 'react-router-dom';
import Blog from '../components/Blog';
import Categories from '../components/Categories';
import Sidebar from '../components/Sidebar';
import ProductBestSeller from '../components/ProductBestSeller';
import BestSeller from '../components/BestSeller';

const Home: React.FC = () => {
  const productMainRef = useRef(null);

  const navigate = useNavigate();
  // show chi tiet san pham
  const handleDetailProduct = (productID: string) => {
    navigate(`/product/${productID}`);
  };
  const [selectedCategory, setSelectedCategory] = useState('4');

  // su dung useFetch
  const {
    data: products,
    isLoading: productsIsLoading,
    error: productsError,
  } = useFetch(`/products/categoryName/${selectedCategory}`);

  const errors = [productsError];

  if (errors.some((error) => error)) {
    console.error('Có lỗi xảy ra khi lấy dữ liệu');
  }
  // useState categories
  // const [filteredProducts, setFilteredProducts] = useState(products);
  // thay đổi danh mục
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // cuộn xuống sản phẩm
    if (productMainRef.current) {
      productMainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Banner />
      <Categories onCategoryChange={handleCategoryChange} />
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar" data-mobile-menu>
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Danh mục</h2>
                <button
                  className="sidebar-close-btn"
                  data-mobile-menu-close-btn
                ></button>
              </div>
              <Sidebar onCategoryChange={handleCategoryChange} />
            </div>

            <BestSeller handleDetailProduct={handleDetailProduct} />
          </div>
          <div className="product-box">
            <div className="product-minimal">
              <ProductBestSeller handleDetailProduct={handleDetailProduct} />
            </div>
            <div ref={productMainRef} className="product-main">
              <h2 className="title">Sản phẩm mới</h2>
              {productsIsLoading ? (
                <Loading />
              ) : (
                <div className="product-grid">
                  {products.map((item: ProductItem, key: number) => (
                    <div className="showcase" key={key}>
                      <div
                        className="showcase-banner"
                        onClick={() => handleDetailProduct(item._id)}
                      >
                        <img
                          src={`../../public/images/products/${item.image}`}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img default"
                        />
                        <img
                          src={`../../public/images/products/${item.image}`}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img hover"
                        />
                        <p className="showcase-badge">15%</p>
                        <div className="showcase-actions">
                          <button className="btn-action">
                            <IonIcon icon={heartOutline} />
                          </button>
                          <button className="btn-action">
                            <IonIcon icon={eyeOutline} />
                          </button>
                          <button className="btn-action">
                            <IonIcon icon={repeatOutline} />
                          </button>
                          <button className="btn-action">
                            <IonIcon icon={bagAddOutline} />
                          </button>
                        </div>
                      </div>
                      <div className="showcase-content">
                        <a href="#" className="showcase-category">
                          {item.category}
                        </a>
                        <a href="#">
                          <h3 className="showcase-title">{item.name} </h3>
                        </a>
                        <div className="showcase-rating">
                          <IonIcon icon={star} />
                          <IonIcon icon={star} />
                          <IonIcon icon={star} />
                          <IonIcon icon={starOutline} />

                          <IonIcon icon={starOutline} />
                        </div>
                        <div className="price-box">
                          <p className="price">{Currency(item.price)}</p>{' '}
                          {/* <del>$75.00</del> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="testimonials-box">
            <div className="testimonial">
              <h2 className="title"></h2>

              <div className="testimonial-card">
                <img
                  src="../../public/nhasanglap.jpg"
                  alt="alan doe"
                  className="testimonial-banner"
                  width="80"
                  height="80"
                />

                <p className="testimonial-name">VO HO CHI</p>

                <p className="testimonial-title">Người sáng lập</p>

                <img
                  src="./../public/images/icons/quotes.svg"
                  alt="quotation"
                  className="quotation-img"
                  width="26"
                />

                <p className="testimonial-desc">
                  Chúng tôi mang lại những điều tốt đẹp nhất đến với bạn
                </p>
              </div>
            </div>

            <div className="cta-container">
              <img
                src="./../public/images/cta-banner.jpg"
                alt="summer collection"
                className="cta-banner"
              />

              <a href="#" className="cta-content">
                <p className="discount">25% Chiết khấu</p>

                <h2 className="cta-title">Bộ sưu tập hè</h2>

                <p className="cta-text">Bắt đầu @ 100.000</p>

                <button className="cta-btn">Mua ngay</button>
              </a>
            </div>

            <div className="service">
              <h2 className="title">Our Services</h2>

              <div className="service-container">
                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IonIcon icon={boatOutline} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">
                      Giao hàng trên toàn thế giới
                    </h3>
                    <p className="service-desc">Để đặt hàng trên 100.000</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IonIcon icon={rocketOutline} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Giao hàng ngày hôm sau</h3>
                    <p className="service-desc">
                      Chỉ đơn đặt hàng của Vương quốc Anh
                    </p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IonIcon icon={callOutline} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">
                      Hỗ trợ trực tuyến tốt nhất
                    </h3>
                    <p className="service-desc">Thời gian: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IonIcon icon={arrowUndoOutline} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Chính sách trả lại</h3>
                    <p className="service-desc">Dễ dàng và miễn phí trở lại</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <IonIcon icon={ticketOutline} />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">15% tiền được hoàn</h3>
                    <p className="service-desc">Để đặt hàng trên $ 100.000</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Blog />
      </div>
    </>
  );
};

export default Home;
