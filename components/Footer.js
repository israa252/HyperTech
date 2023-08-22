import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDotCircle,
   faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";
import SocialIcons from "./SocialIcons";

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #8b0d0d;
  padding-top: 0.8rem;
  padding-bottom: 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media  (max-width: 600px) {
    text-align:center;
    font-size: 1rem;
    padding:10px;
    margin:5px;
 
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ContactInfo = styled(Column)`
  /* Remove align-items property to allow icons to appear */
  /* align-items: flex-start; */
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center; /* Add this property to vertically align items */
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.8rem 0;
  
   @media(max-width: 900px) {
    text-align:center;
    font-size: .6rem;
    ${'' /* padding:8px; */}
    margin:3px;
 
  }
  & svg {
    margin-right: 0.5rem;
    color: #8b0d0d;
  }
  & strong {
    font-weight: 500;
    margin-right: 0.5rem;
    color: white;
  }
  & a {
    color: white;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: red;
    }
  }
`;

const BottomLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.63);
  @media (max-width: 900px) {
    font-size: 0.9rem;
    margin-left: 60px;
    text-align:center;
  }

`;

const TextLink = styled.a`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FlexContainer>
          {/* Left Menu */}
          <ContactInfo>
            <Title>CONTACT INFO</Title>
            <ul className="contact-details">
              <ContactItem>
                <FontAwesomeIcon icon={faDotCircle} />
                <strong>ADDRESS:</strong>
                <span>company:Gaza, Al-Nasr, Tamous junction , Gallery: Al Remal - Al Kanz street  </span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={ faPhone} />
                <strong>PHONE:</strong>
                <span> 0597444080 </span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} />
                <strong>EMAIL:</strong>
                <span>
                  <a href="mailto:Mohsen_hamdona@yahoo.com">Mohsen_hamdona@yahoo.com</a>
                </span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faClock} />
                <strong>WORKING DAYS/HOURS:</strong>
                <span>Sat - Thu / 9:00 AM - 9:00 PM</span>
              </ContactItem>
            </ul>
          </ContactInfo>

          {/* Right Social Icons */}
          <SocialIcons />
        </FlexContainer>

        {/* Bottom Links */}
        <BottomLinks>
          <Copyright>
            © {new Date().getFullYear()} Hyper Tech. All Rights Reserved
          </Copyright>
        </BottomLinks>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
