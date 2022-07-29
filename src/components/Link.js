import React from 'react'
import styled from 'styled-components'
import { colors, device } from '../resources/theme';

const Container = styled.a`
  text-decoration: none;
  width: 100%;

  .icons {
    fill: ${colors.mid};
  }

  &:hover {
    cursor: pointer;
    .icons {
      fill: ${colors.light};
    }
  }

  svg {
    max-height: 80px;
    height: auto;
  }
  @media ${device.mobile} { 
    svg {max-height: 60px;}
  }
  @media ${device.mobileS} { 
    svg {max-height: 45px;}
  }
`;

const Link = ({children, url}) => {
  return (
    <Container href={url}>
      {children}
    </Container>
  )
};

export default Link;
