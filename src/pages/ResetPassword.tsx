import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { resetPasswordAuth } from '../store/slice/Auth';

interface Props {
  // define your props here
}

const ResetPassword: React.FC<Props> = () => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAuth({ newPassword: password, token }));

    toast.success('Thay đổi mật khẩu thành công ', {
      position: 'top-right',
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
    <div className="modal-content">
      <button className="modal-close-btn" data-modal-close>
        <IonIcon className="close" icon={closeOutline} />
      </button>

      <div className="newsletter">
        <form onSubmit={handleSubmit}>
          <div className="newsletter-header">
            <h3 className="newsletter-title">Cập nhật mật khẩu</h3>
          </div>

          <div className="mb-3">
            <label>Mã xác nhận</label>
            <input
              type="text"
              name="password"
              className="form-control form-control-lg"
              placeholder="Nhập mật khẩu"
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Nhập mật khẩu mới</label>

            <input
              type="text"
              name="confirmPassword"
              className="form-control form-control-lg"
              placeholder="*******"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Xác nhận mật khẩu</label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control form-control-lg"
              placeholder="*******"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
