import React from 'react';
import styled from 'styled-components';



const Description = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height: 70vh;
align-items: center;
justify-content: flex-start;
color: white;
margin-top: 10px;


    h1 {
        font-size: 8em;
        margin: 10px 0 0 0;
    }
    .sub-heading {
        font-size: 3em;
        margin-top: 0;
        margin-bottom: 0;
    }
    p {
        font-size: 2em;
        text-align: center;
        width: 65%;
        margin: 20px auto;
        
    }
    .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 41%;
    left: 0%;
    color: white;
    .title {
        font-size: 2.5em;
        border: 4px solid white;
        padding: 1px 5px;
    }

    .social-links {
        display: flex;
        width: 100%;
        margin-top: 30px;
        margin-right: 10px;
        align-items: center;
        justify-content: space-evenly;
    }
        .fab {
            color: white;
            font-size: 3.3em;
            margin: 0 20px;

        }
    }

    @media(max-width: 2556px) {
        p {
            width: 80%;
        }
        .social {
            top: 44%;
        }
    }
    //max-width: 2556px

    @media(max-width: 1920px) {
        p {
            width: 80%;
        }
        .social {
            top: 30%;
        }
    }
    //max-width: 1920px
    @media(max-width: 1440px) {
        h1 {
            font-size: 5em;
        }
        .sub-heading {
            font-size: 1.6em;
        }
        p {
            width: 80%;
            font-size: 1.9em;
        }
        .social {
            top: 30%;
            .title {
                font-size: 2em;
            }
            .social-links {
                .fab {
                    font-size: 2.8em;
                }
            }
        }
    }
    //max-width: 1920px
    @media(max-width: 1280px) {
        h1 {
            font-size: 4em;
            margin-top: 15px;
        }
        p {
            width: 85%;
        }
        .social {
            top: 13%;
            
            .title {
                font-size: 2em;
            }
            .social-links {
                .fab {
                    font-size: 2.5em;
                }
            }
        }
    }
    //max-width: 1280px
    @media(max-width: 970px) {
        height: 25vh;
        width: 100%;
        p {
            width: 80%;
        }
        .social {
            position: absolute;
            width: 80%;
            top: 80%;
            left: 10%;
            .title {
                font-size: 2em;
                
            }
            .social-links {
                width: 50%;
        
            }
        }
    }
    //max-width: 970px;

    @media(max-width: 768px) {
        height: 26vh;
        width: 100%;
        p {
            width: 80%;
        }
        .social {
            position: absolute;
            width: 80%;
            top: 78%;
            left: 10%;
            .title {
                font-size: 2em;
                
            }
            .social-links {
                width: 50%;
        
            }
        }
    }
    //max-width: 768px;

}
    @media(max-width: 605px) {
        height: 30vh;
        margin-top: 0px;
        width: 100%;
        .social {
            top: 80%;
            .title {
                font-size: 1.8em;
            }
        }
        //max-width: 600px
    }
    @media(max-width: 540px) {
        height: 22vh;
        margin-top: 0px;
        width: 100%;
        h1 {
            font-size: 2.9em;
            margin-top: 0;
        }
        .sub-heading {
            margin-bottom: 0px;
        }
        p {
            font-size: 1.5em;
            margin-top: 0;
        }
        .social {
            top: 76%;
            .title {
                font-size: 1.4em;
            }
            .social-links {
                .fab {
                    font-size: 1.8em;
                }
            }
        }
        //max-width: 540px
        //pretty much to explicityly handle the surface duo
    
@media(max-width: 500px) {
    height: 18vh;
    margin-top: 0px;
    width: 100%;
    .social {
        top: 82%;
        .title {
            font-size: 1.8em;
        }
    }
    //max-width: 500px

    @media(max-width: 414px) {
        height: 32vh;
        .social {
            top: 83%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 411px
    @media(max-width: 380px) {
        height: 36vh;
        .social {
            top: 83%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 380px

    @media(max-width: 360px) {
        height: 42vh;
        .social {
            top: 83%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 360px
    @media(max-width: 320px) {
        height: 60vh;
        .social {
            top: 83%;
            .title {
                font-size: 1.6em;
            }
            
        }
        
    }
    //max-width: 320px

    @media(max-width: 280px) {
        height: 50vh;
        
        .social {
            top: 83%;
            .title {
                font-size: 1.4em;
            }
            
        }
        
    }
    //max-width: 280px
    
}


`;

const TeamDescription = () => {
    return (
        <Description>
            <h1>Team</h1>
            <h4 className='sub-heading'>array.finance</h4>
            <p>DeFi is just getting started, but the Array team has the experience needed to build the next generation of protocols.</p>

            <div className="social">
                <h1 className="title">follow for updates</h1>
                <div className="social-links">
                <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            
        </Description>
    );
}

export default TeamDescription;
