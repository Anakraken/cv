import React from 'react'
import styled from 'styled-components';
import { colors, device } from '../../../resources/theme';

const ExpTitleContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center ;
`;
const Title = styled.div`
    font-size: 50px;
    transform: rotate(-10deg);
    font-style: italic;
    color: ${colors.primary};
    font-weight: 700;
    background-color: ${colors.clear};
    padding: 30px 20px 0 20px;
    border-radius: 50%;

    @media ${device.mobileS} { 
      font-size: 40px;
    }
`;
const Subtitle = styled.h5`
    margin-top: 10px;
    color: ${colors.dark};
    font-size: 20px;
`;
const Description = styled.p`
    max-width: 780px;
    color: ${colors.primary};
    margin-top: 20px;
`;

const ExpTitle = ({title, subtitle, description}) => {
  return (
    <ExpTitleContainer>
      <Title>
        {title}
        <Subtitle>{subtitle}</Subtitle>
      </Title>

      <Description>{description}</Description>    
    </ExpTitleContainer>
  )
};

export default ExpTitle;
