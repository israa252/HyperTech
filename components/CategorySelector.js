import React from "react";
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  width:100%;
  
   
`;

const CategoryItem = styled.div`
  padding: 10px  ;
  margin: 8px;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight:bold;
  color: black;
  background-color:rgba(136, 15, 15, 0.59);
  border-radius:5px;
  &:hover {
    color: ${(props) => (props.isSelected ? "white" : " white")};

  }
`;

export default function CategorySelector({
  categories,
  selectedCategory,
  onSelectCategory
}) {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem
          key={category._id}
          onClick={() => onSelectCategory(category._id)}
          isSelected={selectedCategory === category._id}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
}
