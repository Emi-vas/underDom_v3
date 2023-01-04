import React from 'react';
import { Wrapper } from './Presentation.styles';
import Button from '../layouts/Button';

const Presentation = () => {
    return (
        <Wrapper>
            <div className='photo'>
                <img src="./images/emilien.jpg" alt="Emilien Vaschalde développeur web" />
            </div>
            <div className='text'>
                <p>
                    En tant que développeur indépendant, je suis spécialisé dans la <strong>création de sites Web sur mesure</strong> pour les entreprises et les organisations. Je travaille en étroite collaboration avec mes clients pour comprendre leurs besoins et leur fournir des solutions de développement Web de qualité supérieure qui répondent à leurs exigences. <br />
                    Je suis passionné par la création de <strong>sites Web attrayants et fonctionnels</strong> qui aident les entreprises à atteindre leurs objectifs en ligne.
                </p>
                <p>
                    Que ça soit par <strong>le design</strong> ou par <strong>la mise en place d’outils innovants</strong>, j’aime apporter la touche qui permet à mes clients de se démarquer et de mettre en avant leurs produits et/ou services.
                </p>
                <p>
                    N’hésitez pas à me contacter pour discuter de vos besoins et de la façon dont je peux vous aider à atteindre vos objectifs.
                </p>

                <div className='blocBtn'>
                    <Button 
                        title="mes services"
                        path='/services'
                        img="./images/service.png"
                    />
                    <Button 
                        title="me contacter"
                        path='/contact'
                        img="./images/contact.png"
                    />
                </div>
            </div>
            
        </Wrapper>
    );
};

export default Presentation;