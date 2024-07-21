import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byEmailOrder, getAllOrder } from '../store/slice/order';

interface Props {
  // define your props here
}

const Invoice: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.orders);
  const { user } = useSelector((state) => state.auth);
  const email = user?.email;
  useEffect(() => {
    dispatch(byEmailOrder(email));
    console.log(data);
  }, []);

  return (
    <>
      {/* Hello world */}
      <div className="container">
        <div className="col-md-12">
          <div className="invoice">
            {/* begin invoice-company */}
            <h2>Đơn hàng của bạn</h2>
            {/* end invoice-company */}
            {/* begin invoice-header */}
            <div className="invoice-header">
              <div className="invoice-from">
                <small>Thông tin</small>
                <address className="m-t-5 m-b-5">
                  <strong className="text-inverse">Twitter, Inc.</strong>
                  <br />
                  Street Address
                  <br />
                  City, Zip Code
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Fax: (123) 456-7890
                </address>
              </div>
              <div className="invoice-to">
                <small>to</small>
                <address className="m-t-5 m-b-5">
                  <strong className="text-inverse">Company Name</strong>
                  <br />
                  Street Address
                  <br />
                  City, Zip Code
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Fax: (123) 456-7890
                </address>
              </div>
              <div className="invoice-date">
                <small>Invoice / July period</small>
                <div className="date text-inverse m-t-5">August 3,2012</div>
                <div className="invoice-detail">
                  #0000123DSS
                  <br />
                  Services Product
                </div>
              </div>
            </div>
            {/* end invoice-header */}
            {/* begin invoice-content */}
            <div className="invoice-content">
              {/* begin table-responsive */}
              <div className="table-responsive">
                <table className="table table-invoice">
                  <thead>
                    <tr>
                      <th>Mã đơn hàng</th>
                      <th className="text-center">Ngày đặt hàng</th>
                      <th className="text-center">Tổng giá trị đơn hàng</th>
                      <th className="text-center">Trạng thái đơn hàng</th>
                      <th className="text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <small>sdf</small>
                      </td>
                      <td className="text-center">$50.00</td>
                      <td className="text-center">50</td>
                      <td className="text-right">$2,500.00</td>
                      <td className="text-right">
                        <button className="btn btn-primary">Đang xử lý</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table-responsive */}
              {/* begin invoice-price */}

              {/* end invoice-price */}
            </div>
            {/* end invoice-content */}
            {/* begin invoice-note */}

            {/* end invoice-note */}
            {/* begin invoice-footer */}

            {/* end invoice-footer */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
