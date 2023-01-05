import styled from "styled-components";
import { COLORS } from "../../assets/constants";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;
    .photo {
        width: 400px;
        aspect-ratio: 1/1;
        transform: translateX(30px);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            box-shadow: gray 3px 3px 5px;

        }
    }
    .text {
        width: 500px;
        text-align: justify;
        padding: 10px 30px 10px 70px;
        font-size: 1.1em;
        background: white;
        border: 1px solid #c2c2c290;
        //border-radius: 10px;
        p {
            margin: 30px 0;
        }
        strong {
            color: ${COLORS.blue1};
        }
    }
    .blocBtn {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
`