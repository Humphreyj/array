import React,{useContext} from 'react';
import UIC from '../../context/Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';        

import littleLogo from '../../assets/img/arraylogofinal.png';

import Navigation from '../Navigation/Navigation';



const Left = styled.div`
position: relative;
height: 100vh;
width: 100%;
left: 0;
top: 0;
-webkit-clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
clip-path: polygon(0 0, 83% 0, 35% 100%, 0 100%);
background-color: #121212;
z-index: 200;

    .mobile-logo {
        display: none;

    }
    .content {
        color: white;
        .mobile-title {
            display: none;
        }

       
  
        .description {
            padding-left: 130px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
            padding-top: 15%;
            .coming-soon {
                border-radius: 3px;
                padding: 0 10px 5px 10px;
                font-size: 3em;
                text-align: center;
                border: 4px solid white;
                width: 35%;
                margin: 0;

            }
        h1 {
            font-size: 7em;
            margin: 0;
        }
        .sub-title {
            margin-top: 0;
            font-size: 2.75em;
            margin-bottom: 10px;
        }
        p {
            margin-top: 0;
            font-size: 1.3em;
            width: 75%;
        }
        @media(max-width: 2000px) {
            padding-left: 100px;
            
            .coming-soon {
                font-size: 2.6em;
                width: 30%:
            }
            h1 {
                font-size: 5.5em;
            }
            .sub-title {
                font-size: 2em
            }
        }
        //2000px max-width
        @media(max-width: 1440px ) {
            
            .coming-soon {
                font-size: 2.4em;
            }
            h1 {
                font-size: 5.2em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.2em;
            }
        }
        //1400px
        @media(max-width: 1330px ) {
            
            .coming-soon {
                font-size: 2.2em;
            }
            h1 {
                font-size: 4.6em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
            }
        }
        //1330px
        @media(max-width: 1220px ) {
            
            .coming-soon {
                font-size: 2.1em;
                width: 55%;
            }
            h1 {
                font-size: 4em;
            }
            .sub-title {
                font-size: 1.77em
            }
            p {
                font-size: 1.1em;
            }
        }
        //1220px
        @media(max-width: 970px) {
           padding-top: 8%;
            padding-left: 50px;
            h1 {
                font-size: 4em;
            }
            p {
                font-size: 1.2em;
            }
        }
        
        @media(max-width: 710px ) {
           padding-top: 4%;
            .coming-soon {
                font-size: 2.1em;
                width: 90%;
            }
            h1 {
                font-size: 3.1em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
                width: 85%;
            }
        }
        //710px
        @media(max-width: 565px ) {
           padding-top: 4%;
            .coming-soon {
                font-size: 1.8em;
                width: 90%;
            }
            h1 {
                font-size: 2.2em;
            }
            .sub-title {
                font-size: 1.8em
            }
            p {
                font-size: 1.1em;
                width: 85%;
            }
        }
        //565px
        }
        
        }

        @media(max-width: 970px) {
            width:133%;
        }
        @media(max-width: 500px) {
            padding-top: 10px;
            width: 100%;
            clip-path: none;
            height: 100%;
            padding-bottom: 325px;
            justify-content: center;
            align-items: center;
            background-color: #212121;
            .content {
                width: 100%;
                
                .description {
                    width: 100%;
                    padding-left: 0px;
                    align-items: center;
                    .mobile-title {
                        display: inline;
                        font-size: 3.5em;
                        margin-bottom: 15px;
                    }
                    .coming-soon {
                        margin-bottom: 20px;
                    }
                    h1 {
                        font-size: 2.8em;
                    }
                    .sub-title {
                        font-size: 1.1em;
                    }
                    p {
                        text-align: center;
                        width: 90%;
                        line-height: 23px;
                        font-size: 1.2em;
                    }
                    .mobile-logo {
                        display: inline;
                        width: 60%;
                        margin: 0 auto;
                    }
                }
            }
        }
        .mobile-social {
            display: none;

            @media(max-width: 500px) {
                display: flex;
                h1 {
                    font-size: 1.6em;
                    border: 8px solid white;
                    width: 80%;
                    text-align: center;
                }
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                
                .social-links {
                        display: flex;
                        width: 100%;
                        align-items: center;
                        justify-content: space-evenly;
                        margin-top: 20px;
                    
                    .fab {
                        color: white;
                        font-size: 3em;
                
                    }
                }
            } 
          
        }
        //mobile-social
        
        
    }

    &.enter {
        opacity: 0;
      }
      &.enter-active {
        opacity: 1;
        transition: opacity 200ms;
      }
      &.exit {
        opacity: 1;
      }
      &.exit-active {
        opacity: 0;
        transition: opacity 200ms;
      }
    
 
    
`;


const TopLeft = () => {
    const {page}=useContext(UIC);
    return (
        <CSSTransition 
            in={page.home}
            timeout={300}
            classNames="left"
            unmountOnExit
        >
            <Left className='left'>
                <div className="content">
                

                    <div className="description">
                        <h1 className="mobile-title">array.finance</h1>
                        <h4 className="coming-soon">coming soon</h4>
                        <h1>DeFi, simplified.</h1>
                        <h2 className="sub-title">The future of asset management is here.</h2>
                        <p>Array is an automated DeFi index, using algorithmic weighting to maximize yield with minimal risk. Made for the decentralized community- no VC or premine to worry about, built by a public team with experience at Consensys and Fortune 500 companies. Directly use ETH and save gas by having Array handle the farming for you, and get yield returned as ETH.
                        </p>
                        <p className="sub-text">Build your own Arrays and share with the community, and get rewarded if your portfolio performs well with performance fees you can set yourself.</p>
                        <img src={littleLogo} alt="" className="mobile-logo"/>
                        
                    </div>
                    <div className='mobile-social'>
                            <h1 className="mobile-social-heading">follow for updates</h1>
                            <div className="social-links">
                                <a href="https://twitter.com/" className="social-link"><i className="fab fa-twitter"></i></a>
                                <a href="https://discord.com/" className="social-link"><i className="fab fa-discord"></i></a>
                                <a href="https://medium.com/" className="social-link"><i className="fab fa-medium"></i></a>
                            </div>
                        </div>
                </div>
            </Left>
        </CSSTransition>

        
    );
}

export default TopLeft;
