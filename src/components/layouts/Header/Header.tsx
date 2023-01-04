import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//style
import { Quote, Wrapper } from './Header.styles';

const Header = () => {
    const [logo, setLogo] = useState("logo_loup.png")
    const [smallSize, setSmallSize] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLogo("logo_loupb.png")
        }, 2000)

        if(window.innerWidth > 800) {
            setSmallSize(false)
        } else {
            setSmallSize(true)
        }
    },[])



    return (
        <>
        <Wrapper>
            <nav>
                <NavLink to={'/'}>mes services</NavLink>
                <NavLink to={'/'}>contact</NavLink>
            </nav>
             <h1> 
                <div>under</div><span>Dϕm</span>
            </h1>
            <img src={"./images/" + logo} className="header_logo" alt="logo underdom" />

            <img src="./images/forme1.svg" alt="forme" className="header_form1" />
            <img src="./images/forme2.svg" alt="forme" className="header_form2" />
        </Wrapper>
        <Quote>
            <p>La créativité devient</p>
            <p><strong>innovation  </strong></p>
            <p>quand elle s'unit à {smallSize ? <br /> : null} la technique</p>
        </Quote>
        </>
    );
};

export default Header;