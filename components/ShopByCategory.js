import React from 'react';
import styled from 'styled-components';
import {  FaLaptop, FaPrint, FaNetworkWired, FaMouse } from 'react-icons/fa';
import Title from './Title';

const Section = styled.section`
  background-color: white;
  padding: 20px 0;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  background-color:#8b0d0d;
  padding: 15px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  width: calc(20% - 5px);
  margin: 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 488px) {
    width: calc(30% - 10px);
    padding: 20px;
  }

  @media (max-width: 800px) {
    width: 70%;
  }
`;
 

const ShopByCategory = () => {
  return (
    <Section>
      <Title>
        <h1>Product Categories</h1>
      </Title>
      <FlexContainer>
        <Box>
          <FaLaptop size={30} />
          <h3>Laptops</h3>
          <p>Explore our wide range of laptops for every need.</p>
        </Box>
        <Box>
          <FaPrint size={30} />
          <h3>Scanners & Printers</h3>
          <p>Find high-quality scanners and printers for your office.</p>
        </Box>
        <Box>
          <FaNetworkWired size={30} />
          <h3>Networks</h3>
          <p>Discover networking solutions to keep you connected.</p>
        </Box>
        <Box>
          <FaMouse size={30} />
          <h3>Accessories</h3>
          <p>Enhance your setup with our selection of computer accessories.</p>
        </Box>
      </FlexContainer>
    </Section>
  );
};

export default ShopByCategory;
