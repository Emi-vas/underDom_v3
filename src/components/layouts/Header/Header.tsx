import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
//style
import { Wrapper } from './Header.styles';


const Header = () => {
    const [logo, setLogo] = useState("logo_loup.png")

    useEffect(()=>{
        setTimeout(()=>{
            setLogo("logo_loupb.png")
        }, 2000)
    },[])

    return (
        <>
        <Wrapper>
            <div className='video'>
                <ReactPlayer 
                    url="./videos/stars.mp4" 
                    playing loop={true} muted 
                    width={"2000px"}
                    height={"1200px"}
                />
            </div>
            <nav>
                <NavLink to={'/'}>accueil</NavLink>
                <NavLink to={'/services'}>mes services</NavLink>
                <NavLink to={'/contact'}>contact</NavLink>
            </nav>
             <h1> 
                <div>under</div><span>Dϕm</span>
            </h1>
            <img src={"./images/" + logo} className="header_logo" alt="logo underdom" />


            <img src="./images/forme1.svg" alt="forme" className="header_form1" />
            <img src="./images/forme2.svg" alt="forme" className="header_form2" />
        </Wrapper>
        </>
    );
};

export default Header;