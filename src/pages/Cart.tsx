import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';

import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  selectShippingFee,
  setDiscountCode,
  setShippingFee,
} from '../store/slice/cart';
import { Currency } from '../utils/Currency';
import { useDispatch } from 'react-redux';

import {
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from '../store/slice/cart';
import { addOutline, removeOutline, trashOutline } from 'ionicons/icons';
import Success from '../components/Success';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const Cart: React.FC = () => {
  // Lấy thông tin bên handleAddItem
  const shippingFee = useSelector(selectShippingFee);
  const navigation = useNavigate();

  const totalCart = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const [discountCode, setDiscountCodes] = useState<string | null>(null);

  const count = cartItems.length;

  const handleRemoveItem = (itemID: string) => {
    dispatch(removeItem(itemID));
    toast.error('Xóa sản phẩm khỏi giỏ hàng', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error('Đã xóa hết sản phẩm khỏi giỏ hàng', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };
  const handleIncrease = (itemID: string) => {
    dispatch(increaseQuantity(itemID));
  };
  const handleDecrease = (itemID: string) => {
    dispatch(decreaseQuantity(itemID));
  };

  const handleShippingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(event.target.value, 10);
    dispatch(setShippingFee(selectedValue));
  };

  const handleSetDiscountCode = (event) => {
    const code = event.target.value;
    setDiscountCodes(code);
    dispatch(setDiscountCode(code));
  };

  const handleCheckOut = () => {
    navigation('/checkout');
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: '15px' }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Giỏ hàng của bạn</h1>
                        <h6 className="mb-0 text-muted">{count} Sản phẩm</h6>
                      </div>
                      <hr className="my-4" />
                      {cartItems.map((item, key: number) => (
                        <div
                          key={key}
                          className="row mb-4 d-flex justify-content-between align-items-center"
                        >
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={`../images/products/${item.image}`}
                              className="img-fluid rounded-3"
                              alt={item.name}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{item.name}</h6>
                            <h6 className="mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-link px-2"
                              onClick={() => {
                                handleDecrease(item._id);
                              }}
                            >
                              <IonIcon icon={removeOutline} />
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control form-control-sm"
                            />

                            <button
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-link px-2"
                              onClick={() => {
                                handleIncrease(item._id);
                              }}
                            >
                              <IonIcon icon={addOutline} />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex  justify-content-between">
                            <h6 className="mb-0">{Currency(item.price)}</h6>
                            <IonIcon
                              icon={trashOutline}
                              style={{ cursor: 'pointer' }}
                              onClick={() => handleRemoveItem(item._id)}
                            />
                          </div>

                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                      ))}
                      <hr className="my-4" />
                      <button
                        onClick={() => handleClearCart()}
                        className="btn btn-danger"
                      >
                        Xóa hết
                      </button>{' '}
                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a
                            onClick={() => navigation('/#')}
                            className="text-body"
                          >
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Bản tóm tắt</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">
                          Số lượng sản phẩm : {count}
                        </h5>
                        <h5>{Currency(totalCart)}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Vận chuyển</h5>

                      <div className="mb-4 pb-2 d-flex">
                        <select
                          onChange={handleShippingChange}
                          data-mdb-select-init
                        >
                          <option value="30000">J&T Express (3-7 ngày)</option>
                          <option value="45000">
                            Giao Hàng Nhanh (1-3 ngày)
                          </option>
                        </select>
                        <div style={{ padding: ' 10px' }}>
                          {Currency(shippingFee)}
                        </div>
                      </div>

                      <h5 className="text-uppercase mb-3">Mã giảm giá</h5>

                      <div className="mb-5">
                        <div data-mdb-input-init className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            placeholder="Nhập mã giảm giá"
                            value={discountCode || ''}
                            onChange={handleSetDiscountCode}
                          />
                          {discountCode && (
                            <Success message="Mã giảm giá của bạn hợp lệ" />
                          )}{' '}
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Tổng tiền</h5>
                        <h5>{Currency(totalCart)}</h5>
                      </div>

                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={handleCheckOut}
                      >
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
