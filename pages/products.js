import React, { useState } from "react";
import Header from "@/components/Header";
import Category from "@/models/Category"; 
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import CategorySelector from "@/components/CategorySelector";
import Footer from "@/components/Footer";

export default function ProductsPage({ products, categories }) {
  // ... (same as your original code)
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          product.category ? product.category._id === selectedCategory : false
        );

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <Header />
      <Center>
        <Title><h1>All products</h1></Title>
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <ProductsGrid products={filteredProducts} />
      </Center>
      <Footer/>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const products = await Product.find({})
    .populate("category")
    .sort({ _id: -1 });

  const categories = await Category.find({}).sort({ _id: 0 });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
