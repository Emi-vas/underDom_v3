import styled from "styled-components";
import { FONT } from "../../assets/constants";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 400px;
    padding-bottom: 20px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: #5d5d5d69 2px 3px 7px;
    margin: 15px;

    h3 {
        margin: 10px 0;
        font-size: 1.7em;
        font-weight: 500;
        letter-spacing: 0.3em;
        color: #f38e02;
    }

    img {
        width: 400px;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
    p {
        width: 80%;
        text-align: center;
        text-align: justify;
    }
`