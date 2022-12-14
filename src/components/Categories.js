import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className="category-container">
      <button
        className="primary-button"
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
