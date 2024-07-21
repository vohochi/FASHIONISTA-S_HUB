import React from 'react';
import { useSelector } from 'react-redux';

interface Props {
  // define your props here
}

const Profile: React.FC<Props> = () => {
  const { user } = useSelector((state) => state.auth);

  const image = user?.image;
  const email = user?.email;
  const fullName = user?.fullName;
  const address = user?.address;
  const password = user?.password;
  const phone = user?.phone;
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={`assets/images/avatars/${image}`}
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width={110}
                  />
                  <div className="mt-3">
                    <h4>{fullName}</h4>
                    <p className="text-muted font-size-sm">{address} </p>
                    <button className="btn btn-primary">Theo dõi</button>
                    <button className="btn btn-outline-primary">
                      Nhắn tin
                    </button>
                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap"></li>
                  {/* Repeat similar structure for other social media links */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Họ và tên</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={fullName}
                    />
                  </div>
                </div>{' '}
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value={email} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Số điện thoại</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value={phone} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Địa chỉ</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Cập nhật mật khẩu</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                {/* Repeat similar structure for other input fields */}
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-9 text-secondary">
                    <input type="button" className="btn btn-primary px-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
