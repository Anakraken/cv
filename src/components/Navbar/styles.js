import styled from "styled-components";
import { colors } from "../../resources/theme";

const Container = styled.div`
    width: 100vw;
    padding-top: 50px;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    background-color: transparent;
    position: fixed;
`;

const NavItem = styled.a`

    .under {
        max-width: fit-content;
        display: none;
    }

   & {
        color: ${colors.clear};
        font-size: 30px;
        text-decoration: none;
        font-weight: 500;

    }
    &:hover .under {
        display: flex;
    }
    &:active .under {
        display: flex;
    }
    &:focus .under {
        display: flex;
    }
`;

export {
    NavItem,
    Container
};