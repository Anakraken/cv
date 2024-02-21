import styled from 'styled-components';
import { colors } from '../../resources/theme';

const FooterContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    background-color: ${colors.mid};
    padding-bottom: 60px;
    text-align: center;

    h2 {
        color: ${colors.dark};
        font-size: 40px;
        padding: 0;
        margin-bottom: 0;
    }

    a{
        color: ${colors.clear};
        cursor: pointer;
    }
    a:hover {
        color: ${colors.primary};
    }

    p{
        font-size: 20px;
        width: 95%;
        margin: 20px auto 0 auto;
    }
`;

export {
    FooterContainer
};