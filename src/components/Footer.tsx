import React from 'react';
import { IonIcon } from '@ionic/react';
import {
  locationOutline,
  callOutline,
  mailOutline,
  logoFacebook,
  logoTwitter,
  logoLinkedin,
  logoInstagram,
} from 'ionicons/icons';

const Footer: React.FC = () => {
  const categories = [
    {
      title: 'Fashion',
      items: [
        'T-shirt',
        'Shirts',
        'shorts & jeans',
        'jacket',
        'dress & frock',
        'innerwear',
        'hosiery',
      ],
    },
    {
      title: 'footwear',
      items: [
        'sport',
        'formal',
        'Boots',
        'casual',
        'cowboy shoes',
        'safety shoes',
        'Party wear shoes',
        'Branded',
        'Firstcopy',
        'Long shoes',
      ],
    },
    {
      title: 'jewellery',
      items: [
        'Necklace',
        'Earrings',
        'Couple rings',
        'Pendants',
        'Crystal',
        'Bangles',
        'bracelets',
        'nosepin',
        'chain',
        'Earrings',
        'Couple rings',
      ],
    },
    {
      title: 'cosmetics',
      items: [
        'Shampoo',
        'Bodywash',
        'Facewash',
        'makeup kit',
        'liner',
        'lipstick',
        'prefume',
        'Body soap',
        'scrub',
        'hair gel',
        'hair colors',
        'hair dye',
        'sunscreen',
        'skin loson',
        'liner',
        'lipstick',
      ],
    },
  ];

  const navItems = [
    {
      title: 'Popular Categories',
      items: ['Fashion', 'Electronic', 'Cosmetic', 'Health', 'Watches'],
    },
    {
      title: 'Products',
      items: [
        'Prices drop',
        'New products',
        'Best sales',
        'Contact us',
        'Sitemap',
      ],
    },
    {
      title: 'Our Company',
      items: [
        'Delivery',
        'Legal Notice',
        'Terms and conditions',
        'About us',
        'Secure payment',
      ],
    },
    {
      title: 'Services',
      items: [
        'Prices drop',
        'New products',
        'Best sales',
        'Contact us',
        'Sitemap',
      ],
    },
  ];

  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>
          {categories.map((category, index) => (
            <div key={index} className="footer-category-box">
              <h3 className="category-box-title">{category.title} :</h3>
              {category.items.map((item, itemIndex) => (
                <a key={itemIndex} href="#" className="footer-category-link">
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          {navItems.map((section, index) => (
            <ul key={index} className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">{section.title}</h2>
              </li>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IonIcon icon={locationOutline} />
              </div>
              <address className="content">
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IonIcon icon={callOutline} />
              </div>
              <a href="tel:+607936-8058" className="footer-nav-link">
                (607) 936-8058
              </a>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IonIcon icon={mailOutline} />
              </div>
              <a href="mailto:example@gmail.com" className="footer-nav-link">
                example@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>
            <li>
              <ul className="social-link">
                {[logoFacebook, logoTwitter, logoLinkedin, logoInstagram].map(
                  (icon, index) => (
                    <li key={index} className="footer-nav-item">
                      <a href="#" className="footer-nav-link">
                        <IonIcon icon={icon} />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <img
            src="../images/payment.png"
            alt="payment method"
            className="payment-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
