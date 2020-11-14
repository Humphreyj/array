import React from 'react';
import styled from 'styled-components';

const SocialDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: absolute;
left: 47%;
top: 75%;
color: white;
z-index: 400;
.title {
    font-size: 3em;
    border: 6px solid white;
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
        left: 45%;
        top: 77%;
        .title {
            font-size: 2em;
        }
        
    }
    //1800px max-width
    @media(max-width: 1800px) {
        left: 45%;
        top: 77.5%;
        
    }
    //1800px max-width
    @media(max-width: 1440px) {
        left: 46.5%;
        top: 75%;
        .title {
            font-size: 1.8em;
            margin-bottom: 10px;
        }
        .social-links {
        }
        .fab {
            font-size: 2.7em;
        }
    }
   //max-width 1440px
    @media(max-width: 1280px) {
        left: 47%;
        top: 72%;
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
        top: 79%;
        .title {
            font-size: 1.8em;
        }
        .fab {
            font-size: 3em;
        }
    }
    //970px max-width

    @media(max-width: 770px) {
        top: 77.5%;
     }
     //max-width: 768px

    @media(max-width: 600px) {
        
        top: 74%;
        left: 5.5%;
        .social {
            .social-links {
                margin-right: 20px;
            }
        }
    }
    //max-width: 600px
    @media(max-width: 500px) {
        display: none;
        top: 75%;
        left: 22.5%;
        .social {
            .social-links {
                margin-right: 20px;
            }
        }
    }
    //max-width: 500px
    
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
