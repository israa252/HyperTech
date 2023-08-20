import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #222;
  color: #fff;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex-basis: calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  margin: 10px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  color: #ffffff;
  font-size: 35px;
  cursor: pointer; /* Add cursor pointer to indicate interactivity */
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 17px;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? '0' : '-300px')}; /* Adjust the width of the menu */
  width: 100px; /* Adjust the width of the menu */
  height: 50px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

const CloseIcon = styled.span`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const MobileMenuContent = styled.div`
  padding-top: 60px;
`;

const HomeBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Column>
        <IconWrapper onClick={toggleMenu}>
          ☰ {/* Replace with your mobile menu icon */}
        </IconWrapper>
        <MobileMenu open={isMenuOpen}>
          <CloseIcon onClick={toggleMenu}>×</CloseIcon>
          <MobileMenuContent>
            {/* Add your mobile menu content here */}
            <Title>FREE SHIPPING &amp; RETURN</Title>
            <Description>Free shipping on all orders over $99.</Description>
          </MobileMenuContent>
        </MobileMenu>
      </Column>
      <Column>
        <div className="porto-sicon-box style_1 default-icon">
          <IconWrapper>
            {/* Add your icon here */}
          </IconWrapper>
          <div className="porto-sicon-header">
            <Title>MONEY BACK GUARANTEE</Title>
            <Description>100% money back guarantee</Description>
          </div>
        </div>
      </Column>
      {/* Add more columns for other sections */}
    </Wrapper>
  );
};

export default HomeBar;
