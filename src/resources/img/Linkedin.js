import React from 'react'
import styled from 'styled-components';
import { colors, device } from '../theme';
import Link from '../../components/Link';

const Container = styled.div`
    border: 6px solid ${colors.mid};
    border-radius: 30%;
    height: 65px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-self: center;
    padding-left: 10px;
    color: ${colors.mid};
    font-size: 45px;
    font-weight: 700;
    
    &:hover {
      color: ${colors.light};
      border: 6px solid ${colors.light};
    }
    &:active {
      color: ${colors.light};
      border: 6px solid ${colors.light};
    }
    &:focus {
      color: ${colors.light};
      border: 6px solid ${colors.light};
    }

    @media ${device.mobile} {  
        height: 50px;
        width: 40px;
        padding: 0 4px 0 8px;
        font-size: 35px;
        font-weight: 700;
        border: 5px solid ${colors.mid};
    }
    @media ${device.mobileS} { 
        height: 35px;
        width: 25px;
        padding: 0 6px 0 6px;
        font-size: 25px;
        border: 4px solid ${colors.mid};
    }
`;

const Linkedin = ({url}) => {
  return (
    <Link url={url}>
      <Container>
        in
      </Container>
    </Link>
  )
}

export default Linkedin;
