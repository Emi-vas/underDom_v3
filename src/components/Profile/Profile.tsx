import { Button } from '@mui/material';
import React from 'react';
import { Wrapper } from './Profile.styles';

interface Props {
    title: string,
    image: string,
    body: string
}

const Profile = ({ title, image, body }: Props) => {
    return (
        <Wrapper>
            <img src={`images/${image}`} alt={title} />
            <h3>{ title }</h3>
            <p>
                {body}
            </p>
            <Button variant='contained'>voir le service</Button>
        </Wrapper>
    );
};

export default Profile;