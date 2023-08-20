import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
// import Title from "./Title";
 

const Title = styled.h2`
  font-size: 2.5rem;
  margin:30px 0 20px;
  font-weight: 700;
  text-align:center;
  
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}