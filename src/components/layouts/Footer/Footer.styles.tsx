import styled from "styled-components";
import { COLORS } from "../../../assets/constants";

export const Wrapper = styled.footer`
    display: flex;
    justify-content: center;

    background: url(./images/texture2hd.jpg);
    position: relative;

    padding-top: 20px;


    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        z-index: 1;
        background: rgba(3, 53, 122, 0.904);
    }

    .footer_bloc {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;

        margin-bottom: 50px;
        color: ${COLORS.bg};

        h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2em;
            font-weight: lighter;
            letter-spacing: 0.7em;
            margin: 25px 0;
        }

        p {
            font-size: 1.2em;
            letter-spacing: 0.05em;
            word-spacing: 0.2em;
            color: ${COLORS.bg};
            margin: 10px 0;
        }



    }

    small {
        display: flex;
        position: absolute;
        bottom: 0;
        z-index: 2;
        color: ${COLORS.bg};
        opacity: 0.55;

        margin-bottom: 10px;

        p {
            padding: 0;
            margin: 0;

        }

        a {
            border-left: 1px solid $bg;
            margin-left: 7px;
            padding-left: 7px;

            &:hover {
                font-weight: bold;
                color: $blue4;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .footer_bloc {
            h3 {
                font-size: 1.5em;
            }
            p  {
                font-size: 1.1em;
            }
            margin-bottom: 100px;
        }
    }
`