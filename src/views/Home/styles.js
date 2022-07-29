import styled from 'styled-components';
import { colors, device } from '../../resources/theme';
import Stars from '../../resources/img/Stars.svg';

const Background = styled.div`
    background-color: ${colors.primary};
    width: 100%;
    height: 100%;
    background-image: url(${Stars}); 
    background-size: contain;
    background-repeat: repeat;
    background-position: center;

    @media ${device.mobile} { 
        display: grid;
        grid-template-columns: 65% 35%;
        padding-left: 5px;
    }
`;

const Grid = styled.div`
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;

    img {
        width: 80%;
        align-self: end;
    }

    .logo {
        padding-top: 25px;
        width: 100%;
        margin: 0 auto;
        justify-self: end;
    }

    @media ${device.mobile} { 
        grid-template-columns: 100%;
        padding-top: 120px;
        padding-bottom: 35px;
        
        .logo {
            padding-top: 0px;
            margin-top: -10px;
            justify-self: start;
        }
    }
`;

const IconsGrid = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 80px 0;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    align-items: center;
    justify-items: center;

    @media ${device.mobile} { 
        width: 100%;
        grid-template-columns: 100%;
        padding: 120px 0 30px 0;
    }

`;

export {
    Background,
    Grid,
    IconsGrid
};