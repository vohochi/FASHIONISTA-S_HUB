import React from 'react';

interface Props {
  // define your props here
}

const Blog: React.FC<Props> = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          <div className="blog-card">
            <a href="#">
              <img
                src={`../../public/images/blog-1.jpg`}
                alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                width="300"
                className="blog-banner"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Fashion
              </a>

              <a href="#">
                <h3 className="blog-title">
                  Hướng dẫn bán lẻ quần áo KPIS 2021 cho giám đốc điều hành quần
                  áo.{' '}
                </h3>
              </a>

              <p className="blog-meta">
                {/* <time datetime="2022-04-06">Apr 06, 2022</time> */}
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={`../../public/images/blog-2.jpg`}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Clothes
              </a>

              <h3>
                <a href="#" className="blog-title">
                  Xu hướng thời trang lề đường: Làm thế nào để giành chiến thắng
                  trong trận chiến bán tải.{' '}
                </a>
              </h3>

              <p className="blog-meta">
                {/* <time datetime="2022-01-18">Jan 18, 2022</time> */}
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={`../../public/images/blog-3.jpg`}
                alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Shoes
              </a>

              <h3>
                <a href="#" className="blog-title">
                  Nhà cung cấp EBT: Yêu cầu chia sẻ doanh thu trực tuyến của
                  bạn.{' '}
                </a>
              </h3>

              <p className="blog-meta">
                {/* <time datetime="2022-02-10">Feb 10, 2022</time> */}
              </p>
            </div>
          </div>

          <div className="blog-card">
            <a href="#">
              <img
                src={`../../public/images/blog-4.jpg`}
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </a>

            <div className="blog-content">
              <a href="#" className="blog-category">
                Thiết bị điện tử
              </a>

              <h3>
                <a href="#" className="blog-title">
                  Xu hướng thời trang lề đường: Làm thế nào để giành chiến thắng
                  trong trận chiến bán tải.{' '}
                </a>
              </h3>

              <p className="blog-meta">
                {/* <time datetime="2022-03-15">Mar 15, 2022</time> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
