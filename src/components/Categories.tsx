import React from 'react';
import { useFetch } from '../hooks/UseReducer';
import Loading from './Loading';
import CategoryItem from '../types/Categories';

interface Props {
  onCategoryChange: (category: string) => void;
}

const Categories: React.FC<Props> = ({ onCategoryChange }) => {
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
      {categoriesLoading ? (
        <Loading />
      ) : (
        <div className="category">
          <div className="container">
            <div className="category-item-container has-scrollbar">
              {categories.map((item: CategoryItem, index: number) => (
                <div
                  key={index}
                  className="category-item"
                  onClick={() => onCategoryChange(item.id)}
                >
                  <div className="category-img-box">
                    <img
                      src={`../icons/${item.image}`}
                      alt={item.name}
                      width="30"
                    />
                  </div>

                  <div className="category-content-box">
                    <div className="category-content-flex">
                      <h3 className="category-item-title">{item.name}</h3>
                      <p className="category-item-amount">({item.quantity})</p>
                    </div>

                    <a className="category-btn">Show all</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
