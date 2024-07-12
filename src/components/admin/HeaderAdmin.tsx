import React from 'react';

interface Props {
  // define your props here
  handleNavigate: (path: string) => void;
}

const HeaderAdmin: React.FC<Props> = ({ handleNavigate }) => {
  return (
    <header className="bg-surface-primary border-bottom pt-6">
      <div className="container-fluid">
        <button className="btn btn-primary" onClick={() => handleNavigate('/')}>
          Trang chủ
        </button>
        <div className="mb-npx">
          <div className="row align-items-center">
            <div className="col-sm-6 col-12 mb-4 mb-sm-0">
              {/* Title */}
              <h1 className="h2 mb-0 ls-tight">
                <img src="https://bytewebster.com/img/logo.png" width={40} />{' '}
                ByteWebster Application
              </h1>
            </div>
            {/* Actions */}
            <div className="col-sm-6 col-12 text-sm-end">
              <div className="mx-n1">
                <a
                  href="#"
                  className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                >
                  <span className=" pe-2">
                    <i className="bi bi-pencil" />
                  </span>
                  <span>Edit</span>
                </a>
                <a
                  href="#"
                  className="btn d-inline-flex btn-sm btn-primary mx-1"
                >
                  <span className=" pe-2">
                    <i className="bi bi-plus" />
                  </span>
                  <span>Create</span>
                </a>
                <a
                  href="#"
                  className="btn d-inline-flex btn-sm btn-warning mx-1"
                >
                  <span className=" pe-2">
                    <i className="bi bi-gear-wide-connected" />
                  </span>
                  <span>Manage</span>
                </a>
              </div>
            </div>
          </div>
          {/* Nav */}
          <ul className="nav nav-tabs mt-4 overflow-x border-0">
            <li className="nav-item ">
              <a href="#" className="nav-link active">
                All files
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link font-regular">
                Shared
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link font-regular">
                File requests
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
