import React, { useContext } from "react";
import styled from "styled-components";
import Center from "@/components/Center";
import ButtonLink from "@/components/ButtonLink";
import { CartContext } from "@/components/CartContext";

const Bg = styled.div`
  position: relative;
  color: #030303;
  padding: 140px; /* Adjust padding for smaller screens */
  text-align: center;
  background-image: url("img/jj.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.9;
`;

const Title = styled.h1`
  ${'' /* margin-top: -50px; */}
  padding: 0px;
  ${'' /* background-color:#a80e0e; */}
  color: white;
  font-weight: 900;
  font-size: 1.2rem;
  transition: font-size 0.3s ease-in-out;
  
  
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ContentWrapper>
        
          <Title>
            <h1>HyperTech company for Information Technology</h1>
          </Title>
      </ContentWrapper>
      </Center>
    </Bg>
  );
}
