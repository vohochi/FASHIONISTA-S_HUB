import React, { useState, useEffect } from 'react';

const Banner: React.FC = () => {
  const sliderItems = [
    {
      imageSrc: '../../public/banner-1.jpg',
      imageAlt: 'Bán thời trang mới nhất của phụ nữ',
      subtitle: 'Mục xu hướng',
      title: 'Bán thời trang mới nhất của phụ nữ',
      price: 150.0,
    },
    {
      imageSrc: '../../public/banner-2.jpg',
      imageAlt: 'Kính râm hiện đại',
      subtitle: 'Phụ kiện xu hướng',
      title: 'Kính râm hiện đại',
      price: 200.0,
    },
    {
      imageSrc: '../../public/banner-3.jpg',
      imageAlt: 'Bán mùa hè thời trang mới',
      subtitle: 'Ưu đãi bán hàng',
      title: 'Bán mùa hè thời trang mới',
      price: 219.99,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`slider-item ${
                index === currentSlide ? 'active' : ''
              }`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">{item.subtitle}</p>
                <h2 className="banner-title">{item.title}</h2>
                <p className="banner-text">
                  bắt đầu tại $ <b>{item.price.toFixed(2)}</b>
                </p>
                <a href="#" className="banner-btn">
                  Mua sắm ngay bây giờ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
