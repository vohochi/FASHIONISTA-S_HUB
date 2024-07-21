import React, { useContext, useState } from 'react';
import '../styles/vector.css';
import '../styles/vendor.css';
import '../styles/themmin.css';
import { IonIcon } from '@ionic/react';
import { close, eye } from 'ionicons/icons';
import ForgetPassword from './ForgetPassword';
import Error from '../components/Error';
import { useFormContext } from 'react-hook-form';
import UserProvider from '../context/UserContext';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/Auth';
import { toast } from 'react-toastify';
import { LoginModalContext } from '../context/LoginContext';
interface LoginProps {
  onSwitchToRegister: () => void;
}

const LogIn: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const [activeForm, setActiveForm] = useState('login');
  const { showLoginModal, setShowLoginModal } = useContext(LoginModalContext);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext();

  const handleShowForgotPasswordForm = () => {
    setActiveForm('forgotPassword');
  };

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));
    reset();
    toast.success('Đăng nhập thành công');
    setShowLoginModal(!showLoginModal);
    // navigator('/#');
  };

  return (
    <>
      {activeForm === 'register' && <UserProvider />}
      {activeForm === 'login' && (
        <main id="content" role="main" className="main">
          <div className="container py-5 py-sm-7">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-12">
                <div className="card card-lg mb-5">
                  {' '}
                  <div className="card-body">
                    <IonIcon className="close" icon={close} />
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="js-validate"
                    >
                      <div className="text-center">
                        <div className="mb-5">
                          <h1 className="display-4">Đăng nhập</h1>
                        </div>

                        <a
                          className="btn btn-lg btn-block btn-white mb-4"
                          href="#"
                        >
                          <span className="d-flex justify-content-center align-items-center">
                            <img
                              className="avatar avatar-xss mr-2"
                              src="../../public/brands/google.svg"
                              alt="Image Description"
                            />
                            Đăng nhập với Google
                          </span>
                        </a>

                        <span className="divider text-muted mb-4">Hoặc</span>
                      </div>

                      {/* Form Group */}
                      <div className="js-form-message form-group">
                        <label className="input-label" htmlFor="signinSrEmail">
                          Email
                        </label>
                        <input
                          // type="email"
                          className={`form-control form-control-lg ${
                            errors.email ? 'error' : 'success'
                          }`}
                          id="signinSrEmail"
                          placeholder="email@address.com"
                          aria-label="email@address.com"
                          data-msg="Please enter a valid email address."
                          {...register('email')}
                        />
                        {errors.email && (
                          <Error error={errors.email.message?.toString()} />
                        )}
                      </div>
                      {/* End Form Group */}

                      {/* Form Group */}
                      <div className="js-form-message form-group">
                        <label
                          className="input-label"
                          htmlFor="signupSrPassword"
                          tabIndex={0}
                        >
                          <span className="d-flex justify-content-between align-items-center">
                            Mật khẩu
                            <a
                              onClick={handleShowForgotPasswordForm}
                              className="input-label-secondary"
                            >
                              Quên mật khẩu?
                            </a>
                          </span>
                        </label>

                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            className={`form-control form-control-lg ${
                              errors.password ? 'error' : 'success'
                            }`}
                            id="signupSrPassword"
                            placeholder="******** "
                            aria-label="8+ characters "
                            data-msg="Your password is invalid. Please try again."
                            data-hs-toggle-password-options='{
                                 "target": "#changePassTarget",
                                 "defaultClass": "tio-hidden-outlined",
                                 "showClass": "tio-visible-outlined",
                                 "classChangeTarget": "#changePassIcon"
                               }'
                            {...register('password')}
                          />
                          {errors.password && (
                            <Error
                              error={errors.password.message?.toString()}
                            />
                          )}

                          <div
                            id="changePassTarget"
                            className="input-group-append"
                          >
                            <a className="input-group-text">
                              <IonIcon className="close" icon={eye} />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Form Group */}

                      {/* Checkbox */}
                      <div className="form-group d-flex justify-content-between">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="termsCheckbox"
                            name="termsCheckbox"
                          />
                          <label
                            className="custom-control-label text-muted"
                            htmlFor="termsCheckbox"
                          >
                            Ghi nhớ
                          </label>
                        </div>
                        <button
                          onClick={onSwitchToRegister}
                          className="item-right"
                        >
                          Đăng ký
                        </button>
                      </div>
                      {/* End Checkbox */}

                      <button
                        type="submit"
                        className="btn btn-lg btn-block btn-primary"
                      >
                        Đăng nhập
                      </button>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
                {/* End Card */}

                {/* Footer */}
                <div className="text-center">
                  <small className="text-cap mb-4">
                    Được tin tưởng bởi các đội tốt nhất thế giới
                  </small>

                  <div className="w-85 mx-auto">
                    <div className="row justify-content-between">
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="../../public/brands/gitlab-gray.svg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="../../public/brands/fitbit-gray.svg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="../../public/brands/flow-xo-gray.svg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="col">
                        <img
                          className="img-fluid"
                          src="../../public/brands/layar-gray.svg"
                          alt="Image Description"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
      {activeForm === 'forgotPassword' && <ForgetPassword />}{' '}
    </>
  );
};

export default LogIn;
