import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  selectCartItems,
  selectCartTotal,
} from '../store/slice/cart';
import { Currency } from '../utils/Currency';
import { useFormContext } from 'react-hook-form';
import Error from '../components/Error';
import { createOrder } from '../store/slice/order';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface Props {
  // define your props here
}

const CheckOut: React.FC<Props> = () => {
  const totalCart = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  // console.log(cartItems);
  const navigator = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const email = user?.email;
  const fullName = user?.fullName;
  const phone = user?.phone;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useFormContext();

  const onSubmit = () => {
    const formData = watch();
    const data = {
      products: cartItems.map((item) => ({
        _id: item._id,
        quantity: item.quantity,
        price: item.price,
        name: item.name,
        image: item.image,
      })),
      shippingAddress: {
        ...formData,
      },
      totalPrice: totalCart,
    };
    dispatch(createOrder(data));
    dispatch(clearCart());

    reset();

    navigator('/invoice');
    toast.success('Cập nhật thông thành công', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <ol className="activity-checkout mb-0 px-4 mt-3">
                <li className="checkout-item">
                  <h5 className="font-size-16 mb-1">Thanh toán</h5>
                  <div className="avatar checkout-icon p-1">
                    <div className="avatar-title rounded-circle bg-primary">
                      <i className="bx bxs-receipt text-white font-size-20"></i>
                    </div>
                  </div>
                  <div className="feed-item-list">
                    <div>
                      <div className="mb-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-name"
                                  >
                                    Họ & Tên
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errors.fullName ? 'error' : 'success'
                                    }`}
                                    id="billing-name"
                                    placeholder="Nhập tên"
                                    value={fullName}
                                    {...register('fullName')}
                                  />
                                  {errors.fullName && (
                                    <Error
                                      error={errors.fullName.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-email-address"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className={`form-control ${
                                      errors.email ? 'error' : 'success'
                                    }`}
                                    id="billing-email-address"
                                    placeholder="Nhập Email"
                                    value={email}
                                    {...register('email')}
                                  />
                                  {errors.email && (
                                    <Error
                                      error={errors.email.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-phone"
                                  >
                                    Số điện thoại
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="billing-phone"
                                    value={phone}
                                    placeholder="Nhập số điện thoại"
                                    {...register('phone')}
                                  />
                                  {errors.phone && (
                                    <Error
                                      error={errors.phone.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="billing-address"
                              >
                                Địa chỉ(Nhận hàng)
                              </label>
                              <textarea
                                className="form-control"
                                id="billing-address"
                                // rows="3"
                                placeholder="Địa chỉ nhận hàng"
                                {...register('address')}
                              ></textarea>
                              {errors.address && (
                                <Error
                                  error={errors.address.message?.toString()}
                                />
                              )}
                            </div>

                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label className="form-label">
                                    Thành phố
                                  </label>
                                  <select
                                    className="form-control form-select"
                                    title="city"
                                    {...register('city')}
                                  >
                                    <option value="0">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                  </select>
                                  {errors.city && (
                                    <Error
                                      error={errors.city.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-city"
                                  >
                                    Quận/ Huyện
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-city"
                                    placeholder="Chọn quận/ huyện"
                                    {...register('village')}
                                  />
                                  {errors.village && (
                                    <Error
                                      error={errors.village.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-0">
                                  <label
                                    className="form-label"
                                    htmlFor="zip-code"
                                  >
                                    Phường/ Xã
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zip-code"
                                    placeholder="Chọn phường/ xã"
                                    {...register('wards')}
                                  />
                                  {errors.wards && (
                                    <Error
                                      error={errors.wards.message?.toString()}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-success text-end"
                            style={{ margin: '10px', float: 'right' }}
                          >
                            <i className="mdi mdi-cart-outline me-1"></i> Thanh
                            toán
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <a
                href="ecommerce-products.html"
                className="btn btn-link text-muted"
              >
                <i className="mdi mdi-arrow-left me-1"></i> Tiếp tục mua sắm
              </a>
            </div>
            <div className="col">
              <div className="text-end mt-2 mt-sm-0"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card checkout-order-summary">
            <div className="card-body">
              <div className="p-3 bg-light mb-3">
                <h5 className="font-size-16 mb-0">
                  Tổng tiền{' '}
                  <span className="float-end ms-2">{Currency(totalCart)}</span>
                </h5>
              </div>
              <div className="table-responsive">
                <table className="table table-centered mb-0 table-nowrap">
                  <thead>
                    <tr>
                      <th
                        className="border-top-0"
                        style={{ width: '110px' }}
                        scope="col"
                      >
                        Sản phẩm
                      </th>
                      <th className="border-top-0" scope="col">
                        Số lượng
                      </th>
                      <th className="border-top-0" scope="col">
                        Giá
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, key) => (
                      <tr key={key}>
                        <td>
                          <img
                            src={`../images/products/${item.image}`}
                            style={{ width: '30%' }}
                          />{' '}
                          {item.name}
                        </td>
                        <td>{item.quantity}</td>
                        <td>{Currency(item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
