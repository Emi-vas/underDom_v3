import styled from "styled-components";
import { COLORS, FONT } from "../assets/constants";

export const Wrapper = styled.div`
    h1 {
        color: ${COLORS.blue1};
    }
    h2 {
        font-family: ${FONT.p};
    }
    .presentation {
        text-align: center;
        font-size: 1.2em;
    }
    .profiles {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 70px 0;
    }
`