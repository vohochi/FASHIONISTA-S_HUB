import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputFileUpload from '../components/InputFileUpload';
import { useForm } from 'react-hook-form';
import { updateProfileUser } from '../store/slice/Auth';
import { Bounce, toast } from 'react-toastify';

interface Props {
  // define your props here
}

const Profile: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const image = user?.image;
  const email = user?.email;
  const fullName = user?.fullName;
  const address = user?.address;
  const phone = user?.phone;

  const { register, handleSubmit } = useForm();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    setAvatar(image);
    setAvatarUrl(image ? `assets/images/avatars/${image}` : null);
  }, [image]);
  const handleChooseAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAvatar(file.name);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('email', email);
    formData.append('phone', data.phone);
    formData.append('address', data.address);
    formData.append('image', avatar);
    dispatch(updateProfileUser(formData));
    toast.success('Thêm vào giỏ hàng thành công', {
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

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {' '}
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={avatarUrl || avatar}
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary m-2"
                      width={110}
                    />

                    <InputFileUpload onChange={handleChooseAvatar} />
                    <h4>{fullName}</h4>
                    <div className="mt-3">
                      <p className="text-muted font-size-sm">
                        Địa chỉ: {address}
                      </p>
                      <button className="btn btn-primary m-1">Theo dõi</button>
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
                        // name="fullName"
                        type="text"
                        className="form-control"
                        defaultValue={fullName}
                        {...register('fullName')}
                      />
                    </div>
                  </div>{' '}
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        disabled
                        defaultValue={email}
                        {...register('email')}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Số điện thoại</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={phone}
                        {...register('phone')}
                      />
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
                        defaultValue={address}
                        {...register('address')}
                      />
                    </div>
                  </div>
                  {/* Repeat similar structure for other input fields */}
                  <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-9 text-secondary">
                      <button className="btn btn-primary form-control ">
                        Xác nhận
                      </button>{' '}
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
      </form>
    </div>
  );
};

export default Profile;
