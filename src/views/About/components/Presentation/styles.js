import styled from "styled-components";
import { colors, device } from "../../../../resources/theme";

const PresentationContainer = styled.section`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    justify-items: center;
    width: 100%;
    
    @media ${device.tablet} { 
        grid-template-columns: 100%;
    }
  
    img{
        width: 80%;
        margin-bottom: 15px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 850px;
    width: 85%;
`;

const RegularText = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    
    @media ${device.tablet} { 
        text-align: center;  
    }
`;

const ExpShineText = styled.div`
    display: inline-flex;
    font-size: 20px;
    font-weight: 400;
    margin: 25px 0 5px 0;
    
    svg {
        width: 80px;
    }

    @media ${device.mobile} { 
        display: grid;
        grid-template-columns: 50px auto;
        width: 100%;
        align-items: center;
        
        svg {
            width: 100%;
        }
    }

`;

const PowerText = styled.div`
    font-style: italic;
    font-size: 20px;
    max-width: 820px;
    width: 95%;

    background-color: ${colors.light};
    opacity: 0.6;
    color: ${colors.dark};
    padding: 10px 5px 10px 20px;
    border-radius: 10px;
    margin: 20px auto;
`;


export {
    PresentationContainer,
    InfoContainer,
    RegularText,
    ExpShineText,
    PowerText
};