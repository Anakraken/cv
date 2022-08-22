import styled from "styled-components";
import { colors } from "../../resources/theme";

const ButtonContainer = styled.a`
    width: 180px;
    background-color: ${colors.mid};
    color: ${colors.clear};
    text-align: center;
    padding: 15px;
    border-radius: 6px;

    text-decoration: none;
    font-size: 25px;
    font-weight: 700;

    &:hover {
        transition: background-color 0.3s ease;
        background-color: ${colors.light};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
`;

export {
    ButtonContainer
}