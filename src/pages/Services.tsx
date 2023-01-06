import { useEffect } from 'react';
import Profile from '../components/Profile';
import { Wrapper } from './Services.styles';

const profiles = [
    {
        title: "Buisness",
        image: "buisness.jpg",
        body: "Vous cherchez quelqu’un à qui déléguer la création de votre site. Vous êtes occupé et n’avez que très peu de temps à y consacrer.",
    },
    {
        title: "Créatif",
        image: "creatif.jpg",
        body: "Vous avez des idées précises de ce que vous souhaitez et vous avez besoin de quelqu’un pour les rendre réelles."
    },
    {
        title: "Technique",
        image: "technique.jpg",
        body: "Vous recherchez un développeur freelance et vous souhaitez connaitre mon stack technique, les langages que j’utilise et la qualité de mon code."
    },
]

const Services = () => {

    useEffect(()=> {
        window.scrollTo(0,200)
    },[])

    return (
        <Wrapper>
            <h1>Mes services</h1>
            <p className='presentation'>
                Afin de vous présenter un service adapté, dites m’en plus sur ce que vous recherchez.
            </p>
            <h2>Vous êtes plutôt : </h2>
            <div className='profiles'>
                {
                    profiles.map((p: any) => (
                        <Profile 
                            key={p.title} 
                            title={p.title}
                            body={p.body}
                            image={p.image}
                        />
                    ))
                }
            </div>
        </Wrapper>
    );
};

export default Services;