import React from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
interface Props {
  // define your props here
}

const ForgetPassword: React.FC<Props> = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row justify-content-center">
        <div className="card-body">
          <div className="modal-close-overlay" data-modal-overlay></div>
          <div className="modal-content">
            <button className="modal-close-btn" data-modal-close>
              <IonIcon className="close" icon={closeOutline} />
            </button>

            <div className="newsletter-img">
              <img
                src="../../public/images/newsletter.png"
                alt="subscribe newsletter"
                width="400"
                height="400"
              />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">Nhập lại email</h3>

                  <p className="newsletter-desc">
                    Xác nhận bằng cách click vào nút bên dưới
                  </p>
                </div>

                <input
                  type="email"
                  name="email"
                  className="email-field"
                  placeholder="Email Address"
                  required
                />

                <button type="submit" className="btn-newsletter">
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
