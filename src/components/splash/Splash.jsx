import React,{useContext} from 'react';
import UIC from '../../context/Context';
import styled from 'styled-components';
import { motion } from "framer-motion";
import TopLeft from './TopLeft';
import BottomRight from './BottomRight';
import bigLogo from '../../assets/img/logoWithText.PNG';
import chart from '../../assets/img/arraySplashChart.PNG';



const SplashDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    
    

    @media(max-width: 500px) {
        overflow-x: scroll;
        
    }

    .right-logo {
        width: 40%;
        display: flex;
        flex-direction: column;
        margin-top: -5%;
        align-items: center;
        position: relative;
    

        img {
        width: 50%;
        height: auto;
        }

        .logo-subtitle {
            font-size: 5em;
            color: white;
            margin: 0;
        }
        @media(max-width: 1100px) {
            display: none;
        }
    }

    .chart {
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 45%;
            height: auto;
            }
            @media(max-width: 1100px) {
                display: none;
            }
    }

`
const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &.top {
        
    }
    &.bottom {
        
    }
    &.splash-break {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        width: 100%;
        color: white;
        background-color: #121212;
        div {
            text-align: center;
            h1 {
                
                font-size: 4.5em;
                margin: 0;
            }
            p {
                width: 40%;
                margin: 20px auto;
                font-size: 1.2em;
                @media(max-width: 1100px) {
                    width: 80%;
                }

            }
        }
        @media(max-width: 1100px) {
            margin-top: 60px;
        }
    }

    &.mobile-logo {
        width: 100%;
        flex-direction: column;
        align-items: center;
        display: none;
        margin: 45px 0 15px 0;
        
        @media(max-width: 1100px) {
            display: flex;
            .logo {
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 50%;

                }
            }
        }
    }
    &.mobile-chart {
        width: 100%;
        flex-direction: column;
        align-items: center;
        display: none;
        margin-top 50px;
        
        @media(max-width: 1100px) {
            display: flex;
            .logo {
                width: 80%;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 50%;

                }
            }
        }
    }

    &.phase {
        margin-top: 120px;
        
        
        .phase-hexagon {
            
            background-color: #121212;
            width: 75%;
            margin: 0 auto;
            clip-path: polygon(0 0, 91% 0, 100% 39%, 100% 100%, 10% 100%, 0 61%);
            color: white;
            padding: 1% 3%;

            .phase-text {
                width: 50%;
                h1 {
                    font-size: 6em;
                    margin: 0;
                }
                p {
                    font-size: 1.7em;
                    width: 80%;
                    
                }
            }
            .phase-date {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #212121;
                width: 95%;
                margin-left: 7%;
                margin-top: 4%;
                padding: 5px 0;
                

                .date-left {
                    background-color: #121212;
                    width: 75%;
                    margin-left: 1%;

                    height: 5.5em;
                    padding: 20px 0;
                }
                .date-right {
                    width: 17%;
                    h1 {
                        font-size: 5.5em;
                        margin: -10px 0 0 0;
                        
                    }
                }

                

            }

        }

        &.two {
            margin-top: 80px;
            .phase-date {
                .date-left {
                    width: 10%;
                }
                .date-right {
                    width: 17%;  
                }
            }
        }

        &.three {
            margin-top: 80px;
            .phase-date {
                .date-left {
                    
                    width: 0%;
                }
                .date-right {
                    width: 17%;      
                }
            }
            }

        &.four {
            margin-top: 80px;
            margin-bottom: 120px;
            .phase-date {
                .date-left {
                    background-color: #212121;
                    width: 75%;
                }
            }
        }
        @media(max-width: 3750px) {
            .phase-hexagon {
                .phase-text {
                    h1 {
                        font-size: 6em;
                        margin: 0;
                    }
                    p {
                        font-size: 1.7em;
                    }
                }
                .phase-date {
                    .date-left {
                        height: 5em;
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 5em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 3750px

        @media(max-width: 3400px) {
            .phase-hexagon {
                .phase-text {
                    width: 65%;
                    h1 {
                        font-size: 5em;
                        margin: 0;
                    }
                    p {
                        font-size: 1.5em;
                        width: 95%;
                    }
                }
                .phase-date {
                    .date-left {
                        height: 3.6em;
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 3.6em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 3400px
        
        @media(max-width: 2556px) {
            .phase-hexagon {
                .phase-text {
                    h1 {
                        font-size: 4.5em;
                        margin: 0;
                    }
                    p {
                        font-size: 1.4em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        height: 3em;
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 3em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 2556px

        @media(max-width: 2100px) {
            .phase-hexagon {
                .phase-text {
                    
                    h1 {
                        font-size: 4em;
                        margin: 0;
                    }
                    p {
                        font-size: 1.3em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        
                        height: 2.6em;
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 2.6em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 2100px
        @media(max-width: 1800px) {
            .phase-hexagon {
                .phase-text {
                    
                    h1 {
                        font-size: 3.5em;
                        margin: 0;
                    }
                    p {
                        font-size: 1.2em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        
                        height: 2.6em;
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 2.6em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 1800px

        @media(max-width: 1440px) {
            .phase-hexagon {
                .phase-text {
                    
                    h1 {
                        font-size: 3.5em;
                        margin: 0;
                    }
                    p {
                        font-size: 1em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        
                        height: 2.2em;
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2.2em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 1440px

        @media(max-width: 1280px) {
            .phase-hexagon {
                .phase-text {
                    
                    h1 {
                        font-size: 3em;
                        margin: 0;
                    }
                    p {
                        font-size: 1em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        
                        height: 2em;
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 1280px

        @media(max-width: 1100px) {
            .phase-hexagon {
                
                .phase-text {
                    
                    h1 {
                        font-size: 3em;
                        margin: 0;
                    }
                    p {
                        font-size: 1em;
                        width: 100%;
                    }
                }
                .phase-date {
                    .date-left {
                        
                        height: 2em;
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width: 1280px
        @media(max-width: 1100px) {
            .phase-hexagon {
                width: 100%;
                .phase-text {
                    width: 100%;
                    h1 {
                        text-align: center;
                    }
                    p {
                        font-size: .9em;
                        width: 90%;
                        text-align: center;
                    }
                }
                .phase-date {
                    width: 93%;
                    .date-left {
                        width: 75%;
                        height: 1.2em;
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 1.2em;
                            
                        }
                    }                      
                }
            }
        }
        //max-width 1100px

        
       
    }
    //phase

   
`;






