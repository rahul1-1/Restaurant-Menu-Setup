import React from 'react';

interface IProps {
  categories :string[],
  filterItems:(filterItems:string) =>void
 }
const Categories:React.FC<IProps> = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
    {categories.map((category, index) => {
      return (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      );
    })}
  </div>
  )
};

export default Categories;
