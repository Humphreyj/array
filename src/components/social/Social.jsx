import React from 'react';
import styled from 'styled-components';

const SocialDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
left: 43.5%;
top: 83%;
color: white;
z-index: 400;
.title {
    font-size: 3em;
    border: 8px solid white;
    padding: 1px 5px;
}

.social-links {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
}
    .fab {
        color: white;
        font-size: 3.3em;

    }
    @media(max-width: 1920px) {
        left: 44%;
        top: 79.5%;
        
    }
    //1800px max-width
    @media(max-width: 1800px) {
        left: 45%;
        top: 80%;
        .title {
            font-size: 2em;
        }
    }
    //1800px max-width
    @media(max-width: 1280px) {
        left: 45%;
        top: 80%;
        .title {
            font-size: 1.8em;
        }
        .fab {
            font-size: 3em;
        }
    }
    //1280px max-width
    @media(max-width: 970px) {
        left: 6.5%;
        top: 80%;
        .title {
            font-size: 1.8em;
        }
        .fab {
            font-size: 3em;
        }
    }
    //970px max-width
    @media(max-width: 500px) {
        top: 75%;
        left: 11.5%;
        .social {
            .social-links {
                margin-right: 20px;
            }
        }
    }
`;

const Social = () => {
    return (
        <SocialDiv >
            <h1 className="title">follow for updates</h1>
            <div className="social-links">
                <a href="https://twitter.com/" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.com/" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/" className="social-link"><i className="fab fa-medium"></i></a>
            </div>
        </SocialDiv>
    );
}

export default Social;
