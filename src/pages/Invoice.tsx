import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byEmailOrder } from '../store/slice/order';
import { RootState } from '../store';
import { Currency } from '../utils/Currency';
import AlertDialogSlide from '../components/SuccessOrder';

const Invoice: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.orders);
  const { user } = useSelector((state) => state.auth);
  const email = user?.email;
  const [showDialog, setShowDialog] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    dispatch(byEmailOrder(email));
  }, [dispatch, email]);

  const handleDetail = (order) => {
    setCurrentOrder(order);
    setShowDialog(true);
  };

  return (
    <div className="container">
      <div className="col-md-12">
        <div className="invoice">
          <div className="invoice-content">
            <div className="table-responsive">
              <table className="table table-invoice">
                <thead>
                  <tr>
                    <th className="text-center">Đơn hàng</th>
                    <th className="text-center">Ngày đặt hàng</th>
                    <th className="text-center">Tổng giá trị đơn hàng</th>
                    <th className="text-center">Trạng thái đơn hàng</th>
                    <th className="text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, key) => (
                    <tr key={key}>
                      <td className="text-center">{item._id}</td>
                      <td className="text-center">{item.createdAt}</td>
                      <td className="text-center">
                        {Currency(item.totalPrice)}
                      </td>
                      <td className="text-center">
                        <button className="btn btn-primary">Đang xử lý</button>
                      </td>
                      <td
                        className="text-center"
                        onClick={() => handleDetail(item)}
                      >
                        <i className="bi bi-receipt fs-3 text-primary"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showDialog && currentOrder && (
        <AlertDialogSlide
          products={currentOrder.products}
          shippingAddress={currentOrder.shippingAddress}
          onClose={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default Invoice;
