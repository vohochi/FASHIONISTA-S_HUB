import React from 'react';

interface Props {
  // define your props here
}

const CheckOut: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <ol className="activity-checkout mb-0 px-4 mt-3">
                <li className="checkout-item">
                  <h5 className="font-size-16 mb-1">Thanh toán</h5>
                  <div className="avatar checkout-icon p-1">
                    <div className="avatar-title rounded-circle bg-primary">
                      <i className="bx bxs-receipt text-white font-size-20"></i>
                    </div>
                  </div>
                  <div className="feed-item-list">
                    <div>
                      <div className="mb-3">
                        <form>
                          <div>
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-name"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-name"
                                    placeholder="Enter name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-email-address"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="billing-email-address"
                                    placeholder="Enter email"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-phone"
                                  >
                                    Phone
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-phone"
                                    placeholder="Enter Phone no."
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="billing-address"
                              >
                                Address
                              </label>
                              <textarea
                                className="form-control"
                                id="billing-address"
                                // rows="3"
                                placeholder="Enter full address"
                              ></textarea>
                            </div>

                            <div className="row">
                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label className="form-label">Country</label>
                                  <select
                                    className="form-control form-select"
                                    title="Country"
                                  >
                                    <option value="0">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-4 mb-lg-0">
                                  <label
                                    className="form-label"
                                    htmlFor="billing-city"
                                  >
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="billing-city"
                                    placeholder="Enter City"
                                  />
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <div className="mb-0">
                                  <label
                                    className="form-label"
                                    htmlFor="zip-code"
                                  >
                                    Zip / Postal code
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zip-code"
                                    placeholder="Enter Postal code"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Shipping Info and Payment Info sections would go here, similar to the Billing Info section */}
              </ol>
            </div>
          </div>

          <div className="row my-4">
            <div className="col">
              <a
                href="ecommerce-products.html"
                className="btn btn-link text-muted"
              >
                <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
              </a>
            </div>
            <div className="col">
              <div className="text-end mt-2 mt-sm-0">
                <a href="#" className="btn btn-success">
                  <i className="mdi mdi-cart-outline me-1"></i> Procced
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card checkout-order-summary">
            <div className="card-body">
              <div className="p-3 bg-light mb-3">
                <h5 className="font-size-16 mb-0">
                  Order Summary <span className="float-end ms-2">#MN0124</span>
                </h5>
              </div>
              <div className="table-responsive">
                <table className="table table-centered mb-0 table-nowrap">
                  <thead>
                    <tr>
                      <th
                        className="border-top-0"
                        style={{ width: '110px' }}
                        scope="col"
                      >
                        Product
                      </th>
                      <th className="border-top-0" scope="col">
                        Product Desc
                      </th>
                      <th className="border-top-0" scope="col">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>{/* Table rows would go here */}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
