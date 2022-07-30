import styled from "styled-components";
import { colors, device } from "../../../../resources/theme";

const PresentationContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    justify-items: center;
    width: 85%;
    margin: 0 auto;
    @media ${device.tablet} { 
        grid-template-columns: 100%;
        p {
            text-align: center;
            /* margin: 20px auto; */
        }
    }
    
    img{
        width: 80%;
    }

    p {
        width: 90%;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
    }
    
    h6 {
        display: inline-flex;
        font-size: 20px;
        font-weight: 400;
        margin: 15px 0 5px 0;
        max-width: 850px;

        svg {
            width: 80px;
        }
    }

    h5{
        font-style: italic;
        font-size: 20px;
        max-width: 850px;

        background-color: ${colors.light};
        opacity: 0.6;
        color: ${colors.dark};
        padding: 10px 5px 10px 20px;
        border-radius: 10px;
    }
`;

export {
    PresentationContainer,
};