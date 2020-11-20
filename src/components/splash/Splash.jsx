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
    padding-bottom: 200px;
    

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
    }

    &.phase {
        margin-top: 120px;
        justify-content: center;
        
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
                justify-content: flex-end;
                background-color: #212121;
                width: 95%;
                margin-left: 7%;
                margin-top: 4%;
                padding: 10px 0;

                .date-left {
                    margin-left: 1%;
                    background-color: #121212;
                    width: 85%;
                    
                    h1 {
                        color: transparent;
                        font-size: 5.5em;
                        margin: 5px 0;
                        
                    }
                }
                .date-right {
                    width: 18%;
                    h1 {
                        font-size: 5.5em;
                        margin: 5px 5%;
                    }
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
                        h1 {
                            font-size: 5em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 5em;
                            margin: 5px 5%;
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
                        h1 {
                            font-size: 3.6em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 3.6em;
                            margin: 5px 5%;
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
                        h1 {
                            font-size: 3em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 3em;
                            margin: 5px 5%;
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
                        
                        h1 {
                            font-size: 2.6em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 2.6em;
                            margin: 5px 5%;
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
                        
                        h1 {
                            font-size: 2.6em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        
                        h1 {
                            font-size: 2.6em;
                            margin: 5px 5%;
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
                        
                        h1 {
                            font-size: 2.6em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2.2em;
                            margin: 5px 5%;
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
                        
                        h1 {
                            font-size: 2em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2em;
                            margin: 5px 5%;
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
                        
                        h1 {
                            font-size: 2em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        width: 18%;
                        h1 {
                            font-size: 2em;
                            margin: 5px 5%;
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
                    .date-left {
                        width: 75%;
                        h1 {
                            font-size: 1.2em;
                            margin: 5px 0;
                        }
                    }
                    .date-right {
                        width: 25%;
                        h1 {
                            font-size: 1.2em;
                            margin: 5px 5%;
                        }
                    }                      
                }
            }
        }
    }
    //phase

    // &.two {
    //     margin-left: 3%;
    //     margin-top: 50px;
    //     @media(max-width: 1100px) {
    //         margin-left: 0;
    //     }
        
    // }
    // &.three {
    //     margin-left: 6%;
    //     margin-top: 50px;
    //     @media(max-width: 1100px) {
    //         margin-left: 0;
    //     }
        
    // }
    // &.four {
    //     margin-left: 9%;
    //     margin-top: 50px;
    //     @media(max-width: 1100px) {
    //         margin-left: 0;
    //     }
        
    // }
   
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

                <Row className='bottom'>
                    <div className="chart">
                        <img src={chart} alt=""/>
                    </div>
                    <BottomRight />
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
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield, as yet another way to increase ROI and reward early adopters.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                <h1>Q4 2020</h1>
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
                            <h1>Phase 0</h1>
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield, as yet another way to increase ROI and reward early adopters.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                <h1>Q4 2020</h1>
                            </div>
                            <div className="date-right">
                                <h1>Q4 2020</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>

                <Row className='phase three'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 0</h1>
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield, as yet another way to increase ROI and reward early adopters.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                <h1>Q4 2020</h1>
                            </div>
                            <div className="date-right">
                                <h1>Q4 2020</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>

                <Row className='phase four'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 0</h1>
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield, as yet another way to increase ROI and reward early adopters.</p>
                        </div>

                        <div className="phase-date">
                            <div className="date-left">
                                <h1>Q4 2020</h1>
                            </div>
                            <div className="date-right">
                                <h1>Q4 2020</h1>
                            </div>
                        </div>
                            
                    </div>
                </Row>
            
            
            
        </SplashDiv>
        </motion.div>
        
    );
}

export default Splash;
