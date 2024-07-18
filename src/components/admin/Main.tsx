import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAsync, fetchAllUsers } from '../../store/slice/Users';
import { toast } from 'react-toastify';

interface Props {
  // define your props here
}

const Main: React.FC<Props> = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserAsync(formData));
  };
  const { data } = useSelector((state) => state.users);
  // const { isSuccess } = useSelector((state) => state.users);

  // useEffect(() => {
  //   if (isSuccess === true) {
  //     toast('Tạo user thành công');
  //   }
  // }, [isSuccess]);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleShowAddUserModal = () => {
    setShowAddUserModal(true);
  };

  const handleCloseAddUserModal = () => {
    setShowAddUserModal(false);
  };

  const handleShowEditUserModal = () => {
    setShowEditUserModal(true);
  };

  const handleCloseEditUserModal = () => {
    setShowEditUserModal(false);
  };
  return (
    <div className="card shadow border-0 mb-7">
      <div className="card-header">
        <h5 className="mb-0">Quản lý</h5>
        <Button variant="primary" onClick={handleShowAddUserModal}>
          Thêm người dùng
        </Button>
        <Modal show={showAddUserModal} onHide={handleCloseAddUserModal}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <>
              <Form onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Họ & tên"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Vui lòng nhập tên"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Vui lòng nhập Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Mật khẩu"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Vui lòng nhập password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Xác nhận mật khẩu"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    name="password2"
                    placeholder="Vui lòng nhập password2"
                    value={formData.password2}
                    onChange={handleChange}
                  />
                </FloatingLabel>
                <Button onClick={handleCloseAddUserModal} type="submit">
                  Submit
                </Button>
              </Form>
            </>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="primary" onClick={handleCloseAddUserModal}>
              Thêm
            </Button> */}
          </Modal.Footer>
        </Modal>{' '}
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-nowrap">
          <thead className="thead-light">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Tên</th>
              <th scope="col">Email</th>
              <th scope="col">SĐT</th>
              <th scope="col">Hành động</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>

                <td>
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                    className="avatar avatar-sm rounded-circle me-2"
                  />
                  <a className="text-heading font-semibold" href="#">
                    {item.fullName}
                  </a>
                </td>
                <td>{item.email}</td>
                <td>
                  <img
                    alt="..."
                    src="https://bytewebster.com/img/logo.png"
                    className="avatar avatar-xs rounded-circle me-2"
                  />
                  <a
                    className="text-heading font-semibold"
                    href="https://www.bytewebster.com/"
                  >
                    Bytewebster
                  </a>
                </td>

                <td>
                  <div className="d-flex">
                    {' '}
                    <button type="button" onClick={handleShowEditUserModal}>
                      {' '}
                      <a href="#" className="btn btn-sm btn-neutral">
                        View
                      </a>
                    </button>
                    <Modal
                      show={showEditUserModal}
                      onHide={handleCloseEditUserModal}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Sửa người dùng</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Tên"
                            className="mb-3"
                          >
                            <Form.Control
                              type="name"
                              placeholder="Vui lòng nhập tên"
                            />
                          </FloatingLabel>{' '}
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                          >
                            <Form.Control
                              type="email"
                              placeholder="Vui lòng nhập Email"
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Mật khẩu"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Mật khẩu"
                            />
                          </FloatingLabel>
                        </>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={handleCloseEditUserModal}
                        >
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={handleCloseEditUserModal}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>{' '}
                    <button className="btn btn-danger">
                      <i className="bi bi-trash" />
                    </button>{' '}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer border-0 py-5">
        <span className="text-muted text-sm">
          Showing 10 items out of 250 results found
        </span>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link disabled" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link bg-info text-white" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Main;
