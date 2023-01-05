import styled from "styled-components";
import { COLORS, FONT } from "../assets/constants";

export const Quote = styled.div`
        position: relative;
    z-index: 3;
    transform: translateY(-70px);
    text-align: center;
    font-family: ${FONT.h2};
    font-size: 1.5em;
    color: ${COLORS.blue1};

    p {
        transition: all 0.7s;
    }

    strong {
        font-size: 1.7em;
        color: orange;
    }

    p:first-of-type {
        transform: translateX(-200px);
        animation: firstArrive 0.7s 2s both;
    }
    p:last-of-type {
        transform: translateX(280px);
        animation: lastArrive 0.7s 2s both;
    }

    @media screen and (max-width: 1200px) {
        transform: translateY(-50px);
        font-size: 1.3em;  
    }
    @media screen and (max-width: 800px) {
        transform: translateY(-20px);

        p {
            margin: 15px 0;
        }
        p:last-of-type {
            transform: translateX(200px);
            animation: lastArrive2 0.7s 2s both;
        }
    }

    @media screen and (max-width: 700px) {
        transform: translateY(0px);
        font-size: 0.9em;

        p {
            margin: 5px 0;
        }
        p:last-of-type {
            transform: translateX(90px);
            animation: lastArriveTel 0.7s 2s both;
        }
        p:first-of-type {
            transform: translateX(-70px);
            animation: firstArriveTel 0.7s 2s both;
        }
    }


    @keyframes firstArrive {
        to {
            transform: translateX(-140px);
        }
    }
    @keyframes firstArriveTel {
        to {
            transform: translateX(-60px);
        }
    }
    @keyframes lastArrive {
        to {
            transform: translateX(210px);
        }
    }
    @keyframes lastArrive2 {
        to {
            transform: translateX(150px);
        }
    }
    @keyframes lastArriveTel {
        to {
            transform: translateX(70px);
        }
    }
`