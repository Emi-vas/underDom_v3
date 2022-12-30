import { useEffect, useState } from 'react';
//style
import { Quote, Wrapper } from './Header.styles';

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
             <h1> 
                <div>under</div><span>Dϕm</span>
            </h1>
            <img src={"./images/" + logo} className="header_logo" alt="logo underdom" />

            <img src="./images/forme1.svg" alt="forme" className="header_form1" />
            <img src="./images/forme2.svg" alt="forme" className="header_form2" />
        </Wrapper>
        <Quote>
            <p><strong>Développeur Web</strong></p>
            <p>au service</p>
            <p><strong>d'entrepreneurs innovants</strong></p>
        </Quote>
        </>
    );
};

export default Header;