const Splash = () => {
    const {pageStyle,variants,pageTransition} = useContext(UIC);
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={pageTransition}
        >
            <SplashDiv>
                <Row className='top'>
                    <TopLeft />
                    <div className="right-logo">
                        <img src={bigLogo} alt=""/>
                        
                    </div>
                </Row>

                <Row className='mobile-logo'>
                    <div className="logo">
                        <img src={bigLogo} alt=""/>
                        
                    </div>

                </Row>

                <Row className='bottom'>
                    <div className="chart">
                        <img src={chart} alt=""/>
                    </div>
                    <BottomRight />
                </Row>

                <Row className='mobile-logo'>
                    <div className="logo">
                        <img src={chart} alt=""/>
                        
                    </div>

                </Row>

                <Row className="splash-break">
                    <div >
                        <h1>Future-proof</h1>
                        <p>DeFi built with the future in mind. We want to build a new cornerstone of the Ethereum ecosystem, built for the community. This means no VC bills to pay back or premine to worry about. To do this, Array is being built in phases.</p>
                    </div>
                    
                </Row>
                
                <Row className='phase'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 0</h1>
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                
                            </div>
                            <div className="date-right">
                                <h1>Q4 2020</h1>
                            </div>
                        </div>
                    </div>
                </Row>

                <Row className='phase two'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 1</h1>
                            <p>Building off of Phase 0, Phase 1 comes with pre-built indexes that balance risk and reward potential from a selection of reputable DeFi assets. All deposits will begin to be backed by Cover Protocol for insurance. Using what was built on Phase 0, all assets will automatically be harvested and placed into respective profit sharing pools. Arrays will automatically rebalance based on market conditions, with easy exits to ETH, WBTC, or the equivalent proportion of the underlying assets. </p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                
                            </div>
                            <div className="date-right">
                                <h1>Q1 2021</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>

                <Row className='phase three'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 2</h1>
                            <p>Phase 2 introduces our smart algorithm, which autonomously rebalances based on a weighting system. Assets are weighed using metrics like market cap, liquidity, ROI, yield potential, and risk. These autonomous indexes will be deployed alongside all pre-existing contracts.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                
                            </div>
                            <div className="date-right">
                                <h1>Q2 2021</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>

                <Row className='phase four'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 3</h1>
                            <p>Phase 3 introduces user-built indexes. Pick any ERC-20 assets, balance your ideal porfolio, and Array can handle the rest. Build and share your Arrays while earning performance fees when other users follow your strategies. At this stage, Array will be a full-featured portfolio manager-- all while being completely decentralized and user-governed. </p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                
                            </div>
                            <div className="date-right">
                                <h1>Q3 2021</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>
            
            
           
        </SplashDiv>
        </motion.div>
        
    );
}

export default Splash;
