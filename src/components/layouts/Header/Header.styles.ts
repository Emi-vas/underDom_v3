import styled from "styled-components";
import { COLORS, FONT } from "../../../assets/constants";

export const Wrapper = styled.div`
    font-family: ${FONT.h1};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

    background: url("./images/dev.jpg");
    background-size: 100%;
    background-position: 100% 90%;

    height: 550px;

    .header_logo {
        margin-top: 50px;
        width: 110px;
        animation: logoArrive both 2s;
    }


    h1 {
        font-size: 3em;
        font-weight: lighter;
        letter-spacing: 0.7em;
        margin-top: 70px;
        color: ${COLORS.bg};
        display: flex;
    }

    p {
        color: ${COLORS.bg};
        background: #1e1c29;
        font-size: 1.3em;
    }

    span {
        color: ${COLORS.blue1};
        background: ${COLORS.bg};
        background: #e5f6ffc0;
        padding-bottom: 10px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }


    .header_form1 {
        position: absolute;
        z-index: 2;
        bottom: -3px;
        left: -2px;
        right: 5px;
        width: 105%;
    }
    .header_form2 {
        position: absolute;
        bottom: 3px;
        left: -2px;
        right: 5px;
        width: 105%;
    }

    @keyframes logoArrive {
        from {
            transform: scale(3) translateY(-200px);
            opacity: 0;
        }
    }

    @media screen and (max-width : 800px) {
       
        height: 400px;

        .header_logo {
            margin-top: 10px;
            width: 90px;
        }
    }
    @media screen and (max-width : 680px) {
        height: 300px;
        background-size: 150%;
        background-position: 70% 100%;
        .header_logo {
            margin-top: 10px;
            width: 50px;
        }
        h1 {
            font-size: 1.5em;
            margin-top: 70px;
            margin-bottom: 100px;
            margin-bottom: 30px;
        }

        .header_form2 {
            position: absolute;
            bottom: 0px;
            left: -2px;
            right: 5px;
            width: 105%;
        }
    }

`

export const Quote = styled.div`
    position: relative;
    z-index: 3;
    transform: translateY(-50px);
    text-align: center;
    font-family: ${FONT.h2};
    font-size: 1.5em;
    color: ${COLORS.blue1};

    p {
        transition: all 0.7s;
    }

    strong {
        font-size: 1.2em;
    }

    p:first-of-type {
        transform: translateX(-120px);
        animation: firstArrive 0.7s 2s both;
    }
    p:last-of-type {
        transform: translateX(220px);
        animation: lastArrive 0.7s 2s both;
    }
    @keyframes firstArrive {
        to {
            transform: translateX(-70px);
        }
    }
    @keyframes lastArrive {
        to {
            transform: translateX(170px);
        }
    }
  
`
