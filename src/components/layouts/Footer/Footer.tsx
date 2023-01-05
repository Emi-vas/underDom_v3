import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Footer.styles';

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer_bloc">
                <h3>UnderDϕm</h3>
                <p>Emilien Vaschalde</p>
            </div>

            <small>
                    <p>©réation underDom </p>
                    <Link to="./legales">
                        <p>Mentions légales</p>
                    </Link>
            </small>
        </Wrapper>
    );
};

export default Footer;