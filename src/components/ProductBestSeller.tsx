import React from 'react';
import { useFetch } from '../hooks/UseReducer';
import ProductItem from '../types/Products';
import { Currency } from '../utils/Currency';

interface Props {
  handleDetailProduct: (productId: string) => void;
}
const ProductBestSeller: React.FC<Props> = ({ handleDetailProduct }) => {
  const {
    data: productsTrending,
    isLoading: productsTrendingIsLoading,
    error: productsTrendingError,
  } = useFetch('products/trending');
  const {
    data: productsTopRate,
    isLoading: productsTopRateIsLoading,
    error: productsTopRateError,
  } = useFetch('products/topRate');
  const {
    data: productsHot,
    isLoading: productsHotIsLoading,
    error: productsHotError,
  } = useFetch('products/hot');

  const errors = [
    productsTrendingError,
    productsTopRateError,
    productsHotError,
  ];

  if (errors.some((error) => error)) {
    console.error('Có lỗi xảy ra khi lấy dữ liệu');
  }
  return (
    <>
      {' '}
      <div className="product-showcase">
        <h2 className="title">Ngày Hot</h2>

        <div className="showcase-wrapper has-scrollbar">
          {!productsHotIsLoading && (
            <div className="showcase-container">
              {productsHot.map((item: ProductItem) => (
                <div
                  onClick={() => handleDetailProduct(item._id)}
                  className="showcase"
                  key={item._id}
                >
                  <a href="#" className="showcase-img-box">
                    <img
                      src={`../images/products/${item.image}`}
                      alt={item.name}
                      width="70"
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{item.name} </h4>
                    </a>

                    <a href="#" className="showcase-category">
                      {item.category}
                    </a>

                    <div className="price-box">
                      <p className="price">{Currency(item.price)}</p>
                      {/* <del>$12.00</del> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="product-showcase">
        <h2 className="title">Tuần Hot</h2>

        <div className="showcase-wrapper has-scrollbar">
          {!productsTrendingIsLoading && (
            <div className="showcase-container">
              {productsTrending.map((item: ProductItem) => (
                <div
                  onClick={() => handleDetailProduct(item._id)}
                  className="showcase"
                  key={item._id}
                >
                  <a href="#" className="showcase-img-box">
                    <img
                      src={`../images/products/${item.image}`}
                      alt={item.name}
                      className="showcase-img"
                      width="70"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{item.name} </h4>
                    </a>

                    <a href="#" className="showcase-category">
                      {item.category}
                    </a>

                    <div className="price-box">
                      <p className="price">{Currency(item.price)}</p>
                      {/* <del>$15.00</del> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="product-showcase">
        <h2 className="title">Tháng hot</h2>

        <div className="showcase-wrapper has-scrollbar">
          {!productsTopRateIsLoading && (
            <div className="showcase-container">
              {productsTopRate.map((item: ProductItem) => (
                <div
                  onClick={() => handleDetailProduct(item._id)}
                  className="showcase"
                  key={item._id}
                >
                  <a href="#" className="showcase-img-box">
                    <img
                      src={`../images/products/${item.image}`}
                      alt={item.name}
                      className="showcase-img"
                      width="70"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="#">
                      <h4 className="showcase-title">{item.name} </h4>
                    </a>

                    <a href="#" className="showcase-category">
                      {item.category}
                    </a>

                    <div className="price-box">
                      <p className="price">{Currency(item.price)}</p>
                      {/* <del>$34.00</del> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}{' '}
        </div>
      </div>
    </>
  );
};

export default ProductBestSeller;
