import React from 'react';
import styled from 'styled-components';


const RoadmapLeft = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
color: white;
width: 35%;
padding-left: 100px;
margin-top: -25px;
height: 70vh;
position: relative;

    h1 {
        font-size: 6em;
        margin: 0;
    }
    .sub-title {
        font-size: 2.2em;
        margin: 0;
    }
    p {
        font-size: 2em;
        width: 80%;
        
        
    }


    .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 32%;
        left: 0%;
        color: white;
        .title {
            font-size: 2.5em;
            border: 3px solid white;
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
        @media(max-width: 1920px) {
            .social {
                top: 15%;
            }
        }
        @media(max-width: 1800px) {
            h1 {
                font-size: 5em;
                margin: 10px 0 0 0;
            }
        }

        //max-width: 1800px
        @media(max-width: 1540px) {
            h1 {
                font-size: 3.8em;
            }
            .social {
                top: 20%;
                .title {
                    font-size: 2em;
                }
                
            }
        }
    //max-width: 1490px
    @media(max-width: 1440px) {
        h1 {
            
            margin: 15px 0 0 0;
            
        }
        .sub-title {
            font-size: 1.8em;
            margin: 0;
        }
        p {
            font-size: 1.6em;
            width: 80%;
        }
        .social {
            
            top: 10%;
            left: 0%;
            color: white;
            .title {
                font-size: 1.7em;
                border: 3px solid white;
                padding: 1px 5px;
            }
    
            .fab {
                color: white;
                font-size: 2.2em;
            }
            }
    }
    //max-width 1440px
    @media(max-width: 1280px) {
        h1 {
            font-size: 4em;
            
        }
        .sub-title {
            font-size: 1.6em;
            margin: 0;
        }
        p {
            font-size: 1.4em;
            width: 80%;
        }
        .social {
            
            top: 16%;
            left: 0%;
            color: white;
            .title {
                font-size: 1.7em;
                border: 3px solid white;
                padding: 1px 5px;
            }
    
            .fab {
                color: white;
                font-size: 2.2em;
            }
            }
    }
    //max-width 1280px
    @media(max-width: 1190px) {
        
        h1 {
            font-size: 4em;
            
        }
        .sub-title {
            font-size: 1.6em;
            margin: 0;
        }
        p {
            font-size: 1.6em;
            width: 80%;
        }
        .social {
            
            top: 23%;
            left: 0%;
            color: white;
            .title {
                font-size: 1.6em;
               
    
            .fab {
                color: white;
                font-size: 2.2em;
            }
            }
    }
    //max-width 1190px
    @media(max-width: 970px) {
        padding-left: 0;
        width: 100%;
        height: 22vh;
        align-items: center;
        justify-content: flex-start;
        padding-right: 0px;
        
        
        p {
            text-align: center;
            width: 95%;
            margin-top: 3px;
            
        }
        h1 {
            margin-top: 20px;
        }
        .sub-title {
            font-size: 1.5em;
            margin: 1px 0;
        }
        .social {
            position: absolute;
            width: 80%;
            top: 300%;
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
    @media(max-width: 600px) {
        height: 28vh;
        .social {
            top: 265%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 600px
    @media(max-width:540px) {
        height: 36vh;
        .social {
            top: 195%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width:540px
    @media(max-width: 500px) {
        height: 26vh;
        .social {
            top: 345%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 500px
    @media(max-width: 414px) {
        height: 42vh;
        .social {
            top: 250%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 411px
    @media(max-width: 377px) {
        height: 43vh;
        .social {
            top: 235%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 377px
    @media(max-width: 360px) {
        height: 53vh;
        .social {
            top: 230%;
            .title {
                font-size: 1.8em;
            }
        }
        
    }
    //max-width: 360px
    @media(max-width: 340px) {
        height: 55vh;
        .social {
            top: 225%;
            .title {
                font-size: 1.6em;
            }
        }
        
    }
    //max-width: 340px
    @media(max-width: 320px) {
        height: 68vh;
        
    }

    @media(max-width: 280px) {
        height: 55vh;
        .social {
            top: 243%;
            .title {
                font-size: 1.4em;
            }
            
        }
        
    }
    //max-width: 280px

    

`;

const RoadmapIntro = () => {
    return (
        <RoadmapLeft>
            <h1>Roadmap</h1>
            <h4 className="sub-title">array.finance</h4>
            <p>Array is being built in mulitiple phases to keep it bootstrapped without VCs or premine with a public and experienced team.</p>

            <div className="social">
                <h1 className="title">follow for updates</h1>
                <div className="social-links">
                <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
                </div>
            </div>
            
        </RoadmapLeft>
    );
}

export default RoadmapIntro;
