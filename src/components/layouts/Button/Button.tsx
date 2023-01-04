import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Button.styles';

interface Props {
    title: string,
    path: string,
    img: string
}

const Button = ({title, path, img}: Props) => {
    return (
        <Wrapper>
            <Link to={path}>
                <img src={img} alt={title} />
                <div>{ title }</div>
            </Link>
        </Wrapper>
    );
};

export default Button;