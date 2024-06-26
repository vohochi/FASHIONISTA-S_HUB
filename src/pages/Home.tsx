import React from 'react';
import Banner from '../components/Banner';
import { IonIcon } from '@ionic/react';
import {
  star,
  heartOutline,
  starOutline,
  eyeOutline,
  repeatOutline,
  bagAddOutline,
} from 'ionicons/icons';

interface CategoryItem {
  icon: string;
  title: string;
  amount: number;
}
const categoryItems: CategoryItem[] = [
  { icon: 'dress.svg', title: 'Dress & frock', amount: 53 },
  { icon: 'coat.svg', title: 'Winter wear', amount: 58 },
  { icon: 'glasses.svg', title: 'Glasses & lens', amount: 68 },
  { icon: 'shorts.svg', title: 'Shorts & jeans', amount: 84 },
  { icon: 'tee.svg', title: 'T-shirts', amount: 35 },
  { icon: 'jacket.svg', title: 'Jacket', amount: 16 },
  { icon: 'watch.svg', title: 'Watch', amount: 27 },
  { icon: 'hat.svg', title: 'Hat & caps', amount: 39 },
];

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            {categoryItems.map((item: CategoryItem, index: number) => (
              <div key={index} className="category-item">
                <div className="category-img-box">
                  <img
                    src={`../../public/icons/${item.icon}`}
                    alt={item.title}
                    width="30"
                  />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{item.title}</h3>
                    <p className="category-item-amount">({item.amount})</p>
                  </div>

                  <a href="#" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-main">
        <h2 className="title">New Products</h2>
        <div className="product-grid">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/jacket-3.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img default"
              />
              <img
                src="./assets/images/products/jacket-4.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img hover"
              />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={eyeOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={repeatOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={bagAddOutline} />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                jacket
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={starOutline} />

                <IonIcon icon={starOutline} />
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/jacket-3.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img default"
              />
              <img
                src="./assets/images/products/jacket-4.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img hover"
              />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={eyeOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={repeatOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={bagAddOutline} />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                jacket
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={starOutline} />

                <IonIcon icon={starOutline} />
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/jacket-3.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img default"
              />
              <img
                src="./assets/images/products/jacket-4.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img hover"
              />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={eyeOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={repeatOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={bagAddOutline} />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                jacket
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={starOutline} />

                <IonIcon icon={starOutline} />
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/jacket-3.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img default"
              />
              <img
                src="./assets/images/products/jacket-4.jpg"
                alt="Mens Winter Leathers Jackets"
                width="300"
                className="product-img hover"
              />
              <p className="showcase-badge">15%</p>
              <div className="showcase-actions">
                <button className="btn-action">
                  <IonIcon icon={heartOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={eyeOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={repeatOutline} />
                </button>
                <button className="btn-action">
                  <IonIcon icon={bagAddOutline} />
                </button>
              </div>
            </div>
            <div className="showcase-content">
              <a href="#" className="showcase-category">
                jacket
              </a>
              <a href="#">
                <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>
              <div className="showcase-rating">
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={star} />
                <IonIcon icon={starOutline} />

                <IonIcon icon={starOutline} />
              </div>
              <div className="price-box">
                <p className="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
