import React from 'react';
import styled from 'styled-components';

const SocialDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    color: white;

    .social-links {
        display: flex;
        width: 33%;
        align-items: center;
        justify-content: space-evenly;
        
    }
        .fab {
            color: white;
            font-size: 2em;
            margin: 0 20px;
            @media(min-width: 3800px) {
                font-size: 4em;
                margin: 0 60px;
            }
            @media(max-width: 2556px) {
                font-size: 3em;
            }
            @media(max-width: 1280px) {
                font-size: 1.8em;
            }
            @media(max-width: 1100px) {
                font-size: 2em;
            }
            @media(max-width: 600px) {
                font-size: 1.2m;
            }

        }
    
    
    
`;

const Social = () => {
    return (
        <SocialDiv >
         
            <div className="social-links">
                <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
            </div>
        </SocialDiv>
    );
}

export default Social;
