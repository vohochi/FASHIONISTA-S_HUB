import React from 'react';
import { useFetch } from '../hooks/UseReducer';
import Loading from './Loading';
import ProductItem from '../types/Products';
import { star } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { Currency } from '../utils/Currency';

interface Props {
  handleDetailProduct: (productId: string) => void;
}

const BestSeller: React.FC<Props> = ({ handleDetailProduct }) => {
  const {
    data: productsHot,
    isLoading: productsHotIsLoading,
    error: productsHotError,
  } = useFetch('products/hot');

  if (productsHotError) {
    console.error('Có lỗi xảy ra khi lấy dữ liệu');
  }
  return (
    <>
      <div className="product-showcase">
        <h3 className="showcase-heading">Sản phẩm mới</h3>

        {productsHotIsLoading ? (
          <Loading />
        ) : (
          <div className="showcase-wrapper">
            <div className="showcase-container">
              {productsHot.map((item: ProductItem) => (
                <div
                  onClick={() => handleDetailProduct(item._id)}
                  key={item.id}
                  className="showcase showcase-top"
                >
                  <a className="showcase-img-box">
                    <img
                      src={`../images/products/${item.image}`}
                      alt="baby fabric shoes"
                      width="75"
                      height="75"
                      className="showcase-img"
                    />
                    <p className="showcase-badge angle pink">New</p>
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
                      <p className="price">
                        {Currency(item.price)}
                        {/* <del> {Currency(item.price)}</del> */}
                      </p>{' '}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BestSeller;
