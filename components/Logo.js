import styled from 'styled-components';
import Link from 'next/link';

const Logo = styled(Link)`
  position: relative;
  z-index: 3;
  display: inline-block;
  img {
    width: 10px; /* Default logo size */
    
    @media (max-width: 488px) {
      ${'' /* width: 70px; */}
      margin:-10px; /* Adjust logo size for smaller screens */
    }
  }
`;

export default Logo;
