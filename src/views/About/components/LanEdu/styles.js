import styled from "styled-components";
import { colors, device } from "../../../../resources/theme";

const LanEduContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    margin: 50px auto;
    justify-items: center;
    text-align: center;

    @media ${device.mobile} { 
        width: 85%;
        grid-template-columns: 100%;
    }

    h1 {
        font-size: 40px;
        text-decoration: underline;
        text-decoration-color: ${colors.light};
    }

    p{
        font-size: 20px;
    }
`;

export{
    LanEduContainer
};