import React from 'react'
import styled from 'styled-components';
import { colors, device } from '../../../resources/theme';

const ExpItemContainer = styled.div`
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
`;
const Title = styled.h2`
    color: ${colors.clear};
    font-size: 30px;
    background-color: ${colors.primary};
    border-radius: 10px;
    padding: 10px;

    @media ${device.tablet} { 
        border-radius: 0px;
    }
`;
const Date = styled.span`
    color: ${colors.clear};
    font-size: 25px;
`;
const Description = styled.div`
    font-size: 20px;
    text-align: left;
    margin-top: 10px;
    padding: 0 20px;
`;

const ListContainer = styled.div`
    font-size: 20px;
    text-align: left;
    margin-top: 10px;
`;


const expItem = ({title, date, description, exp}) => {
  return (
    <ExpItemContainer>
      <Title>{title}</Title>
      <Date>{date}</Date>

      {!!description && <Description>{description}</Description>}  
      
      {!!exp && 
        <ListContainer>
          <ul>
          {
            exp.map((item, key) => (
                <li key={key}>{item}</li>
                ))
              }
          </ul>
        </ListContainer>
      }  
    </ExpItemContainer>
  )
};

export default expItem;
