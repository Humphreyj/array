import React,{useContext} from 'react';
import UIC from '../../context/Context';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';        
import littleLogo from '../../assets/img/arraylogofinal.png';





const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    padding-left: 3%;
    -webkit-clip-path: polygon(100% 0, 100% 69%, 84% 100%, 0 100%, 0 0);
    clip-path: polygon(100% 0, 100% 69%, 84% 100%, 0 100%, 0 0);
    background-color: #121212;
    z-index: 200;

        .mobile-logo {
            display: none;

        }
        .content {
            padding-bottom: 1%;
            color: white;
            .mobile-title {
                display: none;
            }

    

            .description {
                
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                
                .coming-soon {
                    border-radius: 3px;
                    font-size: 2.8em;
                    text-align: center;
                    border: 4px solid white;
                    width: 22%;
                    margin: 0;

                }
                h1 {
                    font-size: 9em;
                    margin: 0;
                }
                .sub-title {
                    margin-top: 0;
                    font-size: 2.8em;
                    margin-bottom: 10px;
                    width: 75%;
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1.7em;
                    width: 75%;
                }
                    
            }
        }
    .social {
        width: 30%;
        .social-heading {
            border: 3px solid white;
            text-align: center;
            font-size: 3em;
        }
        .social-links {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-right: 10px;
            .fab {
                color: white;
                font-size: 4.5em;
                
            }
        }
    }
    @media(max-width: 3800px) {
        width: 50%;
        .content {
            .description {
                .coming-soon {
                    font-size: 2.8em;
                    width: 30%;
                }
                h1 {
                    font-size: 6em;
                }
                .sub-title {
                    font-size: 2.6em;                  
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1.7em;
                    width: 75%;
                }
                    
            }
        }
        .social {
            width: 30%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2.8em;
            }
            .social-links {
                .fab {
                    font-size: 4em;
                    
                }
            }
        }
    }
    @media(max-width: 2800px) {
        .content {
            .description {
                .coming-soon {
                    font-size: 2.8em;
                    width: 30%;
                }
                h1 {
                    font-size: 5.5em;
                }
                .sub-title {
                    font-size: 2.2em;                  
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1.4em;
                    width: 75%;
                }
                    
            }
        }
        .social {
            width: 30%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2.3em;
            }
            .social-links {
                .fab {
                    font-size: 3.8em;
                    
                }
            }
        }
    }
    //max-width: 2800px

    @media(max-width: 2556px) {
       
        .content {
            .description {
                .coming-soon {
                    font-size: 2.5em;
                    width: 35%;
                }
                h1 {
                    font-size: 5.5em;
                }
                .sub-title {
                    font-size: 1.9em;                  
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1.3em;
                    width: 75%;
                }
                    
            }
        }
        .social {
            width: 30%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2.2em;
            }
            .social-links {
                .fab {
                    font-size: 3.5em;
                    
                }
            }
        }
    }
    //max-width: 2556px

    @media(max-width: 2200px) {
        
        .content {
            .description {
                .coming-soon {
                    font-size: 2.4em;
                    width: 40%;
                }
                h1 {
                    font-size: 3.5em;
                }
                .sub-title {
                    font-size: 1.8em;                  
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1em;
                    width: 75%;
                }
                    
            }
        }
        .social {
            width: 40%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2.6em;
            }
            .social-links {
                .fab {
                    font-size: 3.5em;
                    
                }
            }
        }
    }
    //max-width: 2200px

    @media(max-width: 1990px) {
        
        .content {
            .description {
                .coming-soon {
                    font-size: 2.6em;
                    width: 40%;
                }
                h1 {
                    
                }
                .sub-title {
                    font-size: 2em;                  
                }
                p {
                    margin-top: 12px;
                    margin-bottom: 0;
                    font-size: 1em;
                    width: 75%;
                }
                    
            }
        }
        .social {
            width: 40%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2.2em;
            }
            .social-links {
                .fab {
                    font-size: 3em;
                    
                }
            }
        }
    }
    //max-width: 1990px

    @media(max-width: 1800px) {
       
        .content {
            .description {
                .coming-soon {
                    font-size: 2.2em;
                    width: 40%;
                }
                h1 {
                    font-size: 3.5em;
                }
                .sub-title {
                    font-size: 1.4em;                       
                }
                p {
                    font-size: 1em;
                }
                    
            }
        }
        .social {
            width: 40%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 2em;
            }
            .social-links {
                .fab {
                    font-size: 3em;
                    
                }
            }
        }
    }
    //max-width: 1800px

    @media(max-width: 1540px) {
        
        .content {
            .description {
                .coming-soon {
                    font-size: 2em;
                    width: 40%;
                }
                h1 {
                    
                }
                .sub-title {
                    font-size: 1.4em;

                }
                p {
                   font-size: 1em;
                }
                    
            }
        }
        .social {
            width: 40%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 1.9em;
            }
            .social-links {
                .fab {
                    font-size: 3em;
                    
                }
            }
        }
    }
    //max-width: 1540px

    @media(max-width: 1440px) {
        
        .content {
            .description {
                .coming-soon {
                    font-size: 2em;
                    width: 45%;
                }
                h1 {
                    font-size: 3.5em;
                }
                .sub-title {
                    font-size: 1.2em;

                }
                p {
                   font-size: 1em;
                   width: 90%;
                }
                    
            }
        }
        .social {
            width: 45%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 1.8em;
            }
            .social-links {
                .fab {
                    font-size: 3em;
                    
                }
            }
        }
    }
    //max-width: 1440px

    @media(max-width: 1320px) {
        
        .content {
            .description {
                .coming-soon {
                    font-size: 1.8em;
                    
                }
                h1 {
                    font-size: 3em;
                }
                .sub-title {
                    font-size: 1.2em;

                }
                p {
                   font-size: 1em;
                }
                    
            }
        }
        .social {
            width: 40%;
            .social-heading {
                border: 3px solid white;
                text-align: center;
                font-size: 1.6em;
            }
            .social-links {
                .fab {
                    font-size: 2.5em;
                    
                }
            }
        }
    }
    //max-width: 1320px
    

