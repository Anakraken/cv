import styled from "styled-components";
import { colors, device } from "../../../../resources/theme";

const TSContainer = styled.div`
    margin-top: 70px;
    background-color: ${colors.primary};
    width: 1000px;
    padding: 10px 30px 35px 0px;
    border-radius: 10px;

    display: grid;
    grid-template-areas: "info section_title";
    grid-template-columns: 60% 40%;
    overflow: hidden;
    align-items: center;
    justify-items: center;
    column-gap: 5%;


    .info {
        grid-area: info;
    }

    .section_title {
        grid-area: section_title;
    }

    h1 {
        font-size: 40px;
        margin-top: -37%;
        padding-left: 25%;

        font-style: italic;
        transform: rotate(-16deg);
        color: ${colors.light};
    }
    img {
        width: 95%;
        margin-top: -85px;
        margin-left: -25%;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        max-width: 500px;
    }
    strong {
        font-weight: 700;
        font-size: 30px;
        padding-right: 10px;
    }

    @media ${device.laptop} { 
        width: 100%;
        border-radius: 0;
        padding: 10px 0px 35px 0px;
        column-gap: 2%;

        p {max-width: 350px;}
        strong {
            font-size: 25px;
        }
        h1 {
            margin-top: -35%;
            padding-left: 5%;
        }
    }
    @media ${device.tablet} { 
        grid-template-areas: "section_title"
                                "info";
        grid-template-columns: 100%;

        h1 {
            font-size: 40px;
            margin-top: -120px;
            padding-left: 200px;
            margin-bottom: 0;
        }
        img {
            width: 400px;
            margin: -85px 0 0 0;
        }
        p {
            max-width: 80%;
            margin: 0 auto;
            padding-top: 20px;
        }
        .info {
            margin-bottom: 30px;
        }
    }

    @media ${device.mobile} { 
        h1 {
            font-size: 30px;
            margin-top: -95px;
            padding-left: 100px;
            margin-bottom: 0;
        }
        img {
            width: 280px;
            margin: -35px auto 0 auto;
        }
    }
`;

export {
    TSContainer
};