import styled from 'styled-components';
import { colors } from '../../resources/theme';
import Stars from '../../resources/img/Stars.svg';

const Background = styled.div`
    background-color: ${colors.primary};
    width: 100vw;
    height: 100vh;
    background-image: url(${Stars}); 
    /* background-size: cover; */
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
`;

const Grid = styled.div`
    background-color: ${colors.primary};
    width: 100vw;
    height: 100%;
    /* color: ${colors.clear}; */

    display: grid;
    grid-template-columns: 1fr 1fr;

    img {
        
    }
`;

export {
    Background,
    Grid
};