`;


const TopLeft = () => {
    const {page}=useContext(UIC);
    return (
       
            <Left className='left'>
                <div className="content">
                

                    <div className="description">
                        <h1 className="mobile-title">array.finance</h1>
                        <h4 className="coming-soon">coming soon</h4>
                        <h1>DeFi, simplified.</h1>
                        <h2 className="sub-title">Get the high yields of DeFi returned as ETH or WBTC, automatically.</h2>
                        <p>Array is an automated DeFi index, using algorithmic weighting to maximize yield with minimal risk. Made for the decentralized community-- no VC or premine to worry about, built by a public team with experience at Consensys and Fortune 500 companies. Save gas by having Array handle the farming for you, and get yield returned as ETH or WBTC, without having to juggle dozens of DeFi tokens.




                        </p>
                        <p className="sub-text">Build your own Arrays and share with the community. Let others follow your Arrays on the leaderboard and set custom performance fees.</p>

                        <p className="sub-text">The future of asset management is here.</p>
                        <img src={littleLogo} alt="" className="mobile-logo"/>
                        
                    </div>
                    <div className='social'>
                            <h1 className="social-heading">follow for updates</h1>
                            <div className="social-links">
                            <a href="https://twitter.com/arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                            <a href="https://discord.gg/uNuD4H2rMB" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-discord"></i></a>
                            <a href="https://medium.com/@arrayfinance" target='_blank' rel="noreferrer" className="social-link"><i className="fab fa-medium"></i></a>
                            </div>
                        </div>
                </div>
            </Left>
       

        
    );
}

export default TopLeft;
