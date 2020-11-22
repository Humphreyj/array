import React,{useContext} from 'react';
import UIC from '../../context/Context';
import styled from 'styled-components';
import {Link} from 'react-router-dom';






const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  -webkit-clip-path: polygon(15% 0, 100% 0, 100% 30%, 100% 73%, 86% 100%, 0 100%, 0% 70%, 0 35%);
  clip-path: polygon(15% 0, 100% 0, 100% 30%, 100% 73%, 86% 100%, 0 100%, 0% 70%, 0 35%);
  background-color: #121212;
  color: white;
  padding: 0 3%;

  .top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .top-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1 {
            font-size: 5.5em;
            width: 70%;
            text-align: right;
            margin-top: 5px;
            margin-bottom: 0;
        }
        h4 {
            font-size: 3em;
            margin: 0;
        }
        p {
            text-align: right;
            width: 75%;
            font-size: 1.8em;
        }
        a {
            width: 35%;
            button {
                background: transparent;
                color: white;
                font-size: 2em;
                padding: 1%;
                cursor: pointer;
                border: 3px solid white;
                position: relative;
                transition: all 300ms ease;
    
                &:hover {
                    top: 2px;
                    border: 5px solid white;
                    font-size: 2.2em;
                }
            }
        }
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    margin-top: -10%;
    flex-direction: column;
    align-items: center;
        .bottom-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h4 {
                font-size: 5em;
                width: 50%;
            }
        }
    }
    @media(max-width: 3600px) {
        width: 50%;
        .top {
            .top-content {
                h1 {
                    font-size: 5em;
                    width: 60%;
                    text-align: right;
                    margin-bottom: 0;
                }
                h4 {
                    font-size: 2.8em;
                    margin: 0;
                }
                p {
                    text-align: right;
                    width: 55%;
                    font-size: 1.7em;
                }
                a {
                    width: 30%;
                    button {
                        background: transparent;
                        color: white;
                        width: 100%;
                        font-size: 2em;
                        padding: 1%;
                        cursor: pointer;
                        border: 3px solid white;
                        position: relative;
                        transition: all 300ms ease;
            
                        &:hover {
                            top: 2px;
                            border: 5px solid white;
                            font-size: 2.2em;
                        }
                    }
                }
            }
        }
        
        }
        //max-width: 3500px

        @media(max-width: 3400px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 4.3em;
                    }
                    h4 {
                        font-size: 2.5em;
                    }
                    p {
                        font-size: 1.5em;
                        width: 75%;
                    }
                }
            }
            .bottom {
                .bottom-content {
                    h4 {
                        font-size: 5em;
                        width: 60%;
                    }
                }
            }
            
    
        }
        //max-width: 3400px


        @media(max-width: 2556px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 3.8em;
                    }
                    h4 {
                        font-size: 2.1em;
                    }
                    p {
                        font-size: 1.3em;
                        width: 75%;
                    }
                }
            }
            .bottom {
                .bottom-content {
                    h4 {
                        font-size: 4em;
                        width: 60%;
                    }
                }
            }
            
        }
        //max-width: 2556px

        @media(max-width: 2200px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 3em;
                    }
                    h4 {
                        font-size: 1.8em;
                    }
                    p {
                        font-size: 1.1em;
                        width: 75%;
                    }
                }
            }
            .bottom {
                
                .bottom-content {
                    h4 {
                        font-size: 3.5em;
                        width: 65%;
                    }
                }
            }
            
        }
        //max-width: 2200px

        @media(max-width: 1990px) {
            
            
        }
        //max-width: 1990px

        @media(max-width: 1800px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 2.4em;
                    }
                    h4 {
                        font-size: 1.6em;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                    a {
                        width: 35%;
                    }
                }
            }
            .bottom {
                margin-top: -10%;
                .bottom-content {
                    h4 {
                        font-size: 3em;
                        width: 65%;
                    }
                }
            }
            
        }
        //max-width: 1800px

        @media(max-width: 1440px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 2.2em;
                    }
                    h4 {
                        font-size: 1.6em;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                    a {
                        width: 40%;
                        button {
                            font-size: 1.5em;
                        }
                    }
                }
            }
            .bottom {
                margin-top: -10%;
                .bottom-content {
                    h4 {
                        font-size: 2.5em;
                        width: 65%;
                    }
                }
            }
            
        }
        //max-width: 1440px

        @media(max-width: 1345px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 2em;
                    }
                    h4 {
                        font-size: 1.6em;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                }
            }
            .bottom {
                margin-top: -10%;
                .bottom-content {
                    h4 {
                        font-size: 2.5em;
                        width: 65%;
                    }
                }
            }
            
        }
        //max-width: 1345px

        @media(max-width: 1280px) {
            .top {
                .top-content {
                    h1 {
                        font-size: 1.7em;
                    }
                    h4 {
                        font-size: 1.4em;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                }
            }
            .bottom {
                margin-top: -10%;
                .bottom-content {
                    h4 {
                        font-size: 2em;
                        width: 60%;
                    }
                }
            }
            
        }
        //max-width: 1280px
        @media(max-width: 1100px) {
            width: 100%;
            margin-top: 50px;
            .bottom {
                margin-top: 0%;
                .bottom-content {
                    h4 {
                        font-size: 2em;
                        width: 75%;
                    }
                }
            }
        }

        @media(max-width: 768px) {
            .top {
                justify-content: center;
                .top-content {
                    align-items: center;
                    h1 {
                        font-size: 1.7em;
                        width: 75%;
                    }
                    h4 {
                        font-size: 1.2em;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                }
            }
            .bottom {
                
                .bottom-content {
                    h4 {
                        font-size: 2em;
                        width: 75%;
                    }
                }
            }
            
        }
        //max-width: 768px
        @media(max-width: 600px) {
            .top {
                .top-content {
                    
                    h1 {
                        font-size: 1.5em;
                        width: 80%;
                    }
                    h4 {
                        font-size: 1.2em;
                        text-align: center;
                        width: 75%;
                        margin-top: 10px;
                    }
                    p {
                        font-size: 1em;
                        width: 95%;
                    }
                    a {
                        width: 60%;
                        button {
                            
                        }
                    }
                }
            }
            .bottom {
                
                .bottom-content {
                    h4 {
                        font-size: 2em;
                        width: 75%;
                    }
                }
            }
        }
        

  
        

`;

const BottomRight = () => {
    const {goTeam} = useContext(UIC);
    return (
        
            <Right>
                <div className="top">
                    <div className="top-content">
                        <h1>Array is the ultimate DeFi protocol.</h1>
                        <h4>DeFi isn’t going away anytime soon.</h4>
                        <p>Keep your exposure to ETH and WBTC while taking advantage of the explosive growth  of the DeFi space. Park your crypto and have Array do the protocol-hopping. Our smart contracts protect against sudden protocol failures through algorithmic diversification and a highly experienced team. </p>
                        <Link onClick={goTeam} to='/team'><button className="to-team">view our team</button></Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-content">
                        <h4>Array is currently under construction.</h4>
                    </div>
                    
                </div>
            
            
             
            </Right>
        
        
    );
}

export default BottomRight;
