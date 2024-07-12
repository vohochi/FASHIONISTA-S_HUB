import React from 'react';
import { IonIcon } from '@ionic/react';
import { close, eye } from 'ionicons/icons';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFormContext } from 'react-hook-form';
import Error from '../components/Error';
import Process from '../components/Process';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface RegisterProps {
  onSwitchToLogin: () => void;
}
const Register: React.FC<RegisterProps> = ({ onSwitchToLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <main id="content" role="main" className="main">
      <div className="container py-5 py-sm-7">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-12">
            <div className="card card-lg mb-5">
              <div className="card-body">
                <IonIcon className="close" icon={close} />
                {/* Form */}
                <form className="js-validate" onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center">
                    <div className="mb-5">
                      <h1 className="display-4">Tạo tài khoản mới</h1>
                      <Process />
                    </div>

                    <a className="btn btn-lg btn-block btn-white mb-4" href="#">
                      <span className="d-flex justify-content-center align-items-center">
                        <img
                          className="avatar avatar-xss mr-2"
                          src="../../public/brands/google.svg"
                          alt="Image Description"
                        />
                        Đăng ký với Google
                      </span>
                    </a>

                    <span className="divider text-muted mb-4">OR</span>
                  </div>

                  {/* Form Group */}
                  <div className="js-form-message form-group">
                    <label className="input-label" htmlFor="fullNameSrEmail">
                      Name
                    </label>
                    <div className="form-row">
                      <div className="col-sm-6">
                        <div className="js-form-message form-group">
                          <input
                            type="name"
                            className={`form-control form-control-lg ${
                              errors.name ? 'error' : 'success'
                            }`}
                            id="name"
                            placeholder="Chi"
                            aria-label="******"
                            data-msg="Please enter a valid email address."
                            {...register('name')}
                          />
                          {errors.name && (
                            <Error error={errors.name.message?.toString()} />
                          )}
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="js-form-message form-group">
                          <input
                            type="fullName"
                            className={`form-control form-control-lg ${
                              errors.fullName ? 'error' : 'success'
                            }`}
                            id="fullName"
                            placeholder="Vo"
                            aria-label="******"
                            data-msg="Please enter a valid email address."
                            {...register('fullName')}
                          />
                          {errors.fullName && (
                            <Error
                              error={errors.fullName.message?.toString()}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <label className="input-label">Email</label>
                    <input
                      className={`form-control form-control-lg ${
                        errors.email ? 'error' : 'success'
                      }`}
                      id="email"
                      placeholder="Chivo@gmail.com"
                      aria-label="Chivo@gmail.com"
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
                        Password
                      </span>
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className={`form-control form-control-lg ${
                          errors.password ? 'error' : 'success'
                        }`}
                        id="signinSrpassword"
                        placeholder="******"
                        aria-label="******"
                        data-msg="Please enter a valid password address."
                        {...register('password')}
                      />
                      {errors.password && (
                        <Error error={errors.password.message?.toString()} />
                      )}
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text">
                          <IonIcon className="close" icon={eye} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="js-form-message form-group">
                    <label
                      className="input-label"
                      htmlFor="signupSrPassword"
                      tabIndex={0}
                    >
                      <span className="d-flex justify-content-between align-items-center">
                        Xác nhận mật khẩu
                      </span>
                    </label>

                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        className={`form-control form-control-lg ${
                          errors.confirmPassword ? 'error' : 'success'
                        }`}
                        id="signinSrconfirmPassword"
                        placeholder="******"
                        aria-label="******"
                        data-msg="Please enter a valid confirmPassword address."
                        {...register('confirmPassword')}
                      />
                      {errors.confirmPassword && (
                        <Error
                          error={errors.confirmPassword.message?.toString()}
                        />
                      )}
                      <div id="changePassTarget" className="input-group-append">
                        <a className="input-group-text">
                          <IonIcon className="close" icon={eye} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Avatar
                    <VisuallyHiddenInput type="file" />
                  </Button>
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
                        Remember me
                      </label>
                    </div>
                    <button onClick={onSwitchToLogin} className="item-right">
                      Quay trở lại
                    </button>
                  </div>
                  {/* End Checkbox */}

                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary"
                  >
                    Tạo tài khoản mới
                  </button>
                </form>
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
  );
};

export default Register;
