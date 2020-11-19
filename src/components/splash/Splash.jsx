import React from 'react';
import styled from 'styled-components';

import TopLeft from './TopLeft';
import BottomRight from './BottomRight';
import Social from '../social/Social';

import bigLogo from '../../assets/img/arraylogofinal.png';
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
        width: 40%;
        height: auto;
        }

        .logo-subtitle {
            font-size: 5em;
            color: white;
            margin: 0;
        }
    }

    .chart {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 40%;
            height: auto;
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

            }
        }
    }

    &.phase {
        margin-top: 50px;
        justify-content: center;

        .phase-hexagon {
            height: 700px;
            background-color: #121212;
            width: 75%;
            margin: 0 auto;
            clip-path: polygon(0 0, 91% 0, 100% 39%, 100% 100%, 10% 100%, 0 61%);
            color: white;
            padding: 0 3%;

            .phase-text {
                width: 50%;
                h1 {
                    font-size: 6em;
                    margin: 0;
                }
                p {
                    font-size: 1.7em;
                    width: 60%;
                }
            }

        }
    }
    &.two {
        margin-left: 3%;
        .phase-hexagon {
            height: 700px;
            background-color: #121212;
            width: 75%;
            margin: 0 auto;
            clip-path: polygon(0 0, 91% 0, 100% 39%, 100% 100%, 10% 100%, 0 61%);
            color: white;
            padding: 0 3%;

            .phase-text {
                width: 50%;
                h1 {
                    font-size: 6em;
                    margin: 0;
                }
                p {
                    font-size: 1.7em;
                    width: 60%;
                }
            }

        }
        
    }
`;






const Splash = () => {
    return (
        <>
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
                    </div>
                </Row>

                <Row className='phase two'>
                    <div className="phase-hexagon">
                        <div className="phase-text">
                            <h1>Phase 0</h1>
                            <p>All work has to start somewhere. Phase 0 includes the initial groundwork for the Array ecosystem.  Phase 0 allows users to deposit any tokens that can be farmed for either PICKLE or FARM, and automatically transfers the accumulated yield into the respective profit sharing pool, saving gas and increasing ROI. It also introduces the Array governance token, the ARRAY/DAI Uniswap pool, and staking opportunities for early adopters. Array will be generated on top of any existing yield, as yet another way to increase ROI and reward early adopters.</p>
                        </div>
                            
                    </div>
                </Row>
            
            
            
        </SplashDiv>
        </>
        
    );
}

export default Splash;
