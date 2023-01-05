//compo
import { useEffect, useState } from 'react';
import Header from '../components/layouts/Header';
import Presentation from '../components/Presentation';
import { Quote } from './Home.styles';

const Home = () => {
    const [smallSize, setSmallSize] = useState(false)

    useEffect(() => {
        if(window.innerWidth > 800) {
            setSmallSize(false)
        } else {
            setSmallSize(true)
        }
    },[])

    return (
        <div>
            <Quote>
                <p>La créativité devient</p>
                <p><strong>innovation  </strong></p>
                <p>quand elle s'unit à {smallSize ? <br /> : null} la technique</p>
            </Quote>
            <Presentation />
        </div>
    );
};

export default Home;