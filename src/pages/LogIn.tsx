import React, { useState } from 'react';
import Register from './Register';
import '../styles/vector.css';
import '../styles/vendor.css';
import '../styles/themmin.css';
// import { useSearchParams } from 'react-router-dom';

interface LoginProps {}

const LogIn: React.FC<LoginProps> = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleShowRegisterForm = () => {
    setShowRegisterForm(true);
    // setSearchParams({ Register: 'true' });
  };

  const handleShowLoginForm = () => {
    setShowRegisterForm(false);
  };
  return (
    <div>
      {showRegisterForm ? (
        <Register handleShowLoginForm={handleShowLoginForm} />
      ) : (
        <main id="content" role="main" className="main">
          <div className="container py-5 py-sm-7">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-12">
                <div className="card card-lg mb-5">
                  <div className="card-body">
                    {/* Form */}
                    <form className="js-validate">
                      <div className="text-center">
                        <div className="mb-5">
                          <h1 className="display-4">Sign in</h1>
                          <p>
                            Bạn đã có tài khoản ?
                            <a onClick={handleShowRegisterForm}>
                              Tạo tài khoản mới
                            </a>
                          </p>
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
                            Sign in with Google
                          </span>
                        </a>

                        <span className="divider text-muted mb-4">OR</span>
                      </div>

                      {/* Form Group */}
                      <div className="js-form-message form-group">
                        <label className="input-label" htmlFor="signinSrEmail">
                          Your email
                        </label>

                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          id="signinSrEmail"
                          placeholder="email@address.com"
                          aria-label="email@address.com"
                          required
                          data-msg="Please enter a valid email address."
                        />
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
                            Password
                            <a
                              className="input-label-secondary"
                              href="authentication-reset-password-basic.html"
                            >
                              Forgot Password?
                            </a>
                          </span>
                        </label>

                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            className="js-toggle-password form-control form-control-lg"
                            name="password"
                            id="signupSrPassword"
                            placeholder="8+ characters required"
                            aria-label="8+ characters required"
                            required
                            data-msg="Your password is invalid. Please try again."
                            data-hs-toggle-password-options='{
                                 "target": "#changePassTarget",
                                 "defaultClass": "tio-hidden-outlined",
                                 "showClass": "tio-visible-outlined",
                                 "classChangeTarget": "#changePassIcon"
                               }'
                          />
                          <div
                            id="changePassTarget"
                            className="input-group-append"
                          >
                            <a className="input-group-text">
                              <i
                                id="changePassIcon"
                                className="tio-visible-outlined"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Form Group */}

                      {/* Checkbox */}
                      <div className="form-group">
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
                            Remember me
                          </label>
                        </div>
                      </div>
                      {/* End Checkbox */}

                      <button
                        type="submit"
                        className="btn btn-lg btn-block btn-primary"
                        onClick={handleShowLoginForm}
                      >
                        Sign in
                      </button>
                    </form>
                    {/* End Form */}
                  </div>
                </div>
                {/* End Card */}

                {/* Footer */}
                <div className="text-center">
                  <small className="text-cap mb-4">
                    Trusted by the world's best teams
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
                {/* End Footer */}
              </div>
            </div>
          </div>
          {/* End Content */}
        </main>
      )}
    </div>
  );
};

export default LogIn;
