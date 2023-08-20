import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.4em;
  font-weight:800;
  
  ${'' /* text-align:center; */}
  margin:15px;
  
   @media  (max-width: 800px) {
    text-align:center;
    font-size: 1.3rem;
    ${'' /* padding:5px; */}
    margin:5px;
 
  }
  
   @media  (max-width: 488px) {
    text-align:center;
    font-size: 1.5rem;
    padding:3px;
    margin:3px;
 
  }
`;

export default Title;