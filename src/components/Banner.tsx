import React from 'react';

interface SliderItem {
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  title: string;
  price: number;
}

const Banner: React.FC = () => {
  const sliderItems: SliderItem[] = [
    {
      imageSrc: '../../public/banner-1.jpg',
      imageAlt: "women's latest fashion sale",
      subtitle: 'Trending item',
      title: "Women's latest fashion sale",
      price: 20.0,
    },
    {
      imageSrc: '../../public/banner-2.jpg',
      imageAlt: 'modern sunglasses',
      subtitle: 'Trending accessories',
      title: 'Modern sunglasses',
      price: 15.0,
    },
    {
      imageSrc: '../../public/banner-3.jpg',
      imageAlt: 'new fashion summer sale',
      subtitle: 'Sale Offer',
      title: 'New fashion summer sale',
      price: 29.99,
    },
  ];

  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {sliderItems.map((item, index) => (
            <div key={index} className="slider-item">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">{item.subtitle}</p>
                <h2 className="banner-title">{item.title}</h2>
                <p className="banner-text">
                  starting at $ <b>{item.price.toFixed(2)}</b>
                </p>
                <a href="#" className="banner-btn">
                  Shop now
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
