import styled from "styled-components";
import { colors } from "../../resources/theme";

const AboutContainer = styled.div`
    background-color: ${colors.secondary};
    color: ${colors.clear};

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;

    h1 {
        font-size: 70px;
        font-weight: 700;
        margin: 0;
    }

    h2 {
        display: inline-flex;
        font-size: 35px;
        align-items: center;
        margin: 20px 0;

        svg {
            width: 60px;
        }
    }
`;

export {
    AboutContainer,
    Title
};