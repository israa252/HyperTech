import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the icons horizontally */
  padding:100px;

  @media (min-width: 768px) {
    justify-content: flex-end; /* Move the icons to the right on larger screens */
    margin-top: 0; /* Remove top margin on larger screens */
  }
  @media  (max-width: 800px) {
    text-align:center;
    font-size: 1rem;
    padding:3px;
    margin:3px;
 
  }
`;


const SocialIconLink = styled.a`
  display: inline-block;
  width: 2.7rem;
  height: 2.7rem;
  line-height: 2.9rem;
  margin: 4px;
  text-align: center;
  background-color: rgba(255, 252, 252, 0.9);
  border-radius: 50%;
  color: black;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(228, 63, 63, 0.5);
  }

  @media (min-width: 768px) {
    margin: 8px; /* Increase margin for larger spacing */
  }
`;

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
  
      <SocialIconLink href="https://www.facebook.com/hypertech2005/" target="_blank">
        <FaFacebookF />
      </SocialIconLink>
      
      <SocialIconLink href="https://www.tiktok.com/@usertw22ybmnln?_t=8ewr1hywrvF&_r=1" target="_blank">
        <FaTiktok />
      </SocialIconLink>
      <SocialIconLink href="mailto:Mohsen_hamdona@yahoo.com">
        <MdEmail />
      </SocialIconLink>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
