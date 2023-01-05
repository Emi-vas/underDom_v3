import { blue } from "@mui/material/colors";
import styled from "styled-components";
import { COLORS, FONT } from "../../../assets/constants";

export const Wrapper = styled.div`
    font-family: ${FONT.h1};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;

   // background: url("./images/dev.jpg");
    background-size: 100%;
    background-position: 100% 90%;

    height: 550px;

    .video {
        position: absolute;
        transform: translateY(-190px);
        object-fit: cover;
    }

    .header_logo {
        margin-top: 50px;
        width: 110px;
        animation: logoArrive both 2s;
        opacity: 0.8;
    }


    h1 {
        font-size: 3em;
        font-weight: lighter;
        letter-spacing: 0.7em;
        margin-top: 70px;
        color: ${COLORS.bg};
        display: flex;
        z-index: 4;
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

    nav {
        position: absolute;
        top: 0px;
        right: 0;
        color: white;
        padding: 10px;
        font-size: 1.1em;
        background: ${COLORS.blue1};
        border-bottom-left-radius: 20px;

        a {
            color: white;
            border-right: 1px solid white;
            padding: 10px;

            
        }
        a:last-of-type {
            border-right: none;
        }
        & .active {
            color: ${COLORS.orangeLight};
        }
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

        nav {
            display: none;
        }

        .video {
            transform: translateY(-150px);
        }
    }

`
