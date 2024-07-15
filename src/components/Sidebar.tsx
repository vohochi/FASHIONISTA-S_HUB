import React from 'react';
import { useFetch } from '../hooks/UseReducer';
import Loading from './Loading';
import CategoryItem from '../types/Categories';
interface Props {
  onCategoryChange: (category: string) => void;
}

const Sidebar: React.FC<Props> = ({ onCategoryChange }) => {
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoryError,
  } = useFetch('categories');

  const errors = [categoryError];
  if (errors.some((error) => error)) {
    console.error('Có lỗi xảy ra khi lấy dữ liệu');
  }
  return (
    <>
      {' '}
      {categoriesLoading ? (
        <Loading />
      ) : (
        <ul className="sidebar-menu-category-list">
          {categories.map((item: CategoryItem, key: number) => (
            <li
              onClick={() => onCategoryChange(item.id)}
              key={key}
              className="sidebar-menu-category"
            >
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img
                    src={`../icons/${item.image}`}
                    alt="clothes"
                    width="20"
                    height="20"
                    className="menu-title-img"
                  />

                  <p className="menu-title">{item.name}</p>
                </div>

                <div>
                  {/* <IonIcon icon={addOutline} />
                          <IonIcon icon={removeOutline} /> */}
                </div>
              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>
                <li className="sidebar-submenu-category">
                  <a className="sidebar-submenu-title">
                    <p className="product-name">Shirt</p>
                    <data value="300" className="stock" title="Available Stock">
                      300
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a className="sidebar-submenu-title">
                    <p className="product-name">shorts & jeans</p>
                    <data value="60" className="stock" title="Available Stock">
                      60
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a className="sidebar-submenu-title">
                    <p className="product-name">jacket</p>
                    <data value="50" className="stock" title="Available Stock">
                      50
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a className="sidebar-submenu-title">
                    <p className="product-name">dress & frock</p>
                    <data value="87" className="stock" title="Available Stock">
                      87
                    </data>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}{' '}
    </>
  );
};

export default Sidebar;
