import styled from "styled-components";
import { colors } from "../../resources/theme";

const Container = styled.div`
    width: 100vw;
    height: 60px;
    padding-top: 50px;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    background: ${({ active }) => active ? colors.primary : 'transparent' };
    position: fixed;
    z-index: 10000;
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
        transition: 0.8s all ease;
    }
    &:active .under {
        display: flex;
        transition: 0.8s all ease;
    }
    &:focus .under {
        display: flex;
        transition: 0.9s all ease;
    }
`;

export {
    NavItem,
    Container
};