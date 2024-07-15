import React from 'react';
import { IonIcon } from '@ionic/react';
import { star, starOutline, heart } from 'ionicons/icons';
import { useFetch } from '../hooks/UseReducer';
import Error from '../utils/Error';
import Loading from '../components/Loading';
import { Currency } from '../utils/Currency';
import { useParams } from 'react-router-dom';

const Detail: React.FC = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useFetch(`product/${id}`);
  if (productError) {
    let errorMessage = '';
    errorMessage += 'Lỗi khi fetch categories\n';
    return <Error title="Lỗi khi fetch dữ liệu" message={errorMessage} />;
  }

  return (
    <>
      <div className="navigation">
        <span className="separator">Trang Chủ</span>
        <span className="separator">/</span>
        <span className="separator">Chi tiết sản phẩm</span>
      </div>
      <div className="container">
        <div className="product-featured">
          <h2 className="title">Sản phẩm</h2>
          {productLoading ? (
            <Loading />
          ) : (
            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img
                      src={`../../public/images/products/${product.image}`}
                      alt="shampoo, conditioner & facewash packs"
                      className="showcase-img"
                    />
                  </div>
                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={starOutline} />
                      <IonIcon icon={starOutline} />
                    </div>
                    <a href="#">
                      <h3 className="showcase-title">{product.name}</h3>
                    </a>
                    <p className="showcase-desc">{product.description}</p>
                    <div className="price-box">
                      <p className="price">
                        {Currency(product.price_sale) &&
                          Currency(product.price)}
                      </p>
                      {/* <del>$200.00</del> */}
                    </div>

                    {/* <label htmlFor=""></label> */}
                    <div className="input-group formInput">
                      <button className="add-cart-btn">add to cart</button>
                      <span className="mx-2"></span>{' '}
                      <button className="add-cart-btn">
                        <IonIcon icon={heart} />
                      </button>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="quantity-control w-75 ms-auto">
                            <div className="input-group">
                              <button
                                className="btn btn-outline-secondary btn-minus"
                                type="button"
                                data-type="minus"
                                data-field="quant[2]"
                              >
                                -
                              </button>

                              <input
                                type="text"
                                name="quant[2]"
                                className="form-control text-center"
                                defaultValue="1"
                                min="1"
                                max="10"
                              />
                              <button
                                className="btn btn-outline-secondary btn-plus"
                                type="button"
                                data-type="plus"
                                data-field="quant[2]"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h1>Chọn Size</h1>
                    <div className="size-container">
                      {product?.size?.map((item: string, key: number) => (
                        <button key={key} className="size-button">
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>
                        <p>
                          available: <b>40</b>
                        </p>
                      </div>
                      <div className="showcase-status-bar" />
                    </div>
                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">360</p>
                          <p className="display-text">Days</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
// <div className="blog">
//   <div className="container">
//     <div className="blog-container has-scrollbar">
//       <div className="blog-card">
//         <a href="#">
//           <img
//             src="../../public/images/blog-1.jpg"
//             alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
//             width="300"
//             className="blog-banner"
//           />
//         </a>

//         <div className="blog-content">
//           <a href="#" className="blog-category">
//             Fashion
//           </a>

//           <a href="#">
//             <h3 className="blog-title">
//               Clothes Retail KPIs 2021 Guide for Clothes Executives.
//             </h3>
//           </a>

//           <p className="blog-meta">
//             By <cite>Mr Admin</cite> /
//             {/* <time datetime="2022-04-06">Apr 06, 2022</time> */}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
