import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { useFetch } from '../hooks/UseReducer';
import { useNavigate } from 'react-router-dom';

import {
  closeOutline,
  addOutline,
  removeOutline,
  star,
  starOutline,
  bagAddOutline,
  repeatOutline,
  heartOutline,
  eyeOutline,
} from 'ionicons/icons';
import Loading from '../components/Loading';
import ProductItem from '../types/Products';
import CategoryItem from '../types/Categories';
import { Currency } from '../utils/Currency';
import Error from '../utils/Error';
import PaginationOutlined from '../components/Pagination';
import { CustomizedSelects, SliderSizes } from '../components/SliderRate';
import FilterColor from '../components/FilterColor';

const Products: React.FC = () => {
  // sử dụng điều hướng lấy sản phẩm
  const navigate = useNavigate();
  const handleDetailProduct = (productID: string) => {
    navigate(`/product/${productID}`);
  };
  const [selectedCategory, setSelectedCategory] = useState('4');

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoryError,
  } = useFetch('categories');
  const {
    data: products,
    isLoading: productsIsLoading,
    error: productsError,
  } = useFetch(`/products/categoryName/${selectedCategory}`);

  const {
    data: productsHot,
    isLoading: productsHotLoading,
    error: productHotError,
  } = useFetch('/products/hot');

  if (categoryError || productsError || productHotError) {
    let errorMessage = '';
    if (categoryError) {
      errorMessage += 'Lỗi khi fetch categories\n';
    }
    if (productsError) {
      errorMessage += 'Lỗi khi fetch products\n';
    }
    if (productHotError) {
      errorMessage += 'Lỗi khi fetch products hot\n';
    }
    return <Error title="Lỗi khi fetch dữ liệu" message={errorMessage} />;
  }
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="navigation">
        <span className="separator">Trang Chủ</span>
        <span className="separator">/</span>
        <span
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
          className="separator"
        >
          Sản phẩm
        </span>
      </div>
      <div className="product-container">
        <div className="container">
          <div className="sidebar has-scrollbar" data-mobile-menu>
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Danh mục</h2>
                <button
                  className="sidebar-close-btn"
                  data-mobile-menu-close-btn
                >
                  <IonIcon icon={closeOutline} />
                </button>
              </div>
              {categoriesLoading ? (
                <Loading />
              ) : (
                <ul className="sidebar-menu-category-list">
                  {categories.map((item: CategoryItem, key: number) => (
                    <li
                      onClick={() => handleCategoryChange(item.id)}
                      key={key}
                      className="sidebar-menu-category"
                    >
                      <button
                        className="sidebar-accordion-menu"
                        data-accordion-btn
                      >
                        <div className="menu-title-flex">
                          <img
                            src={`../icons/${item.image}`}
                            alt="clothes"
                            width="20"
                            height="20"
                            className="menu-title-img"
                          />

                          <p className="menu-title">{item.name}</p>
                        </div>

                        <div>
                          <IonIcon icon={addOutline} />
                          <IonIcon icon={removeOutline} />
                        </div>
                      </button>

                      <ul
                        className="sidebar-submenu-category-list"
                        data-accordion
                      >
                        <li className="sidebar-submenu-category">
                          <a href="#" className="sidebar-submenu-title">
                            <p className="product-name">Shirt</p>
                            <data
                              value="300"
                              className="stock"
                              title="Available Stock"
                            >
                              300
                            </data>
                          </a>
                        </li>

                        <li className="sidebar-submenu-category">
                          <a href="#" className="sidebar-submenu-title">
                            <p className="product-name">shorts & jeans</p>
                            <data
                              value="60"
                              className="stock"
                              title="Available Stock"
                            >
                              60
                            </data>
                          </a>
                        </li>

                        <li className="sidebar-submenu-category">
                          <a href="#" className="sidebar-submenu-title">
                            <p className="product-name">jacket</p>
                            <data
                              value="50"
                              className="stock"
                              title="Available Stock"
                            >
                              50
                            </data>
                          </a>
                        </li>

                        <li className="sidebar-submenu-category">
                          <a href="#" className="sidebar-submenu-title">
                            <p className="product-name">dress & frock</p>
                            <data
                              value="87"
                              className="stock"
                              title="Available Stock"
                            >
                              87
                            </data>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
              <FilterColor />
            </div>

            <div className="product-showcase">
              <h3 className="showcase-heading">Giảm Giá khung giờ vàng !!!</h3>

              {productsHotLoading ? (
                <Loading />
              ) : (
                <div className="showcase-wrapper">
                  <div className="showcase-container">
                    {productsHot.map((item: ProductItem, key: number) => (
                      <div key={key} className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src={`../images/products/${item.image}`}
                            alt="baby fabric shoes"
                            width="75"
                            height="75"
                            className="showcase-img"
                          />
                        </a>

                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">{item.name}</h4>
                          </a>

                          <div className="showcase-rating">
                            <IonIcon icon={star} />

                            <IonIcon icon={star} />

                            <IonIcon icon={star} />

                            <IonIcon icon={star} />

                            <IonIcon icon={star} />
                          </div>

                          <div className="price-box">
                            <p className="price">{Currency(item.price_sale)}</p>{' '}
                            <del>{Currency(item.price)}</del>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="product-box">
            <div className="product-main">
              <div className="filter-menu">
                <div className="filter-title">Lọc sản phẩm</div>
                <div className="filter-options">
                  <div className="filter-option d-flex align-items-center">
                    <select
                      id="category"
                      className="form-select form-select-sm col-md-2"
                      style={{ marginRight: '20px', marginTop: '20px' }} // Thêm padding cho select
                    >
                      <option value="all">All</option>
                      <option value="running">Running</option>
                      <option value="football">Football</option>
                      <option value="formal">Formal</option>
                      <option value="casual">Casual</option>
                    </select>
                    <CustomizedSelects />
                  </div>
                  <SliderSizes />
                </div>
              </div>
              <h2>Sản phẩm</h2>
              {productsIsLoading ? (
                <Loading />
              ) : (
                <div className="product-grid">
                  {products.map((item: ProductItem, index: number) => (
                    <div className="showcase" key={index}>
                      <div
                        className="showcase-banner"
                        onClick={() => handleDetailProduct(item._id)}
                      >
                        <img
                          src={`../images/products/${item.image}`}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img default"
                        />
                        <img
                          src={`../images/products/${item.image}`}
                          alt="Mens Winter Leathers Jackets"
                          width="300"
                          className="product-img hover"
                        />
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
            <PaginationOutlined />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
