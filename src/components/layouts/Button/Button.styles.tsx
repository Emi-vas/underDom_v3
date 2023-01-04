import styled from "styled-components";
import { COLORS } from "../../../assets/constants";


export const Wrapper = styled.div`
    a {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10px 50px;
        border-radius: 30px;

        img{
            width: 120px;
        }

        div {
            margin: 0;
            font-size: 1.2em;
        }

        &:hover {
            background: ${COLORS.bg};
        }
    }
`